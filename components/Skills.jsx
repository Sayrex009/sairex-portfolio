"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Palette } from "lucide-react";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiDjango,
  SiDocker,
  SiAmazon,
  SiHtml5,
  SiCss3,
  SiGit,
  SiLinux,
} from "react-icons/si";

const SKILLS = [
  { name: "JavaScript", icon: SiJavascript, category: "Language" },
  { name: "TypeScript", icon: SiTypescript, category: "Language" },
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: Palette, category: "Frontend" },
  { name: "Express", icon: SiExpress, category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "MongoDB", icon: SiMongodb, category: "Database" },
  { name: "Python", icon: SiPython, category: "Language" },
  { name: "Django", icon: SiDjango, category: "Backend" },
  { name: "Git", icon: SiGit, category: "Tools" },
  { name: "Docker", icon: SiDocker, category: "Tools" },
  { name: "AWS", icon: SiAmazon, category: "Cloud" },
  { name: "HTML", icon: SiHtml5, category: "Frontend" },
  { name: "CSS", icon: SiCss3, category: "Frontend" },
  { name: "Linux", icon: SiLinux, category: "OS" },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section id="skills" className="relative py-32 px-6 bg-slate-950 overflow-hidden">
      {/* Spotlight background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-violet-600 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Cinematic Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-slate-200 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-slate-400 text-lg mt-6">
            Инструменты, которые я использую каждый день
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateX: 6,
                  rotateY: -6,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative"
              >
                {/* Animated Glow */}
                <motion.div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 blur-2xl"
                  animate={
                    hoveredIndex === index
                      ? {
                          opacity: 0.7,
                          background: [
                            "linear-gradient(90deg,#7c3aed,#6366f1)",
                            "linear-gradient(180deg,#6366f1,#7c3aed)",
                            "linear-gradient(270deg,#7c3aed,#6366f1)",
                          ],
                        }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-500">
                  {/* Icon animation stays untouched */}
                  <motion.div
                    animate={
                      hoveredIndex === index
                        ? { scale: 1.2, rotate: 360 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.4 }}
                    className="text-5xl mb-4 text-violet-400"
                  >
                    <Icon size={40} />
                  </motion.div>

                  <h3 className="text-slate-200 font-semibold text-lg">
                    {skill.name}
                  </h3>

                  <p className="text-violet-400 text-xs font-medium mt-2 tracking-widest uppercase">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center"
        >
          <p className="text-slate-400 text-lg">
            <span className="text-slate-200 font-semibold">
              Постоянно учусь
            </span>{" "}
            новым технологиям. Сейчас фокус: Web3, AI интеграции и
            микрофронтенды.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
