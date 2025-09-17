import React from 'react';
import { MoveRight } from 'lucide-react';
import heroAbout from '../../assets/imgs/heroABout.jpg';

const Hero2 = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="max-w-6xl w-full mx-auto">
        <div
          className="w-full h-[500px] md:h-[600px] bg-cover bg-center rounded-2xl overflow-hidden shadow-lg relative"
          style={{ 
            backgroundImage: `url(${heroAbout})`,
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          
          <div className="relative h-full flex items-center">
            <div className='flex flex-col space-y-6 px-8 md:px-16 text-white max-w-2xl'>
              <h1 className='font-bold text-4xl md:text-6xl leading-tight'>
                The Story Behind <br /> 
                <span className="text-red-400">AAT Accounting</span>
              </h1>

              <p className='text-lg md:text-xl text-gray-200 leading-relaxed'>
                For over a decade, we've been helping businesses navigate complex financial landscapes 
                with precision and expertise. Our journey began with a simple mission: to provide 
                exceptional accounting services that drive growth and success.
              </p>

              <div className='pt-4'>
                <button className='bg-red-600 hover:bg-red-700 p-4 md:p-5 text-white rounded-lg transition-all duration-300 flex items-center gap-3 group'>
                  <span className="font-medium text-lg">About our firm</span>
                  <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;