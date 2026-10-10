"use client";

import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLoopStep } from "@/lib/useLoopStep";

const bars = [38, 52, 44, 61, 58, 73, 86];
const days = ["M", "T", "W", "T", "F", "S", "S"];

const feed = [
  "Lead from Instagram ad → assigned to Neha",
  "Payment reminder sent to 14 customers",
  "Invoice INV-0933 emailed",
  "Appointment confirmed for 4:30 PM",
];

function CountUp({ to, suffix = "", run }: { to: number; suffix?: string; run: boolean }) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce || !run) return;
    const controls = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [to, run, reduce]);

  return (
    <>
      {(reduce ? to : run ? value : 0).toLocaleString("en-IN")}
      {suffix}
    </>
  );
}

export function DashboardScene({ active = true }: { active?: boolean }) {
  const step = useLoopStep(feed.length + 2, 1200, 3000, active);
  const started = step > 0;

  const stats = [
    { label: "Orders today", value: 128, suffix: "" },
    { label: "Auto-replied", value: 92, suffix: "%" },
    { label: "Hours saved / wk", value: 31, suffix: "" },
  ];

  return (
    <div className="flex h-full flex-col gap-4 p-1">
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-paper p-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">{s.label}</p>
            <p className="mt-1 font-display text-2xl sm:text-3xl">
              <CountUp to={s.value} suffix={s.suffix} run={started} />
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-line bg-paper p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Enquiries handled this week</p>
          <p className="font-mono text-[11px] text-moss">+18% vs last week</p>
        </div>
        <div className="mt-4 flex h-28 gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
              <motion.div
                className={`w-full rounded-t-md ${i === bars.length - 1 ? "bg-accent" : "bg-ink/80"}`}
                initial={false}
                animate={{ height: started ? `${h}%` : "4%" }}
                transition={{ duration: 0.8, delay: started ? i * 0.07 : 0, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="font-mono text-[10px] text-ink-soft">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-line bg-paper p-4">
        <p className="text-sm font-medium">Activity</p>
        <ul className="mt-2 space-y-1.5">
          {feed.map((item, i) => (
            <motion.li
              key={item}
              className="flex items-center gap-2 text-sm text-ink-soft"
              initial={false}
              animate={{ opacity: step > i + 1 ? 1 : 0, x: step > i + 1 ? 0 : -8 }}
              transition={{ duration: 0.35 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-moss" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
