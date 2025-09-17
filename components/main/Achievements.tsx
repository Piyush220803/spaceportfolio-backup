"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utilis/motion";
import { TrophyIcon, CalendarIcon, MapPinIcon, StarIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Achievements = () => {
  const achievementsData = [
    {
      title: "IEEE Quiz Competition",
      rank: "2nd Rank",
      level: "Intra-College",
      location: "Roorkee Institute of Technology",
      category: "Academic",
      description: "Secured 2nd position in IEEE Quiz competition at college level, demonstrating strong technical knowledge and quick problem-solving abilities.",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "NECTF (Capture the Flag)",
      rank: "1st Rank (Intra-College)",
      level: "17th Global Rank",
      location: "Cybersecurity Competition",
      category: "Cybersecurity",
      description: "Achieved 1st rank at college level and 17th rank globally in NECTF cybersecurity competition, showcasing expertise in ethical hacking and security protocols.",
      icon: "🛡️",
      color: "from-red-500 to-pink-500",
      cashPrize: null
    },
    {
      title: "Hack-a-thon Competition",
      rank: "1st Rank",
      level: "Intra-College",
      location: "Roorkee Institute of Technology",
      category: "Programming",
      description: "Won 1st place in college hackathon, demonstrating exceptional coding skills, teamwork, and innovative problem-solving capabilities.",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Technomax Technical Exhibition",
      rank: "1st Rank",
      level: "Intra-College",
      location: "Roorkee Institute of Technology",
      category: "Technical Innovation",
      description: "Secured 1st position in technical exhibition showcasing innovative projects and technical expertise.",
      icon: "🔬",
      color: "from-green-500 to-emerald-500",
      cashPrize: "₹11,000"
    },
    {
      title: "National Level Exhibition",
      rank: "1st Rank",
      level: "National Level",
      location: "VGU, Jaipur",
      category: "National Competition",
      description: "Achieved 1st rank among 246 total entries in national level exhibition, demonstrating exceptional technical innovation and presentation skills.",
      icon: "🏅",
      color: "from-purple-500 to-violet-500",
      cashPrize: "₹35,000"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      rank: "Certified",
      level: "Professional Certification",
      location: "Amazon Web Services",
      category: "Cloud Computing",
      description: "Successfully completed AWS Cloud Practitioner Essentials certification, demonstrating expertise in cloud computing fundamentals, AWS services, and cloud architecture principles.",
      icon: "☁️",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "React Certificate by SCRIMBA",
      rank: "Certified",
      level: "Professional Certification",
      location: "Scrimba",
      category: "Frontend Development",
      description: "Completed comprehensive React certification program by Scrimba, mastering modern React development, hooks, state management, and component-based architecture.",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Academic":
        return "📚";
      case "Cybersecurity":
        return "🔒";
      case "Programming":
        return "💻";
      case "Technical Innovation":
        return "⚡";
      case "National Competition":
        return "🇮🇳";
      default:
        return "🏆";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-10 relative z-[30]">

      <motion.h1
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center"
      >
        My Achievements
      </motion.h1>

      <div className="w-full max-w-6xl space-y-8">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background gradient overlay */}
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-white">{achievement.title}</h2>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                          {achievement.category}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <TrophyIcon className="h-5 w-5 text-yellow-400" />
                          <span className="text-lg font-semibold text-yellow-400">{achievement.rank}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <StarIcon className="h-5 w-5 text-purple-400" />
                          <span className="text-gray-300">{achievement.level}</span>
                        </div>
                        {achievement.cashPrize && (
                          <div className="flex items-center gap-2">
                            <CurrencyDollarIcon className="h-5 w-5 text-green-400" />
                            <span className="text-lg font-semibold text-green-400">{achievement.cashPrize}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPinIcon className="h-4 w-4" />
                        <span className="text-sm">{achievement.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {achievement.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Statistics Section */}
      <motion.div
        variants={slideInFromTop}
        className="mt-16 w-full max-w-6xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-white mb-2">7</div>
            <div className="text-gray-300">Total Achievements</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-500/30 text-center">
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-gray-300">1st Place Wins</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30 text-center">
            <div className="text-3xl font-bold text-white mb-2">₹46,000</div>
            <div className="text-gray-300">Total Cash Prizes</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30 text-center">
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-gray-300">Certifications</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideInFromTop}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Driven by Excellence</h3>
          <p className="text-gray-300 text-lg mb-6">
            These achievements reflect my commitment to continuous learning, technical excellence, 
            and passion for innovation. I'm always eager to take on new challenges and push the boundaries of what's possible.
          </p>
          <motion.a
            href="/projects"
            className="inline-block py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Achievements;
