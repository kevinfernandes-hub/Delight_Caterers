"use client";

import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.contactMain}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Contact Delight Caterers</h1>
          <p className={styles.pageSubtitle}>
            Reach out to us for your catering needs and event enquiries
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contentGrid}>
            {/* Left Column - Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>Delight Caterers</h2>

                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>📍 Address</h3>
                  <p className={styles.infoText}>
                    Katol Road,
                    <br />
                    Nagpur, Maharashtra
                    <br />
                    India
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>📞 Phone</h3>
                  <p className={styles.infoText}>
                    <a href="tel:+919689330035" className={styles.infoLink}>
                      +91 96893 30035
                    </a>
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>✉️ Email</h3>
                  <p className={styles.infoText}>
                    <a href="mailto:Merwynfernandes2015@gmail.com" className={styles.infoLink}>
                      Merwynfernandes2015@gmail.com
                    </a>
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>🕐 Hours</h3>
                  <p className={styles.infoText}>
                    9:00 AM – 9:00 PM
                    <br />
                    (Daily)
                  </p>
                </div>

                <div className={styles.calloutBox}>
                  <p className={styles.calloutText}>We'd love to cater your next event!</p>
                  <a href="tel:+919054953561" className={styles.callButton}>
                    📞 Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Google Maps */}
            <div className={styles.mapContainer}>
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8916771667143!2d79.06022!3d21.14567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b8b8b8b8b8b9%3A0x0!2sKatol%20Road%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1672531234567"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapIframe}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
