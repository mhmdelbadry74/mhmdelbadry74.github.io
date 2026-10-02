import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { languages, skillGroups, softSkills } from "@/lib/site";

function Level({ score }: { score: number }) {
  return (
    <div className="flex gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={
            index < score
              ? "h-1.5 w-5 rounded-full bg-primary"
              : "h-1.5 w-5 rounded-full bg-muted"
          }
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Skills"
          title="The stack I actually use."
          description="PHP and Laravel at the core, with enough frontend, SQL, and process to ship a whole product surface."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader className="flex-row items-center justify-between gap-4">
                <CardTitle className="font-heading text-xl">{group.title}</CardTitle>
                <Level score={group.level} />
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline" className="border-border bg-background/40">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-xl">Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {languages.map((language) => (
                <div key={language.name} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">{language.name}</p>
                    <p className="text-xs text-muted-foreground">{language.level}</p>
                  </div>
                  <Level score={language.score} />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-xl">How I work</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {softSkills.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
