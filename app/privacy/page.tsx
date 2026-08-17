import PageBase from "@/app/ui/page-base";
import SitePage from "@/app/ui/shared/site-page";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Bemont Photo",
  description:
    "How Bemont Photo handles analytics, contact inquiries, and website data.",
  path: "privacy",
});

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Privacy">
      <SitePage>
        <article className="space-y-6 text-primary-900">
          <div className="space-y-2">
            <h1 className="text-sm font-medium text-primary-700">
              Privacy Policy
            </h1>
            <p className="text-2xl font-semibold text-pretty">
              Plain-language summary of what this site collects
            </p>
          </div>

          <div className="space-y-4 text-base leading-relaxed">
            <p>
              Bemont Photo Wedding Photography (&quot;we,&quot; &quot;us&quot;)
              operates bemontphoto.com. This page explains what information the
              website collects and how it is used.
            </p>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Contact inquiries</h2>
              <p>
                When you submit the contact form, we receive the information you
                enter—such as your name, email, wedding date, and message—and
                use it to respond to your inquiry. Messages are delivered by
                email through our hosting provider. We do not sell contact
                information.
              </p>
              <p>
                Submissions are protected by Cloudflare Turnstile to reduce spam.
                A confirmation email is sent automatically when you inquire.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Analytics</h2>
              <p>
                We use privacy-friendly analytics (including Vercel Analytics and
                Google Tag Manager) to understand how visitors use the site—
                for example, which pages are viewed and whether availability CTAs
                are clicked. This helps us improve the website. Analytics data
                is aggregated and not used to identify you personally unless you
                also contact us.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Cookies and local storage</h2>
              <p>
                The site may store basic session information (such as how you
                arrived or marketing tags in the URL) to understand where
                inquiries come from. Your browser may also store ordinary cookies
                related to analytics providers and Turnstile verification.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Third-party links</h2>
              <p>
                Our site links to external services such as Instagram, Facebook,
                PayPal, and client gallery hosts. Those sites have their own
                privacy policies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Questions</h2>
              <p>
                If you have questions about this policy or want information
                removed, use the contact form on this site or reach out through
                the channels listed on our Google Business Profile.
              </p>
              <p className="text-sm text-primary-700">
                Last updated: August 2026
              </p>
            </section>
          </div>
        </article>
      </SitePage>
    </PageBase>
  );
}
