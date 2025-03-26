import RootProvider from "@/providers/RootProvider";
import "./globals.css";

export const metadata = {
  title: "Sweet Bliss Bakery",
  description: "Where Every Slice is Pure Bliss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
