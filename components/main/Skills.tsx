"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  // Combine all skills into one array
  const allSkills = [...Skill_data, ...Frontend_skill, ...Backend_skill, ...Full_stack];
  
  // Create pyramid rows: 5, 4, 3, 2, 1
  const pyramidRows = [
    allSkills.slice(0, 5),   // Row 1: 5 skills
    allSkills.slice(5, 9),   // Row 2: 4 skills
    allSkills.slice(9, 12),  // Row 3: 3 skills
    allSkills.slice(12, 14), // Row 4: 2 skills
    allSkills.slice(14, 15), // Row 5: 1 skill
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-[50]"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      {/* Pyramid Layout */}
      <div className="flex flex-col items-center gap-8 mt-8">
        {pyramidRows.map((row, rowIndex) => (
          <div 
            key={rowIndex}
            className="flex flex-row justify-center items-center gap-6"
          >
            {row.map((skill, skillIndex) => (
              <SkillDataProvider
                key={`${rowIndex}-${skillIndex}`}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
                index={rowIndex * 5 + skillIndex}
                skill_name={skill.skill_name}
              />
            ))}
          </div>
        ))}
      </div>
      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
