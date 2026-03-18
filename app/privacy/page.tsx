import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How One Flow handles your personal information. We collect your email for the waitlist — that's it.",
}

const TEAL = "#3ee8c8"

export default function PrivacyPage() {
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
          Privacy Policy
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
            <h2>What This Policy Covers</h2>
            <p>
              This privacy policy explains how One Flow (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; &ldquo;our&rdquo;) handles your personal
              information when you visit oneflow.com and sign up for our
              waitlist. We keep things simple because we collect very little
              data.
            </p>
          </section>

          <section>
            <h2>What We Collect</h2>
            <p>
              The only personal information we collect is your{" "}
              <strong>email address</strong>, which you provide when you sign up
              for our early access waitlist. That&apos;s it. We don&apos;t
              collect your name, location, payment info, or anything else.
            </p>
          </section>

          <section>
            <h2>Why We Collect It</h2>
            <p>We use your email address for two reasons:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>To add you to our early access waitlist</li>
              <li>To send you product updates and launch announcements</li>
            </ul>
            <p className="mt-2">
              We will never sell your email address or share it with advertisers.
            </p>
          </section>

          <section>
            <h2>How Your Data Is Stored</h2>
            <p>
              Your email address is stored through{" "}
              <strong>Resend</strong>, a third-party email service provider we
              use to manage our contact list and send emails. Resend processes
              your data on our behalf and is bound by their own privacy and
              security obligations.
            </p>
            <p className="mt-2">
              We do not store your email address in any other system.
            </p>
          </section>

          <section>
            <h2>Third Parties</h2>
            <p>
              The only third party with access to your email address is{" "}
              <strong>Resend</strong>, our email service provider. We do not use
              analytics tools, advertising platforms, or any other third-party
              services that track you.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              We only use <strong>essential cookies</strong> required for the
              website to function. We do not use analytics cookies, advertising
              cookies, or any third-party tracking cookies.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>No matter where you live, you can:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Request a copy</strong> of the personal data we hold
                about you
              </li>
              <li>
                <strong>Request deletion</strong> of your data from our systems
              </li>
              <li>
                <strong>Unsubscribe</strong> from our emails at any time
              </li>
            </ul>
            <p className="mt-2">
              If you&apos;re in the EU, UK, California, Brazil, or Canada, you
              may have additional rights under local privacy laws (such as GDPR,
              CCPA, LGPD, or PIPEDA), including the right to access, correct,
              delete, or port your data, and to object to or restrict how we
              process it. We will honor all such requests.
            </p>
          </section>

          <section>
            <h2>How to Unsubscribe or Contact Us</h2>
            <p>You can unsubscribe in two ways:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Click the <strong>unsubscribe link</strong> at the bottom of any
                email we send
              </li>
              <li>
                Email us directly at{" "}
                <strong style={{ color: TEAL }}>hello@oneflow.com</strong>
              </li>
            </ul>
            <p className="mt-2">
              For any privacy-related questions, data requests, or concerns,
              email us at <strong style={{ color: TEAL }}>hello@oneflow.com</strong>.
              We&apos;ll respond within 30 days.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website and waitlist are not directed at children under 16. We
              do not knowingly collect personal information from children. If you
              believe a child has provided us their email address, please contact
              us and we will delete it.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              If we make meaningful changes to this policy, we&apos;ll notify
              you by email before the changes take effect. For a simple
              waitlist, we don&apos;t expect this to change much.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
