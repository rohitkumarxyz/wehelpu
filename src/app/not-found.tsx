import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";

export default function NotFound() {
  return (
    <Container className="py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-7xl">
        This page took the day <span className="italic text-accent">off.</span>
      </h1>
      <Button href="/" variant="dark" className="mt-10">
        Back to home
      </Button>
    </Container>
  );
}
