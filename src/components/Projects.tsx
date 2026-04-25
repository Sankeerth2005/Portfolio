'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowUpRight } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Localink',
    category: 'Map-First Discovery & AI',
    description: 'A full-scale startup-grade platform connecting local businesses with customers. Features advanced map-based discovery, AI-driven recommendations, and a robust verification system.',
    tags: ['Next.js', 'Python', 'AI/RAG', 'PostgreSQL', 'Google Maps API'],
    image: '/images/localink-project.png',
    link: 'https://github.com/Sankeerth2005'
  },
  {
    title: 'DukaanLedger',
    category: 'SaaS & Fintech',
    description: 'A multi-tenant SaaS application for small business owners to manage inventory, sales, and analytics. Implements strict data isolation and real-time business insights.',
    tags: ['React', 'Java Spring Boot', 'AWS', 'Docker', 'SQL Server'],
    image: '/images/web-project.png',
    link: 'https://github.com/Sankeerth2005'
  },
  {
    title: 'AI Text Rewriter',
    category: 'AI & Automation',
    description: 'An intelligent writing assistant that leverages Large Language Models to transform text styles, fix grammar, and optimize content for better engagement.',
    tags: ['Python', 'OpenAI API', 'Next.js', 'LangChain', 'FastAPI'],
    image: '/images/ai-project.png',
    link: 'https://github.com/Sankeerth2005'
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-label">
        <Rocket size={16} />
        <span>Featured Projects</span>
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <motion.a 
            key={i} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} className={styles.image} />
            </div>
            <div className={styles.info}>
              <div className={styles.text}>
                <p className={styles.meta}>{project.category}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.linkIcon}>
              <ArrowUpRight size={24} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
