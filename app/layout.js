import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Sweet Bliss Bakery",
  description: "Where Every Slice is Pure Bliss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class="bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
