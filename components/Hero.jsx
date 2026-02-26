"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(12px)" },
  visible: {
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // Плавный инерционный выезд (Custom Expo Ease)
    }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Задержка между появлением каждого элемента
      delayChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center px-6 py-20 overflow-hidden   text-white">
      
      {/* ===== ФОН (Оптимизированный) ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Анимированное свечение (CSS) */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-900 rounded-full blur-[140px] animate-pulse" />
        
        {/* Текстурная сетка */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      {/* ===== КОНТЕНТ ===== */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full flex flex-col gap-8 top-12 items-center"
      >
        {/* Бейдж с увеличенным отступом снизу */}
        <motion.div variants={reveal} className="mb-10">
          <div className="px-5 py-2 rounded-full w-[350px] h-10 flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-xs  md:text-sm font-semibold tracking-[0.3em] uppercase bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Fullstack Разработчик
            </span>
          </div>
        </motion.div>

        {/* Заголовок с плотным межстрочным интервалом */}
        <motion.h1
          variants={reveal}
          className="text-5xl sm:text-7xl lg:text-8xl font-black text-center tracking-tighter leading-[1] mb-8"
        >
          СОЗДАЮ <br />
          <span className="text-gray-500">БУДУЩЕЕ</span> <br />
          <span className="bg-gradient-to-r from-white via-violet-200 to-purple-500 bg-clip-text text-transparent">
            В КОДЕ
          </span>
        </motion.h1>

        {/* Описание с увеличенным пространством вокруг */}
        <motion.p
          variants={reveal}
          className="max-w-2xl text-center text-gray-400 text-lg md:text-xl leading-relaxed mb-16 px-4"
        >
          Разработка высокопроизводительных веб-интерфейсов и сложных серверных решений. 
          Минимализм в дизайне, максимализм в деталях.
        </motion.p>

        {/* БЛОК КНОПОК: Добавлено много «воздуха» (mt-20 и gap-6) */}
        <motion.div
          variants={reveal}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group relative flex items-center justify-center px-10 h-16 w-full sm:w-72 overflow-hidden rounded-full bg-white text-black font-bold text-lg transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Смотреть проекты</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center px-10 h-16 w-full sm:w-72 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all active:scale-95"
          >
            Связаться
          </a>
        </motion.div>
      </motion.div>

      {/* Элегантный индикатор скролла */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-violet-500 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}