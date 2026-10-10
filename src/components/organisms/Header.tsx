"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/atoms/Button";
import { mainNav, whatsappLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/90 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm transition-colors hover:text-ink ${
                pathname === item.href ? "text-ink" : "text-ink-soft"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
              )}
            </Link>
          ))}
          <Button href={whatsappLink()} external variant="dark" className="py-2">
            Chat on WhatsApp
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            onClick={() => setOpen(false)}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6">
              {mainNav.map((item) => (
                <Link key={item.href} href={item.href} className="border-b border-line py-4 font-display text-2xl">
                  {item.label}
                </Link>
              ))}
              <Button href={whatsappLink()} external className="mt-4 self-start">
                Chat on WhatsApp
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
