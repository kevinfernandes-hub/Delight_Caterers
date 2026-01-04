"use client";

import styles from "./page.module.css";

interface Order {
  id: string;
  customerName: string;
  eventType: string;
  eventDate: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  amount: number;
}

const orders: Order[] = [
  {
    id: "ODR-101",
    customerName: "Rohit Sharma",
    eventType: "Wedding",
    eventDate: "12 Feb 2026",
    status: "Confirmed",
    amount: 85000,
  },
  {
    id: "ODR-102",
    customerName: "Anjali Deshmukh",
    eventType: "Corporate",
    eventDate: "20 Feb 2026",
    status: "Pending",
    amount: 35000,
  },
  {
    id: "ODR-103",
    customerName: "Priya Patel",
    eventType: "Birthday",
    eventDate: "15 Feb 2026",
    status: "Confirmed",
    amount: 12000,
  },
  {
    id: "ODR-104",
    customerName: "Amit Kumar",
    eventType: "Wedding",
    eventDate: "28 Feb 2026",
    status: "Pending",
    amount: 125000,
  },
  {
    id: "ODR-105",
    customerName: "Neha Singh",
    eventType: "Private Party",
    eventDate: "05 Feb 2026",
    status: "Cancelled",
    amount: 28000,
  },
  {
    id: "ODR-106",
    customerName: "Vikram Reddy",
    eventType: "Corporate",
    eventDate: "25 Feb 2026",
    status: "Confirmed",
    amount: 48000,
  },
];

export default function OrdersPage() {
  const getStatusClass = (status: string): string => {
    switch (status) {
      case "Confirmed":
        return styles.statusGreen;
      case "Pending":
        return styles.statusOrange;
      case "Cancelled":
        return styles.statusRed;
      default:
        return "";
    }
  };

  return (
    <div className={styles.ordersContainer}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Orders</h1>
          <p>Manage and track customer orders</p>
        </div>
      </div>

      {/* Orders Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.ordersTable}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Event Type</th>
              <th>Event Date</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className={styles.orderId}>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.eventType}</td>
                <td>{order.eventDate}</td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className={styles.amount}>₹{order.amount.toLocaleString()}</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.viewBtn}>View</button>
                    <button className={styles.billBtn}>Generate Bill</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
