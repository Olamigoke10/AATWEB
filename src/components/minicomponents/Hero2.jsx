// src/components/Hero2.jsx
import React from "react";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAbout from "/assets/imgs/heroAbout.jpg"; // Adjust path if needed

const Hero2 = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 bg-background text-foreground">
      <div className="max-w-6xl w-full mx-auto">
        <div
          className="w-full h-[500px] md:h-[600px] bg-cover bg-center rounded-2xl overflow-hidden shadow-lg relative"
          style={{
            backgroundImage: `url(${heroAbout})`,
            backgroundPosition: "center 30%",
          }}
        >
          {/* Overlay that adapts to theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 dark:from-black/60 dark:to-black/30" />

          <div className="relative h-full flex items-center">
            <div className="flex flex-col space-y-6 px-8 md:px-16 text-foreground max-w-2xl">
              <h1 className="font-bold text-4xl md:text-6xl leading-tight">
                The Story Behind <br />
                <span className="text-chart-3">AAT Accounting</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                For over a decade, we've been helping businesses navigate
                complex financial landscapes with precision and expertise.
                Our journey began with a simple mission: to provide
                exceptional accounting services that drive growth and success.
              </p>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="flex items-center gap-3 group bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span className="font-medium text-lg">About our firm</span>
                  <MoveRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
