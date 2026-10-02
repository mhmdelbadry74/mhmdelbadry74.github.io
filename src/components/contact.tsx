import { Mail, MessageCircle, Phone, FileDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.79 8.21 11.37.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
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
    label: "GitHub",
    value: site.githubHandle,
    href: site.github,
    icon: GitHubIcon,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-primary text-primary-foreground">
      <div className="px-5 py-16 sm:px-10 lg:py-20">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase opacity-80">
          06 / Contact
        </p>
        <h2 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.05] sm:text-5xl">
          If you need a senior PHP backend — or someone who can lead one — write.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/80">
          Cairo timezone. Email, WhatsApp, or GitHub. Happy to talk roles, architecture, or a specific API problem.
        </p>

        <div className="mt-12 grid gap-px bg-primary-foreground/20 sm:grid-cols-2">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 bg-primary p-5 transition-colors hover:bg-primary-foreground/10"
            >
              <channel.icon className="size-5" />
              <span>
                <span className="block font-mono text-[10px] tracking-[0.16em] uppercase opacity-70">
                  {channel.label}
                </span>
                <span className="mt-1 block text-sm">{channel.value}</span>
              </span>
            </a>
          ))}
        </div>

        <a
          href={withBasePath(site.cvFile)}
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "mt-8 h-11 px-5"
          )}
        >
          <FileDown />
          Download the full CV
        </a>
      </div>
    </section>
  );
}
