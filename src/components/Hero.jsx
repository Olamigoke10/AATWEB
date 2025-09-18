import React from "react";
import heroImg from "../assets/imgs/hero.jpg";
import Hero1 from "./minicomponents/Hero1";
import Hero2 from "./minicomponents/Hero2";
import { CloudOrbit } from "./ui/cloud-orbit";
import { Baby, Clock } from "lucide-react";
import CloudOrbitDemo from "./minicomponents/CloudOrbitDemo";
import { HyperspaceBackground } from "./ui/hyperspace-background";

const Hero = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-surface to-primary/5 lg:grid lg:min-h-screen lg:place-content-center">
        <div className="mx-auto max-w-screen-xl px-6 py-20 sm:px-8 md:grid md:grid-cols-2 md:items-center md:gap-12">
          {/* --- Left text content --- */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-base tracking-tight">
              AAT
              <span className="block text-chart-2 mt-2 drop-shadow-lg hover:scale-105 transition-transform duration-300">
                ACCOUNTING
              </span>
            </h1>

            <p className="text-lg text-text-muted/90">
              To empower businesses and individuals with proactive, tax-centric
              financial services delivering maximum savings and compliance
              confidence through precision, planning, and expert insight.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#"
                className="inline-block rounded-xl bg-chart-2 px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-105 hover:bg-primary/90"
              >
                Get Started
              </a>

              <a
                href="#"
                className="inline-block rounded-xl border border-border-light dark:border-border-dark 
                         px-6 py-3 font-semibold text-text-base text-chart-2 transition hover:bg-surface/80 hover:text-chart-2"
              >
                Learn More
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-chart-2" />
                <span>Fast & Efficient Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Baby className="h-4 w-4 text-chart-2" />
                <span>Easy to Work With</span>
              </div>
            </div>
          </div>

          {/* --- Right Orbit --- */}
          <div className="mt-12 md:mt-0 flex justify-center">
            <CloudOrbitDemo />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>
      </section>

      <Hero1 />
      <Hero2 />
    </>
  );
};

export default Hero;
