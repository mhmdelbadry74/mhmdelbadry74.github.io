import { MapPin, ArrowDownRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

const payload = `{
  "name": "${site.name}",
  "role": "${site.role}",
  "stack": ["PHP", "Laravel", "SQL"],
  "location": "Cairo, Egypt",
  "available": true
}`;

export function Hero() {
  return (
    <section className="relative overflow-hidden ledger-grid">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.11_75_/_0.14),transparent_60%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <Badge
            variant="outline"
            className="border-primary/30 bg-copper-soft px-3 py-1 text-primary"
          >
            Cairo · PHP · Laravel · REST
          </Badge>
          <h1 className="mt-6 font-heading text-5xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 font-heading text-2xl italic text-primary sm:text-3xl">
            {site.role}
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {site.summary}
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {site.location}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>
              Let&apos;s talk
              <ArrowDownRight />
            </a>
            <a
              href={withBasePath(site.cvFile)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-5"
              )}
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-primary/8 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/90 shadow-[0_0_0_1px_oklch(0.78_0.11_75_/_0.08)]">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <p className="font-mono text-[11px] text-muted-foreground">
                GET /engineers/mohamed-elbadry
              </p>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 text-primary/90 sm:text-[13px]">
              <code>{payload}</code>
            </pre>
            <div className="grid grid-cols-3 border-t border-border">
              {[
                { value: "8 yrs", label: "Building backends" },
                { value: "6", label: "Companies" },
                { value: "2018", label: "First ship" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-border px-3 py-4 text-center not-last:border-r"
                >
                  <p className="font-heading text-xl text-foreground">{stat.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
