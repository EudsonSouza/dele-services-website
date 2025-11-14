import React from "react";
import type { PricingTier } from "@/types";
import { Button } from "./Button";

export interface PricingCardProps {
  pricing: PricingTier;
  onCtaClick?: () => void;
}

export function PricingCard({ pricing, onCtaClick }: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl border-2 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${
        pricing.highlighted
          ? "border-[var(--color-accent)] scale-105"
          : "border-gray-200 hover:border-[var(--color-primary)]"
      }`}
    >
      {/* Highlighted Badge */}
      {pricing.highlighted && (
        <div className="mb-4 inline-flex self-start rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </div>
      )}

      {/* Service Name */}
      <h3 className="mb-2 text-2xl font-bold text-[var(--color-text)]">
        {pricing.name}
      </h3>

      {/* Price */}
      <div className="mb-4">
        <span className="text-4xl font-bold text-[var(--color-primary)]">
          {pricing.price}
        </span>
        {pricing.frequency && (
          <span className="ml-2 text-sm text-[var(--color-text-light)]">
            {pricing.frequency}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="mb-6 border-t border-gray-200"></div>

      {/* Features List */}
      <ul className="mb-6 flex-grow space-y-3">
        {pricing.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-[var(--color-text-light)]">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        variant={pricing.highlighted ? "accent" : "primary"}
        size="md"
        fullWidth
        onClick={onCtaClick}
      >
        {pricing.ctaText || "Get Started"}
      </Button>
    </div>
  );
}
