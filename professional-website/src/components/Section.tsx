import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-[0.24em] text-white/55">
              {eyebrow.toUpperCase()}
            </div>
          ) : null}
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

