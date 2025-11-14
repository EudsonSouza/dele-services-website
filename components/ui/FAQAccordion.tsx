"use client";

import React, { useState } from "react";
import type { FAQItem } from "@/types";

export interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:border-[var(--color-primary)]/50"
        >
          {/* Question Button */}
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full cursor-pointer items-center justify-between p-5 text-left transition-colors hover:bg-[var(--color-bg-light)]"
            aria-expanded={openIndex === index}
          >
            <span className="pr-4 text-lg font-semibold text-[var(--color-text)]">
              {item.question}
            </span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-[var(--color-primary)] transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Answer Panel */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="border-t border-gray-100 bg-[var(--color-bg-light)] p-5">
              <p className="text-[var(--color-text-light)]">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
