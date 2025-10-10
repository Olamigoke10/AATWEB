import { Timer, Users, Award, BookOpen } from "lucide-react";
import React from "react";

const About1 = () => {
  return (
    <section className="grid md:grid-cols-2 max-w-7xl mx-auto gap-8 bg-accent my-10 rounded-lg p-8 md:p-12">
      {/* Text Content */}
      <div className="flex flex-col justify-center px-4 space-y-6">
        <h2 className="font-extrabold text-3xl md:text-4xl text-chart-2">
          Accounting That Makes a Difference
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Welcome to AAT Accounting, one of leading accounting firms in Canada. AAT Accounting provides expert tax, accounting, and financial services for individuals, businesses, and landlords. 
            With a team of highly qualified professionals, we specialise in personal tax returns, business accounting, VAT, payroll, and corporate tax planning.
            We go beyond the numbers, offering clear advice, proactive support, and strategies that deliver real results for your finances and business growth.
          </p>
          <p className="text-lg leading-relaxed">
           Looking to reduce your taxes, stay compliant, and avoid penalties? Our tax planning services help you keep more of your money while planning for the future.
           Partner with AAT Accounting and let us help you grow your wealth and achieve your financial goals.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <div className="p-2 bg-chart-2 rounded-full">
                <Timer className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">Task Planning</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <div className="p-2 bg-chart-1 rounded-full">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">Business Tax</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <div className="p-2 bg-chart-3 rounded-full">
                <Award className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">Financial Reporting</span>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <div className="p-2 bg-chart-4 rounded-full">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">Payroll</span>
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
