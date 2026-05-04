import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FreshCart",
  description: "E-commerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}