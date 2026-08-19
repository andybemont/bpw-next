import ContactForm from "./contact-form";

export default function ContactPageContent() {
  return (
    <section className="mx-auto grid max-w-[90rem] gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:px-12 lg:py-16 xl:gap-20">
      <div>
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">
            Availability & inquiries
          </p>
          <h1 className="max-w-[8ch] font-display text-[clamp(3.3rem,5.8vw,6.4rem)] font-medium leading-[0.91] tracking-[-0.05em] text-balance">
            Let’s see if we’re free.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
            Start with the date and venue. If we’re open, tell us enough about the two of you and the wedding for us to begin a real conversation.
          </p>

          <div className="mt-5 sm:mt-6">
            <p className="text-sm leading-6 text-primary-700">
              We answer every genuine inquiry ourselves, usually within one day.
            </p>
          </div>
        </div>
      </div>

      <div className="min-w-0">
        <ContactForm />
      </div>
    </section>
  );
}
