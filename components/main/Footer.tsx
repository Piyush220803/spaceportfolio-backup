"use client";

import React from "react";
import { motion } from "framer-motion";
import { Socials } from "@/constants";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon, HeartIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50 z-[30]">

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-lg opacity-30"></div>
                <Image
                  src="/Piyush.png"
                  alt="Piyush Pandey"
                  width={100}
                  height={100}
                  className="relative w-24 h-24 rounded-full border-2 border-white/10 shadow-2xl"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-3">
                Piyush Pandey
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed max-w-md mb-6">
                Passionate Software Developer crafting innovative solutions and building exceptional user experiences with modern technologies.
              </p>

              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm font-medium">Follow me:</span>
                <div className="flex space-x-3">
                  {Socials.slice(0, 4).map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.name === "Email" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 hover:shadow-lg hover:shadow-purple-500/20">
                        <Image
                          src={social.src}
                          alt={social.name}
                          width={18}
                          height={18}
                          className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </h4>
            <div className="space-y-3">
              {[
                { name: "About Me", href: "/about" },
                { name: "Experience", href: "/experience" },
                { name: "Skills", href: "/skills" },
                { name: "Projects", href: "/projects" },
                { name: "Education", href: "/education" },
                { name: "Achievements", href: "/achievements" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-x-1 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400">
                    {link.name}
                  </span>
                </motion.a>
              ))}
          </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <motion.a 
                href="mailto:piyush.techdev@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 mr-3 group-hover:border-purple-500/50 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300">
                  <EnvelopeIcon className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-sm font-medium">piyush.techdev@gmail.com</span>
              </motion.a>
              
              <motion.a 
                href="tel:+918252313317"
                className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 mr-3 group-hover:border-purple-500/50 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300">
                  <PhoneIcon className="h-4 w-4 text-cyan-400" />
          </div>
                <span className="text-sm font-medium">+91 8252313317</span>
              </motion.a>
              
              <motion.a 
                href="https://www.piyush.engineer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 mr-3 group-hover:border-purple-500/50 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300">
                  <GlobeAltIcon className="h-4 w-4 text-pink-400" />
                </div>
                <span className="text-sm font-medium">piyush.engineer</span>
              </motion.a>
          </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-800/50 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; 2025 Piyush Pandey. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Built with</span>
              <HeartIcon className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                Next.js
              </span>
            </div>
        </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
