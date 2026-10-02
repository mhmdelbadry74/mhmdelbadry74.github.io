"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-foreground/15 bg-background px-4 lg:hidden">
        <a href="#top" className="font-heading text-lg">
          {site.shortName}
        </a>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </header>

      {open ? (
        <div className="border-b border-foreground/15 bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-foreground/10 py-3 text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href={withBasePath(site.cvFile)}
              className={cn(buttonVariants(), "mt-4")}
            >
              Download CV
            </a>
          </nav>
        </div>
      ) : null}

      <aside className="sticky top-0 hidden h-svh w-56 shrink-0 flex-col border-r border-foreground/15 bg-[#efe8db] px-6 py-8 lg:flex">
        <a href="#top" className="block">
          <p className="font-heading text-2xl leading-none">{site.shortName}</p>
          <p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            Backend · Zed&apos;s
          </p>
        </a>
        <nav className="mt-12 flex flex-1 flex-col gap-1">
          {nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-baseline justify-between py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>{item.label}</span>
              <span className="font-mono text-[10px] text-primary/80">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </nav>
        <div className="space-y-3">
          <a
            href={withBasePath(site.cvFile)}
            className={cn(buttonVariants(), "w-full")}
          >
            Download CV
          </a>
          <a
            href={site.github}
            className="block font-mono text-[11px] text-muted-foreground hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            github.com/{site.githubHandle}
          </a>
        </div>
      </aside>
    </>
  );
}
