const checklistItems = [
  'Wide photos of the room from each corner',
  'Close-ups of damage, edges, transitions, fixtures, cabinets, or surfaces involved',
  'Queens neighborhood, rough room dimensions, and whether materials are already selected',
  'A short note on whether plumbing, electrical, layout, or only finish work is changing',
] as const;

export default function EstimatePrepChecklist() {
  return (
    <section className="section-rule section-space">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-reveal="fade-up">
          <p className="eyebrow">Estimate prep</p>
          <h2 className="section-title mt-4">What to send before LOKEIL prices the room.</h2>
          <p className="lead mt-6">
            A clearer first message keeps the estimate focused on the actual room, not a generic
            renovation guess. These details help separate finish work from larger layout changes.
          </p>
        </div>

        <div className="surface p-6 sm:p-8" data-reveal="scale-in" data-delay="1">
          <div className="grid gap-5">
            {checklistItems.map((item, index) => (
              <div
                key={item}
                className="grid gap-3 border-b border-white/8 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[auto_1fr]"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/84">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-lg leading-8 text-olive-100/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
