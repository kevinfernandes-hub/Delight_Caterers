import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Delight Caterers</h3>
          <p className={styles.tagline}>
            Exceptional culinary experiences for every occasion
          </p>
        </div>

        {/* Contact Info */}
        <div className={styles.column}>
          <h4 className={styles.subheading}>Contact Us</h4>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📞</span>
            <a href="tel:+919689330035">+91 9689330035</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📍</span>
            <span>Nagpur, Maharashtra</span>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.column}>
          <h4 className={styles.subheading}>Navigation</h4>
          <ul className={styles.links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Credibility and Copyright */}
      <div className={styles.copyright}>
        <p className={styles.credibility}>Established in 2012 • Founded by Merwyn Fernandes</p>
        <p>&copy; Delight Caterers. All rights reserved.</p>
      </div>
    </footer>
  );
}
