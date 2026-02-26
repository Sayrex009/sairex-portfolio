'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com', color: 'hover:text-slate-300' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com', color: 'hover:text-gray-400' },
    { name: 'Email', icon: '✉️', url: 'mailto:hello@example.com', color: 'hover:text-violet-400' },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Основной контент */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          {/* Заголовок */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-silver-300 to-violet-400 bg-clip-text text-transparent mb-6"
          >
            Let's Create Something Amazing
          </motion.h2>

          {/* Подтекст */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-silver-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Готов начать новый проект или просто поговорить о технологиях?
            Я всегда открыт для интересных предложений.
          </motion.p>

          {/* Кнопка с эффектом */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="mailto:hello@example.com"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <div className="relative group">
                {/* Светящийся фон */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-violet-500 rounded-xl opacity-20 group-hover:opacity-40 blur-lg transition duration-300"
                  animate={isHovered ? { opacity: 0.5 } : { opacity: 0.2 }}
                />

                {/* Кнопка */}
                <div className="relative px-10 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-lg border border-violet-400/20 group-hover:border-violet-400/50 transition-all duration-300">
                  Send Me an Email
                </div>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Разделитель */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-silver-400/30 to-transparent my-16 origin-center"
        />

        {/* Социальные сети */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-4xl transition-colors duration-300 ${link.color}`}
              title={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Футер с информацией */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center pt-8 border-t border-silver-400/20"
        >
          <p className="text-silver-500 text-sm mb-2">
            © 2025 Your Name. Crafted with ❤️ using Next.js & Framer Motion.
          </p>
          <p className="text-silver-600 text-xs">
            Designed for those who appreciate great design and clean code.
          </p>
        </motion.div>

        {/* Floating элементы */}
        <motion.div
          className="absolute bottom-10 left-5 text-5xl opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ pointerEvents: 'none' }}
        >
          ✨
        </motion.div>

        <motion.div
          className="absolute top-20 right-10 text-4xl opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ pointerEvents: 'none' }}
        >
          🚀
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
