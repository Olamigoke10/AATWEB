import React from "react";
import heroImg from "../assets/imgs/hero.jpg";
import Hero1 from "./minicomponents/Hero1";
import Hero2 from "./minicomponents/Hero2";
import { CloudOrbit } from "./ui/cloud-orbit";
import { Baby, Clock, Shield, Award, Star } from "lucide-react";
import CloudOrbitDemo from "./minicomponents/CloudOrbitDemo";
import { HyperspaceBackground } from "./ui/hyperspace-background";

const Hero = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-surface to-primary/5 lg:grid lg:min-h-screen lg:place-content-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        </div>

        <div className="mx-auto max-w-screen-xl px-6 py-20 sm:px-8 md:grid md:grid-cols-2 md:items-center md:gap-16">
          {/* --- Left text content --- */}
          <div className="max-w-xl space-y-6 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-surface/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-chart-2 font-medium mb-4 border border-border-light/30">
              <Shield className="h-4 w-4" />
              Trusted Accounting Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-base tracking-tight">
              AAT
              <span className="block text-chart-2 mt-2 drop-shadow-lg bg-gradient-to-r from-chart-2 to-chart-1 bg-clip-text text-transparent">
                ACCOUNTING
              </span>
            </h1>

            <p className="text-lg text-text-muted/90 leading-relaxed mask-b-from-25%">
              To empower businesses and individuals with proactive, tax-centric
              financial services delivering maximum savings and compliance
              confidence through precision, planning, and expert insight.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#"
                className="inline-flex items-center rounded-xl bg-chart-2 px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="#"
                className="inline-flex items-center rounded-xl border border-border-light dark:border-border-dark 
                         px-6 py-3 font-semibold text-text-base transition-all hover:bg-surface/80 hover:shadow-md"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-8 text-sm text-text-muted border-t border-border-light/30 mt-6">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-chart-2/10 rounded-full">
                  <Clock className="h-4 w-4 text-chart-2" />
                </div>
                <span>Fast & Efficient Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-chart-2/10 rounded-full">
                  <Baby className="h-4 w-4 text-chart-2" />
                </div>
                <span>Easy to Work With</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-chart-2/10 rounded-full">
                  <Award className="h-4 w-4 text-chart-2" />
                </div>
                <span>Certified Experts</span>
              </div>
            </div>
          </div>

          {/* --- Right Orbit --- */}
          <div className="mt-12 md:mt-0 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Image container with decorative border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src={heroImg} 
                  alt="Professional accounting services" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                  <div className="bg-chart-2/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-chart-2 fill-current" />
                  </div>
                  <span className="text-sm font-semibold text-text-base drop-shadow-lg bg-gradient-to-r from-chart-2 to-chart-1  bg-clip-text text-transparent">5.0 Rating</span>
                </div>
              </div>
              
              {/* Cloud Orbit implementation */}
              {/* <div className="absolute -bottom-6 -left-6 z-10 w-48 h-48">
                <CloudOrbitDemo />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Hero1 />
      <Hero2 />
    </>
  );
};

export default Hero;