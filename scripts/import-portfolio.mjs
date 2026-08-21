import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const portfolioDirectory = path.join(root, "public", "portfolio");
const manifestPath = path.join(root, "app", "lib", "portfolio-manifest.json");
const dryRun = process.argv.includes("--dry-run");

const venueAliases = new Map([
  ["Brookholm", "Brooksholm Wedding Barn"],
]);

const venueProfiles = new Map([
  ["Sinclair of Skaneateles", { city: "Skaneateles", region: "Finger Lakes" }],
  ["Cobblestone Wedding Barn", { city: "Scottsville", region: "Rochester" }],
  ["Shadow Lake", { city: "Penfield", region: "Rochester" }],
  ["Deerfield Country Club", { city: "Hilton", region: "Rochester" }],
  ["Woodcliff", { city: "Rochester", region: "Rochester" }],
  ["Brooksholm Wedding Barn", { city: "Wyoming", region: "Western New York" }],
  ["Maison Albion", { city: "Albion", region: "Western New York" }],
  ["Wingate Barn", { city: "Livonia", region: "Western New York" }],
  ["Hillcrest Estate", { city: "Pavilion", region: "Western New York" }],
  ["Shadow Hill", { city: "Webster", region: "Rochester" }],
  ["Pamona Blue Barn", { city: "Hilton", region: "Rochester" }],
  ["Sycamore Golf Club", { city: "Macedon", region: "Rochester" }],
]);

const superscriptDigits = new Map([
  ["0", "⁰"], ["1", "¹"], ["2", "²"], ["3", "³"], ["4", "⁴"],
  ["5", "⁵"], ["6", "⁶"], ["7", "⁷"], ["8", "⁸"], ["9", "⁹"],
]);
const subscriptDigits = new Map([
  ["0", "₀"], ["1", "₁"], ["2", "₂"], ["3", "₃"], ["4", "₄"],
  ["5", "₅"], ["6", "₆"], ["7", "₇"], ["8", "₈"], ["9", "₉"],
]);

function fail(message) {
  throw new Error(`Portfolio import failed: ${message}`);
}

function requireValue(metadata, key) {
  const value = metadata[key];
  if (value === undefined || value === null || value === "") {
    fail(`${metadata.FileName} is missing ${key}`);
  }
  return value;
}

function asArray(value) {
  if (value === undefined || value === null || value === "") return [];
  return Array.isArray(value) ? value : [value];
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function translateDigits(value, digitMap) {
  return String(value)
    .split("")
    .map((digit) => digitMap.get(digit) ?? digit)
    .join("");
}

function formatShutter(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) fail(`invalid exposure time ${seconds}`);
  if (seconds >= 1) return `${seconds} s`;
  const denominator = Math.round(1 / seconds);
  return `${translateDigits(1, superscriptDigits)}⁄${translateDigits(denominator, subscriptDigits)}`;
}

function formatFocalLength(value) {
  const focalLength = Number(value);
  if (!Number.isFinite(focalLength) || focalLength <= 0) fail(`invalid focal length ${value}`);
  return Number.isInteger(focalLength) ? String(focalLength) : String(Number(focalLength.toFixed(1)));
}

function formatAperture(value) {
  const aperture = Number(value);
  if (!Number.isFinite(aperture) || aperture <= 0) fail(`invalid aperture ${value}`);
  return aperture.toFixed(1);
}

function resolveLocation(metadata, venue) {
  const embeddedCity = metadata.City;
  const embeddedRegion = metadata.CountryPrimaryLocationName;
  if (embeddedCity && embeddedRegion) {
    return { city: embeddedCity, region: embeddedRegion };
  }

  const profile = venueProfiles.get(venue);
  if (!profile) {
    fail(`${metadata.FileName} uses unknown venue ${JSON.stringify(venue)} and has no embedded city/region`);
  }
  return profile;
}

function buildEntry(metadata) {
  const filename = requireValue(metadata, "FileName");
  const filenameMatch = /^bemont-photo-(\d{12})\.jpg$/i.exec(filename);
  if (!filenameMatch) fail(`${filename} does not match bemont-photo-YYMMDDHHMMSS.jpg`);

  const description = capitalize(String(requireValue(metadata, "Description")).trim());
  const couple = String(requireValue(metadata, "Headline")).trim();
  const embeddedVenue = String(requireValue(metadata, "Scene")).trim();
  const venue = venueAliases.get(embeddedVenue) ?? embeddedVenue;
  const { city, region } = resolveLocation(metadata, venue);
  const width = Number(requireValue(metadata, "ImageWidth"));
  const height = Number(requireValue(metadata, "ImageHeight"));
  const rating = Number(requireValue(metadata, "Rating"));

  if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
    fail(`${filename} has invalid dimensions ${width}x${height}`);
  }
  if (!Number.isInteger(rating) || rating < 0 || rating > 5) {
    fail(`${filename} has invalid rating ${rating}`);
  }

  const focalLength = formatFocalLength(Number(requireValue(metadata, "FocalLength")));
  const shutter = formatShutter(Number(requireValue(metadata, "ExposureTime")));
  const aperture = formatAperture(Number(requireValue(metadata, "FNumber")));

  return {
    id: `pi${filenameMatch[1]}`,
    filename,
    alt: `${description} at ${venue} in ${city}, NY | ${region} Wedding Photography`,
    keywords: asArray(metadata.Subject).map(String),
    caption: `${couple} at ${venue} in ${city}, NY | ${focalLength} mm ${shutter} at f/${aperture}`,
    venue,
    rating,
    width,
    height,
  };
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const manifestFilenames = new Set(manifest.map((entry) => entry.filename));
const manifestIds = new Set(manifest.map((entry) => entry.id));
const newFilenames = readdirSync(portfolioDirectory)
  .filter((filename) => /^bemont-photo-\d{12}\.jpg$/i.test(filename))
  .filter((filename) => !manifestFilenames.has(filename))
  .sort();

if (newFilenames.length === 0) {
  console.log("Portfolio manifest is already up to date.");
  process.exit(0);
}

const preferredExiftool = "/opt/homebrew/bin/exiftool";
const exiftool = existsSync(preferredExiftool) ? preferredExiftool : "exiftool";
const metadata = JSON.parse(
  execFileSync(
    exiftool,
    [
      "-j", "-n", "-FileName", "-ImageWidth", "-ImageHeight", "-Description",
      "-Subject", "-Rating", "-Headline", "-City", "-Country-PrimaryLocationName",
      "-Scene", "-FocalLength", "-ExposureTime", "-FNumber",
      ...newFilenames.map((filename) => path.join(portfolioDirectory, filename)),
    ],
    { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
  ),
);

const additions = metadata.map(buildEntry);
for (const entry of additions) {
  if (manifestIds.has(entry.id)) fail(`${entry.filename} duplicates existing id ${entry.id}`);
  manifestIds.add(entry.id);
}

const updatedManifest = [...manifest, ...additions].sort((a, b) => a.id.localeCompare(b.id));
if (!dryRun) {
  writeFileSync(manifestPath, `${JSON.stringify(updatedManifest, null, 2)}\n`);
}

console.log(`${dryRun ? "Validated" : "Imported"} ${additions.length} portfolio images:`);
for (const entry of additions) {
  console.log(`- ${entry.id}: ${entry.alt}`);
}
