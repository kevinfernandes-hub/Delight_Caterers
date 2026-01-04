"use client";

import styles from "./page.module.css";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic will be added later
    alert("Thank you for your enquiry! We will contact you within 24 hours.");
  };

  return (
    <main className={styles.contactMain}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            Get in touch for catering enquiries & bookings
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

                <div className={styles.ratingBadge}>
                  <span className={styles.ratingValue}>★ 4.8</span>
                  <span className={styles.ratingLabel}>Highly Rated</span>
                </div>

                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>Address</h3>
                  <p className={styles.infoText}>
                    Flat No. 2, Shakun Apartment,
                    <br />
                    Sheela Nagar Colony,
                    <br />
                    Opposite Vishal Daily Needs,
                    <br />
                    Near Gittikhadan Police Station,
                    <br />
                    Katol Road,
                    <br />
                    Nagpur – 440013,
                    <br />
                    Maharashtra, India
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>Phone</h3>
                  <p className={styles.infoText}>
                    <a href="tel:+919054953561" className={styles.infoLink}>
                      +91 90549 53561
                    </a>
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>Alternate Mobile</h3>
                  <p className={styles.infoText}>
                    <a href="tel:+919372502345" className={styles.infoLink}>
                      +91 93725 02345
                    </a>
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>Opening Hours</h3>
                  <p className={styles.infoText}>
                    9:00 AM – 9:00 PM
                    <br />
                    (Daily)
                  </p>
                </div>

                <div className={styles.responseNote}>
                  <p>✓ Available for enquiries during business hours</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className={styles.contactFormContainer}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <h2 className={styles.formTitle}>Send an Enquiry</h2>

                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.formInput}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.formInput}
                    placeholder="Your phone number"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="eventType" className={styles.formLabel}>
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="engagement">Engagement</option>
                    <option value="other">Other Event</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.formTextarea}
                    placeholder="Tell us about your event, expected number of guests, date, etc."
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.urgentCTA}>
        <div className={styles.ctaContent}>
          <h3 className={styles.ctaTitle}>
            Call us directly for quick bookings
          </h3>
          <div className={styles.ctaButtons}>
            <a href="tel:+919054953561" className={styles.callButton}>
              Call Now
            </a>
            <a href="tel:+919372502345" className={styles.callButton}>
              Call Alternate
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
