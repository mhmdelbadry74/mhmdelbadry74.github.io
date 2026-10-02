import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-foreground/15">
      <div className="grid gap-10 px-5 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <SectionHeading
          index="01 / About"
          title="Backend work with a team attached to it."
          description="I care about APIs that stay stable, SQL that does not surprise anyone on a Monday, and the people who have to live with both."
        />
        <ol className="grid sm:grid-cols-2">
          {site.focus.map((item) => (
            <li
              key={item.title}
              className="border-foreground/15 p-5 max-sm:border-b sm:nth-[odd]:border-r sm:nth-[-n+2]:border-b last:border-b-0"
            >
              <p className="font-mono text-[11px] text-primary">{item.index}</p>
              <h3 className="mt-3 font-heading text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
