"use client";

import Link from "next/link";
import styles from "./page.module.css";

interface Bill {
  id: string;
  customerName: string;
  eventType: string;
  amount: number;
  paymentStatus: "Paid" | "Pending" | "Cancelled";
}

const bills: Bill[] = [
  {
    id: "BILL-201",
    customerName: "Rohit Sharma",
    eventType: "Wedding",
    amount: 125000,
    paymentStatus: "Paid",
  },
  {
    id: "BILL-202",
    customerName: "Anjali Deshmukh",
    eventType: "Corporate",
    amount: 45000,
    paymentStatus: "Pending",
  },
  {
    id: "BILL-203",
    customerName: "Priya Patel",
    eventType: "Birthday",
    amount: 18000,
    paymentStatus: "Paid",
  },
  {
    id: "BILL-204",
    customerName: "Amit Kumar",
    eventType: "Wedding",
    amount: 95000,
    paymentStatus: "Pending",
  },
  {
    id: "BILL-205",
    customerName: "Neha Singh",
    eventType: "Private Party",
    amount: 32000,
    paymentStatus: "Cancelled",
  },
  {
    id: "BILL-206",
    customerName: "Rajesh Gupta",
    eventType: "Corporate",
    amount: 67000,
    paymentStatus: "Paid",
  },
];

export default function BillsPage() {
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
        <h1 className={styles.title}>Bills</h1>
        <p className={styles.subtitle}>View and manage generated bills</p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Customer Name</th>
              <th>Event Type</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td className={styles.billId}>{bill.id}</td>
                <td>{bill.customerName}</td>
                <td>{bill.eventType}</td>
                <td className={styles.amount}>{formatAmount(bill.amount)}</td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusClass(bill.paymentStatus)}`}>
                    {bill.paymentStatus}
                  </span>
                </td>
                <td className={styles.actions}>
                  <Link href={`/admin/bills/${bill.id}`}>
                    <button className={styles.viewBtn}>View</button>
                  </Link>
                  <Link href={`/print/bills/${bill.id}`}>
                    <button className={styles.printBtn}>Print Invoice</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
