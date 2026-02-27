'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  Palette,
} from 'lucide-react';

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
} from 'react-icons/si';

const SKILLS = [
  { name: 'JavaScript', icon: SiJavascript, category: 'Language' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Language' },
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: Palette, category: 'Frontend' },
  { name: 'Express', icon: SiExpress, category: 'Backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  { name: 'Python', icon: SiPython, category: 'Language' },
  { name: 'Django', icon: SiDjango, category: 'Backend' },
  { name: 'Git', icon: SiGit, category: 'Tools' },
  { name: 'Docker', icon: SiDocker, category: 'Tools' },
  { name: 'AWS', icon: SiAmazon, category: 'Cloud' },
  { name: 'HTML', icon: SiHtml5, category: 'Frontend' },
  { name: 'CSS', icon: SiCss3, category: 'Frontend' },
  { name: 'Linux', icon: SiLinux, category: 'OS' }
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-300 to-violet-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-slate-400 text-lg mt-4">
            Инструменты, которые я использую каждый день
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-violet-500 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition duration-500"
                  animate={hoveredIndex === index ? { opacity: 0.5 } : { opacity: 0 }}
                />

                <div className="relative bg-slate-900/40 backdrop-blur-md border border-slate-400/20 group-hover:border-violet-500/50 rounded-xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300">
                  
                  <motion.div
                    animate={
                      hoveredIndex === index
                        ? { scale: 1.2, rotate: 360 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.4 }}
                    className="text-4xl mb-3 text-violet-400"
                  >
                    <Icon />
                  </motion.div>

                  <h3 className="text-slate-300 font-bold text-lg">
                    {skill.name}
                  </h3>

                  <p className="text-violet-400 text-xs font-medium mt-2">
                    {skill.category}
                  </p>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl"
                    animate={
                      hoveredIndex === index
                        ? { x: ['-100%', '100%'] }
                        : { x: '-100%' }
                    }
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-6 rounded-xl border border-slate-400/20 bg-slate-900/40 backdrop-blur-md"
        >
          <p className="text-slate-400 text-center">
            <span className="text-slate-300 font-semibold">Постоянно учусь</span> новым технологиям. Текущий фокус: Web3, AI интеграции и микрофронтенды.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
