"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utilis/motion";
import { AcademicCapIcon, CalendarIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

const Education = () => {
  const educationData = [
    {
      institution: "ROORKEE INSTITUTE OF TECHNOLOGY",
      degree: "B.Tech in Computer Science",
      details: "CGPA: 7.43",
      location: "Roorkee, Uttarakhand",
      duration: "2021-2025",
      type: "Graduation",
      image: "/roorkee-institute-of-technology-roorkee-colleges-q3zkp.avif",
      achievements: [
        "Pursuing Bachelor of Technology in Computer Science",
        "Maintaining strong academic performance with CGPA of 7.43",
        "Active participation in technical projects and coding competitions",
        "Developing expertise in software development and programming"
      ]
    },
    {
      institution: "KENDRIYA VIDYALAYA",
      degree: "12th Class",
      details: "CBSE Board",
      location: "Mughalsarai, Uttar Pradesh",
      duration: "2019-2021",
      type: "Higher Secondary",
      image: "/kendriya-vidyala.jpg",
      achievements: [
        "Completed 12th standard with CBSE curriculum",
        "Strong foundation in Mathematics and Science",
        "Active participation in school activities and events",
        "Prepared for competitive engineering entrance exams"
      ]
    },
    {
      institution: "KENDRIYA VIDYALAYA",
      degree: "10th Class",
      details: "CBSE Board",
      location: "Mughalsarai, Uttar Pradesh",
      duration: "2017-2019",
      type: "Secondary",
      image: "/kendriya-vidyala.jpg",
      achievements: [
        "Completed 10th standard with CBSE curriculum",
        "Excellent performance in all subjects",
        "Participated in various school competitions",
        "Strong academic foundation for higher studies"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Graduation":
        return "from-purple-500 to-purple-600";
      case "Higher Secondary":
        return "from-cyan-500 to-cyan-600";
      case "Secondary":
        return "from-pink-500 to-pink-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Graduation":
        return "🎓";
      case "Higher Secondary":
        return "📚";
      case "Secondary":
        return "📖";
      default:
        return "🎓";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-10 relative z-[30]">

      <motion.h1
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center"
      >
        My Education
      </motion.h1>

      <div className="w-full max-w-6xl space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background gradient overlay */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getTypeColor(edu.type)} opacity-10 rounded-full blur-3xl`}></div>
            
            <div className="relative z-10">
              {/* 2-Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                {/* Left Side - Information */}
                <div className="flex flex-col justify-start">
                  <div className="mb-3">
                    <h2 className="text-2xl font-bold text-white mb-1">{edu.institution}</h2>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getTypeColor(edu.type)} text-white`}>
                      {edu.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cyan-400 mb-1">{edu.degree}</h3>
                  <p className="text-lg font-medium text-purple-300 mb-3">{edu.details}</p>
                  
                  <div className="flex flex-col gap-2 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-purple-400" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>

                  {/* Key Highlights - Moved Up */}
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          variants={slideInFromLeft(0.7 + achIndex * 0.1)}
                          className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed"
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${getTypeColor(edu.type)} rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side - Full Image */}
                <motion.div
                  variants={index % 2 === 0 ? slideInFromRight(0.3) : slideInFromLeft(0.3)}
                  className="relative"
                >
                  <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 group">
                    <Image
                      src={edu.image}
                      alt={edu.institution}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={slideInFromTop}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
          <p className="text-gray-300 text-lg mb-6">
            Education is a lifelong journey. I'm committed to continuous learning and staying updated 
            with the latest technologies and industry trends.
          </p>
          <motion.a
            href="/experience"
            className="inline-block py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Experience
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
