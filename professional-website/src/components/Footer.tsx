import { Container } from "@/components/Container";
import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/55">
            <span className="text-white/75">{profile.name}</span> · {profile.location}
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a
              className="text-white/65 hover:text-white"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-white/65 hover:text-white"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="text-white/65 hover:text-white" href={`mailto:${profile.links.email}`}>
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

