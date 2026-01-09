'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Delight Caterers</h2>
          <p className={styles.text}>
            Delight Caterers is a Nagpur-based catering service established in 2012 by Merwyn Fernandes. 
            For over a decade, we have been dedicated to creating memorable experiences through thoughtfully 
            prepared food and attentive service. We work closely with each client to understand their vision 
            and deliver an experience their guests will remember.
          </p>
          
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <div className={styles.number}>2012</div>
              <div className={styles.label}>Year Established</div>
            </div>
            <div className={styles.highlight}>
              <div className={styles.number}>12+</div>
              <div className={styles.label}>Years of Service</div>
            </div>
            <div className={styles.highlight}>
              <div className={styles.number}>500+</div>
              <div className={styles.label}>Events Catered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
