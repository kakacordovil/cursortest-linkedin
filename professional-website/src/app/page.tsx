import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="noise">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18]" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/35 via-cyan-300/20 to-emerald-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 right-[-20%] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-white/10 via-fuchsia-500/10 to-cyan-300/10 blur-3xl floaty" />

          <Container>
            <section className="relative py-16 sm:py-24">
              <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>{profile.location}</Badge>
                    <Badge>{profile.role}</Badge>
                  </div>

                  <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                    {profile.name}
                  </h1>
                  <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-white/75 sm:text-xl">
                    {profile.tagline}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <ButtonLink href="#contact">Contact</ButtonLink>
                    <ButtonLink
                      variant="ghost"
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </ButtonLink>
                    <ButtonLink
                      variant="ghost"
                      href={profile.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </ButtonLink>
                  </div>
                </div>

                <div className="md:max-w-sm">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="text-xs font-semibold tracking-[0.24em] text-white/55">
                      SNAPSHOT
                    </div>
                    <div className="mt-3 grid gap-3 text-sm text-white/75">
                      <div className="flex items-center justify-between gap-6">
                        <span className="text-white/55">Email</span>
                        <a
                          className="truncate text-white hover:text-white/90"
                          href={`mailto:${profile.links.email}`}
                        >
                          {profile.links.email}
                        </a>
                      </div>
                      <div className="flex items-center justify-between gap-6">
                        <span className="text-white/55">Phone</span>
                        <a
                          className="text-white hover:text-white/90"
                          href={`tel:${profile.links.phoneTel}`}
                        >
                          {profile.links.phone}
                        </a>
                      </div>
                      <div className="flex items-center justify-between gap-6">
                        <span className="text-white/55">Primary</span>
                        <span className="text-white/90">
                          {profile.topSkills.slice(0, 1).join("")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </div>

        <Section id="about" eyebrow="About" title="Urban Icamiaba. Builder mindset.">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-4 text-base leading-8 text-white/75">
                {profile.summary.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xs font-semibold tracking-[0.24em] text-white/55">
                DETAILS
              </div>
              <dl className="mt-4 grid gap-4 text-sm">
                <div className="flex items-center justify-between gap-6">
                  <dt className="text-white/55">Languages</dt>
                  <dd className="text-right text-white/75">
                    {profile.languages.join(", ")}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <dt className="text-white/55">Certifications</dt>
                  <dd className="text-right text-white/75">
                    {profile.certifications.join(", ")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Section>

        <Section id="journey" eyebrow="Career Journey" title="A path with range — from fashion to fullstack.">
          <Timeline items={profile.experience} />
        </Section>

        <Section id="skills" eyebrow="Skills" title="Strong fundamentals, future-facing focus.">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white">Top skills</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.topSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white/75"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white">Education</div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {profile.education.map((e) => (
                  <li key={`${e.school}-${e.program}`}>
                    <div className="font-medium text-white/85">{e.school}</div>
                    <div className="text-white/65">{e.program}</div>
                    {e.start && e.end ? (
                      <div className="text-xs text-white/45">
                        {e.start} — {e.end}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white">Now</div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                I’m currently open to projects where I can combine product taste,
                UI/UX craft, and solid engineering fundamentals — shipping fast,
                clean, and with intention.
              </p>
              <div className="mt-5">
                <ButtonLink href="#portfolio" variant="ghost">
                  Explore portfolio space
                </ButtonLink>
              </div>
            </div>
          </div>
        </Section>

        <Section id="portfolio" eyebrow="Portfolio" title="A space for future work.">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white">Selected work</div>
              <p className="mt-3 text-sm leading-7 text-white/70">
                This section is intentionally ready for your future projects.
                When you’re ready, we can add case studies, screenshots, and live
                links with a clean “enterprise spec” layout.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="#" variant="ghost">
                  Add project (placeholder)
                </ButtonLink>
                <ButtonLink href="#" variant="ghost">
                  Add case study (placeholder)
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white">Social</div>
              <div className="mt-4 grid gap-3 text-sm text-white/75">
                <a
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition hover:bg-black/35"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="font-medium text-white/90">GitHub</div>
                  <div className="text-xs text-white/55">{profile.links.github}</div>
                </a>
                <a
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition hover:bg-black/35"
                  href={profile.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="font-medium text-white/90">Instagram</div>
                  <div className="text-xs text-white/55">{profile.links.instagram}</div>
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something with taste.">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white">Quick links</div>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${profile.links.email}`}>Email</ButtonLink>
                <ButtonLink variant="ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </ButtonLink>
                <ButtonLink variant="ghost" href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </ButtonLink>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Prefer phone? {profile.links.phone}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-white/5 to-cyan-300/10 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white">What I bring</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• UI/UX sensitivity with delivery focus</li>
                <li>• Clean communication & stakeholder readiness</li>
                <li>• Strong fundamentals with a modern stack</li>
              </ul>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
