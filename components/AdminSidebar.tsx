"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AdminSidebar.module.css";

export default function AdminSidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/admin", label: "Dashboard", icon: "📊" },
    { href: "/admin/orders", label: "Orders", icon: "📦" },
    { href: "/admin/bills", label: "Bills", icon: "💰" },
    { href: "/admin/customers", label: "Customers", icon: "👥" },
    { href: "/admin/menu", label: "Menu", icon: "🍽️" },
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Sidebar Header */}
      <div className={styles.sidebarHeader}>
        <h1 className={styles.sidebarTitle}>Delight Caterers</h1>
        <p className={styles.sidebarSubtitle}>Admin Panel</p>
      </div>

      {/* Navigation Links */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    isActive ? styles.navLinkActive : ""
                  }`}
                >
                  <span className={styles.navIcon}>{link.icon}</span>
                  <span className={styles.navLabel}>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className={styles.sidebarFooter}>
        <button className={styles.logoutButton}>
          <span className={styles.logoutIcon}>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
