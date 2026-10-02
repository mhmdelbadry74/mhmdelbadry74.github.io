import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/site";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-b border-foreground/15">
      <div className="grid gap-10 px-5 py-16 sm:px-10 lg:grid-cols-2 lg:items-end lg:py-20">
        <SectionHeading
          index="05 / Education"
          title="Computer science, built in Mansoura."
        />
        <div className="border-t border-foreground/15 pt-6">
          <p className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">
            {education.period}
          </p>
          <h3 className="mt-3 font-heading text-3xl">{education.degree}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {education.school}
            <br />
            {education.location}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-px bg-foreground/15">
            {education.notes.map((note) => (
              <div key={note.label} className="bg-background p-4">
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  {note.label}
                </dt>
                <dd className="mt-2 font-heading text-2xl">{note.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
