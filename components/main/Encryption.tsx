"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utilis/motion";
import Image from "next/image";
import StarsCanvas from "./StarBackground";

const Encryption = () => {
  const [displayedQuote, setDisplayedQuote] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const cybersecurityQuotes = [
    "Security is not a product, but a process.",
    "The only truly secure system is one that is powered off.",
    "Security is always excessive until it's not enough.",
    "Privacy is not an option, and it shouldn't be the price we accept.",
    "The best defense against cyber attacks is a good offense.",
    "Security is a journey, not a destination.",
    "Trust, but verify - especially in cybersecurity.",
    "The weakest link in any security system is the human element.",
    "Cybersecurity is everyone's responsibility.",
    "In cybersecurity, paranoia is a virtue."
  ];

  useEffect(() => {
    const currentQuote = cybersecurityQuotes[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedQuote.length < currentQuote.length) {
          setDisplayedQuote(currentQuote.slice(0, displayedQuote.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        if (displayedQuote.length > 0) {
          setDisplayedQuote(displayedQuote.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cybersecurityQuotes.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedQuote, currentIndex, isDeleting, cybersecurityQuotes]);

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full z-[10] px-4 sm:px-6 lg:px-8">
      <div className="absolute w-auto h-auto top-8 sm:top-12 lg:top-16 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-center text-gray-200"
        >
          Innovation
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Excellence
        </motion.div>
        
        {/* Cybersecurity Quotes Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-4 sm:mt-6 lg:mt-8 text-center"
        >
          <div className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto px-2 sm:px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              "{displayedQuote}"
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-cyan-400 ml-1"
            >
              |
            </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-20px] sm:translate-y-[-30px] lg:translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] translate-y-2 sm:translate-y-3 lg:translate-y-5 transition-all duration-200 group-hover:translate-y-4 sm:group-hover:translate-y-6 lg:group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] z-10"
          />
        </div>

      </div>
      <div className="absolute z-[20] bottom-4 sm:bottom-6 lg:bottom-[10px] px-2 sm:px-4 lg:px-[5px]">
        <div className="cursive text-sm sm:text-base md:text-lg lg:text-[20px] font-medium text-center text-gray-300 max-w-xs sm:max-w-md lg:max-w-none mx-auto">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          className="w-full h-auto"
          src="/encryption.webm"
        />
        {/* Stars overlay on top of video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-[15]">
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
};

export default Encryption;
