import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Delight Caterers",
  description: "Premium catering for weddings, corporate & private events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
