export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-primary uppercase">
        {index}
      </p>
      <h2 className="mt-3 font-heading text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
