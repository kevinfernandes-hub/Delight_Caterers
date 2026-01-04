"use client";

import styles from "./page.module.css";
import { useState } from "react";

interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

const invoiceData = {
  invoiceNumber: "INV-2026-001",
  invoiceDate: "January 4, 2026",
  dueDate: "January 18, 2026",
  customerName: "Rohit Sharma",
  eventType: "Wedding Reception",
  eventDate: "February 12, 2026",
  venue: "Grand Royal Palace, Nagpur",
  email: "rohit.sharma@email.com",
  phone: "+91 9876543210",
};

const items: InvoiceItem[] = [
  {
    description: "Welcome Drinks (Non-Alcoholic)",
    quantity: 150,
    rate: 50,
    amount: 7500,
  },
  {
    description: "Main Course Buffet (Vegetarian & Non-Vegetarian)",
    quantity: 150,
    rate: 350,
    amount: 52500,
  },
  {
    description: "Desserts & Sweets",
    quantity: 150,
    rate: 75,
    amount: 11250,
  },
  {
    description: "Service Staff (6 hours)",
    quantity: 8,
    rate: 500,
    amount: 4000,
  },
  {
    description: "Crockery & Cutlery Setup",
    quantity: 1,
    rate: 3000,
    amount: 3000,
  },
];

export default function InvoicePage() {
  const [isPrinting, setIsPrinting] = useState(false);

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + gst;

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  return (
    <div className={styles.invoicePage}>
      <div className={styles.pageWrapper}>
        <button className={styles.printBtn} onClick={handlePrint}>
          Print Invoice
        </button>

        <div className={styles.invoiceContainer}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.businessInfo}>
            <h1 className={styles.businessName}>Delight Caterers</h1>
            <p className={styles.tagline}>Premium Catering Services</p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Address:</strong> Nagpur, Maharashtra, India
              </p>
              <p>
                <strong>Phone:</strong> +91 9876543210
              </p>
              <p>
                <strong>Email:</strong> contact@delightcaterers.com
              </p>
            </div>
          </div>
          <div className={styles.invoiceHeader}>
            <h2 className={styles.invoiceTitle}>INVOICE</h2>
            <div className={styles.invoiceDetails}>
              <p>
                <strong>Invoice #:</strong> {invoiceData.invoiceNumber}
              </p>
              <p>
                <strong>Date:</strong> {invoiceData.invoiceDate}
              </p>
              <p>
                <strong>Due Date:</strong> {invoiceData.dueDate}
              </p>
            </div>
          </div>
        </div>

        {/* Customer Details */}
        <div className={styles.section}>
          <div className={styles.billTo}>
            <h3 className={styles.sectionTitle}>Bill To</h3>
            <p>
              <strong>{invoiceData.customerName}</strong>
            </p>
            <p>
              <strong>Event Type:</strong> {invoiceData.eventType}
            </p>
            <p>
              <strong>Event Date:</strong> {invoiceData.eventDate}
            </p>
            <p>
              <strong>Venue:</strong> {invoiceData.venue}
            </p>
            <p>
              <strong>Email:</strong> {invoiceData.email}
            </p>
            <p>
              <strong>Phone:</strong> {invoiceData.phone}
            </p>
          </div>
        </div>

        {/* Items Table */}
        <div className={styles.section}>
          <table className={styles.itemsTable}>
            <thead>
              <tr>
                <th className={styles.descriptionCol}>Item Description</th>
                <th className={styles.quantityCol}>Quantity</th>
                <th className={styles.rateCol}>Rate</th>
                <th className={styles.amountCol}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className={styles.description}>{item.description}</td>
                  <td className={styles.quantity}>{item.quantity}</td>
                  <td className={styles.rate}>{formatCurrency(item.rate)}</td>
                  <td className={styles.amount}>{formatCurrency(item.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className={styles.section}>
          <div className={styles.totalsContainer}>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Subtotal</span>
              <span className={styles.totalValue}>{formatCurrency(subtotal)}</span>
            </div>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>GST (5%)</span>
              <span className={styles.totalValue}>{formatCurrency(gst)}</span>
            </div>
            <div className={`${styles.totalRow} ${styles.grandTotalRow}`}>
              <span className={styles.grandTotalLabel}>Grand Total</span>
              <span className={styles.grandTotalValue}>{formatCurrency(grandTotal)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerSection}>
            <h4>Payment Terms</h4>
            <p>Payment should be made upon confirmation of order. Please arrange payment at least 7 days before the event date.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Thank You</h4>
            <p>Thank you for choosing Delight Caterers. We look forward to making your event memorable!</p>
          </div>

          <div className={styles.signatureSection}>
            <p>Authorized Signature</p>
            <div className={styles.signatureLine}></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
