const placeholderQuotes = [
  { quote: '[Add a short customer testimonial here — 2-3 sentences.]', name: '[Customer Name]' },
  { quote: '[Add a short customer testimonial here — 2-3 sentences.]', name: '[Customer Name]' },
  { quote: '[Add a short customer testimonial here — 2-3 sentences.]', name: '[Customer Name]' }
];

export function Testimonials({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {placeholderQuotes.map((item, index) => (
          <div key={index} className="card border-dashed p-6">
            <p className="text-sm leading-7 text-slate-500 italic">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold text-slate-400">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
