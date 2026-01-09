import Link from 'next/link';
import styles from './Packages.module.css';

const packages = [
  {
    title: 'Basic Package',
    price: 250,
    inclusions: ['1 Starter', '1 Main Course', '1 Dessert', 'Beverages'],
  },
  {
    title: 'Standard Package',
    price: 350,
    inclusions: ['2 Starters', '2 Main Courses', '1 Rice Dish', '1 Dessert', 'Beverages'],
  },
  {
    title: 'Premium Package',
    price: 500,
    inclusions: ['3 Starters', '3 Main Courses', '2 Rice Dishes', '2 Desserts', 'Live Counter', 'Beverages'],
  },
];

export default function Packages() {
  return (
    <section className={styles.packagesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Pricing Packages</h2>
        <div className={styles.grid}>
          {packages.map((pkg) => (
            <div key={pkg.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{pkg.title}</h3>
              <div className={styles.price}>
                ₹{pkg.price} <span className={styles.pricePerPlate}>/ plate</span>
              </div>
              <ul className={styles.inclusions}>
                {pkg.inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/menu" className={styles.button}>
                Select Package
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
