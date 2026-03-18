import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for One Flow. Simple terms for a pre-launch landing page.",
}

const TEAL = "#3ee8c8"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-white/40 transition-colors hover:text-white/60"
          style={{ fontWeight: 400 }}
        >
          &larr; Back to home
        </Link>

        {/* Title */}
        <h1
          className="text-3xl tracking-tight text-white md:text-4xl"
          style={{ fontWeight: 700 }}
        >
          Terms of Service
        </h1>
        <p
          className="mt-2 text-sm text-white/40"
          style={{ fontWeight: 300 }}
        >
          Last updated: March 2026
        </p>

        {/* Content */}
        <div className="mt-10 space-y-10 text-sm leading-relaxed text-white/60 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_strong]:text-white/80 [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:text-white/80">
          <section>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              the One Flow website at oneflow.com (&ldquo;Site&rdquo;). By
              accessing or using the Site, you agree to these Terms. If you do
              not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2>What One Flow Is</h2>
            <p>
              One Flow is currently a pre-launch website. The Site provides
              information about our upcoming product and allows you to join a
              waitlist for early access by submitting your email address. There
              are no paid features, user accounts, or application functionality
              available at this time.
            </p>
          </section>

          <section>
            <h2>Waitlist Signup</h2>
            <p>
              When you join our waitlist, you provide your email address. We use
              it to send you updates about One Flow, including launch
              announcements and early access invitations. You can unsubscribe
              from these communications at any time by using the unsubscribe
              link included in every email or by contacting us at{" "}
              <strong style={{ color: TEAL }}>hello@oneflow.com</strong>.
            </p>
            <p className="mt-2">
              We will not sell your email address to third parties. For details
              on how we handle your information, please see our{" "}
              <Link href="/privacy" className="text-white/60">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, images,
              and design — is owned by One Flow or its licensors and is protected
              by applicable intellectual property laws. You may not copy,
              reproduce, distribute, or create derivative works from any content
              on this Site without our prior written permission.
            </p>
          </section>

          <section>
            <h2>Accuracy of Information</h2>
            <p>
              We make reasonable efforts to keep the information on this Site
              accurate and up to date. However, since One Flow is in active
              development, features, timelines, and product details described on
              the Site may change. Nothing on the Site constitutes a binding
              commitment or guarantee about the final product.
            </p>
          </section>

          <section>
            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use the Site for any unlawful purpose</li>
              <li>
                Attempt to interfere with or disrupt the Site&apos;s operation
              </li>
              <li>
                Submit false or misleading information through the waitlist form
              </li>
              <li>
                Use automated tools to scrape, crawl, or extract content from
                the Site
              </li>
            </ul>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, One Flow and its owners,
              employees, and affiliates shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising
              from your use of the Site.
            </p>
            <p className="mt-2">
              The Site is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, whether express or
              implied, including implied warranties of merchantability, fitness
              for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2>Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites or services. We
              do not control and are not responsible for the content, privacy
              practices, or availability of those external sites. Visiting any
              linked site is at your own risk.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the &ldquo;Last updated&rdquo; date at the top. Your
              continued use of the Site after changes are posted constitutes your
              acceptance of the updated Terms. For significant changes, we will
              make reasonable efforts to notify waitlist subscribers via email.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms, contact us at{" "}
              <strong style={{ color: TEAL }}>hello@oneflow.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
