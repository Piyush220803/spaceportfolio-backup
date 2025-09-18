"use client";

import { PyramidSkills } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const pyramidLayers = [
    { skills: PyramidSkills.topLayer, label: "", className: "text-purple-400" },
    { skills: PyramidSkills.secondLayer, label: "", className: "text-blue-400" },
    { skills: PyramidSkills.thirdLayer, label: "", className: "text-green-400" },
    { skills: PyramidSkills.fourthLayer, label: "", className: "text-yellow-400" },
    { skills: PyramidSkills.baseLayer, label: "", className: "text-gray-300" },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-12"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      {/* Pyramid Layout */}
      <div className="flex flex-col items-center gap-8 mt-6 w-full max-w-8xl px-12">
        {pyramidLayers.map((layer, layerIndex) => (
          <div key={layerIndex} className="flex flex-col items-center gap-4">
            {/* Layer Label */}
            <div className={`text-sm font-semibold ${layer.className} mb-2`}>
              {layer.label}
            </div>
            
            {/* Skills Row */}
            <div className="flex flex-row justify-center items-center gap-6 flex-wrap">
              {layer.skills.map((skill, skillIndex) => (
                <SkillDataProvider
                  key={`${layerIndex}-${skillIndex}`}
                  src={skill.Image}
                  width={skill.width}
                  height={skill.height}
                  index={layerIndex * 10 + skillIndex}
                  skill_name={skill.skill_name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute inset-0 pointer-events-none">
        <div className="w-full h-full z-[-100] opacity-30 absolute top-20 left-0 right-0 bottom-0 flex items-center justify-center bg-cover">
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
