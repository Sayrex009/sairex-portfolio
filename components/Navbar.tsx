"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}

      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-50">
      <div
        className={`
        relative flex items-center justify-between
        px-8 py-3
        rounded-2xl
        backdrop-blur-3xl
        border border-white/10
        transition-all duration-500
        ${
          isScrolled
            ? "bg-white/5 shadow-[0_0_60px_rgba(139,92,246,0.35)]"
            : "bg-white/3"
        }
      `}
      >
        {/* Soft ambient glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl opacity-70 pointer-events-none" />

        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="relative text-lg font-semibold text-white/90"
        >
          &lt;Sairex /&gt;
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 relative">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="relative text-white/60 hover:text-white transition duration-300 group text-sm font-medium"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white/80 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Premium Glow Button */}
        <motion.a
          href="https://t.me/ssrex9x"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-semibold text-white transition-all duration-500"
        >
          {/* Outer Glow */}
          <span className="absolute inset-0 rounded-full bg-fuchsia-500 blur-2xl opacity-40" />

          {/* Inner glass */}
          <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-xl border border-white/20" />

          <span className="relative z-10">
            Get in touch
          </span>
        </motion.a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white relative z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden mt-3 rounded-2xl backdrop-blur-3xl bg-white/5 border border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/70 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
