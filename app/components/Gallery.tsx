"use client";

import styles from "./Gallery.module.css";

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      src: "/images/gallery/event1.svg",
      alt: "Wedding Celebration",
    },
    {
      id: 2,
      src: "/images/gallery/event2.svg",
      alt: "Corporate Event",
    },
    {
      id: 3,
      src: "/images/gallery/event3.svg",
      alt: "Private Party",
    },
    {
      id: 4,
      src: "/images/gallery/event4.svg",
      alt: "Elegant Reception",
    },
    {
      id: 5,
      src: "/images/gallery/event5.svg",
      alt: "Professional Catering",
    },
    {
      id: 6,
      src: "/images/gallery/event6.svg",
      alt: "Grand Celebration",
    },
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.galleryContainer}>
        {/* Header */}
        <div className={styles.galleryHeader}>
          <p className={styles.sectionLabel}>Our Work</p>
          <h2 className={styles.sectionTitle}>Events We've Catered</h2>
          <p className={styles.sectionDescription}>
            A selection of weddings, corporate events, and celebrations we're proud to have served
          </p>
        </div>

        {/* Grid */}
        <div className={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.galleryCard}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
