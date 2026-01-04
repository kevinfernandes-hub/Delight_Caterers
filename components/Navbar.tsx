import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Delight Caterers
        </Link>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className={styles.navLink}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/admin/login" className={styles.adminButton}>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
