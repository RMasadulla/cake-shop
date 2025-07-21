import RootProvider from "@/providers/RootProvider";
import "./globals.css";

export const metadata = {
  title: "Sweet Bliss Bakery",
  description: "Where Every Slice is Pure Bliss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
