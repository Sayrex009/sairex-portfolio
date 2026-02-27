'use client';

import { motion } from 'framer-motion';
import {
  SiGithub,
  SiLinkedin,
  SiTelegram,
  SiX,
} from 'react-icons/si';
import { Mail } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: SiGithub,
      url: 'https://github.com/Sayrex009',
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      url: 'https://www.linkedin.com/in/yusufbek-khamidullaev-757574389/',
    },
    {
      name: 'Telegram',
      icon: SiTelegram,
      url: 'https://t.me/ssrex9x',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@example.com',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-slate-950 overflow-hidden">

      {/* Cinematic background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-violet-600 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 via-violet-400 to-indigo-400 bg-clip-text text-transparent mb-8"
          >
            Let’s Build Something Great
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-14"
          >
            Готов обсудить проект, стартап или просто пообщаться о технологиях.
            Всегда открыт к новым возможностям.
          </motion.p>

          {/* Premium Button */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block relative group"
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

              {/* Button */}
              <div className="relative px-12 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg border border-white/10 backdrop-blur-xl">
                Send Me an Email
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-20 origin-center"
        />

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-center gap-10"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.2,
                  y: -6,
                }}
                whileTap={{ scale: 0.9 }}
                className="relative group text-slate-300"
              >
                <div className="absolute -inset-2 rounded-full bg-violet-600/20 blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                <Icon size={32} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 pt-2 border-t border-white/10 text-slate-500 text-sm"
        >
          © 2026 Yusufbek. Crafted with Next.js & Framer Motion.
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
