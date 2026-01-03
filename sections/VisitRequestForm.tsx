"use client";

import React, { useState } from "react";
import { submitVisitRequest } from "@/lib/web3forms";
import type { QuoteRequest } from "@/types";

export function VisitRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string>("");

  const [formData, setFormData] = useState<Partial<QuoteRequest>>({
    fullName: "",
    email: "",
    phone: "",
    typeOfCleaning: "regular",
    address: "",
    preferredDate: "",
    additionalNotes: "",
    acceptsPolicy: false,
    sourcePage: "home_contact_section",
  });

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.address?.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.acceptsPolicy) {
      newErrors.acceptsPolicy = "You must accept the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitVisitRequest(formData as QuoteRequest);

      if (result.success) {
        // Redirect to thank you page
        window.location.href = "/thank-you";
      } else {
        setServerError(
          result.message || "Failed to submit form. Please try again."
        );
      }
    } catch (error) {
      setServerError(
        "An unexpected error occurred. Please try again or contact us directly."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[var(--color-bg-light)] to-white py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Schedule Your Free Visit
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-light)]">
            Fill out the form below and we&apos;ll contact you within 24 hours
            to schedule a free property visit and provide a personalized quote.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-xl"
        >
          {/* Server Error Message */}
          {serverError && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-800">
              {serverError}
            </div>
          )}

          {/* Grid Layout for Form Fields */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                }`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                }`}
                placeholder="(416) 123-4567"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Type of Cleaning */}
            <div>
              <label
                htmlFor="typeOfCleaning"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Type of Cleaning <span className="text-red-500">*</span>
              </label>
              <select
                id="typeOfCleaning"
                name="typeOfCleaning"
                value={formData.typeOfCleaning}
                onChange={handleChange}
                className="w-full cursor-pointer rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <option value="regular">Regular Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="move_in">Move In Cleaning</option>
                <option value="move_out">Move Out Cleaning</option>
                <option value="after_construction">After Construction</option>
                <option value="commercial">Commercial Cleaning</option>
              </select>
            </div>

            {/* Address - Full Width */}
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Property Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.address
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                }`}
                placeholder="123 Main St, Toronto, ON M5V 1A1"
              />
              {errors.address && (
                <p className="mt-1 text-xs text-red-600">{errors.address}</p>
              )}
            </div>

            {/* Preferred Date */}
            <div className="md:col-span-2">
              <label
                htmlFor="preferredDate"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Preferred Visit Date (Optional)
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full cursor-pointer rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>

            {/* Additional Notes - Full Width */}
            <div className="md:col-span-2">
              <label
                htmlFor="additionalNotes"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Additional Notes (Optional)
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            {/* Privacy Policy Checkbox - Full Width */}
            <div className="md:col-span-2">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="acceptsPolicy"
                  checked={formData.acceptsPolicy}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 cursor-pointer rounded border-gray-300 text-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <span className="text-sm text-[var(--color-text-light)]">
                  I agree to the privacy policy and consent to being contacted
                  about my visit request. <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.acceptsPolicy && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.acceptsPolicy}
                </p>
              )}
            </div>
          </div>

          {/* Honeypot field (hidden from users, catches bots) */}
          <input
            type="text"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer rounded-lg bg-[var(--color-primary)] px-8 py-4 font-semibold text-white transition-all hover:bg-[var(--color-primary)]/90 focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Schedule Free Visit"
              )}
            </button>
          </div>

          {/* Contact Info Footer */}
          <p className="mt-6 text-center text-sm text-[var(--color-text-light)]">
            Or call us directly at{" "}
            <a
              href="tel:+14161234567"
              className="font-medium text-[var(--color-primary)] hover:underline"
            >
              (416) 123-4567
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
