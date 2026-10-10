import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";
import { mainNav, policyNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
            AI assistants, automation and websites for small and growing businesses.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/40">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-paper/80 hover:text-accent">
                Home
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/80 hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/40">Policies</p>
          <ul className="mt-4 space-y-2 text-sm">
            {policyNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/80 hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/40">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:+${site.phoneRaw}`} className="hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>{site.location}</li>
            <li className="text-paper/50">{site.hours}</li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-paper/10 py-6 text-xs text-paper/40 sm:flex-row sm:justify-between">
        <p>
          © {site.copyrightYear} {site.name}. All rights reserved.
        </p>
        <p>{site.domain}</p>
      </Container>
    </footer>
  );
}
