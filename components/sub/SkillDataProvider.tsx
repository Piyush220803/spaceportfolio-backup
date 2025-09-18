"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name?: string;
}

const SkillDataProvider = ({ src, width, height, index, skill_name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.3;

  // Don't render if src is empty or invalid
  if (!src || src.trim() === "") {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="relative group cursor-pointer z-[60]"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 8 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative"
      >
        <Image 
          src={src} 
          width={width} 
          height={height} 
          alt={skill_name || "skill image"}
          className="transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-2xl group-hover:drop-shadow-purple-500/50"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Hover Tooltip */}
        {skill_name && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-[100] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-900/95 to-cyan-900/95 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-xl border border-purple-400/50 shadow-2xl whitespace-nowrap">
              {skill_name}
              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-900/95"></div>
            </div>
          </div>
        )}
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg -z-10 scale-150"></div>
        
        {/* Pulse effect on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse -z-5"></div>
      </motion.div>
    </motion.div>
  );
};

export default SkillDataProvider;
