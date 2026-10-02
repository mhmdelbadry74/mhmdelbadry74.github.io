import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Experience"
          title="Eight years of PHP backends, from agency floors to senior delivery."
          description="Same craft across every role: REST APIs, third-party integrations, SQL, and shipping inside a sprint."
        />

        <ol className="mt-14 space-y-0">
          {experience.map((job, index) => (
            <li
              key={`${job.company}-${job.period}`}
              className="relative grid gap-4 border-l border-primary/25 py-8 pl-8 last:pb-0 sm:grid-cols-[220px_1fr] sm:gap-10"
            >
              <span
                className="absolute top-9 -left-[5px] size-2.5 rounded-full bg-primary ring-4 ring-background"
                aria-hidden
              />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                  {job.period}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{job.location}</p>
                {job.current ? (
                  <Badge className="mt-3 bg-primary text-primary-foreground">
                    Current
                  </Badge>
                ) : null}
              </div>
              <div>
                <h3 className="font-heading text-2xl font-medium tracking-tight">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {index === experience.length - 1 ? null : (
                  <div className="mt-8 h-px bg-border sm:hidden" />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
