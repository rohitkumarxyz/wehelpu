"use client";

import { useState } from "react";
import { Arrow } from "@/components/atoms/Arrow";
import { site } from "@/lib/site";

const topics = ["AI assistant / chatbot", "Business automation", "Website or web app", "AI in existing tools", "Something else"];

const fieldClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-ink";

export function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [sent, setSent] = useState(false);

  // No backend yet: the form opens the visitor's mail app with the message pre-filled.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Topic: ${topic}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Enquiry: ${topic}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] border border-line bg-paper-deep p-6 sm:p-8">
      <fieldset>
        <legend className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">What do you need help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                topic === t ? "border-ink bg-ink text-paper" : "border-line bg-paper hover:border-ink/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-ink-soft">Your name</span>
          <input name="name" required autoComplete="name" className={`mt-1 ${fieldClass}`} />
        </label>
        <label className="block">
          <span className="text-sm text-ink-soft">Phone / WhatsApp</span>
          <input name="phone" type="tel" required autoComplete="tel" className={`mt-1 ${fieldClass}`} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm text-ink-soft">Email</span>
          <input name="email" type="email" required autoComplete="email" className={`mt-1 ${fieldClass}`} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm text-ink-soft">Tell us a little about the task</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="e.g. We get 60+ WhatsApp messages a day asking for prices and stock."
            className={`mt-1 resize-none ${fieldClass}`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-ink"
      >
        Send enquiry <Arrow />
      </button>
      {sent && (
        <p className="mt-4 text-sm text-moss" role="status">
          Your email app should have opened with the message ready. If it didn&apos;t, write to {site.email}.
        </p>
      )}
    </form>
  );
}
