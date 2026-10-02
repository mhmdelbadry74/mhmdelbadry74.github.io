import { interests, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Senior backend developer, Cairo.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {interests.join(" · ")}
        </p>
      </div>
    </footer>
  );
}
