import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/lib/site";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          kicker="Education"
          title="Computer science, built in Mansoura."
        />
        <Card>
          <CardContent className="flex gap-5 pt-1">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-copper-soft text-primary">
              <GraduationCap className="size-6" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                {education.period}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-medium">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">{education.location}</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                {education.notes.map((note) => (
                  <div key={note.label} className="rounded-lg border border-border px-3 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {note.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{note.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
