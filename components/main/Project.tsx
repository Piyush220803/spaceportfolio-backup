import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/imageycdirectory.png"
          title="Pitch Your Startup"
          description="YC Directory is a dynamic and responsive web application designed to showcase startups funded by Y Combinator. 
          The platform offers users a seamless browsing experience to explore startup profiles, view detailed information, and engage 
          with real-time data. It combines a clean UI with essential features for an engaging and informative directory experience."
        />
        {/* <ProjectCard
          src="/notesapp.png"
          title="Notes App"
          description="The Notes App is a minimalist, user-friendly web application built to help users create, manage, and store their personal notes efficiently. Designed with a focus on productivity and ease of use, the app provides a smooth writing and organizing experience, whether for quick ideas or detailed to-do lists."
        /> */}
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Space-themed portfolio website using Next.js, TypeScript, and various libraries including Framer Motion and Three.js. The project is fully mobile responsive, leveraging modern web technologies, and showcases the integration of animations and effects to enhance visual appeal."
        />
      </div>
    </div>
  );
};

export default Projects;
