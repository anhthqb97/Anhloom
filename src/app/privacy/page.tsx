import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Anhloom",
  description: "Anhloom privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="prose-page">
      <div className="prose-container">
        <article className="prose">
      <h1>Privacy Policy</h1>
      <p>Last updated: July 12, 2026</p>

      <h2>Introduction</h2>
      <p>
        Anhloom (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your
        privacy. This policy explains how we collect, use, and protect information
        when you visit anhloom.com or contact us through our website.
      </p>

      <h2>Information we collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          Contact details you provide (name, email, company, phone) when you
          submit a form or request a consultation.
        </li>
        <li>
          Usage data such as pages visited, browser type, and referring URLs via
          analytics tools.
        </li>
        <li>
          Technical data including IP address, device type, and cookies used for
          site functionality and performance.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Respond to inquiries and provide requested services.</li>
        <li>Improve our website, content, and user experience.</li>
        <li>Send relevant updates when you have opted in to communications.</li>
        <li>Comply with legal obligations and protect against fraud or abuse.</li>
      </ul>

      <h2>Data sharing</h2>
      <p>
        We do not sell your personal information. We may share data with trusted
        service providers (hosting, analytics, email) who process it on our behalf
        under confidentiality agreements, or when required by law.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain contact form submissions and related correspondence for as long
        as needed to fulfill the purpose for which they were collected, unless a
        longer retention period is required by law.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete,
        or restrict processing of your personal data. To exercise these rights,
        contact us at{" "}
        <a href="mailto:privacy@anhloom.com">privacy@anhloom.com</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        Our site uses essential cookies for functionality and may use analytics
        cookies to understand how visitors use the site. You can control cookie
        preferences through your browser settings.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be
        posted on this page with an updated effective date.
      </p>

      <h2>Contact us</h2>
      <p>
        For privacy-related questions, email{" "}
        <a href="mailto:privacy@anhloom.com">privacy@anhloom.com</a> or write to
        Anhloom, 123 Innovation Drive, San Francisco, CA 94105.
      </p>
        </article>
      </div>
    </div>
  );
}
