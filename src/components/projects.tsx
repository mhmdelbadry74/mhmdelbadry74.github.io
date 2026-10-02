import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-foreground/15">
      <div className="px-5 py-16 sm:px-10 lg:py-20">
        <SectionHeading
          index="03 / Work"
          title="Selected public GitHub."
          description="A slice of what is already public on github.com/mhmdelbadry74 — PHP, Laravel, and ops."
        />
        <ul className="mt-12 grid sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.name}
              className="border-foreground/15 p-5 max-sm:border-b sm:nth-[odd]:border-r sm:border-t last:max-sm:border-b-0"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">
                    {project.stack}
                    {project.stars > 0 ? ` · ${project.stars}★` : ""}
                  </p>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-2xl group-hover:text-primary">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {project.blurb}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
