'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-silver-400/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Логотип */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-silver-300 to-violet-400 bg-clip-text text-transparent"
        >
          &lt;DEV /&gt;
        </motion.a>

        {/* Desktop навигация */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-silver-300 hover:text-violet-400 transition-colors duration-300 font-medium"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA кнопка */}
        <motion.a
          href="mailto:hello@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold text-sm border border-violet-400/20 hover:border-violet-400/50 transition-all"
        >
          Get in touch
        </motion.a>

        {/* Mobile меню кнопка */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-silver-300 hover:text-violet-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile меню */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-slate-900/90 backdrop-blur-lg border-b border-silver-400/10"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 10 }}
              className="block text-silver-300 hover:text-violet-400 transition-colors font-medium"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="mailto:hello@example.com"
            className="block px-6 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold text-center"
          >
            Get in touch
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
