'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Mail, Phone, MapPin, Home, Briefcase, Rocket, Layers, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.inner}>
        {/* Avatar */}
        <div className={styles.avatarWrap}>
          <img
            src="/images/profile.png"
            alt="Sai Sankeerth Anchuru"
            className={styles.avatar}
          />
        </div>

        {/* Status badge */}
        <motion.div
          className={styles.status}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className={styles.statusDot} />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Sai Sankeerth Anchuru
        </motion.h1>

        {/* Social Icons - Using SVGs for brand fidelity */}
        <motion.div 
          className={styles.socials}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <a href="https://www.instagram.com/sankeerth_24/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className={styles.socialLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="https://github.com/Sankeerth2005" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://linkedin.com/in/saisankeerthanchuru" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.actionRow}>
            <motion.a
              href="/resume.pdf"
              download
              className={styles.downloadBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={15} />
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.contactBtn}
              whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(57,255,20,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={15} />
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            <Home size={16} />
            <span>Home</span>
          </a>
          <a href="#experience" className={styles.navLink}>
            <Briefcase size={16} />
            <span>Experience</span>
          </a>
          <a href="#projects" className={styles.navLink}>
            <Rocket size={16} />
            <span>Projects</span>
          </a>
          <a href="#tech" className={styles.navLink}>
            <Layers size={16} />
            <span>Tech Stack</span>
          </a>
          <a href="#contact" className={styles.navLink}>
            <MessageSquare size={16} />
            <span>Contact</span>
          </a>
        </nav>

        {/* Contact info list at bottom */}
        <div className={styles.divider} />
        <motion.div
          className={styles.contactList}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <a href="mailto:anchurusaisankeerth@gmail.com" className={styles.contactItem}>
            <span className={styles.contactIcon}><Mail size={14} /></span>
            <div>
              <div className={styles.contactLabel}>Email</div>
              <div className={styles.contactValue}>anchurusaisankeerth@gmail.com</div>
            </div>
          </a>
          <a href="tel:+916305250039" className={styles.contactItem}>
            <span className={styles.contactIcon}><Phone size={14} /></span>
            <div>
              <div className={styles.contactLabel}>Phone</div>
              <div className={styles.contactValue}>+91 6305250039</div>
            </div>
          </a>
        </motion.div>
      </div>
    </aside>
  );
};

export default Sidebar;
