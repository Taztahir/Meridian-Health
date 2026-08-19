export default function FAQPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-slate-50">
      <div className="text-center space-y-4 max-w-md mx-auto px-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary font-bold text-xs uppercase tracking-wider">
          FAQ
        </span>
        <h1 className="text-5xl font-extrabold text-text-primary">Coming Soon</h1>
        <p className="text-text-secondary font-light leading-relaxed">
          We're compiling answers to your most frequently asked questions. This page will be ready soon with everything you need to know.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-colors shadow-md"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
