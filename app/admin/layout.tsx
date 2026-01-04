import AdminSidebar from "@/components/AdminSidebar";
import styles from "./AdminLayout.module.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.adminContainer}>
      <AdminSidebar />
      <main className={styles.adminMain}>{children}</main>
    </div>
  );
}
