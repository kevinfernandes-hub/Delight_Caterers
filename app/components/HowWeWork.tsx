'use client';

import styles from './HowWeWork.module.css';

export default function HowWeWork() {
  const steps = [
    {
      id: 1,
      title: 'Consultation',
      description: 'We start by understanding your event, your vision, and your dietary preferences. Our team works closely with you to grasp every detail.',
    },
    {
      id: 2,
      title: 'Menu Planning',
      description: 'Based on your preferences and event type, we curate a thoughtful menu that reflects quality and care. Every dish is carefully selected.',
    },
    {
      id: 3,
      title: 'Event Execution',
      description: 'On the day of your event, our team ensures flawless service with fresh food, attentive staff, and professional coordination.',
    },
  ];

  return (
    <section className={styles.howWeWork}>
      <div className={styles.container}>
        <h2 className={styles.title}>How We Work</h2>
        
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.id}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
