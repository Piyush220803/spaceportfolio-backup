"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tech?: string[];
  onModalToggle?: (isOpen: boolean) => void;
}

const ProjectCard = ({ src, title, description, githubUrl, liveUrl, tech, onModalToggle }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    onModalToggle?.(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    onModalToggle?.(false);
  };

  return (
    <>
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300 group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Front of the card */}
      <div className="relative w-full h-64 bg-gray-900/50 flex items-center justify-center overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay that appears on hover (desktop) or always visible (mobile) */}
        <div className="absolute inset-0 bg-black/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-col gap-4">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 md:px-6 md:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 text-base md:text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Repo
              </motion.a>
            )}
            
            {liveUrl && (
              <motion.button
                onClick={openModal}
                className="flex items-center gap-3 px-8 py-4 md:px-6 md:py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-300 text-base md:text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Back of the card - always visible */}
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="mt-2 text-gray-300 mb-4">{description}</p>
        
        {tech && (
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((technology, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>

    {/* Modal */}
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-[95vw] h-[90vh] max-w-6xl bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">{title} - Live Demo</h3>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content - Iframe */}
            <div className="h-[calc(100%-80px)]">
              {liveUrl && (
                <iframe
                  src={liveUrl}
                  className="w-full h-full border-0"
                  title={`${title} Live Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default ProjectCard;
