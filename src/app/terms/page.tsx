import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/organisms/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${site.domain} and services provided by ${site.name}.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      current="/terms"
      title="Terms & Conditions"
      intro={`These terms apply to everyone who uses ${site.domain} or buys services from ${site.name}. Please read them before making a payment.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides technology services to businesses,
        including AI assistants and chatbots, business process automation, website and web application development, and
        AI integrations. We operate from {site.location}. You can reach us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>

      <h2>2. Using this website</h2>
      <p>
        By using this website you agree to these terms. You agree not to misuse the website, attempt to gain
        unauthorised access to it, or use it for any unlawful purpose. Content on this website, including text, design
        and graphics, belongs to {site.name} unless stated otherwise.
      </p>

      <h2>3. Quotes and scope of work</h2>
      <ul>
        <li>Every engagement starts with a written quote or proposal that describes the scope, deliverables, timeline and price.</li>
        <li>Work begins only after you accept the quote and make the agreed advance payment, if any.</li>
        <li>Work requested outside the agreed scope will be quoted separately before it is started.</li>
        <li>All prices are in Indian Rupees (INR) and applicable taxes are charged as per law.</li>
      </ul>

      <h2>4. Payments</h2>
      <p>
        Payments can be made online through our payment gateway partner using UPI, debit or credit cards, net banking or
        other supported methods. We do not store your card or banking details; these are handled securely by the
        payment gateway. Invoices are due on the dates stated in the quote or invoice.
      </p>

      <h2>5. Your responsibilities</h2>
      <ul>
        <li>Provide accurate information, content and timely access to the accounts and tools needed for the work.</li>
        <li>Make sure you have the rights to any content, data or branding you share with us.</li>
        <li>Review deliverables and share feedback within a reasonable time.</li>
        <li>Use the delivered systems in line with applicable laws, including the terms of platforms such as WhatsApp.</li>
      </ul>

      <h2>6. Delivery and acceptance</h2>
      <p>
        Services are delivered digitally. Details are in our <Link href="/shipping-policy">Shipping &amp; Delivery Policy</Link>. A
        deliverable is treated as accepted when you confirm acceptance, or 7 days after delivery if no issues are
        reported in that time.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        Our work may rely on third-party platforms such as AI model providers, WhatsApp Business, hosting providers or
        software tools. Their fees, availability and terms are set by them and are outside our control. Unless agreed
        otherwise, third-party subscription or usage fees are paid by you directly.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        Once full payment is received, ownership of the custom deliverables created specifically for you passes to you.
        We may reuse general know-how, tools and code libraries that are not specific to your business. We may mention
        your business as a client only with your permission.
      </p>

      <h2>9. Confidentiality</h2>
      <p>
        We keep your business information, customer data and credentials confidential and use them only to deliver the
        agreed services.
      </p>

      <h2>10. Refunds and cancellations</h2>
      <p>
        Refunds and cancellations are governed by our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        We take care to deliver reliable work, but we do not guarantee specific business results such as sales or
        revenue. AI systems can occasionally produce incorrect output, and you remain responsible for reviewing how they
        are used in your business. Our total liability for any claim is limited to the amount you paid us for the
        service concerned.
      </p>

      <h2>12. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The latest version will always be on this page, with the date it
        was last updated.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the
        competent courts in India.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>
    </LegalPage>
  );
}
