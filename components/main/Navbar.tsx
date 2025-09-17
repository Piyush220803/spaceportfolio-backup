"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "@/contexts/ModalContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isModalOpen } = useModal();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className={`w-full h-[85px] fixed top-0 shadow-2xl shadow-[#2A0E61]/40 bg-gradient-to-r from-black/30 via-black/20 to-black/30 backdrop-blur-2xl border-b border-[#7042f861]/40 z-50 transition-all duration-300 ${isModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl flex items-center justify-between">
          
          {/* Left Section - Logo & Name */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
          <Image
            src="/Piyush.png"
            alt="logo"
                  width={55}
                  height={55}
                  className="cursor-pointer hover:animate-slowspin bg-transparent w-[55px] h-[55px] lg:w-[65px] lg:h-[65px] relative z-10 border-2 border-purple-500/40 rounded-full p-1 group-hover:border-purple-400/70 transition-all duration-500 shadow-lg"
            style={{ backgroundColor: 'transparent' }}
          />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-lg lg:text-xl hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 transition-all duration-500 hover:scale-105 hover:drop-shadow-lg hover:drop-shadow-purple-500/50 animate-pulse">
                  Piyush Pandey
                </h1>
                <p className="text-xs text-gray-400 font-medium opacity-90 -mt-1">
            Software Developer
                </p>
        </div>
            </Link>
          </div>

          {/* Center Section - Navigation (Desktop) */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-1 bg-black/50 backdrop-blur-xl border border-[#7042f861]/60 rounded-3xl px-3 py-2 shadow-2xl">
              <Link 
                href="/about" 
                className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-2xl group ${
                  isActive("/about") 
                    ? "text-white bg-gradient-to-r from-purple-500/30 to-cyan-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/25 hover:to-cyan-500/25"
                }`}
              >
                <span className="relative z-10">About</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-2xl transition-opacity duration-300 ${
                  isActive("/about") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
              </Link>
              <Link 
                href="/experience" 
                className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-2xl group ${
                  isActive("/experience") 
                    ? "text-white bg-gradient-to-r from-purple-500/30 to-cyan-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/25 hover:to-cyan-500/25"
                }`}
              >
                <span className="relative z-10">Experience</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-2xl transition-opacity duration-300 ${
                  isActive("/experience") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
              </Link>
              <Link 
                href="/skills" 
                className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-2xl group ${
                  isActive("/skills") 
                    ? "text-white bg-gradient-to-r from-purple-500/30 to-cyan-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/25 hover:to-cyan-500/25"
                }`}
              >
                <span className="relative z-10">Skills</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-2xl transition-opacity duration-300 ${
                  isActive("/skills") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
              </Link>
              <Link 
                href="/education" 
                className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-2xl group ${
                  isActive("/education") 
                    ? "text-white bg-gradient-to-r from-purple-500/30 to-cyan-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/25 hover:to-cyan-500/25"
                }`}
              >
                <span className="relative z-10">Education</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-2xl transition-opacity duration-300 ${
                  isActive("/education") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
              </Link>
              <Link 
                href="/achievements" 
                className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-2xl group ${
                  isActive("/achievements") 
                    ? "text-white bg-gradient-to-r from-purple-500/30 to-cyan-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/25 hover:to-cyan-500/25"
                }`}
              >
                <span className="relative z-10">Achievements</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-2xl transition-opacity duration-300 ${
                  isActive("/achievements") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
            </Link>
              <Link 
                href="/projects" 
                className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-2xl group ${
                  isActive("/projects") 
                    ? "text-white bg-gradient-to-r from-purple-500/30 to-cyan-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/25 hover:to-cyan-500/25"
                }`}
              >
                <span className="relative z-10">Projects</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-2xl transition-opacity duration-300 ${
                  isActive("/projects") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
            </Link>
              <Link 
                href="/contact" 
                className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-2xl group ${
                  isActive("/contact") 
                    ? "text-white bg-gradient-to-r from-purple-500/30 to-cyan-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/25 hover:to-cyan-500/25"
                }`}
              >
                <span className="relative z-10">Contact</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-2xl transition-opacity duration-300 ${
                  isActive("/contact") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
            </Link>
            </nav>
        </div>

          {/* Right Section - Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Desktop Social Icons - Only GitHub, Facebook, LinkedIn */}
            <div className="hidden md:flex items-center space-x-2">
              {Socials.filter(social => 
                social.name === "Github" || 
                social.name === "Facebook" || 
                social.name === "LinkedIn"
              ).map((social, index) => (
                <Link href={social.href} key={index} className="group">
                  <div className="relative p-2.5 rounded-2xl bg-black/40 backdrop-blur-sm border border-gray-600/50 hover:border-purple-500/60 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/15 hover:to-cyan-500/15 shadow-lg">
              <Image
                      className="cursor-pointer w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300"
                src={social.src}
                alt={social.name}
                width={25}
                height={25}
              />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1 bg-black/40 backdrop-blur-sm border border-gray-600/50 rounded-2xl hover:border-purple-500/60 transition-all duration-300"
            >
              <span className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
          </div>

          {/* Mobile Center Title */}
          <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 font-bold text-lg hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 transition-all duration-500 hover:scale-105 hover:drop-shadow-lg hover:drop-shadow-purple-500/50 animate-pulse">Piyush Pandey</h1>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - Rendered via Portal */}
      {isMenuOpen && typeof window !== 'undefined' && createPortal(
        <>
          {/* Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm"
            style={{ zIndex: 99998 }}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div 
            className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-[#7042f861]/50 transform transition-transform duration-300 ease-in-out translate-x-0"
            style={{ zIndex: 99999 }}
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#7042f861]/30">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                >
                  <span className="text-gray-300 text-xl">×</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 space-y-4">
                <Link 
                  href="/about" 
                  className={`block w-full text-left backdrop-blur-sm rounded-lg border transition-all duration-300 py-4 px-6 ${
                    isActive("/about")
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/70 text-purple-300"
                      : "bg-gray-800/80 border-gray-600/70 text-white hover:text-purple-400 hover:border-purple-500/70 hover:bg-gray-700/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About me
                </Link>
                <Link 
                  href="/experience" 
                  className={`block w-full text-left backdrop-blur-sm rounded-lg border transition-all duration-300 py-4 px-6 ${
                    isActive("/experience")
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/70 text-purple-300"
                      : "bg-gray-800/80 border-gray-600/70 text-white hover:text-purple-400 hover:border-purple-500/70 hover:bg-gray-700/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link 
                  href="/skills" 
                  className={`block w-full text-left backdrop-blur-sm rounded-lg border transition-all duration-300 py-4 px-6 ${
                    isActive("/skills")
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/70 text-purple-300"
                      : "bg-gray-800/80 border-gray-600/70 text-white hover:text-purple-400 hover:border-purple-500/70 hover:bg-gray-700/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link 
                  href="/education" 
                  className={`block w-full text-left backdrop-blur-sm rounded-lg border transition-all duration-300 py-4 px-6 ${
                    isActive("/education")
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/70 text-purple-300"
                      : "bg-gray-800/80 border-gray-600/70 text-white hover:text-purple-400 hover:border-purple-500/70 hover:bg-gray-700/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Education
                </Link>
                <Link 
                  href="/achievements" 
                  className={`block w-full text-left backdrop-blur-sm rounded-lg border transition-all duration-300 py-4 px-6 ${
                    isActive("/achievements")
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/70 text-purple-300"
                      : "bg-gray-800/80 border-gray-600/70 text-white hover:text-purple-400 hover:border-purple-500/70 hover:bg-gray-700/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Achievements
                </Link>
                <Link 
                  href="/projects" 
                  className={`block w-full text-left backdrop-blur-sm rounded-lg border transition-all duration-300 py-4 px-6 ${
                    isActive("/projects")
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/70 text-purple-300"
                      : "bg-gray-800/80 border-gray-600/70 text-white hover:text-purple-400 hover:border-purple-500/70 hover:bg-gray-700/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/contact" 
                  className={`block w-full text-left backdrop-blur-sm rounded-lg border transition-all duration-300 py-4 px-6 ${
                    isActive("/contact")
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/70 text-purple-300"
                      : "bg-gray-800/80 border-gray-600/70 text-white hover:text-purple-400 hover:border-purple-500/70 hover:bg-gray-700/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              
              {/* Social Icons */}
              <div className="p-6 border-t border-[#7042f861]/30">
                <h3 className="text-sm font-semibold text-gray-400 mb-4">Connect with me</h3>
                <div className="flex flex-row gap-4">
                  {Socials.map((social, index) => (
                    <Link href={social.href} key={index}>
                      <Image
                        className="cursor-pointer hover:scale-110 transition-transform duration-300"
                        src={social.src}
                        alt={social.name}
                        width={35}
                        height={35}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  );
};

export default Navbar;
