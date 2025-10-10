import { Timer, Users, Award, BookOpen } from "lucide-react";
import React from "react";

const About1 = () => {
  return (
    <section className="grid md:grid-cols-2 max-w-7xl mx-auto gap-8 bg-accent my-10 rounded-lg p-8 md:p-12">
      {/* Text Content */}
      <div className="flex flex-col justify-center px-4 space-y-6">
        <h2 className="font-extrabold text-3xl md:text-4xl text-chart-2">
          About AAT
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            AAT Accounting is the premier online resource for the Association of
            Accounting Technicians. It provides vital information on
            qualifications, training, and membership. For aspiring and current
            finance professionals, the site is an essential hub for career
            development, exams, and connecting with the global accounting
            community.
          </p>
          <p className="text-lg leading-relaxed">
           AAT-Accounting is your online resource for finance training, qualifications,
           and professional accounting support
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <div className="p-2 bg-chart-2 rounded-full">
                <Timer className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">Experienced Teachers</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <div className="p-2 bg-chart-1 rounded-full">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">Qualified Staff</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <div className="p-2 bg-chart-3 rounded-full">
                <Award className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">Certified Programs</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <div className="p-2 bg-chart-4 rounded-full">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">Modern Curriculum</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="group relative">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/assets/imgs/heroAbout.jpg"
            alt="About AAT organization"
            className="w-full h-auto object-cover animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            ABOUT US
          </span>
        </div>
      </div>
    </section>
  );
};

export default About1;
