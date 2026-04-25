'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'Mphasis',
    role: 'Associate Software Engineer Intern',
    period: 'Jan 2026 - Apr 2026  ',
    description: 'Spearheading the development of high-performance backend microservices using Java Spring Boot. Focused on optimizing database queries and implementing secure REST APIs for large-scale enterprise solutions.',
    highlights: [
      'Improved API response times by 30% through query optimization',
      'Developed real-time notification system using WebSocket',
      'Collaborated on cloud-native migration using AWS'
    ],
    icon: '🚀',
    color: '#39FF14'
  },
  {
    company: 'Mroads',
    role: 'DevOps Intern',
    period: 'Oct 2025 - Jan 2026',
    description: 'Designed and implemented automated CI/CD pipelines to streamline deployment workflows. Managed cloud-based Linux environments and focused on infrastructure-as-code practices.',
    highlights: [
      'Automated deployment cycles using GitHub Actions and Docker',
      'Managed 15+ AWS EC2 instances and RDS databases',
      'Implemented centralized logging and monitoring with CloudWatch'
    ],
    icon: '☁️',
    color: '#00f2ff'
  }
];

const education = [
  {
    school: 'Sreyas Institute of Engineering and Technology',
    degree: 'B.E. in Artificial Intelligence & Data Science',
    period: '2022 - 2026',
    description: 'Specializing in advanced AI architectures, machine learning algorithms, and large-scale data engineering projects. Consistently maintaining high academic performance.',
    highlights: [
      'Current CGPA: 8.78/10',
      'Core member of AI & Robotics Club',
      'Published research paper on Local Discovery Algorithms'
    ],
    icon: '🎓',
    color: '#ff00ff'
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-label">
        <Briefcase size={16} />
        <span>Professional Journey</span>
      </div>

      <div className={styles.list}>
        {experiences.map((exp, i) => (
          <motion.div 
            key={i} 
            className={styles.card}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.icon} style={{ background: `${exp.color}15`, color: exp.color }}>{exp.icon}</div>
              <div className={styles.headerContent}>
                <div className={styles.period}>{exp.period}</div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
              </div>
            </div>
            <p className={styles.description}>{exp.description}</p>
            <ul className={styles.highlights}>
              {exp.highlights.map((h, j) => (
                <li key={j}>
                  <CheckCircle2 size={14} className={styles.bullet} style={{ color: exp.color }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="section-divider" />

      <div className="section-label">
        <GraduationCap size={16} />
        <span>Academic Background</span>
      </div>

      <div className={styles.list}>
        {education.map((edu, i) => (
          <motion.div 
            key={i} 
            className={styles.card}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.icon} style={{ background: `${edu.color}15`, color: edu.color }}>{edu.icon}</div>
              <div className={styles.headerContent}>
                <div className={styles.period}>{edu.period}</div>
                <h3 className={styles.role}>{edu.degree}</h3>
                <p className={styles.company}>{edu.school}</p>
              </div>
            </div>
            <p className={styles.description}>{edu.description}</p>
            <ul className={styles.highlights}>
              {edu.highlights.map((h, j) => (
                <li key={j}>
                  <CheckCircle2 size={14} className={styles.bullet} style={{ color: edu.color }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
