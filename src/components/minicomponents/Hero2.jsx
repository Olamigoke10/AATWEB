// src/components/Hero2.jsx
import React from "react";
import { MoveRight, Users, Award, Calendar, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAbout from "/assets/imgs/heroAbout.jpg"; // Adjust path if needed

const Hero2 = () => {
  const stats = [
    { icon: <Calendar size={24} />, value: "10+", label: "Years Experience" },
    { icon: <Users size={24} />, value: "500+", label: "Clients Served" },
    { icon: <Target size={24} />, value: "98%", label: "Client Satisfaction" },
    { icon: <Award size={24} />, value: "25+", label: "Industry Awards" },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 bg-background text-foreground py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div
          className="w-full h-[600px] md:h-[800px] bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl relative"
          style={{
            backgroundImage: `url(${heroAbout})`,
            backgroundPosition: "center 30%",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25 dark:from-black/65 dark:via-black/40 dark:to-black/20" />

          <div className="relative h-full flex items-center">
            <div className="flex flex-col space-y-8 px-8 md:px-16 text-white max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-chart-3/20 text-chart-3 px-4 py-2 rounded-full w-fit mb-4">
                <Award size={16} />
                <span className="text-sm font-medium">Trusted Since 2013</span>
              </div>

              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                The Story Behind <br />
                <span className="bg-gradient-to-r from-chart-3 to-chart-2 bg-clip-text text-transparent">
                  AAT Accounting
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
                For over a decade, we've been helping businesses navigate
                complex financial landscapes with precision and expertise.
                Our journey began with a simple mission: to provide
                exceptional accounting services that drive growth and success.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-chart-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-white/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex items-center gap-3 group bg-chart-3 text-white hover:bg-chart-3/90 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="font-semibold">About our firm</span>
                  <MoveRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-chart-2 hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300"
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional content section below the hero image */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-chart-3">AAT Accounting</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our commitment to excellence and client success sets us apart. 
              We combine technical expertise with personalized service to deliver 
              results that matter to your business.
            </p>
            <ul className="space-y-3">
              {[
                "Personalized financial strategies",
                "Cutting-edge tax technology",
                "Proactive compliance management",
                "Dedicated account managers"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-chart-3">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a free consultation with our experts and discover how 
              we can help your business thrive.
            </p>
            <Button className="w-full bg-chart-3 hover:bg-chart-3/90 py-6 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;