import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

const stats = [
  { value: "8", label: "Years shipping backends" },
  { value: "7", label: "Companies" },
  { value: "20", label: "Public GitHub repos" },
  { value: "2018", label: "First backend job" },
] as const;

export function Hero() {
  return (
    <section className="hairline border-b border-foreground/15">
      <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
        <div className="flex flex-col">
          <div className="flex flex-1 flex-col justify-end px-5 py-12 sm:px-10 lg:py-16">
            <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
              Portfolio / 2018—2026
            </p>
            <h1 className="mt-6 font-heading text-[16vw] leading-[0.8] font-medium tracking-tight sm:text-7xl lg:text-[5.5rem]">
              Mohamed
              <br />
              Elbadry
            </h1>
            <p className="mt-6 max-w-md font-heading text-2xl italic text-primary sm:text-3xl">
              {site.role}
            </p>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground">
              {site.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>
                Write to me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 px-5"
                )}
              >
                LinkedIn
              </a>
              <a
                href={withBasePath(site.cvFile)}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 px-5 sm:hidden"
                )}
              >
                Download CV
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-2 border-t border-foreground/15">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-foreground/15 px-5 py-5 odd:border-r nth-[-n+2]:border-b"
              >
                <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-heading text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative min-h-[360px] overflow-hidden border-t border-foreground/15 lg:min-h-[640px] lg:border-t-0 lg:border-l">
          <Image
            src={site.portrait}
            alt={`${site.name} standing on a beach`}
            fill
            priority
            className="object-cover object-[center_18%] grayscale"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/55 to-transparent p-5">
            <p className="font-mono text-[11px] tracking-[0.16em] text-white uppercase">
              {site.location}
            </p>
            <p className="font-mono text-[11px] tracking-[0.16em] text-white uppercase">
              Zed&apos;s · Current
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
