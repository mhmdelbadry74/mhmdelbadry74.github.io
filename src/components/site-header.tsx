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
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-copper-soft font-heading text-sm font-semibold text-primary">
            ME
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-medium">{site.name}</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {site.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={withBasePath(site.cvFile)}
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            Download CV
          </a>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href={withBasePath(site.cvFile)}
              className={cn(buttonVariants(), "mt-2")}
            >
              Download CV
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
