"use client";

import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <motion.button
              className="flex flex-row items-center my-[15px] cursor-pointer bg-transparent border-none"
              whileHover={{ scale: 1.1 }}
            >
              <RxGithubLogo />
              <a
                className="text-[15px] ml-[6px] cursor-pointer"
                href="https://github.com/Piyush220803"
              >
                Github
              </a>
            </motion.button>
            <button
              className="flex flex-row items-center my-[15px] cursor-pointer bg-transparent border-none"
              onClick={() => window.open("https://discord.com", "_blank")}
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </button>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <button
              className="flex flex-row items-center my-[15px] cursor-pointer bg-transparent border-none"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </button>
            <button
              className="flex flex-row items-center my-[15px] cursor-pointer bg-transparent border-none"
              onClick={() => window.open("https://twitter.com", "_blank")}
            >
              <FaTwitter />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </button>
            <button
              className="flex flex-row items-center my-[15px] cursor-pointer bg-transparent border-none"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </button>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] cursor-pointer">About</div>
            <a href="mailto:pandeypiyush2208@gmail.com">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  Email to Connect with me
                </span>
              </p>
            </a>

            <a href="mailto:pandeypiyush2208@gmail.com">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  pandeypiyush2208@gmail.com
                </span>
              </p>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Piyush Software Developer 2025 Inc. All rights reserved
        </div>
      </div>
      <h1 className="bg-amber-500">Hi this is GitHub</h1>
    </div>
  );
};

export default Footer;
