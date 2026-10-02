import { Mail, MessageCircle, Phone, FileDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4 0 4.75 2.63 4.75 6.05V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
    </svg>
  );
}

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "Call",
    value: site.phoneDisplay,
    href: site.phoneHref,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "mohamed elbadry",
    href: site.linkedin,
    icon: LinkedInIcon,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Contact"
          title="If you need a senior PHP backend — or someone who can lead one — write."
          description="I read email and WhatsApp. Cairo timezone. Happy to talk roles, architecture, or a specific API problem."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <a key={channel.label} href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Card className="h-full transition-colors hover:border-primary/40 hover:bg-accent/40">
                <CardContent className="flex items-center gap-4 pt-1">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-copper-soft text-primary">
                    <channel.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {channel.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium">{channel.value}</span>
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={withBasePath(site.cvFile)}
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
          >
            <FileDown />
            Download the full CV
          </a>
        </div>
      </div>
    </section>
  );
}
