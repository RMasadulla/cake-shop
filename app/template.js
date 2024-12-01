import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootTemplate({ children }) {
  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto px-4 mt-[100px]">{children}</main>
      <Footer />
    </div>
  );
}
