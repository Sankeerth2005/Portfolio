'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BrainCircuit, Globe, Database, Smartphone } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    title: 'AI & LLM Integration',
    description: 'Developing custom RAG (Retrieval-Augmented Generation) pipelines and integrating Large Language Models like GPT-4 into enterprise applications.',
    icon: <BrainCircuit size={28} />,
    color: '#39FF14'
  },
  {
    title: 'Full Stack Development',
    description: 'Building scalable web applications from scratch using modern frameworks like Next.js, React, and Angular with robust backend systems.',
    icon: <Code2 size={28} />,
    color: '#00f2ff'
  },
  {
    title: 'Backend Engineering',
    description: 'Designing high-performance REST & GraphQL APIs using Java Spring Boot and .NET Core, focusing on concurrency and low latency.',
    icon: <Server size={28} />,
    color: '#ff00ff'
  },
  {
    title: 'Cloud Architecture',
    description: 'Architecting secure and scalable cloud infrastructure on AWS, implementing CI/CD pipelines and containerized deployments with Docker.',
    icon: <Globe size={28} />,
    color: '#ffaa00'
  },
  {
    title: 'Database Management',
    description: 'Expertise in relational databases like PostgreSQL and SQL Server, optimizing complex queries and ensuring data integrity.',
    icon: <Database size={28} />,
    color: '#0066ff'
  },
  {
    title: 'Mobile Solutions',
    description: 'Creating responsive, mobile-first web experiences that provide a native-like feel across all devices and screen sizes.',
    icon: <Smartphone size={28} />,
    color: '#ff3300'
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className="section-label">
        <Code2 size={16} />
        <span>What I Do</span>
      </div>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <motion.div 
            key={i} 
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.icon} style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
