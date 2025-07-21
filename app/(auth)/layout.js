import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { dbConnect } from "@/service/mongo";
import "../globals.css";

export const metadata = {
  title: "Sweet Bliss Bakery",
  description: "Where Every Slice is Pure Bliss",
};

export default async function AuthLayout({ children }) {
  await dbConnect();
  return (
    <div id="auth-layout" className="bg-white text-gray-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
