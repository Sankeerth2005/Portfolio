'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className="section-label">
        <MessageSquare size={16} className="accent" />
        <span>Contact</span>
      </div>

      <h2 className={styles.title}>Let's Get in Touch!</h2>
      
      <div className={styles.container}>
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><Phone size={18} /></div>
            <div className={styles.infoText}>
              <div className={styles.infoLabel}>Contact No</div>
              <a href="tel:+916305250039" className={styles.infoValue}>+91 6305250039</a>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><Mail size={18} /></div>
            <div className={styles.infoText}>
              <div className={styles.infoLabel}>Email</div>
              <a href="mailto:anchurusaisankeerth@gmail.com" className={styles.infoValue}>anchurusaisankeerth@gmail.com</a>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><MapPin size={18} /></div>
            <div className={styles.infoText}>
              <div className={styles.infoLabel}>Address</div>
              <div className={styles.infoValue}>Hyderabad, India</div>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Full Name" className={styles.input} />
              <input type="email" placeholder="Email" className={styles.input} />
            </div>
            <input type="text" placeholder="Phone Number" className={styles.input} />
            <textarea placeholder="Message" className={styles.textarea} rows={5}></textarea>
            
            <motion.button 
              type="submit" 
              className={styles.submitBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
