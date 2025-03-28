import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import "../globals.css";

export const metadata = {
  title: "Sweet Bliss Bakery",
  description: "Where Every Slice is Pure Bliss",
};

export default function MainLayout({ children }) {
  return (
    <div id="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
