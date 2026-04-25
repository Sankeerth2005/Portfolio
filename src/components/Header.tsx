'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Menu, X, Code2, Link2 } from 'lucide-react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Tech', href: '#tech' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.container}>
          {/* Logo */}
          <motion.a
            href="/"
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.logoInner}>S.</span>
          </motion.a>

          {/* Nav links */}
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${active === link.href ? styles.navLinkActive : ''}`}
                onClick={() => setActive(link.href)}
              >
                {link.label}
                <span className={styles.navUnderline} />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className={styles.actions}>
            <motion.a
              href="https://github.com/Sankeerth2005"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/saisankeerthanchuru"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Link2 size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.ctaBtn}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Let's Talk
              <ExternalLink size={13} />
            </motion.a>
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className={styles.mobileCta}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
