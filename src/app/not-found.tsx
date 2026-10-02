import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="font-mono text-xs tracking-[0.22em] text-primary uppercase">404</p>
      <h1 className="mt-4 font-heading text-4xl">This route does not exist.</h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        The portfolio is a single page. Head back to the start.
      </p>
      <Link href="/" className={cn(buttonVariants(), "mt-8")}>
        Back to Mohamed Elbadry
      </Link>
    </div>
  );
}
