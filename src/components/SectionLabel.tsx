export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div data-reveal className="flex flex-col gap-3">
      <p className="font-mono text-sm text-accent">{index}</p>
      <h2 className="text-[44px] font-bold tracking-tight">{title}</h2>
    </div>
  );
}
