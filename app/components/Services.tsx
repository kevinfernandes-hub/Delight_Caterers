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
    title: "Wedding Catering",
    description: "Create unforgettable memories with our elegant wedding catering services. From intimate ceremonies to grand receptions, we deliver excellence.",
    icon: "💍",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Impress your clients and employees with professional catering for conferences, meetings, and corporate celebrations.",
    icon: "🏢",
  },
  {
    id: "private",
    title: "Private Parties",
    description: "Make your celebrations special with customized menus for birthdays, anniversaries, and intimate gatherings.",
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
