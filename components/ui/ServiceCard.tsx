import React from "react";
import type { Service } from "@/types";

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[var(--color-primary)]">
      {/* Icon placeholder - can be replaced with actual icons */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Service Title */}
      <h3 className="mb-2 text-xl font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
        {service.title}
      </h3>

      {/* Service Description */}
      <p className="mb-4 flex-grow text-sm text-[var(--color-text-light)]">
        {service.description}
      </p>

      {/* Service Features */}
      {service.features && service.features.length > 0 && (
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-[var(--color-text-light)]"
            >
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-accent)]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
