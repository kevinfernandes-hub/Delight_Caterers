import styles from './SignatureMenu.module.css';

const menuItems = [
  { name: 'Paneer Tikka', price: 40, image: '/images/menu/starters.jpg' },
  { name: 'Dal Makhani', price: 35, image: '/images/menu/maincourse.jpg' },
  { name: 'Veg Biryani', price: 30, image: '/images/menu/rice.jpg' },
  { name: 'Gulab Jamun', price: 25, image: '/images/menu/dessert.jpg' },
];

export default function SignatureMenu() {
  return (
    <section className={styles.menuSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Signature Menu</h2>
        <div className={styles.grid}>
          {menuItems.map((item) => (
            <div key={item.name} className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div className={styles.cardContent}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.itemPrice}>₹{item.price} / plate contribution</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
