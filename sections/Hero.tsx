"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    "/professional_cleaning_1.jpg",
    "/professional_cleaning_2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-bg-light)] pt-24"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-6 inline-flex self-start rounded-full bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
              Professional Cleaning Services
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              A Cleaner Home,{" "}
              <br/>
              <span className="text-[var(--color-primary)]">
                A Lighter Day
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-lg text-[var(--color-text-light)] sm:text-xl">
              Trusted and detail-oriented cleaning services tailored for your
              needs. Serving Toronto and the GTA with care, quality, and
              professionalism.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="accent" size="lg" onClick={scrollToContact}>
                Get Your Free Quote
              </Button>
              <Button variant="secondary" size="lg" onClick={scrollToServices}>
                See Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[var(--color-accent)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-text)]">
                  5-Star Service
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[var(--color-accent)]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-text)]">
                  Insured & Reliable
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[var(--color-accent)]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-text)]">
                  Flexible Scheduling
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]">
              {/* Hero Images with Crossfade */}
              {heroImages.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt={`Professional cleaning service ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    currentImageIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ))}

              {/* Overlay gradient for better text readability on images */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Image navigation dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
                      currentImageIndex === index
                        ? "w-8 bg-white"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-[var(--color-primary)]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
