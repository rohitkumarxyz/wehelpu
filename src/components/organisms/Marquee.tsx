const items = [
  "WhatsApp auto-replies",
  "GST invoices on every order",
  "Leads into Google Sheets",
  "Appointment reminders",
  "Payment follow-ups",
  "Catalogue bots",
  "Daily sales summary",
  "CRM clean-up",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-4 text-paper" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl italic">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            {item}
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
