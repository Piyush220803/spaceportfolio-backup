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
    <div className="flex flex-col items-center justify-center py-20 px-10 relative z-[30]">

      <motion.h1
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center"
      >
        Contact Me
      </motion.h1>

      {/* Contact Information Cards */}
      <div className="w-full max-w-7xl mb-16">
        <motion.h2
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-white text-center mb-16"
        >
          Contact Information
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              variants={slideInFromTop}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${contact.bgColor} backdrop-blur-xl rounded-3xl p-6 border ${contact.borderColor} hover:border-opacity-80 transition-all duration-500 relative overflow-hidden h-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}>
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-300"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon with enhanced styling */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${contact.color} text-white mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
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
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${contact.color} mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="w-full max-w-6xl mb-16">
        <motion.h2
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-2xl font-bold text-white text-center mb-12"
        >
          Connect With Me
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Socials.map((social, index) => {
            const colors = getSocialColor(social.name);
            return (
              <motion.div
                key={index}
                variants={slideInFromTop}
                initial="hidden"
                animate="visible"
                className="group"
              >
                <a
                  href={social.href}
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`block bg-gradient-to-r ${colors.bgColor} backdrop-blur-sm rounded-2xl p-4 border ${colors.borderColor} hover:border-opacity-60 transition-all duration-300 relative overflow-hidden hover:scale-105`}
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-3">
                      <Image
                        src={social.src}
                        alt={social.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-white">{social.name}</h3>
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
        className="text-center"
      >
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-500/30 max-w-4xl">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together!</h3>
          <p className="text-gray-300 text-lg mb-6">
            I'm always excited to take on new projects and collaborate with amazing people. 
            Whether you have a project in mind or just want to chat about technology, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:piyush.techdev@gmail.com"
              className="inline-block py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>
            <motion.a
              href="tel:+918252313317"
              className="inline-block py-3 px-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
