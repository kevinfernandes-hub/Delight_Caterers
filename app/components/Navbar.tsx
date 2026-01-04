"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Brand */}
        <Link href="/" className={styles.brand} onClick={closeMobileMenu}>
          <span className={styles.brandIcon}>🍽️</span>
          <span className={styles.brandText}>Delight Caterers</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ""}`}>
          <Link href="/" className={styles.link} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/menu" className={styles.link} onClick={closeMobileMenu}>
            Menu
          </Link>
          <Link href="/contact" className={styles.link} onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
