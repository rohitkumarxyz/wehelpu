"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Steps 0..steps-1 forward on a timer, holds on the last step, then restarts. */
export function useLoopStep(steps: number, stepMs: number, holdMs = 2500, active = true) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!active || reduce) return;
    const isLast = step >= steps - 1;
    const id = setTimeout(() => setStep(isLast ? 0 : step + 1), isLast ? holdMs : stepMs);
    return () => clearTimeout(id);
  }, [step, steps, stepMs, holdMs, active, reduce]);

  return reduce ? steps - 1 : step;
}
