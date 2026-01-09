"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

interface MenuItem {
  id: number;
  item_name: string;
  category: string;
  price: number;
}

export default function AdminMenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:5000/api/menu");
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      setMenuItems(Array.isArray(data) ? data : data.items || []);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load menu data";
      setError(message);
      console.error("Error fetching menu data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.menuAdminPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Menu Management</h1>
          <p className={styles.pageSubtitle}>
            View and manage catering menu items
          </p>
        </div>
        <button 
          className={styles.refreshButton}
          onClick={fetchMenuData}
          disabled={loading}
        >
          {loading ? "Loading..." : "🔄 Refresh"}
        </button>
      </div>

      {/* Main Content */}
      <div className={styles.contentContainer}>
        {/* Error State */}
        {error && (
          <div className={styles.errorBox}>
            <span className={styles.errorIcon}>⚠️</span>
            <div>
              <p className={styles.errorTitle}>Failed to load menu</p>
              <p className={styles.errorMessage}>{error}</p>
              <button 
                className={styles.errorRetryButton}
                onClick={fetchMenuData}
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && !error && (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Loading menu items...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && menuItems.length === 0 && (
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateIcon}>📋</p>
            <p className={styles.emptyStateTitle}>No menu items found</p>
            <p className={styles.emptyStateText}>
              Start by adding menu items to the database
            </p>
          </div>
        )}

        {/* Table */}
        {!loading && !error && menuItems.length > 0 && (
          <div className={styles.tableWrapper}>
            <table className={styles.menuTable}>
              <thead className={styles.tableHead}>
                <tr>
                  <th className={styles.colName}>Item Name</th>
                  <th className={styles.colCategory}>Category</th>
                  <th className={styles.colPrice}>Price (₹)</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {menuItems.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className={`${styles.tableRow} ${index % 2 === 0 ? styles.rowEven : styles.rowOdd}`}
                  >
                    <td className={styles.cellName}>{item.item_name}</td>
                    <td className={styles.cellCategory}>
                      <span className={styles.categoryBadge}>{item.category}</span>
                    </td>
                    <td className={styles.cellPrice}>
                      <span className={styles.priceTag}>₹{item.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Stats Footer */}
        {!loading && !error && menuItems.length > 0 && (
          <div className={styles.statsFooter}>
            <p>Total items: <strong>{menuItems.length}</strong></p>
            <p>Categories: <strong>{new Set(menuItems.map(item => item.category)).size}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}
