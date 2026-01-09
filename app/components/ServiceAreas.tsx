'use client';

import styles from './ServiceAreas.module.css';

export default function ServiceAreas() {
  const areas = [
    'Nagpur',
    'Katol Road',
    'Wardha Road',
    'Hingna',
    'MIHAN',
    'Nearby locations',
  ];

  return (
    <section className={styles.serviceAreasSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Service Areas</h2>
        
        <div className={styles.content}>
          <p className={styles.description}>
            We proudly serve clients across Nagpur and surrounding regions. Wherever your celebration takes place, 
            our dedicated team ensures exceptional catering service.
          </p>
          
          <div className={styles.areasList}>
            {areas.map((area, index) => (
              <div key={index} className={styles.areaItem}>
                <span className={styles.areaDot}>•</span>
                <span className={styles.areaName}>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
