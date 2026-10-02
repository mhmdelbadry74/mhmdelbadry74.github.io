import { SectionHeading } from "@/components/section-heading";
import { languages, skillGroups, softSkills } from "@/lib/site";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-foreground/15">
      <div className="px-5 py-16 sm:px-10 lg:py-20">
        <SectionHeading
          index="04 / Skills"
          title="The stack I actually use."
          description="PHP, Laravel, Node.js, and Symfony at the core, with enough frontend, SQL, and process to ship a whole product surface."
        />
        <dl className="mt-12 columns-1 gap-x-12 sm:columns-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="mb-8 break-inside-avoid border-t border-foreground/15 pt-4"
            >
              <dt className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
                {group.title}
              </dt>
              <dd className="mt-3 text-sm leading-7">{group.items.join("  ·  ")}</dd>
            </div>
          ))}
          <div className="mb-8 break-inside-avoid border-t border-foreground/15 pt-4">
            <dt className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
              Languages
            </dt>
            <dd className="mt-3 text-sm leading-7">
              {languages.map((item) => `${item.name} (${item.level})`).join("  ·  ")}
            </dd>
          </div>
          <div className="mb-8 break-inside-avoid border-t border-foreground/15 pt-4">
            <dt className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
              How I work
            </dt>
            <dd className="mt-3 text-sm leading-7">{softSkills.join("  ·  ")}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
