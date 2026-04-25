'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

const stats = [
  { value: '30+', label: 'Completed Projects' },
  { value: '1+', label: 'Years of Experience' },
  { value: '5+', label: 'Certifications' },
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div 
        className="section-label"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Sparkles size={18} className="accent" />
        <span>👋 Say Hello</span>
      </motion.div>

      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        I'm Sai Sankeerth,<br />
        <span className="accent">Full Stack & AI Engineer |</span><br />
        Building the future of local discovery.
      </motion.h1>

      <motion.p 
        className={styles.description}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        I specialize in building intelligent, scalable applications using modern Full Stack architectures 
        integrated with AI, RAG, and Large Language Models. From robust .NET/Java backends to 
        dynamic Angular/React frontends, I create production-grade products that solve real-world problems.
        Currently focusing on map-based local discovery ecosystems and advanced AI-driven search features.
      </motion.p>

      <motion.div 
        className={styles.actions}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={24} className={styles.scrollIcon} />
        </motion.div>
        <span>Scroll to Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
