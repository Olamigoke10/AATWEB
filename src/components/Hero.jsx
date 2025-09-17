import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import heroPng from "../assets/imgs/aatHero.png";
import Hero1 from "./minicomponents/Hero1";

const Hero = () => {
  return (
    <>
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row bg-red-200 rounded-xl overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <div className="w-full max-w-md rounded-lg p-4 ">
            <img 
              src={heroPng}
              alt="Accounting professionals" 
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="font-extrabold text-4xl md:text-5xl text-gray-900">
              AAT <span className="text-red-600">ACCOUNTING</span>
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower businesses and individuals with proactive, tax-centric
              financial services delivering maximum savings and compliance
              confidence through precision, planning, and expert insight.
            </p>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input 
                type="email" 
                className="flex-grow bg-white border border-gray-300 px-5 py-3 outline-none rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                placeholder="Enter your email" 
              />
              <button className="bg-black hover:bg-gray-800 text-white font-medium rounded-md px-6 py-3 transition-colors duration-200 whitespace-nowrap">
                Get in touch
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="bg-white rounded-md text-gray-700 p-2 shadow-sm hover:bg-red-50 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="bg-white rounded-md text-gray-700 p-2 shadow-sm hover:bg-red-50 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-white rounded-md text-gray-700 p-2 shadow-sm hover:bg-red-50 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="bg-white rounded-md text-gray-700 p-2 shadow-sm hover:bg-red-50 transition-colors duration-200">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Hero1 />
    </>

  );
};

export default Hero;