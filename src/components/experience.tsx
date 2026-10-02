import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-foreground/15">
      <div className="px-5 py-16 sm:px-10 lg:py-20">
        <SectionHeading
          index="02 / Experience"
          title={"Eight years of backends — now at Zed's."}
          description="Current work at Zed's, team lead at PROMXA, then REST APIs and SQL across AAIT, Tqnia, and earlier agency teams."
        />

        <ol className="mt-12">
          {experience.map((job, index) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-4 border-t border-foreground/15 py-8 lg:grid-cols-[160px_220px_1fr] lg:gap-8"
            >
              <p className="font-mono text-xs tracking-[0.14em] text-primary uppercase">
                {String(index + 1).padStart(2, "0")}
                <span className="mt-2 block text-muted-foreground normal-case tracking-normal">
                  {job.period}
                </span>
              </p>
              <div>
                <h3 className="font-heading text-2xl leading-tight">{job.company}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{job.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                {job.current ? (
                  <p className="mt-3 inline-block bg-primary px-2 py-0.5 font-mono text-[10px] tracking-[0.16em] text-primary-foreground uppercase">
                    Current
                  </p>
                ) : null}
              </div>
              <ul className="space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-6 text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
