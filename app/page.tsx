export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h1 className="mb-4 text-5xl font-bold text-[var(--color-primary)]">
          D&apos;Ele Services
        </h1>
        <p className="mb-8 text-xl text-[var(--color-text-light)]">
          Professional Cleaning Services in Toronto & GTA
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-[var(--color-bg-light)] p-6">
            <h3 className="mb-2 text-lg font-semibold text-[var(--color-primary)]">
              Reliable
            </h3>
            <p className="text-sm text-[var(--color-text-light)]">
              Trusted by homeowners and businesses
            </p>
          </div>
          <div className="rounded-lg bg-[var(--color-accent)] p-6 text-white">
            <h3 className="mb-2 text-lg font-semibold">Affordable</h3>
            <p className="text-sm">Starting at $22/week</p>
          </div>
          <div className="rounded-lg bg-[var(--color-bg-light)] p-6">
            <h3 className="mb-2 text-lg font-semibold text-[var(--color-primary)]">
              Flexible
            </h3>
            <p className="text-sm text-[var(--color-text-light)]">
              Schedule that works for you
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-[var(--color-text-light)]">
          ✅ Phase 1 Complete: Project Setup & Foundation
        </p>
      </div>
    </main>
  );
}
