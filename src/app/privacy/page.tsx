import type { Metadata } from "next";
import { LegalPage } from "@/components/organisms/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      current="/privacy"
      title="Privacy Policy"
      intro={`This policy explains what information ${site.name} collects through ${site.domain} and our services, and how we use and protect it.`}
    >
      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us:</strong> your name, phone number, email address, business details and any
          message you send through our contact form, email, phone or WhatsApp.
        </li>
        <li>
          <strong>Project information:</strong> data, content and account access you share with us so we can deliver a
          service.
        </li>
        <li>
          <strong>Payment information:</strong> when you pay online, your payment is processed by our payment gateway
          partner. We receive confirmation of the payment (amount, date, transaction reference) but we never see or store
          your full card number, CVV, UPI PIN or net-banking password.
        </li>
        <li>
          <strong>Basic usage data:</strong> standard technical information such as browser type, device and pages
          visited, used to keep the website working well.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To reply to your enquiries and prepare quotes.</li>
        <li>To deliver, support and improve the services you buy.</li>
        <li>To send invoices, payment receipts and service-related messages.</li>
        <li>To meet legal, tax and accounting requirements.</li>
      </ul>
      <p>We do not sell or rent your personal information to anyone.</p>

      <h2>3. Sharing your information</h2>
      <p>We share information only when needed to run our business, with:</p>
      <ul>
        <li>Payment gateway partners, to process your payments securely.</li>
        <li>Service providers such as hosting, email and software tools used to deliver your project.</li>
        <li>Government or legal authorities, when required by law.</li>
      </ul>

      <h2>4. Data security</h2>
      <p>
        We use reasonable technical and organisational measures to protect your information, including access controls
        and secure connections (HTTPS). Account credentials you share for a project are used only for that project and
        can be revoked by you at any time.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We keep enquiry and project information only for as long as needed to provide services and meet legal
        obligations, after which it is deleted or anonymised.
      </p>

      <h2>6. Cookies</h2>
      <p>
        This website uses only essential cookies needed for it to function. If we add analytics in the future, this
        policy will be updated.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You can ask us to access, correct or delete the personal information we hold about you, or withdraw consent for
        communications, by emailing <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond within 30 days.
      </p>

      <h2>8. Children</h2>
      <p>Our services are meant for businesses and are not directed at anyone under 18.</p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this policy from time to time. The latest version will always be available on this page.</p>

      <h2>10. Contact</h2>
      <p>
        For privacy questions or requests, contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
        {site.phone}.
      </p>
    </LegalPage>
  );
}
