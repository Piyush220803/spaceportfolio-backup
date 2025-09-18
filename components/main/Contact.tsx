"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utilis/motion";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  GlobeAltIcon,
  UserIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/solid";
import { Socials } from "@/constants";
import Image from "next/image";

const Contact = () => {
  const contactInfo = [
    {
      icon: <UserIcon className="h-8 w-8" />,
      title: "Full Name",
      value: "Piyush Pandey",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <EnvelopeIcon className="h-8 w-8" />,
      title: "Email Address",
      value: "piyush.techdev@gmail.com",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      link: "mailto:piyush.techdev@gmail.com"
    },
    {
      icon: <PhoneIcon className="h-8 w-8" />,
      title: "Phone Number",
      value: "+91 8252313317",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      link: "tel:+918252313317"
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: "Personal Website",
      value: "piyush.engineer",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-500/20 to-cyan-600/20",
      borderColor: "border-cyan-500/30",
      link: "https://www.piyush.engineer/"
    }
  ];

  const getSocialColor = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return {
          color: "from-gray-600 to-gray-800",
          bgColor: "from-gray-600/20 to-gray-800/20",
          borderColor: "border-gray-600/30"
        };
      case "instagram":
        return {
          color: "from-pink-500 to-rose-500",
          bgColor: "from-pink-500/20 to-rose-500/20",
          borderColor: "border-pink-500/30"
        };
      case "facebook":
        return {
          color: "from-blue-600 to-blue-700",
          bgColor: "from-blue-600/20 to-blue-700/20",
          borderColor: "border-blue-600/30"
        };
      case "linkedin":
        return {
          color: "from-blue-500 to-indigo-500",
          bgColor: "from-blue-500/20 to-indigo-500/20",
          borderColor: "border-blue-500/30"
        };
      case "whatsapp":
        return {
          color: "from-green-500 to-green-600",
          bgColor: "from-green-500/20 to-green-600/20",
          borderColor: "border-green-500/30"
        };
      case "email":
        return {
          color: "from-red-500 to-red-600",
          bgColor: "from-red-500/20 to-red-600/20",
          borderColor: "border-red-500/30"
        };
      default:
        return {
          color: "from-purple-500 to-purple-600",
          bgColor: "from-purple-500/20 to-purple-600/20",
          borderColor: "border-purple-500/30"
        };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-10 relative z-[30] min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        variants={slideInFromTop}
        className="text-center mb-16"
      >
        <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 py-8">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Ready to bring your ideas to life? Let's create something amazing together.
        </p>
      </motion.div>

      {/* Contact Information Cards */}
      <div className="w-full max-w-7xl mb-20 relative z-10">
        <motion.h2
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-white text-center mb-16 relative"
        >
          <span className="relative">
            Contact Information
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              variants={slideInFromTop}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden h-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-4 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse delay-300"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon with enhanced styling */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {contact.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                    {contact.title}
                  </h3>
                  
                  {/* Value with enhanced styling */}
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 text-base font-medium block group-hover:scale-105"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-white text-base font-medium group-hover:scale-105 transition-transform duration-300">
                      {contact.value}
                    </p>
                  )}
                  
                  {/* Decorative line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="w-full max-w-6xl mb-20 relative z-10">
        <motion.h2
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-white text-center mb-16 relative"
        >
          <span className="relative">
            Connect With Me
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Socials.map((social, index) => {
            const colors = getSocialColor(social.name);
            return (
              <motion.div
                key={index}
                variants={slideInFromTop}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={social.href}
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="block bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={social.src}
                          alt={social.name}
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      {social.name}
                    </h3>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        variants={slideInFromTop}
        className="text-center relative z-10"
      >
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 max-w-5xl relative overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-50 rounded-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              Let's Create Something Amazing!
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to take on new projects and collaborate with amazing people. 
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="mailto:piyush.techdev@gmail.com"
                className="inline-block py-4 px-10 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white cursor-pointer rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Send Email
              </motion.a>
              <motion.a
                href="tel:+918252313317"
                className="inline-block py-4 px-10 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white cursor-pointer rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call Now
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
