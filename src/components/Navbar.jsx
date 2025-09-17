import React, { useState } from 'react';
import { Menu, X, Home, User, Settings, Phone, ChevronDown } from 'lucide-react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Web Development', icon: <Settings size={16} /> },
    { name: 'UI/UX Design', icon: <Home size={16} /> },
    { name: 'Mobile Apps', icon: <Phone size={16} /> },
    { name: 'Consulting', icon: <User size={16} /> },
  ];

  return (
    <nav className="bg-white shadow-lg w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-black flex items-center">
              <Settings className="mr-2" size={28} />
              AAT
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
              <Home size={18} className="mr-1" />
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
              <User size={18} className="mr-1" />
              About
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center"
              >
                <Settings size={18} className="mr-1" />
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.name.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-black-600"
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#contact" className="text-gray-700 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
              <Phone size={18} className="mr-1" />
              Contact
            </a>
            
            <button className="bg-black hover:bg-black text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center ml-4">
              Get Started
              <ChevronDown size={16} className="ml-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none focus:text-back p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium flex items-center">
                <Home size={20} className="mr-2" />
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium flex items-center">
                <User size={20} className="mr-2" />
                About
              </a>
              
              <div className="pl-3">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-black w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  <span className="flex items-center">
                    <Settings size={20} className="mr-2" />
                    Services
                  </span>
                  <ChevronDown size={16} className={isServicesOpen ? 'transform rotate-180' : ''} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 mt-1 space-y-1">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={`#${service.name.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center px-3 py-2 text-gray-600 hover:text-black text-sm"
                      >
                        <span className="mr-2">{service.icon}</span>
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#contact" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium flex items-center">
                <Phone size={20} className="mr-2" />
                Contact
              </a>
              
              <button className="w-full mt-4 bg-black hover:bg-black text-white px-4 py-2 rounded-md text-base font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;