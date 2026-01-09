'use client';

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>Have questions? We'd love to hear from you. Reach out to us today.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoSection}>
            <div className={styles.infoBox}>
              <div className={styles.iconBox}>📞</div>
              <h3 className={styles.boxTitle}>Phone</h3>
              <p className={styles.infoText}>
                <a href="tel:+919876543210" className={styles.link}>+91 96893 30035</a>
              </p>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.iconBox}>✉️</div>
              <h3 className={styles.boxTitle}>Email</h3>
              <p className={styles.infoText}>
                <a href="mailto:hello@delightcaterers.com" className={styles.link}>hello@delightcaterers.com</a>
              </p>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.iconBox}>📍</div>
              <h3 className={styles.boxTitle}>Address</h3>
              <p className={styles.infoText}>
                Nagpur, Maharashtra<br />
                India
              </p>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.iconBox}>🕐</div>
              <h3 className={styles.boxTitle}>Hours</h3>
              <p className={styles.infoText}>
                Mon - Sat: 10 AM - 6 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>

          <div className={styles.mapSection}>
            <iframe
              title="Delight Caterers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.3819919893803!2d79.08888!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4a00000000001%3A0x0!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height={400}
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
