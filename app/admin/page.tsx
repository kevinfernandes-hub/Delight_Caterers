import styles from "./page.module.css";

const stats = [
  {
    id: 1,
    label: "Total Orders",
    value: "124",
    icon: "📦",
    color: "blue",
  },
  {
    id: 2,
    label: "Total Revenue",
    value: "₹4,25,000",
    icon: "💰",
    color: "green",
  },
  {
    id: 3,
    label: "Active Customers",
    value: "86",
    icon: "👥",
    color: "purple",
  },
  {
    id: 4,
    label: "Pending Orders",
    value: "7",
    icon: "⏳",
    color: "orange",
  },
];

const recentActivities = [
  {
    id: 1,
    message: "New order received from Rohit Sharma",
    timestamp: "2 hours ago",
    icon: "📦",
  },
  {
    id: 2,
    message: "Bill generated for Wedding Event",
    timestamp: "4 hours ago",
    icon: "💵",
  },
  {
    id: 3,
    message: "Menu updated by admin",
    timestamp: "1 day ago",
    icon: "🍽️",
  },
  {
    id: 4,
    message: "New customer registered: Priya Patel",
    timestamp: "2 days ago",
    icon: "👤",
  },
];

export default function AdminDashboard() {
  return (
    <div className={styles.dashboardContainer}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Dashboard</h1>
          <p className={styles.pageSubtitle}>
            Overview of your catering business
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles[`icon${stat.color}`]}`}>
                {stat.icon}
              </div>
              <div className={styles.statContent}>
                <p className={styles.statLabel}>{stat.label}</p>
                <p className={styles.statValue}>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className={styles.activitySection}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        <div className={styles.activityList}>
          {recentActivities.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={styles.activityIcon}>{activity.icon}</div>
              <div className={styles.activityContent}>
                <p className={styles.activityMessage}>{activity.message}</p>
                <span className={styles.activityTime}>{activity.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
