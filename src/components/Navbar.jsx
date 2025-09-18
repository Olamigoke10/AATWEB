// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X, Home, User, Settings, Phone, ChevronDown } from "lucide-react";
import { ModeToggle } from "./minicomponents/ModeToggle";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "NIL", icon: <Settings size={16} /> },
    { name: "NIL", icon: <Home size={16} /> },
    { name: "NIL", icon: <Phone size={16} /> },
    { name: "NIL", icon: <User size={16} /> },
  ];

  return (
    <nav className="bg-background text-foreground shadow-lg w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo + Theme toggle */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="text-2xl font-bold flex items-center">
              <Settings className="mr-2" size={28} />
              AAT
            </div>
            <ModeToggle />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#home"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted flex items-center"
            >
              <Home size={18} className="mr-1" />
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted flex items-center"
            >
              <User size={18} className="mr-1" />
              About
            </a>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <Settings size={18} />
                  <span>Services</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {services.map((service, i) => (
                  <DropdownMenuItem key={i} asChild>
                    <a
                      href={`#${service.name.toLowerCase()}`}
                      className="flex items-center"
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted flex items-center"
            >
              <Phone size={18} className="mr-1" />
              Contact
            </a>

            <Button className="ml-4">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted flex items-center"
              >
                <Home size={20} className="mr-2" />
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted flex items-center"
              >
                <User size={20} className="mr-2" />
                About
              </a>

              {/* Services inside mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between flex items-center"
                  >
                    <span className="flex items-center">
                      <Settings size={20} className="mr-2" />
                      Services
                    </span>
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {services.map((service, i) => (
                    <DropdownMenuItem key={i} asChild>
                      <a
                        href={`#${service.name.toLowerCase()}`}
                        className="flex items-center"
                      >
                        <span className="mr-2">{service.icon}</span>
                        {service.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted flex items-center"
              >
                <Phone size={20} className="mr-2" />
                Contact
              </a>

              <Button className="w-full mt-4">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
