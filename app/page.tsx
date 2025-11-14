"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Benefits } from "@/sections/Benefits";
import { Services } from "@/sections/Services";
import { Pricing } from "@/sections/Pricing";
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
        <Pricing />
        <Process />
        <FAQ />
        {/* Contact/Quote Form section will be added in Phase 4 */}
        <div id="contact" className="bg-[var(--color-bg-light)] py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)]">
              Contact Form Coming Soon
            </h2>
            <p className="text-lg text-[var(--color-text-light)]">
              Quote request form will be implemented in Phase 4
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
