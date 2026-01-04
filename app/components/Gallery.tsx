"use client";

import Image from "next/image";
import styles from "./Gallery.module.css";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/images/gallery/wedding-1.jpg",
    alt: "Wedding Reception Setup",
    title: "Wedding Reception",
  },
  {
    id: "2",
    src: "/images/gallery/corporate-1.jpg",
    alt: "Corporate Event Catering",
    title: "Corporate Event",
  },
  {
    id: "3",
    src: "/images/gallery/party-1.jpg",
    alt: "Private Party Celebration",
    title: "Private Party",
  },
  {
    id: "4",
    src: "/images/gallery/wedding-2.jpg",
    alt: "Wedding Food Presentation",
    title: "Food Presentation",
  },
  {
    id: "5",
    src: "/images/gallery/corporate-2.jpg",
    alt: "Professional Setup",
    title: "Professional Setup",
  },
  {
    id: "6",
    src: "/images/gallery/party-2.jpg",
    alt: "Guest Dining Experience",
    title: "Dining Experience",
  },
];

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Work</h2>
          <p className={styles.subtitle}>
            Browse our collection of memorable events and celebrations
          </p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.gridItem}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderContent}>
                    <span className={styles.placeholderIcon}>📸</span>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
              <div className={styles.overlay}>
                <p className={styles.imageTitle}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
