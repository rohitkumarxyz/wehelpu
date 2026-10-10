import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { PageHero } from "@/components/organisms/PageHero";
import { policyNav, site } from "@/lib/site";

type LegalPageProps = {
  title: string;
  intro: string;
  current: string;
  children: React.ReactNode;
};

export function LegalPage({ title, intro, current, children }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={`Last updated ${site.policyUpdated}`} title={title} intro={intro} />
      <Container className="grid gap-12 py-16 lg:grid-cols-[14rem_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">Policies</p>
          <ul className="mt-4 space-y-1">
            {policyNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    current === item.href ? "bg-ink text-paper" : "text-ink-soft hover:bg-paper-deep hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <article className="prose-legal max-w-3xl">{children}</article>
      </Container>
    </>
  );
}
