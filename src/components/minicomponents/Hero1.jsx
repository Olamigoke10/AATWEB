// src/components/Hero1.jsx
import React from "react";
import {
  Book,
  Brain,
  Contact2Icon,
  FormInput,
  UserIcon,
  MoveRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero1 = () => {
  const pillars = [
    { name: "Tax Optimization & Planning", icon: <Brain /> },
    { name: "Tax Compliance & Filing", icon: <FormInput /> },
    { name: "Integrated Accounting Support", icon: <Contact2Icon /> },
    { name: "Financial Advisory with Tax Lens", icon: <Book /> },
    { name: "Specialized Tax Services", icon: <UserIcon /> },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 bg-background text-foreground">
      <div className="max-w-6xl w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Core Pillars</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tax and accounting solutions designed to maximize your
            savings and ensure compliance
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                {React.cloneElement(pillar.icon, { size: 24 })}
              </div>
              <h3 className="font-semibold text-lg mb-2">{pillar.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Professional services tailored to your specific needs and
                requirements.
              </p>
              <a
                href="#"
                className="mt-auto text-primary hover:text-primary/80 text-sm font-medium flex items-center justify-center gap-1"
              >
                Learn more
                <MoveRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button size="lg">Explore All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
