import React from "react";
import { FAQAccordion } from "@/components/ui";
import { FAQ_ITEMS } from "@/utils/constants";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-light)]">
            Find answers to common questions about our cleaning services,
            pricing, and booking process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <FAQAccordion items={FAQ_ITEMS} />

        {/* Still Have Questions CTA */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-[var(--color-text)]">
            Still have questions?
          </h3>
          <p className="mb-6 text-[var(--color-text-light)]">
            We're here to help! Contact us directly and we'll get back to you
            within 24 hours.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@deleservices.ca"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[#2f4960]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-[var(--color-primary)] bg-transparent px-6 py-3 font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-white"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
