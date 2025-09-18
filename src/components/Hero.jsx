import React from "react";
import heroImg from "../assets/imgs/hero.jpg";
import Hero1 from "./minicomponents/Hero1";
import Hero2 from "./minicomponents/Hero2";
import { CloudOrbit } from "./ui/cloud-orbit";
import { Baby, Clock } from "lucide-react";
import CloudOrbitDemo from "./minicomponents/CloudOrbitDemo";

const Hero = () => {
  return (
    <>
   <section className="relative bg-gradient-to-br from-surface to-primary/5 lg:grid lg:h-screen lg:place-content-center">
  <div className="mx-auto max-w-screen-xl px-6 py-20 sm:px-8 md:grid md:grid-cols-2 md:items-center md:gap-12">
    {/* --- Left text content --- */}
    <div className="max-w-xl space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-text-base tracking-tight leading-tight">
        Understand user flow and
        <span className="text-primary block">increase conversions</span>
      </h1>

      <p className="text-lg text-text-muted/90">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. 
        Natus, provident accusamus impedit minima harum corporis iusto.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#"
          className="inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-105 hover:bg-primary/90"
        >
          Get Started
        </a>

        <a
          href="#"
          className="inline-block rounded-xl border border-border-light dark:border-border-dark 
                     px-6 py-3 font-semibold text-text-base transition hover:bg-surface/80 hover:text-primary"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* --- Right Orbit --- */}
    <div className="mt-12 md:mt-0 flex justify-center">
      <CloudOrbitDemo />
    </div>
  </div>
</section>


    <Hero1 />
    <Hero2 />
    </>
  );
};

export default Hero;
