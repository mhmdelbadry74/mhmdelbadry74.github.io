import { interests, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="flex flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="text-sm">
          © {new Date().getFullYear()} {site.name}. Cairo.
        </p>
        <p className="font-mono text-[11px] tracking-[0.16em] uppercase opacity-70">
          {interests.join(" · ")}
        </p>
      </div>
    </footer>
  );
}
