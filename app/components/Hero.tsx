"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Catering Excellence in Nagpur
          </h1>
          <p className={styles.subheading}>
            Delight Caterers — Since 2012
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/menu" className={`${styles.button} ${styles.buttonPrimary}`}>
              View Packages
            </Link>
            <Link href="/contact" className={`${styles.button} ${styles.buttonSecondary}`}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
