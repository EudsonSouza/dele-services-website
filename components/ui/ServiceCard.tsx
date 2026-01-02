"use client";

import React, { useState } from "react";
import type { Service } from "@/types";

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetailedInclusions = service.detailedInclusions;

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
        <ul className="space-y-2 mb-4">
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

      {/* What's Included Button */}
      {hasDetailedInclusions && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-white cursor-pointer"
        >
          <span>What&apos;s Included</span>
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
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
      )}

      {/* Detailed Inclusions - Expandable */}
      {hasDetailedInclusions && isExpanded && (
        <div className="mt-4 space-y-4 border-t border-gray-200 pt-4 animate-fadeIn">
          {service.detailedInclusions?.allRooms && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-[var(--color-primary)]">
                All Rooms
              </h4>
              <ul className="space-y-1.5">
                {service.detailedInclusions.allRooms.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-[var(--color-text-light)]"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.detailedInclusions?.kitchen && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-[var(--color-primary)]">
                Kitchen
              </h4>
              <ul className="space-y-1.5">
                {service.detailedInclusions.kitchen.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-[var(--color-text-light)]"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.detailedInclusions?.bathroom && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-[var(--color-primary)]">
                Bathroom
              </h4>
              <ul className="space-y-1.5">
                {service.detailedInclusions.bathroom.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-[var(--color-text-light)]"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.detailedInclusions?.bedrooms && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-[var(--color-primary)]">
                Bedrooms
              </h4>
              <ul className="space-y-1.5">
                {service.detailedInclusions.bedrooms.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-[var(--color-text-light)]"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.detailedInclusions?.livingRoom && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-[var(--color-primary)]">
                Living Room / Common Areas
              </h4>
              <ul className="space-y-1.5">
                {service.detailedInclusions.livingRoom.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-[var(--color-text-light)]"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
