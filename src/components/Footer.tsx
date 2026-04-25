'use client';
import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        Built with <span className={styles.tech}>Next.js</span>
      </div>
      
      <div className={styles.center}>
        <div className={styles.avatarMini}>
          <img
            src="/images/profile.png"
            alt="Sai Sankeerth"
            className={styles.miniImg}
          />
        </div>
        <span className={styles.signature}>Sai Sankeerth</span>
      </div>
      
      <div className={styles.right}>
        Created by <span className={styles.pill}>Sai Sankeerth</span>
      </div>
    </footer>
  );
};

export default Footer;
