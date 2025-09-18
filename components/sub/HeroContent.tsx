"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utilis/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";

const HeroContent = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { isModalOpen, setIsModalOpen } = useModal();
  
  const texts = [
    "Hi, I am Piyush",
    "Welcome to my portfolio",
    "Full Stack Software Engineer",
    "React Developer",
    "DevOps Engineer",
    "Mobile App Developer"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, texts]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[15]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          {/* Typing Animation */}
          <div className="min-h-[120px] flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                {displayedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-cyan-400 ml-1"
              >
                |
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Crafting exceptional digital experiences through innovative web and mobile solutions. 
          Passionate about turning ideas into reality with cutting-edge technology.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <motion.a
            href="/contact"
            variants={slideInFromLeft(1)}
            className="inline-block py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
          
          <motion.button
            onClick={() => setIsModalOpen(true)}
            variants={slideInFromLeft(1.2)}
            className="inline-block py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.button>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
          loading="eager"
        />
      </motion.div>

      {/* Resume Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-[95vw] h-[90vh] max-w-4xl bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">Piyush Pandey - Resume</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content - PDF */}
            <div className="h-[calc(100%-80px)]">
              <iframe
                src="/Piyush-Pandey_Resume.pdf"
                className="w-full h-full border-0"
                title="Piyush Pandey Resume"
                type="application/pdf"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeroContent;
