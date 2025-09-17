"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { useModal } from "@/contexts/ModalContext";

const Projects = () => {
  const { setIsModalOpen } = useModal();

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/imageycdirectory.png"
          title="Pitch Your Startup"
          description="YC Directory is a dynamic and responsive web application designed to showcase startups funded by Y Combinator. 
          The platform offers users a seamless browsing experience to explore startup profiles, view detailed information, and engage 
          with real-time data. It combines a clean UI with essential features for an engaging and informative directory experience."
          githubUrl="https://github.com/Piyush220803/yc_directory"
          liveUrl="https://yc-directory-one-pied.vercel.app/"
          tech={["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
          onModalToggle={setIsModalOpen}
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Space-themed portfolio website using Next.js, TypeScript, and various libraries including Framer Motion and Three.js. The project is fully mobile responsive, leveraging modern web technologies, and showcases the integration of animations and effects to enhance visual appeal."
          githubUrl="https://github.com/Piyush220803/spaceportfolio-backup"
          liveUrl="https://www.piyush.engineer"
          tech={["Next.js", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS"]}
          onModalToggle={setIsModalOpen}
        />
        <ProjectCard
          src="/ai-image-enhancer.png"
          title="AI Image Enhancer"
          description="Developed a web application using React that enhances image quality using AI-based upscaling algorithms. Integrated AI models via APIs to improve resolution, reduce noise, and sharpen image details. Features real-time image processing with before/after comparisons and supports multiple image formats."
          githubUrl="https://github.com/Piyush220803/-react-ai-image-enhancer-main"
          liveUrl="https://aiimageenhancerbypiyush.netlify.app/"
          tech={["HTML", "Tailwind CSS", "Three.js", "React", "Framer Motion"]}
          onModalToggle={setIsModalOpen}
        />
      </div>
    </div>
  );
};

export default Projects;
