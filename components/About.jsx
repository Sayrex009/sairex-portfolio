'use client';

import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="relative py-24 px-6 bg-slate-950">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-silver-300 to-violet-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Левая колонка - текст */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-silver-400 leading-relaxed">
              Я — Fullstack разработчик с фокусом на создание <span className="text-violet-400 font-semibold">минималистичных и высокопроизводительных</span> приложений.
            </p>

            <p className="text-lg text-silver-400 leading-relaxed">
              Специализируюсь на современных технологиях: <span className="text-violet-400 font-semibold">React, Next.js, Node.js</span> и базах данных. Каждый проект — это баланс между эстетикой и функциональностью.
            </p>

            <p className="text-lg text-silver-400 leading-relaxed">
              Уделяю внимание деталям: от <span className="text-violet-400 font-semibold">микровзаимодействий</span> до <span className="text-violet-400 font-semibold">производительности</span>. Код пишу чистый, документирую хорошо, деплою быстро.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-8"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-violet-500/30 bg-violet-950/20 text-violet-300 font-medium hover:border-violet-400/50 hover:bg-violet-950/40 transition-all duration-300"
              >
                Посмотреть мой GitHub →
              </a>
            </motion.div>
          </motion.div>

          {/* Правая колонка - карточка со стеклянным эффектом */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative group"
          >
            {/* Светящийся невидимый слой */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />

            {/* Карточка */}
            <div className="relative bg-slate-900/40 backdrop-blur-xl border border-silver-400/20 rounded-2xl p-8 space-y-6">
              {/* Тонкие геометрические линии */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-violet-500/20 rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-violet-500/20 rounded-bl-2xl pointer-events-none" />

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-silver-300">
                  💡 Творческий подход
                </h3>
                <p className="text-silver-500">
                  Каждое решение уникально, нет копипасты
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-silver-300">
                  ⚡ Высокая производительность
                </h3>
                <p className="text-silver-500">
                  Оптимизирую бандл, минимизирую re-render
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-silver-300">
                  🎨 Внимание к дизайну
                </h3>
                <p className="text-silver-500">
                  Интерфейсы, которые радуют использовать
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
