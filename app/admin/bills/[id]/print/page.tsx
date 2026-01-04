"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./page.module.css";

interface Bill {
  id: string;
  customerName: string;
  eventType: string;
  amount: number;
  paymentStatus: "Paid" | "Pending" | "Cancelled";
  eventDate: string;
  venue: string;
  email: string;
  phone: string;
}

interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

const billsDatabase: Record<string, Bill> = {
  "BILL-201": {
    id: "BILL-201",
    customerName: "Rohit Sharma",
    eventType: "Wedding",
    amount: 125000,
    paymentStatus: "Paid",
    eventDate: "February 12, 2026",
    venue: "Grand Royal Palace, Nagpur",
    email: "rohit.sharma@email.com",
    phone: "+91 9876543210",
  },
  "BILL-202": {
    id: "BILL-202",
    customerName: "Anjali Deshmukh",
    eventType: "Corporate",
    amount: 45000,
    paymentStatus: "Pending",
    eventDate: "February 20, 2026",
    venue: "Business Center, Nagpur",
    email: "anjali.deshmukh@email.com",
    phone: "+91 9876543211",
  },
  "BILL-203": {
    id: "BILL-203",
    customerName: "Priya Patel",
    eventType: "Birthday",
    amount: 18000,
    paymentStatus: "Paid",
    eventDate: "February 15, 2026",
    venue: "Club House, Nagpur",
    email: "priya.patel@email.com",
    phone: "+91 9876543212",
  },
  "BILL-204": {
    id: "BILL-204",
    customerName: "Amit Kumar",
    eventType: "Wedding",
    amount: 95000,
    paymentStatus: "Pending",
    eventDate: "February 28, 2026",
    venue: "Royal Banquet Hall, Nagpur",
    email: "amit.kumar@email.com",
    phone: "+91 9876543213",
  },
  "BILL-205": {
    id: "BILL-205",
    customerName: "Neha Singh",
    eventType: "Private Party",
    amount: 32000,
    paymentStatus: "Cancelled",
    eventDate: "March 5, 2026",
    venue: "Home Venue, Nagpur",
    email: "neha.singh@email.com",
    phone: "+91 9876543214",
  },
  "BILL-206": {
    id: "BILL-206",
    customerName: "Rajesh Gupta",
    eventType: "Corporate",
    amount: 67000,
    paymentStatus: "Paid",
    eventDate: "March 10, 2026",
    venue: "Convention Center, Nagpur",
    email: "rajesh.gupta@email.com",
    phone: "+91 9876543215",
  },
};

const invoiceItemsMap: Record<string, InvoiceItem[]> = {
  "BILL-201": [
    { description: "Welcome Drinks (Non-Alcoholic)", quantity: 150, rate: 50, amount: 7500 },
    { description: "Main Course Buffet (Vegetarian & Non-Vegetarian)", quantity: 150, rate: 350, amount: 52500 },
    { description: "Desserts & Sweets", quantity: 150, rate: 75, amount: 11250 },
    { description: "Service Staff (6 hours)", quantity: 8, rate: 500, amount: 4000 },
    { description: "Crockery & Cutlery Setup", quantity: 1, rate: 3000, amount: 3000 },
  ],
  "BILL-202": [
    { description: "Breakfast Catering (100 persons)", quantity: 100, rate: 300, amount: 30000 },
    { description: "Conference Setup & Service", quantity: 1, rate: 10000, amount: 10000 },
    { description: "Beverages Package", quantity: 100, rate: 50, amount: 5000 },
  ],
  "BILL-203": [
    { description: "Kids Party Package", quantity: 1, rate: 15000, amount: 15000 },
    { description: "Decorations", quantity: 1, rate: 3000, amount: 3000 },
  ],
  "BILL-204": [
    { description: "Welcome Drinks", quantity: 200, rate: 50, amount: 10000 },
    { description: "Main Course Buffet", quantity: 200, rate: 350, amount: 70000 },
    { description: "Desserts & Sweets", quantity: 200, rate: 75, amount: 15000 },
  ],
  "BILL-205": [
    { description: "House Party Catering", quantity: 50, rate: 500, amount: 25000 },
    { description: "Beverages", quantity: 50, rate: 100, amount: 5000 },
    { description: "Setup & Service", quantity: 1, rate: 2000, amount: 2000 },
  ],
  "BILL-206": [
    { description: "Corporate Lunch (150 persons)", quantity: 150, rate: 350, amount: 52500 },
    { description: "Beverages & Snacks", quantity: 150, rate: 100, amount: 15000 },
  ],
};

export default function BillPrintPage() {
  const params = useParams();
  const router = useRouter();
  const billId = params?.id as string;
  const bill = billsDatabase[billId];
  const items = invoiceItemsMap[billId] || [];

  useEffect(() => {
    if (!bill) {
      router.push("/admin/bills");
      return;
    }

    // Auto-trigger print dialog on load
    const timer = setTimeout(() => {
      window.print();
    }, 500);

    return () => clearTimeout(timer);
  }, [bill, router]);

  if (!bill) {
    return null;
  }

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const invoiceDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dueDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;

  return (
    <div className={styles.invoicePage}>
      <div className={styles.pageWrapper}>
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
                <strong>Invoice #:</strong> {bill.id}
              </p>
              <p>
                <strong>Date:</strong> {invoiceDate}
              </p>
              <p>
                <strong>Due Date:</strong> {dueDate}
              </p>
            </div>
          </div>
        </div>

        {/* Customer Details */}
        <div className={styles.section}>
          <div className={styles.billTo}>
            <h3 className={styles.sectionTitle}>Bill To</h3>
            <p>
              <strong>{bill.customerName}</strong>
            </p>
            <p>
              <strong>Event Type:</strong> {bill.eventType}
            </p>
            <p>
              <strong>Event Date:</strong> {bill.eventDate}
            </p>
            <p>
              <strong>Venue:</strong> {bill.venue}
            </p>
            <p>
              <strong>Email:</strong> {bill.email}
            </p>
            <p>
              <strong>Phone:</strong> {bill.phone}
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
