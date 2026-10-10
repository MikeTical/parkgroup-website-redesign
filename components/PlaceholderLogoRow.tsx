export function PlaceholderLogoRow({ label, count = 4 }: { label: string; count?: number }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="flex h-16 w-32 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-400"
          >
            Logo
          </div>
        ))}
      </div>
    </div>
  );
}
