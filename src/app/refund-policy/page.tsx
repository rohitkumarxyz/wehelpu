import type { Metadata } from "next";
import { LegalPage } from "@/components/organisms/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Refund and cancellation policy for services purchased from ${site.name}.`,
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      current="/refund-policy"
      title="Refund & Cancellation Policy"
      intro={`We want every client to feel the payment was fair. This policy explains when you can cancel, when refunds apply and how long they take.`}
    >
      <h2>1. Cancellation before work starts</h2>
      <p>
        If you cancel a confirmed order <strong>before work has started</strong>, you will receive a{" "}
        <strong>full refund</strong> of the amount paid.
      </p>

      <h2>2. Cancellation after work has started</h2>
      <p>
        If you cancel after work has begun, we will refund the amount paid <strong>minus the value of work already
        completed</strong>, calculated against the milestones in your quote. We will share a short breakdown of the work
        completed along with the refund amount.
      </p>

      <h2>3. When refunds are not applicable</h2>
      <ul>
        <li>Milestones or deliverables that you have already accepted.</li>
        <li>Work that has been fully delivered and accepted under our Terms &amp; Conditions.</li>
        <li>
          Third-party costs paid on your behalf, such as domain registration, hosting, AI usage or software
          subscriptions, which are non-refundable by those providers.
        </li>
        <li>Monthly support or maintenance fees for a month that has already started.</li>
      </ul>

      <h2>4. If something doesn&apos;t work as agreed</h2>
      <p>
        If a deliverable does not match the agreed scope, tell us within 7 days of delivery. We will fix it at no extra
        cost. If we are unable to fix it, you will be eligible for a refund of the amount paid for that deliverable.
      </p>

      <h2>5. Cancelling a monthly plan</h2>
      <p>
        Monthly support plans can be cancelled at any time by emailing us. The cancellation takes effect from the next
        billing cycle, and you will not be charged again.
      </p>

      <h2>6. Duplicate or failed payments</h2>
      <p>
        If you were charged twice for the same invoice, or money was deducted for a payment that failed, the extra amount
        will be refunded in full once verified.
      </p>

      <h2>7. How to request a refund or cancellation</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> or call/WhatsApp {site.phone} with your name, invoice or
        payment reference, and the reason for the request. We will acknowledge your request within 2 working days.
      </p>

      <h2>8. Refund timelines</h2>
      <ul>
        <li>Approved refunds are initiated within <strong>5–7 working days</strong> of approval.</li>
        <li>Refunds are credited to the <strong>original payment method</strong> used for the payment.</li>
        <li>
          Depending on your bank or card issuer, it may take an additional 5–10 working days for the amount to reflect
          in your account.
        </li>
      </ul>

      <h2>9. Contact</h2>
      <p>
        For any questions about this policy, write to <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        {site.phone} ({site.hours}).
      </p>
    </LegalPage>
  );
}
