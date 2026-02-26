'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SKILLS = [
  { name: 'JavaScript', icon: '⚙️', category: 'Language' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Express', icon: '🚀', category: 'Backend' },
  { name: 'PostgreSQL', icon: '🗄️', category: 'Database' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'Django', icon: '🏃', category: 'Backend' },
  { name: 'Git', icon: '📚', category: 'Tools' },
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
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-silver-300 to-violet-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-silver-400 text-lg mt-4">
            Инструменты, которые я использую каждый день
          </p>
        </motion.div>

        {/* Сетка скилов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Светящийся фон при hover */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-violet-500 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition duration-500"
                animate={hoveredIndex === index ? { opacity: 0.5 } : { opacity: 0 }}
              />

              {/* Карточка */}
              <div className="relative bg-slate-900/40 backdrop-blur-md border border-silver-400/20 group-hover:border-violet-500/50 rounded-xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300">
                {/* Граница сверху */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Иконка */}
                <motion.div
                  animate={hoveredIndex === index ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-4xl mb-3"
                >
                  {skill.icon}
                </motion.div>

                {/* Название */}
                <h3 className="text-silver-300 font-bold text-lg">
                  {skill.name}
                </h3>

                {/* Категория */}
                <p className="text-violet-400 text-xs font-medium mt-2">
                  {skill.category}
                </p>

                {/* Блеск эффект при hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl"
                  animate={hoveredIndex === index ? { x: ['-100%', '100%'] } : { x: '-100%' }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Легенда */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-6 rounded-xl border border-silver-400/20 bg-slate-900/40 backdrop-blur-md"
        >
          <p className="text-silver-400 text-center">
            💡 <span className="text-silver-300 font-semibold">Постоянно учусь</span> новым технологиям. Текущий фокус: Web3, AI интеграции и микрофронтенды.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
