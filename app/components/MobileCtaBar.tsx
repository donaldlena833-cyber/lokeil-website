export default function MobileCtaBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-olive-500 bg-opacity-95 backdrop-blur-xs border-t border-olive-50 border-opacity-10 p-4 flex gap-3 z-40">
      <a
        href="tel:917-518-8753"
        className="flex-1 px-4 py-3 bg-accent text-olive-900 font-semibold rounded text-center hover:bg-accent-hover transition-colors text-sm"
      >
        Call Now
      </a>
      <a
        href="mailto:lokeil2024@gmail.com"
        className="flex-1 px-4 py-3 border border-accent text-accent font-semibold rounded text-center hover:bg-olive-600 transition-colors text-sm"
      >
        Email
      </a>
    </div>
  );
}
