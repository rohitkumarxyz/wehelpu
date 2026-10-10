import type { Metadata } from "next";
import { LegalPage } from "@/components/organisms/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: `How services purchased from ${site.name} are delivered.`,
};

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      current="/shipping-policy"
      title="Shipping & Delivery Policy"
      intro={`${site.name} provides digital services only. There are no physical products, so nothing is shipped. This page explains how and when our services are delivered.`}
    >
      <h2>1. No physical shipping</h2>
      <p>
        All our services, including AI assistants, automations, websites and integrations, are delivered online. No
        physical goods are shipped, and no shipping charges apply.
      </p>

      <h2>2. How services are delivered</h2>
      <ul>
        <li>Access to the deployed system, website or automation, set up on your accounts wherever possible.</li>
        <li>Login details, source code or files shared through email or a secure shared folder.</li>
        <li>A walkthrough over a video call or a recorded video, plus written handover notes.</li>
      </ul>

      <h2>3. Delivery timelines</h2>
      <p>
        The delivery timeline for each project is written in the quote you accept before payment. As a general guide:
      </p>
      <ul>
        <li>Consultation calls and written plans: within <strong>2–3 working days</strong> of booking.</li>
        <li>Smaller automations and chatbot setups: usually <strong>7–14 working days</strong>.</li>
        <li>Websites and larger projects: usually <strong>2–6 weeks</strong>, delivered in milestones.</li>
      </ul>
      <p>Timelines start once we receive the advance payment and the information or access needed to begin.</p>

      <h2>4. Delivery confirmation</h2>
      <p>
        When a deliverable is ready, we will notify you by email or WhatsApp at the contact details you gave us. Payment
        receipts and invoices are sent to your email address.
      </p>

      <h2>5. Delays</h2>
      <p>
        If a delivery is going to be late for any reason, we will tell you in advance with a revised date. If a delay on
        our side is unreasonable, you may cancel under our Refund &amp; Cancellation Policy.
      </p>

      <h2>6. Contact</h2>
      <p>
        For questions about a delivery, contact <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>
    </LegalPage>
  );
}
