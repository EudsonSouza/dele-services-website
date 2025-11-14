import React from "react";

const steps = [
  {
    id: 1,
    title: "Request Your Quote",
    description:
      "Fill out our simple form with your cleaning needs. We'll respond within 24 hours with a personalized quote.",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Schedule Your Cleaning",
    description:
      "Choose a date and time that works best for you. We offer flexible scheduling including evenings and weekends.",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Enjoy Your Spotless Space",
    description:
      "Relax while our professional team transforms your space. We guarantee your satisfaction with every service.",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[var(--color-bg-light)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-light)]">
            Getting started is simple. Just three easy steps to a cleaner,
            fresher space.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="absolute left-1/2 top-24 hidden h-1 w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)] lg:block"></div>

          {/* Steps Grid */}
          <div className="grid gap-12 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Step Number Circle */}
                  <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-2xl font-bold text-white shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 text-[var(--color-accent)]">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-light)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--color-accent)] px-8 py-4 text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            Get Started Today
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
