import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroTag}>Premium Catering Services</p>
          <h1 className={styles.heroTitle}>Delight Caterers</h1>
          <p className={styles.heroSubtitle}>
            Premium catering for weddings, corporate events & private celebrations
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonPrimary}>Explore Menu</button>
            <button className={styles.buttonSecondary}>Get in Touch</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h2>500+</h2>
            <p>Events Catered</p>
          </div>
          <div className={styles.statItem}>
            <h2>4.9★</h2>
            <p>Customer Rating</p>
          </div>
          <div className={styles.statItem}>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.servicesContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Our Expertise</p>
            <h2 className={styles.sectionTitle}>
              Exceptional Catering Services
            </h2>
            <p className={styles.sectionDescription}>
              From intimate gatherings to grand celebrations, we deliver unforgettable culinary experiences
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {/* Wedding Catering Card */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>💍</div>
              <h3 className={styles.cardTitle}>Wedding Catering</h3>
              <p className={styles.cardDescription}>
                Create unforgettable memories with our elegant catering, custom menus, and impeccable service for your special day
              </p>
              <a href="#" className={styles.cardLink}>
                Learn more →
              </a>
            </div>

            {/* Corporate Events Card */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>🤝</div>
              <h3 className={styles.cardTitle}>Corporate Events</h3>
              <p className={styles.cardDescription}>
                Professional catering solutions for conferences, meetings, and corporate celebrations with flexible options
              </p>
              <a href="#" className={styles.cardLink}>
                Learn more →
              </a>
            </div>

            {/* Private Parties Card */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>🎉</div>
              <h3 className={styles.cardTitle}>Private Parties</h3>
              <p className={styles.cardDescription}>
                Customize your celebration with personalized menus, premium ingredients, and dedicated catering staff
              </p>
              <a href="#" className={styles.cardLink}>
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureValue}>100%</div>
            <p className={styles.featureLabel}>Fresh Ingredients</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureValue}>24h</div>
            <p className={styles.featureLabel}>Advance Notice</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureValue}>∞</div>
            <p className={styles.featureLabel}>Custom Menus</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureValue}>✓</div>
            <p className={styles.featureLabel}>Full Insurance</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Let us make your event unforgettable
          </h2>
          <p className={styles.ctaSubtitle}>
            Join hundreds of satisfied clients who have trusted us with their most important celebrations
          </p>
          <button className={styles.ctaButton}>Contact Us Now</button>
        </div>
      </section>
    </>
  );
}
