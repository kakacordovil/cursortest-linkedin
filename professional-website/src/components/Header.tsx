import Link from "next/link";
import { Container } from "@/components/Container";
import { profile } from "@/lib/profile";

const nav = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white"
            aria-label="Home"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
            <span className="sm:hidden">KC</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 sm:inline-flex"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Let’s talk
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

