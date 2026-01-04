"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
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

export default function BillDetailPage() {
  const params = useParams();
  const billId = params?.id as string;
  const bill = billsDatabase[billId];

  if (!bill) {
    return (
      <div className={styles.container}>
        <div className={styles.errorContainer}>
          <h1>Bill Not Found</h1>
          <p>The bill you're looking for doesn't exist.</p>
          <Link href="/admin/bills">
            <button className={styles.backBtn}>Back to Bills</button>
          </Link>
        </div>
      </div>
    );
  }

  const formatAmount = (amount: number) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Paid":
        return styles.statusPaid;
      case "Pending":
        return styles.statusPending;
      case "Cancelled":
        return styles.statusCancelled;
      default:
        return "";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Bill Details</h1>
        <p className={styles.subtitle}>{bill.id}</p>
      </div>

      <div className={styles.billCard}>
        <div className={styles.cardHeader}>
          <div className={styles.billInfo}>
            <p className={styles.label}>Bill ID</p>
            <p className={styles.billId}>{bill.id}</p>
          </div>
          <div className={styles.statusContainer}>
            <p className={styles.label}>Status</p>
            <span className={`${styles.statusBadge} ${getStatusClass(bill.paymentStatus)}`}>
              {bill.paymentStatus}
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <p className={styles.label}>Customer Name</p>
            <p className={styles.value}>{bill.customerName}</p>
          </div>

          <div className={styles.gridItem}>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>{bill.email}</p>
          </div>

          <div className={styles.gridItem}>
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>{bill.phone}</p>
          </div>

          <div className={styles.gridItem}>
            <p className={styles.label}>Event Type</p>
            <p className={styles.value}>{bill.eventType}</p>
          </div>

          <div className={styles.gridItem}>
            <p className={styles.label}>Event Date</p>
            <p className={styles.value}>{bill.eventDate}</p>
          </div>

          <div className={styles.gridItem}>
            <p className={styles.label}>Venue</p>
            <p className={styles.value}>{bill.venue}</p>
          </div>
        </div>

        <div className={styles.amountSection}>
          <p className={styles.label}>Amount</p>
          <p className={styles.amount}>{formatAmount(bill.amount)}</p>
        </div>

        <div className={styles.actions}>
          <Link href="/admin/bills">
            <button className={styles.backBtn}>Back to Bills</button>
          </Link>
          <Link href={`/print/bills/${bill.id}`}>
            <button className={styles.printBtn}>Print Invoice</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
