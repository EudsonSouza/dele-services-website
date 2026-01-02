"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Benefits } from "@/sections/Benefits";
import { Services } from "@/sections/Services";
// import { Pricing } from "@/sections/Pricing"; // REMOVED - Visit-based quoting model
import { Process } from "@/sections/Process";
import { FAQ } from "@/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        {/* Pricing section removed - Visit-based quoting model */}
        <Process />
        <FAQ />
        {/* Visit Request Form - Coming soon */}
        <div id="contact" className="bg-[var(--color-bg-light)] py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)]">
              Visit Request Form Coming Soon
            </h2>
            <p className="text-lg text-[var(--color-text-light)]">
              Contact form will be implemented to schedule your free visit
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
