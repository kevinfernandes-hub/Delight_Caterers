"use client";

import styles from "./Services.module.css";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: "wedding",
    title: "Weddings",
    description: "Elegant, thoughtfully curated celebrations that reflect your vision.",
    icon: "💍",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Professional catering for conferences, meetings, and team gatherings.",
    icon: "🏢",
  },
  {
    id: "private",
    title: "Private Gatherings",
    description: "Customized menus for birthdays, anniversaries, and intimate occasions.",
    icon: "🎉",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Professional catering solutions tailored to your needs
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <button className={styles.learnMore}>Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
