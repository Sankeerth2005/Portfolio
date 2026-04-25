'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Monitor, Server, Database, Cloud } from 'lucide-react';
import styles from './TechStack.module.css';

const categories = [
  {
    name: 'AI & Intelligence',
    icon: <Monitor size={18} />,
    skills: [
      { name: 'Python', level: 'Expert', icon: '🐍' },
      { name: 'RAG Architecture', level: 'Advanced', icon: '🧠' },
      { name: 'LLM Orchestration', level: 'Advanced', icon: '🤖' },
      { name: 'LangChain', level: 'Intermediate', icon: '🦜' },
    ]
  },
  {
    name: 'Backend Systems',
    icon: <Server size={18} />,
    skills: [
      { name: 'Java', level: 'Expert', icon: '☕' },
      { name: 'Spring Boot', level: 'Expert', icon: '🍃' },
      { name: '.NET Core', level: 'Advanced', icon: '🔷' },
      { name: 'C#', level: 'Advanced', icon: '♯' },
    ]
  },
  {
    name: 'Frontend Engineering',
    icon: <Monitor size={18} />,
    skills: [
      { name: 'Next.js', level: 'Advanced', icon: '▲' },
      { name: 'React', level: 'Advanced', icon: '⚛️' },
      { name: 'Angular', level: 'Intermediate', icon: '🅰️' },
      { name: 'TypeScript', level: 'Advanced', icon: 'TS' },
    ]
  },
  {
    name: 'Cloud & Database',
    icon: <Cloud size={18} />,
    skills: [
      { name: 'AWS', level: 'Advanced', icon: '☁️' },
      { name: 'PostgreSQL', level: 'Expert', icon: '🐘' },
      { name: 'Docker', level: 'Advanced', icon: '🐳' },
      { name: 'Kubernetes', level: 'Intermediate', icon: '⎈' },
    ]
  }
];

const TechStack = () => {
  return (
    <section id="tech" className={styles.section}>
      <div className="section-label">
        <Layers size={16} />
        <span>Technological Arsenal</span>
      </div>

      <div className={styles.categories}>
        {categories.map((cat, i) => (
          <motion.div 
            key={i} 
            className={styles.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.catHeader}>
              {cat.icon}
              <h3>{cat.name}</h3>
            </div>
            <div className={styles.grid}>
              {cat.skills.map((skill, j) => (
                <div key={j} className={styles.skillCard}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <div className={styles.skillName}>{skill.name}</div>
                    <div className={styles.skillLevel}>{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
