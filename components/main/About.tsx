"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utilis/motion";
import { UserIcon, CodeBracketIcon, RocketLaunchIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-10 relative z-[30]"
    >

      <motion.h1
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center"
      >
        Who Am I?
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 w-full max-w-7xl">
        {/* Left side - Image and basic info */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col items-center gap-8"
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/mypiyush.jpg"
                  alt="Piyush Pandey"
                  height={320}
                  width={320}
                  className="w-full h-full object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
              <CodeBracketIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Piyush Pandey</h2>
            <p className="text-lg text-gray-400 mb-2">Full Stack Software Engineer</p>
            <p className="text-sm text-gray-500 mb-4">B.Tech Computer Science (Completed) | Roorkee Institute of Technology</p>
          </div>
        </motion.div>

        {/* Right side - Detailed information */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-8 max-w-2xl"
        >
          <div className="space-y-6">
            <motion.div
              variants={slideInFromRight(0.7)}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <RocketLaunchIcon className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A recent B.Tech Computer Science graduate from Roorkee Institute of Technology, 
                I'm a passionate Full Stack Developer with hands-on experience in building 
                real-world applications. From developing mobile apps like "Sisu Logs - Baby Memory Diary" 
                to creating innovative web solutions, I love turning ideas into reality through code.
              </p>
            </motion.div>

            <motion.div
              variants={slideInFromRight(0.9)}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <AcademicCapIcon className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">What I Do</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I specialize in full-stack development with expertise in modern web technologies 
                and mobile app development. From creating responsive web applications to building 
                cross-platform mobile apps, I deliver end-to-end solutions that make a real impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <span className="text-purple-400 font-semibold">Frontend</span>
                  <p className="text-sm text-gray-400">React, Next.js, Tailwind CSS</p>
                </div>
                <div className="text-center p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <span className="text-cyan-400 font-semibold">Mobile & Backend</span>
                  <p className="text-sm text-gray-400">React Native, Node.js, MongoDB</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInFromRight(1.1)}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <CodeBracketIcon className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">My Achievements</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I believe in continuous learning and pushing boundaries. With multiple 1st place wins 
                in hackathons, cybersecurity competitions, and technical exhibitions, I've proven my 
                ability to deliver innovative solutions under pressure.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <span className="text-green-400 font-semibold text-sm">Hackathons</span>
                  <p className="text-xs text-gray-400">1st Rank Winner</p>
                </div>
                <div className="text-center p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <span className="text-blue-400 font-semibold text-sm">Cybersecurity</span>
                  <p className="text-xs text-gray-400">17th Global Rank</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={slideInFromRight(1.3)}
            className="flex gap-4 justify-center"
          >
            <motion.a
              href="/projects"
              className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/skills"
              className="py-3 px-6 border border-purple-500 text-purple-400 cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:bg-purple-500/10 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Skills
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
