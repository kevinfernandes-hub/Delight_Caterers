'use client';

import { useState, useEffect, useMemo } from 'react';
import styles from "./page.module.css";

interface MenuItem {
  id: number;
  item_name: string;
  category: string;
  price: number;
}

interface Package {
  id: string;
  name: string;
  pricePerPlate: number;
  dishIds: number[];
}

type PackageType = 'basic' | 'standard' | 'premium' | 'custom';

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedDishes, setSelectedDishes] = useState<Set<number>>(new Set());
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('custom');
  const [guestCount, setGuestCount] = useState(100);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GUEST_COUNT_OPTIONS = [50, 100, 150, 200, 300];

  // Define preset packages
  // Package dish selections will be determined based on available menu items and categories
  const PACKAGES: Record<Exclude<PackageType, 'custom'>, Package> = {
    basic: {
      id: 'basic',
      name: 'Basic Package',
      pricePerPlate: 250,
      dishIds: [], // Will be populated after menu loads
    },
    standard: {
      id: 'standard',
      name: 'Standard Package',
      pricePerPlate: 350,
      dishIds: [], // Will be populated after menu loads
    },
    premium: {
      id: 'premium',
      name: 'Premium Package',
      pricePerPlate: 500,
      dishIds: [], // Will be populated after menu loads
    },
  };

  // Fetch menu from backend API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/menu');
        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }
        const result = await response.json();
        const items = Array.isArray(result) ? result : (result.data || []);
        setMenuItems(items);
        
        // Populate package dishIds based on menu items
        if (items.length > 0) {
          const itemIds = items.map(item => item.id);
          
          // Basic: first 3 items or less
          PACKAGES.basic.dishIds = itemIds.slice(0, Math.min(3, itemIds.length));
          
          // Standard: first 5 items or less
          PACKAGES.standard.dishIds = itemIds.slice(0, Math.min(5, itemIds.length));
          
          // Premium: all items or first 7
          PACKAGES.premium.dishIds = itemIds.slice(0, Math.min(7, itemIds.length));
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching menu:', err);
        setError('Unable to load menu. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Get valid dish IDs for a package (filter to only existing menu items)
  const getPackageDishIds = (packageId: PackageType) => {
    if (packageId === 'custom') return new Set<number>();
    const pkg = PACKAGES[packageId as Exclude<PackageType, 'custom'>];
    return new Set(pkg.dishIds.filter((id) => menuItems.some((item) => item.id === id)));
  };

  // Detect if current selection matches a package
  useEffect(() => {
    // Check if selection matches any preset package
    for (const [pkgKey, pkg] of Object.entries(PACKAGES)) {
      const pkgDishIds = getPackageDishIds(pkgKey as Exclude<PackageType, 'custom'>);
      if (
        selectedDishes.size === pkgDishIds.size &&
        Array.from(selectedDishes).every((id) => pkgDishIds.has(id))
      ) {
        setSelectedPackage(pkgKey as PackageType);
        return;
      }
    }
    // If no package matches, set to custom
    setSelectedPackage('custom');
  }, [selectedDishes, menuItems]);

  // Handle package selection
  const handlePackageSelect = (packageId: PackageType) => {
    const dishIds = getPackageDishIds(packageId);
    setSelectedDishes(new Set(dishIds));
    setSelectedPackage(packageId);
  };

  // Toggle dish selection
  const handleDishToggle = (itemId: number) => {
    const newSelected = new Set(selectedDishes);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedDishes(newSelected);
    // Package will automatically change to 'custom' if manual changes don't match a package
  };

  // Calculate per-plate cost
  const calculatePerPlateCost = () => {
    let total = 0;
    selectedDishes.forEach((dishId) => {
      const dish = menuItems.find((item) => item.id === dishId);
      if (dish) {
        total += dish.price;
      }
    });
    return total;
  };

  // Calculate total cost
  const calculateTotalCost = () => {
    return calculatePerPlateCost() * guestCount;
  };

  // Get selected dish details
  const getSelectedDishes = () => {
    return menuItems.filter((item) => selectedDishes.has(item.id));
  };

  // Get current package display name
  const getPackageDisplayName = () => {
    if (selectedPackage === 'custom') return 'Custom Menu';
    return PACKAGES[selectedPackage as Exclude<PackageType, 'custom'>].name;
  };

  // Reset selection
  const handleResetSelection = () => {
    setSelectedDishes(new Set());
    setSelectedPackage('custom');
  };

  // Get image path for dish - use category-based images
  const getDishImage = (category: string, itemId: number) => {
    // Map category to image filename (category-based since backend returns null IDs)
    const categoryMap: Record<string, string> = {
      'beverage': 'beverage',
      'bread': 'starters',
      'main course': 'maincourse',
      'rice': 'rice',
      'dessert': 'dessert',
      'starter': 'starters',
    };
    const imageName = categoryMap[category.toLowerCase()] || category.toLowerCase().replace(/\s+/g, '');
    return `/images/menu/${imageName}.jpg`;
  };

  return (
    <main className={styles.menuMain}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Build Your Menu</h1>
          <p className={styles.pageSubtitle}>
            Select a package or customize your own
          </p>
        </div>
      </section>

      {/* Guest Count Section */}
      <section className={styles.guestSection}>
        <div className={styles.guestContainer}>
          <label className={styles.guestLabel}>Number of Guests</label>
          <div className={styles.guestOptions}>
            {GUEST_COUNT_OPTIONS.map((count) => (
              <button
                key={count}
                onClick={() => setGuestCount(count)}
                className={`${styles.guestBtn} ${guestCount === count ? styles.guestBtnActive : ''}`}
              >
                {count}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Package Selection Section */}
      <section className={styles.packageSection}>
        <div className={styles.packageContainer}>
          <h2 className={styles.packageSectionTitle}>Choose a Package</h2>
          <p className={styles.packageNote}>You can customize dishes after selecting a package</p>
          <div className={styles.packageGrid}>
            {Object.entries(PACKAGES).map(([pkgKey, pkg]) => (
              <button
                key={pkgKey}
                onClick={() => handlePackageSelect(pkgKey as PackageType)}
                className={`${styles.packageButton} ${selectedPackage === pkgKey ? styles.packageButtonActive : ''}`}
              >
                <div className={styles.packageName}>{pkg.name}</div>
                <div className={styles.packagePrice}>₹{pkg.pricePerPlate}</div>
                <div className={styles.packageSubtext}>per plate</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area - 2 Columns */}
      <div className={styles.mainContent}>
        {/* Left Column: Menu Cards Grid */}
        <section className={styles.menuGridSection}>
          {loading ? (
            <div className={styles.loadingMessage}>Loading menu...</div>
          ) : error ? (
            <div className={styles.errorMessage}>{error}</div>
          ) : menuItems.length === 0 ? (
            <div className={styles.emptyMessage}>No menu items available</div>
          ) : (
            <div className={styles.menuGrid}>
              {menuItems.map((item, idx) => (
                <div
                  key={item.id || `${item.category}-${item.item_name}-${idx}`}
                  className={`${styles.menuCard} ${selectedDishes.has(item.id) ? styles.menuCardSelected : ''}`}
                >
                  {/* Card Image */}
                  <div className={styles.cardImage}>
                    <img
                      src={getDishImage(item.category, item.id)}
                      alt={item.item_name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/menu/placeholder.jpg';
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.dishName}>{item.item_name}</h3>
                    <p className={styles.dishCategory}>{item.category}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.dishPrice}>+ ₹{item.price}</span>
                      <input
                        type="checkbox"
                        id={`dish-${item.id || idx}`}
                        checked={selectedDishes.has(item.id)}
                        onChange={() => handleDishToggle(item.id)}
                        className={styles.dishCheckbox}
                        aria-label={`Select ${item.item_name}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Right Column: Summary Sidebar */}
        <aside className={styles.summarySidebar}>
          <div className={styles.summaryContent}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>

            {/* Package Display */}
            <div className={styles.summarySection}>
              <div className={styles.packageDisplay}>
                <span className={styles.packageDisplayLabel}>Package:</span>
                <span className={styles.packageDisplayValue}>{getPackageDisplayName()}</span>
              </div>
            </div>

            {/* Guest Count Display */}
            <div className={styles.summarySection}>
              <div className={styles.guestInfo}>
                <span className={styles.guestInfoLabel}>Guests:</span>
                <span className={styles.guestInfoValue}>{guestCount}</span>
              </div>
            </div>

            {/* Selected Dishes */}
            {selectedDishes.size === 0 ? (
              <div className={styles.emptySummary}>
                <p>Select a package or customize your menu</p>
              </div>
            ) : (
              <>
                <div className={styles.summarySection}>
                  <h3 className={styles.selectedTitle}>Selected Dishes ({selectedDishes.size})</h3>
                  <div className={styles.selectedDishesList}>
                    {getSelectedDishes().map((dish, idx) => (
                      <div key={dish.id || `selected-${dish.item_name}-${idx}`} className={styles.selectedDish}>
                        <span className={styles.selectedDishName}>{dish.item_name}</span>
                        <span className={styles.selectedDishPrice}>₹{dish.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Summary */}
                <div className={styles.pricingSummary}>
                  <div className={styles.pricingRow}>
                    <span className={styles.pricingLabel}>Per plate:</span>
                    <span className={styles.pricingValue}>₹{calculatePerPlateCost()}</span>
                  </div>
                  <div className={styles.pricingRow}>
                    <span className={styles.pricingLabel}>Guests:</span>
                    <span className={styles.pricingValue}>×{guestCount}</span>
                  </div>

                  {/* Total */}
                  <div className={styles.totalSection}>
                    <div className={styles.totalLabel}>Total Estimate</div>
                    <div className={styles.totalAmount}>₹{calculateTotalCost().toLocaleString()}</div>
                  </div>
                </div>

                {/* Reset Button */}
                <button onClick={handleResetSelection} className={styles.resetBtn}>
                  Reset Menu
                </button>
              </>
            )}
          </div>
        </aside>
      </div>

      {/* Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2 className={styles.infoTitle}>Ready to finalize your order?</h2>
          <p className={styles.infoText}>
            Contact our team to confirm your menu selection and book your catering event.
          </p>
          <a href="/contact" className={styles.infoButton}>
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
