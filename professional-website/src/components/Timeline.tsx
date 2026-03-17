import type { Experience } from "@/lib/profile";

export function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative grid gap-6 border-l border-white/10 pl-6">
      {items.map((item, idx) => (
        <li key={`${item.company}-${item.title}-${idx}`} className="relative">
          <div className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" />

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <div className="text-base font-semibold text-white">
                {item.title}
              </div>
              <div className="text-xs font-medium text-white/55">
                {item.start} — {item.end}
              </div>
            </div>

            <div className="mt-1 text-sm text-white/75">
              <span className="font-medium text-white/85">{item.company}</span>
              {item.location ? (
                <span className="text-white/45"> · {item.location}</span>
              ) : null}
            </div>

            {item.highlights?.length ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

