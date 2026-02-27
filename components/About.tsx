'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Типы
type HoveredCardId = number | null;

// Константы анимаций (вынесены за компонент для стабильности ссылок)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Данные карточек
const FEATURES = [
  {
    id: 1,
    icon: '✨',
    title: 'Чистая архитектура',
    description:
      'Масштабируемый, поддерживаемый код без технических долгов и костылей',
    color: 'from-violet-600/20 to-purple-600/20',
    borderColor: 'border-violet-500/30',
    accentColor: 'text-violet-400',
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Молниеносная производительность',
    description:
      'Оптимизация Core Web Vitals, минимальный re-render и perfect lighthouse',
    color: 'from-fuchsia-600/20 to-pink-600/20',
    borderColor: 'border-fuchsia-500/30',
    accentColor: 'text-fuchsia-400',
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Pixel Perfect дизайн',
    description:
      'Выверенная сетка, премиальная типографика, плавные микровзаимодействия',
    color: 'from-cyan-600/20 to-blue-600/20',
    borderColor: 'border-cyan-500/30',
    accentColor: 'text-cyan-400',
  },
] as const;

// Статистика для нижнего блока
const STATS = [
  { number: '5+', label: 'Проектов завершено' },
  { number: '100%', label: 'Lighthouse Score' },
  { number: '2+', label: 'В IT индустрии' },
  { number: '∞', label: 'Внимания к деталям' },
] as const;

// Анимации для фоновых blob (общий паттерн)
const createBlobAnimation = (yRange: number[], xRange: number[], duration: number, delay = 0) => ({
  y: yRange,
  x: xRange,
  transition: {
    duration,
    repeat: Infinity,
    ease: 'easeInOut',
    delay,
  },
});

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<HoveredCardId>(null);

  return (
    <section id="about" className="relative py-32 px-6 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -left-40 top-1/3 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={createBlobAnimation([0, 50, 0], [0, 30, 0], 8)}
        />
        <motion.div
          className="absolute -right-40 top-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={createBlobAnimation([0, -50, 0], [0, -30, 0], 10, 1)}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.span
            className="inline-block text-violet-400 text-sm font-bold tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-violet-950/30 border border-violet-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Обо мне
          </motion.span>

          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-silver-300 via-silver-200 to-violet-400 bg-clip-text text-transparent leading-tight">
            Fullstack Developer
            <br />
            <span className="text-4xl md:text-5xl">с фокусом на качество</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-full"
            >
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500`}
                animate={
                  hoveredCard === feature.id
                    ? { opacity: 0.4, scale: 1.05 }
                    : { opacity: 0, scale: 1 }
                }
              />

              <div
                className={`relative h-full bg-slate-900/40 backdrop-blur-xl border ${feature.borderColor} rounded-2xl p-8 transition-all duration-300 hover:bg-slate-900/60 overflow-hidden`}
              >
                <motion.div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                <motion.div
                  className="text-5xl mb-6"
                  animate={
                    hoveredCard === feature.id
                      ? { scale: 1.2, rotate: 12 }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl text-[#ffff] font-bold text-silver-200 mb-3 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-silver-400 text-[#ffff] text-sm leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>

                {/* Цветной индикатор при наведении */}
                <motion.div
                  className={`h-1 rounded-full ${feature.accentColor.replace(
                    'text-',
                    'bg-'
                  )}`}
                  initial={{ width: '0%' }}
                  animate={
                    hoveredCard === feature.id ? { width: '100%' } : { width: '0%' }
                  }
                  transition={{ duration: 0.3 }}
                />

                {/* Декоративные уголки */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-violet-500/20 rounded-tr-xl pointer-events-none group-hover:border-violet-400/40 transition duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-violet-500/20 rounded-bl-xl pointer-events-none group-hover:border-violet-400/40 transition duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Дополнительный блок с информацией и статистикой */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative group"
        >
          {/* Фоновое свечение */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500"
            whileHover={{ opacity: 0.3 }}
          />

          {/* Основной контент */}
          <div className="relative bg-slate-900/40 backdrop-blur-xl border border-silver-400/20 rounded-2xl p-10 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/0 via-transparent to-violet-950/10 rounded-2xl pointer-events-none" />

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Текстовая часть */}
              <div className="space-y-6 text-[#ffff]">
                <p className="text-lg text-silver-300 leading-relaxed">
                  Привет! Я — Юсуфбек, Fullstack разработчик с страстью к созданию
                   веб-приложения, которые не просто функционируют, а{' '}
                  <span className="text-violet-400 font-semibold">
                    вдохновляют
                  </span>{' '}
                  своим дизайном и производительностью.
                </p>
                <p className="text-[#ffff] leading-relaxed">
                  Каждый проект для меня — это баланс между эстетикой,
                  функциональностью и технической совершенностью. Я верю, что
                  отличное программное обеспечение должно быть быстрым, красивым
                  и интуитивным.
                </p>

                <motion.div whileHover={{ x: 5 }} className="inline-block pt-2">
                  <a
                    href="https://github.com/Sayrex009?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors group/link"
                  >
                    Посмотреть мои проекты
                    <motion.span className="group-hover/link:translate-x-2 transition-transform inline-block">
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-slate-800/40 border border-violet-500/20 rounded-xl p-6 text-center hover:border-violet-500/50 transition-all"
                  >
                    <p className="text-3xl font-bold  bg-gradient-to-r from-silver-300 to-violet-400 bg-clip-text text-transparent">
                      {stat.number}
                    </p>
                    <p className="text-silver-400 text-[#ffff] text-sm mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;