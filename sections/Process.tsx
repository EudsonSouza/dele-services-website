import React from "react";

const steps = [
  {
    id: 1,
    title: "Contact Us",
    description:
      "Reach out via phone, email, or our contact form. Tell us about your cleaning needs and preferred time for a visit.",
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
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Schedule Your Free Visit",
    description:
      "We'll visit your property to assess your space and provide a personalized quote based on your specific needs and conditions.",
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
      "Once you approve the quote, we'll schedule your cleaning and our professional team will deliver exceptional results.",
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
            Schedule Your Free Visit
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
