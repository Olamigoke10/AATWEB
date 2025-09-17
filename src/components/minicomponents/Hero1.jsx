import React from 'react';
import { Book, Brain, Contact2Icon, FormInput, UserIcon, MoveRight } from 'lucide-react';

const Hero1 = () => {
  const pillars = [
    { name: 'Tax Optimization & Planning', icon: <Brain size={16} /> },
    { name: 'Tax Compliance & Filing', icon: <FormInput size={16} /> },
    { name: 'Integrated Accounting Support', icon: <Contact2Icon size={16} /> },
    { name: 'Financial Advisory with Tax Lens', icon: <Book size={16} /> },
    { name: 'Specialized Tax Services', icon: <UserIcon size={16} /> },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 ">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Core Pillars</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive tax and accounting solutions designed to maximize your savings and ensure compliance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                {React.cloneElement(pillar.icon, { size: 24 })}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{pillar.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional services tailored to your specific needs and requirements.
              </p>
              <a 
                href="#" 
                className="mt-auto text-red-600 hover:text-red-800 text-sm font-medium flex items-center justify-center gap-1"
              >
                Learn more
                <MoveRight />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;