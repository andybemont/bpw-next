import Image from "next/image";
import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";

const teamMembers = [
  ["Carly Straight", "cats, scary movies, every food, pretty skies, bedtime", "loud noises, losing sunglasses, slow walkers, chewing sounds"],
  ["Andy Bemont", "Mario Kart, Pink Floyd, cheeseburgers, cats, mulch, sci-fi, naps, crossbreezes, cars", "centipedes, wasps, scorpions, maggots, botflies, eggplant"],
  ["Gillian Bemont", "birds, flowers, resting her eyes, bread, lakes, singing, kids, every dog, true crime, dry erase markers", "olives, touching flour, cockroaches, chores, surprises"],
] as const;

type TeamPhoto = readonly [file: string, caption: string, portrait?: boolean];

const carlyWeddingPhotos: TeamPhoto[] = [
  ["241019130528", "Meet Gray, Andy and Gillian’s son. Gray has never gotten dressed up before."],
  ["241019130743", "", true],
  ["241019130829", "Oh dear."],
  ["241019140802", "Carly and Conor, taking their portraits extremely seriously.", true],
  ["241019145809", "Uh oh, here’s Holly! And she can’t take this guy anywhere."],
  ["241019145932", ""],
  ["241019151107", ""],
  ["241019151345", "This is the power duo for most weddings. Andy and Carly. Feel the power."],
];

const carlyPartyPhotos: TeamPhoto[] = [
  ["241019195629", ""],
  ["241019200704", ""],
  ["241019201728", ""],
  ["241019204620", ""],
  ["241019220657", ""],
  ["241019220749", ""],
  ["241019221957", ""],
  ["241019222021", ""],
  ["241019222950", ""],
  ["241019223036", ""],
];

const familyWeddingPhotos: TeamPhoto[] = [
  ["250510103852", "Gillian can’t believe how good she looks."],
  ["250510143726", "Again with this."],
  ["250510143818", "Don’t worry, we got the fly eventually.", true],
  ["250510152434", "Grateful sister-in-law enjoying her free photography."],
  ["250510153442", "They still got it."],
];

function TeamStoryGallery({ photos, wedding }: { photos: TeamPhoto[]; wedding: string }) {
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
      {photos.map(([file, caption, portrait]) => (
          <figure key={file}>
            <Image
              src={`/team/bemont-photo-${file}.jpg`}
              width={portrait ? 1597 : 2400}
              height={portrait ? 2400 : file.startsWith("250510") ? 1600 : 1597}
              alt={`A Bemont family moment at ${wedding}`}
              sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1280px) 58vw, 740px"
              className="h-auto w-full bg-primary-100"
            />
            {caption ? <figcaption className="mt-3 max-w-xl text-sm leading-6 text-primary-600">{caption}</figcaption> : null}
          </figure>
      ))}
    </div>
  );
}

function TeamPhotoFigure({
  photo: [file, caption, portrait],
  className = "",
}: {
  photo: TeamPhoto;
  className?: string;
}) {
  return (
    <figure className={className}>
      <Image
        src={`/team/bemont-photo-${file}.jpg`}
        width={portrait ? 1597 : 2400}
        height={portrait ? 2400 : 1597}
        alt={caption}
        sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1280px) 58vw, 740px"
        className="h-auto w-full bg-primary-100"
      />
      {caption ? <figcaption className="mt-3 max-w-xl text-sm leading-6 text-primary-600">{caption}</figcaption> : null}
    </figure>
  );
}

function CarlyWeddingStory() {
  return (
    <>
      <div className="space-y-14 sm:space-y-20">
        <div className="grid items-start gap-8 sm:grid-cols-2">
          <div className="space-y-8">
            <TeamPhotoFigure photo={carlyWeddingPhotos[0]} />
            <TeamPhotoFigure photo={carlyWeddingPhotos[2]} />
          </div>
          <TeamPhotoFigure photo={carlyWeddingPhotos[1]} />
        </div>

        <div className="grid items-start gap-8 sm:grid-cols-2">
          <TeamPhotoFigure photo={carlyWeddingPhotos[3]} />
          <div className="space-y-8">
            <TeamPhotoFigure photo={carlyWeddingPhotos[4]} />
            <TeamPhotoFigure photo={carlyWeddingPhotos[7]} />
          </div>
        </div>

        <figure>
          <div className="grid grid-cols-2 gap-3 sm:gap-8">
            {carlyWeddingPhotos.slice(5, 7).map(([file], index) => (
              <Image
                key={file}
                src={`/team/bemont-photo-${file}.jpg`}
                width={2400}
                height={1597}
                alt={index === 0 ? "Gillian at Carly and Conor’s wedding" : "Gillian and Carly together on Carly’s wedding day"}
                sizes="(max-width: 640px) 45vw, 46vw"
                className="h-auto w-full"
              />
            ))}
          </div>
          <figcaption className="mt-3 text-sm leading-6 text-primary-600">Nice of Gillian to show up!</figcaption>
        </figure>
      </div>

      <div className="mt-20 sm:mt-28">
        <div className="mb-12 grid items-center gap-8 border-y border-primary-300/60 py-10 sm:grid-cols-2 sm:gap-14 sm:py-14">
          <Image
            src="/team/bemont-photo-241019223942.jpg"
            width={1597}
            height={2400}
            alt="Carly and Conor striking a dramatic pose at their wedding reception"
            sizes="(max-width: 640px) calc(100vw - 3rem), 44vw"
            className="mx-auto h-auto w-full max-w-md bg-primary-100"
          />
          <p className="font-display text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-balance">
            And then we partied like very normal people.
          </p>
        </div>
        <TeamStoryGallery photos={carlyPartyPhotos} wedding="Carly and Conor’s wedding reception" />
      </div>
    </>
  );
}

function GroupedPhotos({
  files,
  caption,
  alt,
  className = "",
}: {
  files: string[];
  caption: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={files.length === 3 ? "grid grid-cols-1 gap-5 sm:grid-cols-3" : "grid grid-cols-2 gap-3 sm:gap-5"}>
        {files.map((file) => (
          <Image
            key={file}
            src={`/team/bemont-photo-${file}.jpg`}
            width={2400}
            height={1600}
            alt={alt}
            sizes={files.length === 3 ? "(max-width: 640px) calc(100vw - 3rem), 30vw" : "(max-width: 640px) 45vw, 30vw"}
            className="h-auto w-full"
          />
        ))}
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-primary-600">{caption}</figcaption>
    </figure>
  );
}

function ConnorWeddingStory() {
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-12 sm:gap-y-16">
      <TeamPhotoFigure photo={familyWeddingPhotos[0]} className="sm:col-span-6" />
      <TeamPhotoFigure photo={familyWeddingPhotos[1]} className="sm:col-span-6" />
      <TeamPhotoFigure photo={familyWeddingPhotos[2]} className="mx-auto w-3/4 max-w-sm sm:col-span-4 sm:w-full" />
      <TeamPhotoFigure photo={familyWeddingPhotos[3]} className="sm:col-span-8" />
      <TeamPhotoFigure photo={familyWeddingPhotos[4]} className="sm:col-span-5" />

      <GroupedPhotos
        files={["250510175936", "250510180008"]}
        caption="They even let Gillian and Carly talk!"
        alt="Gillian and Carly giving a wedding speech together"
        className="sm:col-span-7"
      />
      <GroupedPhotos
        files={["250510164553", "250510180025", "250510192108"]}
        caption="Freaks and Geeks"
        alt="Gray and Holly entertaining themselves at the wedding"
        className="sm:col-span-12"
      />

      <TeamPhotoFigure
        className="sm:col-span-6"
        photo={[
          "250510192152",
          "From left: Andy’s sister-in-law; Gillian’s husband’s brother-in-law; Carly’s husband’s mother-in-law’s eldest son-in-law.",
        ]}
      />
      <TeamPhotoFigure
        className="sm:col-span-6"
        photo={[
          "250510194637",
          "Andy quietly deciding he’ll never do simultaneous parenting and photography ever, ever again. Little does he know that Gray is scared of the AirBnB they were going to that night, so Andy will have to drive all the way back to Rochester. Except the groom forgot he stashed his phone and wallet in Andy’s camera bag, so halfway home Andy has to turn around and go back. But then Gray was too tired to be scared and went to bed at the AirBnB and it all turned into a nice little afterparty! So cheer up, Andy.",
        ]}
      />
    </div>
  );
}

export default function TeamContent() {
  return (
    <section className="text-primary-900">
      <div className="grid border-y border-primary-300/60 lg:grid-cols-[0.82fr_1.18fr]">
        <header className="bg-[#e8e3d7] px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">The team</p>
          <h1 className="max-w-xl font-display text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-balance">
            The people coming to your wedding.
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
            Bemont Photo is Andy, Carly, and Gillian: a family business with more than 200 weddings behind it.
          </p>
        </header>

        <div className="lg:border-l lg:border-primary-300/60">
          <ul className="divide-y divide-primary-300/60">
            {teamMembers.map(([name, likes, dislikes], index) => (
              <li key={name} className="grid gap-3 px-6 py-5 sm:grid-cols-[0.66fr_1.34fr] sm:px-10 sm:py-5">
                <div>
                  <p className="mb-1 text-[0.62rem] font-medium tracking-[0.16em] text-[#66858a]">0{index + 1}</p>
                  <h2 className="font-display text-2xl font-medium">{name}</h2>
                </div>
                <div className="space-y-1 text-sm leading-5 text-primary-700">
                  <p><span className="font-medium text-primary-900">Likes:</span> {likes}.</p>
                  <p><span className="font-medium text-primary-900">Dislikes:</span> {dislikes}.</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="grid gap-5 border-t border-primary-300/60 px-6 py-8 sm:px-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-8 lg:py-9">
            <h2 className="font-display text-3xl font-medium leading-tight">Here’s the story:</h2>
            <p className="text-sm leading-6 text-primary-700">
              Andy learned photography to take pictures of his and Gillian’s kid, then immediately wanted all the fancy gear.
              Gillian suggested he start a business, so Bemont Photo launched in 2017. He taught Gillian because weddings are
              better with two photographers; when kid number two made weekends more complicated, Gillian’s sister Carly swept in.
              Today Carly photographs most weddings with Andy and, as of 2026, is co-owner and Executive Grand Overseer, a
              well-deserved promotion after nearly a decade as “the other one.”
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#66858a]">A family business, extensively documented</p>
        <h2 className="max-w-5xl font-display text-[clamp(2.8rem,5vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.045em] text-balance">
          Did you think you were the only ones who get married?
        </h2>
        <p className="mt-7 max-w-3xl text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
          Carly got married in 2024, and Andy was there to capture it. A few months later, Carly and Gillian’s brother
          got married, and Andy was on the job again. We passed the camera around when needed, and here are a few of our
          favorites so you can get to know us.
        </p>
      </div>

      <section aria-labelledby="carly-wedding-heading">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-primary-300/60 pb-5 sm:mb-14">
          <h2 id="carly-wedding-heading" className="font-display text-3xl font-medium sm:text-4xl">Carly &amp; Conor</h2>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#a85235]">October 19, 2024</p>
        </div>
        <CarlyWeddingStory />
      </section>

      <section aria-labelledby="family-wedding-heading" className="mt-24 sm:mt-36">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-primary-300/60 pb-5 sm:mb-14">
          <h2 id="family-wedding-heading" className="font-display text-3xl font-medium sm:text-4xl">Connor &amp; Colleen</h2>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#66858a]">May 10, 2025</p>
        </div>
        <ConnorWeddingStory />
      </section>

      <div className="mx-auto max-w-3xl pb-8 pt-20 text-center sm:pb-12 sm:pt-28">
        <p className="mb-8 font-display text-[clamp(2.4rem,4vw,4rem)] font-medium leading-[1.05] tracking-[-0.04em] text-balance">
          If we sound like your kind of people, we’d love to hear about your wedding.
        </p>
        <CheckAvailabilityCta fullWidthOnMobile />
        <Link href="/gallery" className="editorial-link mt-5 inline-block text-sm font-medium">Explore the galleries</Link>
      </div>
    </section>
  );
}
