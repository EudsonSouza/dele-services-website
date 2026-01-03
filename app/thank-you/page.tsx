import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - D'Ele Cleaning Services",
  description: "Thank you for requesting a visit. We'll contact you soon!",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[var(--color-bg-light)] to-white px-4">
      <div className="w-full max-w-2xl text-center">
        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-12 w-12 text-green-600"
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

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold text-[var(--color-text)] sm:text-5xl">
          Thank You!
        </h1>

        {/* Message */}
        <p className="mb-8 text-lg text-[var(--color-text-light)]">
          Your visit request has been received successfully. We&apos;ll contact
          you within <strong className="text-[var(--color-primary)]">24 hours</strong> to
          schedule your free property visit and discuss your cleaning needs.
        </p>

        {/* What Happens Next */}
        <div className="mb-10 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text)]">
            What Happens Next?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                1
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-[var(--color-text)]">
                  We&apos;ll Contact You
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  Our team will reach out within 24 hours to confirm your visit
                  details.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                2
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-[var(--color-text)]">
                  Free Property Visit
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  We&apos;ll visit your property to assess your specific needs and
                  conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-[var(--color-text)]">
                  Personalized Quote
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  You&apos;ll receive a detailed quote tailored to your property and
                  requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                4
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-[var(--color-text)]">
                  Enjoy Your Spotless Space
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  Once approved, we&apos;ll schedule your cleaning service at your
                  convenience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8 rounded-xl bg-[var(--color-primary)]/5 p-6">
          <p className="mb-2 text-sm font-medium text-[var(--color-text)]">
            Need immediate assistance?
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:deleservices.ca@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
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
              deleservices.ca@gmail.com
            </a>
            <span className="hidden text-[var(--color-text-light)] sm:inline">
              •
            </span>
            <a
              href="tel:+14161234567"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
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
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (416) 123-4567
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-8 py-3 font-semibold text-white transition-all hover:bg-[var(--color-primary)]/90"
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
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/#services"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-[var(--color-primary)] px-8 py-3 font-semibold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-white"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
