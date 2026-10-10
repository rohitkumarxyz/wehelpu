export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  examples: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "ai-assistants",
    title: "AI assistants & chatbots",
    short: "A trained assistant that answers customers on WhatsApp and your website, in English and Hindi.",
    description:
      "We train an assistant on your products, prices and policies so routine questions get answered instantly, and anything tricky lands with a real person on your team.",
    examples: [
      "WhatsApp bot that shares price lists, catalogues and order status",
      "Website chat that books appointments or captures leads",
      "Internal helper that searches your SOPs and documents",
    ],
    deliverables: [
      "Assistant trained on your business data",
      "Hand-off to a human when needed",
      "Conversation logs you can review",
      "Two rounds of tuning after launch",
    ],
  },
  {
    slug: "automation",
    title: "Business automation",
    short: "The copy-paste work between your apps, done for you: orders, invoices, reminders, reports.",
    description:
      "Most small teams lose hours a week moving data between WhatsApp, Sheets, the CRM and the accounting tool. We connect them so the work happens on its own.",
    examples: [
      "New order → invoice → WhatsApp confirmation → sheet updated",
      "Leads from ads and forms routed to the right salesperson",
      "Payment reminders and follow-ups sent on schedule",
    ],
    deliverables: [
      "Mapped workflow, agreed in writing",
      "Automations built on tools you already use",
      "Error alerts so nothing fails silently",
      "Short video walkthrough for your team",
    ],
  },
  {
    slug: "websites",
    title: "Websites & web apps",
    short: "Fast, clean sites and small internal tools that your customers and staff actually use.",
    description:
      "From a five-page business website to a booking system or an order dashboard. Built to load quickly on a phone and easy for you to update.",
    examples: [
      "Business website with enquiry and WhatsApp buttons",
      "Booking or order management portal",
      "Simple dashboards for daily numbers",
    ],
    deliverables: [
      "Mobile-first design and build",
      "Basic SEO and analytics setup",
      "Hosting and domain setup help",
      "Source code handed over to you",
    ],
  },
  {
    slug: "ai-integration",
    title: "AI in your existing tools",
    short: "Add AI to the software you already run: summaries, drafting, sorting and data entry.",
    description:
      "You don't always need a new product. Often the win is adding a smart step to what you have: reading invoices, summarising calls, tagging tickets, drafting replies.",
    examples: [
      "Read PDF invoices and fill your sheet automatically",
      "Summarise customer calls and update the CRM",
      "Draft product descriptions from a few bullet points",
    ],
    deliverables: [
      "Integration with your current software",
      "Clear limits on what AI does and doesn't touch",
      "Usage and cost monitoring",
      "Documentation for your team",
    ],
  },
];
