'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'One-Pc',
    description: 'Интернет-магазин компьютерной техники с кастомной админкой, интеграцией платежей и аналитикой',
    tags: ['Next.js', 'TypeScript','Tailwind CSS', 'API', 'PostgreSQL', 'Vercel', 'JavaScript'],
    image: '🛍️',
    color: 'from-blue-600 to-cyan-600',
    link: 'https://www.onepc.uz/ru',
  },
  {
    id: 2,
    title: 'AI Telegram Bot',
    description: 'Чат-приложение которое переделавыет фото на видео прямо внутри телеграмма, с интеграцией AI, микроинтеракциями и real-time синхронизацией',
    tags: [ 'Gemini AI', 'docker',  'Redis', 'Aiogram', 'python', 'django', 'PostgreSQL'],
    image: '🤖',
    color: 'from-purple-600 to-pink-600',
    link: 'https://github.com/Sayrex009/Sairex_AI_VIDEO_PHOTO',
  },
  {
    id: 3,
    title: 'Kassimov Stuido',
    description: 'Сайт для бронирования фотостудии с календарем, онлайн-оплатой и админкой для управления бронированиями',
    tags: ['React', 'Tailwind', 'Next.js', 'API', 'PostgreSQL', 'Vercel', 'TypeScript'],
    image: '✨',
    color: 'from-green-600 to-emerald-600',
    link: 'https://www.kasimovstudio.uz/uz',
  },
  {
    id: 4,
    title: 'Deribit',
    description: 'Бекенд проект который получает данные с биржи криптовалют, обрабатывает их и отображает в виде интерактивных графиков и таблиц',
    tags: ['Python', 'Docker', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'RabbitMQ','Data Visualization'],
    image: '📊',
    color: 'from-orange-600 to-red-600',
    link: 'https://github.com/Sayrex009/Deribit',
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="relative py-24 px-6 bg-slate-950">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
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
          <h2 className="text-6xl font-bold bg-gradient-to-r from-slate-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-silver-400 text-[#ffff] text-lg mt-4">
            Избранные проекты, которыми я горжусь
          </p>
        </motion.div>

        {/* Сетка проектов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative"
            >
              {/* Светящийся эффект */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500`}
                animate={hoveredIndex === index ? { opacity: 0.25 } : { opacity: 0 }}
              />

              {/* Карточка */}
              <div className="relative bg-slate-900/40 backdrop-blur-xl border border-silver-400/20 group-hover:border-silver-400/50 rounded-2xl overflow-hidden transition-all duration-300">
                {/* Верхняя часть с иконкой */}
                <div className={`relative h-32 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  {/* Светящийся текст иконки */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-40 transition duration-300">
                    {project.image}
                  </div>

                  {/* Наложение для текстуры */}
                  <div className="absolute inset-0 bg-noise opacity-10" />

                  {/* Светящаяся линия */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Нижняя часть - контент */}
                <div className="p-8 space-y-4">
                  {/* Заголовок */}
                  <h3 className="text-2xl text-indigo-500 font-bold text-silver-300">
                    {project.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-silver-400 text-[#ffff] leading-relaxed min-h-16">
                    {project.description}
                  </p>

                  {/* Теги */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-sm font-medium hover:border-violet-500/60 transition duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Кнопка */}
                  <motion.a
                    href={project.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-violet-400 font-semibold mt-6 group/button"
                  >
                    Посмотреть проект
                    <motion.span
                      animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>

                {/* Граница сверху */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver-400/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-silver-400 text-lg mb-8 text-indigo-500">
            Хочешь увидеть больше? Всё доступно в моем github репозитории!
          </p>
          <motion.a
            href="https://github.com/Sayrex009?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold border border-violet-400/20 hover:border-violet-400/50 transition-all"
          >
            Посмотреть все проекты на GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
