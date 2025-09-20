import React, { useState, useEffect } from "react";
import {
  Book,
  Brain,
  Contact2Icon,
  FormInput,
  UserIcon,
  MoveRight,
  Sparkles,
  Target,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero1 = () => {
  const [activePillar, setActivePillar] = useState(0);
  
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

  // Auto-rotate through pillars for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [pillars.length]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 bg-background text-foreground my-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-chart-2/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-chart-1/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-chart-2 animate-pulse" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-chart-2 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Our <span className="text-chart-2">Core Pillars</span>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-chart-2 rounded-full"></div>
            <div className="absolute -bottom-2 left-28 w-12 h-1 bg-chart-1 rounded-full"></div>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            Comprehensive tax and accounting solutions designed to maximize your
            savings and ensure compliance
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Animated connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-chart-2/20 to-transparent -translate-y-1/2"></div>
          
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center group border border-border/50 hover:border-chart-2/50 relative overflow-hidden"
              onMouseEnter={() => setActivePillar(index)}
              style={{
                transform: activePillar === index ? 'translateY(-8px)' : '',
                boxShadow: activePillar === index ? '0 25px 50px -12px rgba(16, 185, 129, 0.25)' : '',
              }}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-chart-1 to-chart-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated circle behind icon */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-chart-2/5 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mb-6 text-chart-2 group-hover:bg-chart-2/20 group-hover:scale-110 transition-all duration-300 relative">
                  {React.cloneElement(pillar.icon, { size: 28 })}
                  
                  {/* Floating animation for active element */}
                  <div 
                    className={`absolute -inset-2 rounded-full border-2 border-chart-2/30 ${activePillar === index ? 'animate-ping' : 'hidden'}`}
                  ></div>
                </div>
                
                <h3 className="font-semibold text-xl mb-4 text-chart-2 relative">
                  {pillar.name}
                  <Target className="h-4 w-4 text-chart-2 absolute -right-6 -top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed ">
                  {pillar.description}
                </p>
                
                <a
                  href="#"
                  className="mt-auto text-chart-2 hover:text-chart-2/80 text-sm font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300 relative"
                >
                  Learn more
                  <MoveRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-chart-2 to-chart-1 hover:from-chart-2/90 hover:to-chart-1/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Trusted by 500+ businesses nationwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero1;