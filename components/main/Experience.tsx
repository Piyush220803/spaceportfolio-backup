"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utilis/motion";
import { BriefcaseIcon, CalendarIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

const Experience = () => {
  const experiences = [
    {
      company: "AGAVIAN SOFTWARE LIMITED",
      position: "Software Engineer",
      duration: "April 2025 - Present",
      location: "Tamil Nadu, India",
      achievements: [
        "Boosted React Native app performance by 30-35% and improved UI responsiveness across iOS and Android",
        "Increased user engagement by revamping onboarding with 3D animations and interactive tutorials",
        "Overhauled the subscription UI with toggleable plans and payment flows",
        "Developed a dynamic add-on management system using Redux for payment verification and pricing logic (Play Store)",
        "Developed Sisu Logs - Baby Memory Diary app featuring secure photo/video storage, digital diary creation, and milestone tracking",
        "Implemented calendar view functionality for easy memory organization and occasion-based reminders for parents",
        "Built vaccination reminder system and parenting assistance features with age-appropriate toy and story suggestions"
      ]
    },
    {
      company: "BHARAT SVARGA LLP",
      position: "Front End Developer",
      duration: "Aug 2024 – Jan 2025",
      location: "Jaipur, India",
      achievements: [
        "Developed a responsive business website using Wix, focusing on brand identity and conversion optimization",
        "Enhanced user experience with custom animations, dynamic layouts, and ensured full mobile and cross-browser compatibility"
      ]
    }
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-10 relative z-[30]"
    >

      <motion.h1
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center"
      >
        My Experience
      </motion.h1>

      <div className="w-full max-w-6xl space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">{exp.company}</h2>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">{exp.position}</h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-purple-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.li
                    key={achIndex}
                    variants={slideInFromLeft(0.7 + achIndex * 0.1)}
                    className="flex items-start gap-3 text-gray-300 leading-relaxed"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
              
              {exp.company === "AGAVIAN SOFTWARE LIMITED" && (
                <motion.div
                  variants={slideInFromLeft(1.2)}
                  className="mt-6 pt-4 border-t border-gray-700/50"
                >
                  <h5 className="text-md font-semibold text-white mb-3">Featured App:</h5>
                  <motion.a
                    href="https://play.google.com/store/apps/details?id=com.babydiaries&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
                    variants={slideInFromLeft(1.3)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial="hidden"
                    animate="visible"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    View Sisu Logs on Play Store
                  </motion.a>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={slideInFromTop}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
          <p className="text-gray-300 text-lg mb-6">
            I'm always excited to take on new projects and contribute to innovative teams. 
            Let's build something amazing together!
          </p>
          <motion.a
            href="/projects"
            className="inline-block py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
