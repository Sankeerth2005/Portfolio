'use client';
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      
      <main className={styles.main}>
        <div className={styles.content}>
          <Hero />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <TechStack />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Services />
          <div className="section-divider" />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
