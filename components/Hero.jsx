'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)',
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        {/* Градиентные блобы */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-violet-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }} />

        {/* Светящиеся эффекты */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 140 }}
        >
          <div className="w-48 h-48 rounded-full bg-glow-radial opacity-40" />
        </motion.div>
      </div>

      {/* Контент */}
      <div className="relative z-10 h-screen flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Мигающий баннер */}
          <motion.div
            variants={textVariants}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-violet-500/30 bg-violet-950/20 backdrop-blur-md"
          >
            <span className="text-violet-300 text-sm font-medium">Welcome to my portfolio</span>
          </motion.div>

          {/* Заголовок */}
          <motion.h1
            variants={textVariants}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-silver-300 via-violet-400 to-violet-500 bg-clip-text text-transparent"
          >
            Fullstack Developer
          </motion.h1>

          {/* Подзаголовок */}
          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl text-silver-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Создаю минималистичные, высокопроизводительные приложения с элегантным дизайном и плавными анимациями
          </motion.p>

          {/* Кнопки CTA */}
          <motion.div
            variants={textVariants}
            className="flex gap-6 justify-center flex-wrap"
          >
            <motion.a
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold backdrop-blur-md border border-violet-400/20 hover:border-violet-400/50 transition-all cursor-pointer"
            >
              Посмотреть проекты
            </motion.a>
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              className="px-8 py-4 rounded-lg border border-silver-400/40 text-silver-300 font-semibold backdrop-blur-md bg-slate-950/40 hover:bg-slate-900/60 hover:border-silver-400/80 transition-all cursor-pointer"
            >
              Написать мне
            </motion.a>
          </motion.div>

          {/* Прокрутка вниз */}
          <motion.div
            variants={textVariants}
            className="mt-20 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-silver-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
