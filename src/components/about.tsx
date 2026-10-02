import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          kicker="Profile"
          title="Backend work with a team attached to it."
          description="I care about APIs that stay stable, SQL that does not surprise anyone on a Monday, and the people who have to live with both."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {site.focus.map((item) => (
            <Card key={item.title} className="bg-card/70">
              <CardContent className="pt-1">
                <p className="font-heading text-lg text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
