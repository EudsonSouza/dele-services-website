import React from "react";
import { ServiceCard } from "@/components/ui";
import { SERVICES } from "@/utils/constants";

export function Services() {
  return (
    <section id="services" className="bg-[var(--color-bg-light)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Our Cleaning Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-light)]">
            From regular maintenance to deep cleaning and specialized services,
            we have the perfect solution for your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Commercial Services CTA */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] p-8 text-center text-white">
          <h3 className="mb-2 text-2xl font-bold">
            Looking for Commercial Cleaning?
          </h3>
          <p className="mb-6 text-white/90">
            We offer custom plans for offices, restaurants, schools, salons, and
            more. After-hours service available.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-[var(--color-primary)] transition-transform hover:scale-105"
          >
            Request Commercial Quote
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
