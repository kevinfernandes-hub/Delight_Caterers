'use client';

import styles from './CuisineSpecialties.module.css';

export default function CuisineSpecialties() {
  const cuisines = [
    'North Indian',
    'South Indian',
    'Jain Food',
    'Live Counters',
    'Custom Menus',
  ];

  return (
    <section className={styles.cuisineSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Cuisine Specialties</h2>
        
        <div className={styles.cuisineList}>
          {cuisines.map((cuisine, index) => (
            <div key={index} className={styles.cuisineItem}>
              <p className={styles.cuisineName}>{cuisine}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
