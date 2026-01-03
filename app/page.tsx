"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Benefits } from "@/sections/Benefits";
import { Services } from "@/sections/Services";
// import { Pricing } from "@/sections/Pricing"; // REMOVED - Visit-based quoting model
import { Process } from "@/sections/Process";
import { FAQ } from "@/sections/FAQ";
import { VisitRequestForm } from "@/sections/VisitRequestForm";

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
        <VisitRequestForm />
      </main>
      <Footer />
    </>
  );
}
