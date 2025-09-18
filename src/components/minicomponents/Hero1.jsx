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
    { 
      name: "Tax Optimization & Planning", 
      icon: <Brain />,
      description: "Strategic tax planning to minimize liabilities and maximize your financial efficiency."
    },
    { 
      name: "Tax Compliance & Filing", 
      icon: <FormInput />,
      description: "Accurate and timely tax filing services to ensure full compliance with regulations."
    },
    { 
      name: "Integrated Accounting Support", 
      icon: <Contact2Icon />,
      description: "Comprehensive accounting services that integrate seamlessly with tax strategies."
    },
    { 
      name: "Financial Advisory with Tax Lens", 
      icon: <Book />,
      description: "Expert financial advice focused on tax implications and long-term planning."
    },
    { 
      name: "Specialized Tax Services", 
      icon: <UserIcon />,
      description: "Customized tax solutions for unique situations and specialized requirements."
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 bg-background text-foreground my-20">
      <div className="max-w-6xl w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-chart-2">Core Pillars</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tax and accounting solutions designed to maximize your
            savings and ensure compliance
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group border border-border/50 hover:border-chart-2/30"
            >
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mb-6 text-chart-2 group-hover:bg-chart-2/20 group-hover:scale-110 transition-all duration-300">
                {React.cloneElement(pillar.icon, { size: 28 })}
              </div>
              <h3 className="font-semibold text-xl mb-4 text-foreground">{pillar.name}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {pillar.description}
              </p>
              <a
                href="#"
                className="mt-auto text-chart-2 hover:text-chart-2/80 text-sm font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300"
              >
                Learn more
                <MoveRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-chart-2 hover:bg-chart-2/90 text-white px-8 py-6 text-lg">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero1;