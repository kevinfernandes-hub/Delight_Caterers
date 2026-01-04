import styles from "./page.module.css";

const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    category: "Starter",
    price: 250,
    description: "Marinated cottage cheese with aromatic spices",
  },
  {
    id: 2,
    name: "Butter Chicken",
    category: "Main",
    price: 380,
    description: "Tender chicken in creamy tomato gravy",
  },
  {
    id: 3,
    name: "Biryani",
    category: "Main",
    price: 320,
    description: "Fragrant basmati rice with meat and spices",
  },
  {
    id: 4,
    name: "Samosas",
    category: "Starter",
    price: 120,
    description: "Crispy pastries filled with spiced potatoes",
  },
  {
    id: 5,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 150,
    description: "Soft milk solids in sweet sugar syrup",
  },
  {
    id: 6,
    name: "Tandoori Chicken",
    category: "Main",
    price: 400,
    description: "Smoky grilled chicken with traditional spices",
  },
  {
    id: 7,
    name: "Chutneys & Breads",
    category: "Starter",
    price: 100,
    description: "Fresh accompaniments and traditional breads",
  },
  {
    id: 8,
    name: "Kheer",
    category: "Dessert",
    price: 130,
    description: "Rice pudding with cardamom and nuts",
  },
  {
    id: 9,
    name: "Dal Makhni",
    category: "Main",
    price: 280,
    description: "Creamy black lentils cooked overnight",
  },
];

export default function MenuPage() {
  return (
    <main className={styles.menuMain}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Our Menu</h1>
          <p className={styles.pageSubtitle}>
            Curated dishes for every occasion
          </p>
        </div>
      </section>

      {/* Menu Grid Section */}
      <section className={styles.menuSection}>
        <div className={styles.menuContainer}>
          <div className={styles.menuGrid}>
            {menuItems.map((item) => (
              <article key={item.id} className={styles.menuCard}>
                {/* Image Placeholder */}
                <div className={styles.imagePlaceholder}>
                  <div className={styles.imageGradient}></div>
                  <span className={styles.categoryBadge}>{item.category}</span>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.dishName}>{item.name}</h3>
                  <p className={styles.dishDescription}>
                    {item.description}
                  </p>
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>₹{item.price}</span>
                    <span className={styles.perPlate}>per plate</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Interested in our menu?</h2>
          <p className={styles.ctaText}>
            Contact us to customize dishes for your event
          </p>
          <button className={styles.ctaButton}>Get in Touch</button>
        </div>
      </section>
    </main>
  );
}
