export function PlaceholderImage({
  label,
  aspect = 'aspect-[4/3]',
  className = ''
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex ${aspect} w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100 p-6 text-center ${className}`}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="mx-auto h-8 w-8 text-slate-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 7.5a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-9zM9.75 9a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
          />
        </svg>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      </div>
    </div>
  );
}
