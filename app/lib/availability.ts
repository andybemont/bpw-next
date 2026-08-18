import { isDateBooked } from "./booked-dates";

export type AvailabilityStatus = {
  status: "available" | "unavailable";
  tone: "open" | "ask" | "unavailable";
  label: string;
  note?: string;
};

const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function toDateOnly(dateString: string) {
  if (!dateString) {
    return null;
  }
  const parsed = new Date(`${dateString}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function getEasterDate(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function isWithinDays(target: Date, base: Date, days: number) {
  const diff = Math.abs(target.getTime() - base.getTime());
  return diff <= days * 24 * 60 * 60 * 1000;
}

function getThanksgivingWeekend(year: number) {
  const novemberFirst = new Date(year, 10, 1);
  const firstThursdayOffset = (4 - novemberFirst.getDay() + 7) % 7;
  const thanksgiving = new Date(year, 10, 1 + firstThursdayOffset + 21);
  const sunday = new Date(thanksgiving);
  sunday.setDate(thanksgiving.getDate() + 3);
  return { start: thanksgiving, end: sunday };
}

function monthsFromNow(target: Date, now: Date) {
  return (
    target.getFullYear() * 12 +
    target.getMonth() -
    (now.getFullYear() * 12 + now.getMonth())
  );
}

export function getAvailabilityStatus(
  dateString: string,
): AvailabilityStatus | null {
  const dateValue = toDateOnly(dateString);
  if (!dateValue) {
    return null;
  }

  const today = new Date();
  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const dayOfWeek = weekdayNames[dateValue.getDay()];

  if (dateValue < todayDate) {
    return {
      status: "unavailable",
      tone: "unavailable",
      label: "That date has already passed.",
      note: "We are not time travelers.",
    };
  }

  if (isDateBooked(dateString)) {
    return {
      status: "unavailable",
      tone: "unavailable",
      label: "We’re already committed that day.",
      note: "If your plans have any flexibility, tell us. Otherwise, we’re genuinely sorry to miss it.",
    };
  }

  if (dateValue.getMonth() === 11 && dateValue.getDate() > 22) {
    return {
      status: "unavailable",
      tone: "unavailable",
      label: "We’re unavailable that day.",
      note: "We wrap up for the year a few days before Christmas.",
    };
  }

  const thanksgivingWeekend = getThanksgivingWeekend(dateValue.getFullYear());
  if (
    dateValue >= thanksgivingWeekend.start &&
    dateValue <= thanksgivingWeekend.end
  ) {
    return {
      status: "unavailable",
      tone: "unavailable",
      label: "We’re unavailable that weekend.",
      note: "We spend Thanksgiving weekend with our families.",
    };
  }

  const easter = getEasterDate(dateValue.getFullYear());
  if (isWithinDays(dateValue, easter, 10)) {
    return {
      status: "unavailable",
      tone: "unavailable",
      label: "We’re unavailable around that date.",
      note: "We reserve a little time around Easter for our families.",
    };
  }

  const daysAway = Math.ceil(
    (dateValue.getTime() - todayDate.getTime()) / (24 * 60 * 60 * 1000),
  );
  if (daysAway < 30) {
    return {
      status: "available",
      tone: "ask",
      label: "Possibly—let’s talk.",
      note: "We do not normally book weddings on short notice, but tell us what you’re planning below.",
    };
  }

  if (daysAway > 730) {
    return {
      status: "available",
      tone: "ask",
      label: "Possibly—let’s talk.",
      note: "We normally do not book weddings more than two years out. Feel free to get in touch anyway!",
    };
  }

  if (dateValue.getDay() >= 1 && dateValue.getDay() <= 4) {
    return {
      status: "available",
      tone: "ask",
      label: "Possibly—let’s talk.",
      note: `This is a ${dayOfWeek}. That's fine, but sometimes indicates a mistake.`,
    };
  }

  const monthsAway = Math.max(0, monthsFromNow(dateValue, todayDate));
  return {
    status: "available",
    tone: "open",
    label: "Your date is open!",
    note: `Just to prevent mistakes: this is a ${dayOfWeek} in ${monthsAway} months. If that's right, get in touch!`,
  };
}
