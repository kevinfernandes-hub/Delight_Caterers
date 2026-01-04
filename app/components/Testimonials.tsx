"use client";

import styles from "./Testimonials.module.css";

interface Testimonial {
  id: string;
  name: string;
  event: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    event: "Wedding Reception",
    rating: 5,
    text: "Delight Caterers made our wedding day absolutely perfect! The food was delicious, service was impeccable, and all our guests were raving about the experience.",
  },
  {
    id: "2",
    name: "Rajesh Patel",
    event: "Corporate Event",
    rating: 5,
    text: "Professional, punctual, and fantastic quality. They handled our corporate event seamlessly. Highly recommended for any business gathering!",
  },
  {
    id: "3",
    name: "Anjali Deshmukh",
    event: "Birthday Party",
    rating: 5,
    text: "The variety of food options and the customized menu made everyone happy. Great attention to detail and excellent customer service throughout!",
  },
  {
    id: "4",
    name: "Amit Kumar",
    event: "Wedding Reception",
    rating: 5,
    text: "Outstanding catering service! The team was well-trained, the presentation was elegant, and the taste was simply exceptional. Will definitely book again!",
  },
  {
    id: "5",
    name: "Neha Singh",
    event: "Private Party",
    rating: 5,
    text: "Best catering service in Nagpur! They understood our vision and executed it perfectly. Every dish was a delight!",
  },
  {
    id: "6",
    name: "Vikram Verma",
    event: "Corporate Lunch",
    rating: 5,
    text: "Professional team, beautiful presentation, and mouth-watering food. They exceeded all our expectations. Highly satisfied!",
  },
];

const renderStars = (rating: number) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Trusted by hundreds of satisfied customers across Nagpur
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.rating}>
                <span className={styles.stars}>{renderStars(testimonial.rating)}</span>
              </div>
              <p className={styles.text}>"{testimonial.text}"</p>
              <div className={styles.author}>
                <p className={styles.authorName}>{testimonial.name}</p>
                <p className={styles.authorEvent}>{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
