import React from "react";
import { PricingCard } from "@/components/ui";
import { PRICING_TIERS, SUPPLIES_PRICING } from "@/utils/constants";

export function Pricing() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Transparent & Fair Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-light)]">
            No hidden fees, no surprises. Just honest pricing for quality
            service.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.id} pricing={tier} onCtaClick={scrollToContact} />
          ))}
        </div>

        {/* Supplies Policy */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border-2 border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <svg
                className="h-8 w-8 flex-shrink-0 text-[var(--color-accent)]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-[var(--color-text)]">
                Cleaning Supplies Policy
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* We Provide Option */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-[var(--color-primary)]">
                  D&apos;Ele Provides Supplies
                </h4>
                <ul className="space-y-2 text-sm text-[var(--color-text-light)]">
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>
                      Regular Cleaning: <strong>+${SUPPLIES_PRICING.regular}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>
                      Deep / Move Services:{" "}
                      <strong>+${SUPPLIES_PRICING.deep}+</strong>
                    </span>
                  </li>
                  <li className="mt-3 text-xs italic">
                    All professional-grade products included
                  </li>
                </ul>
              </div>

              {/* Client Provides Option */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-semibold text-[var(--color-primary)]">
                  You Provide Supplies
                </h4>
                <ul className="space-y-2 text-sm text-[var(--color-text-light)]">
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      <strong>No additional charge</strong>
                    </span>
                  </li>
                  <li className="mt-3 text-xs">Required supplies:</li>
                  <li className="text-xs text-[var(--color-text-light)]">
                    Clorox, Windex, Lysol, Vim, Paper towels, Swiffer, Vacuum,
                    Mop, Cleaning cloths
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Area Pricing */}
          <div className="mt-6 rounded-lg bg-[var(--color-bg-light)] p-6 text-center">
            <p className="text-sm text-[var(--color-text-light)]">
              <strong className="text-[var(--color-text)]">Service Area:</strong>{" "}
              Toronto (Free) | GTA (+$20)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
