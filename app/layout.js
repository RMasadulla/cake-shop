import "./globals.css";

export const metadata = {
  title: "LWS Kitchen - Food Blog and Recipes",
  description: "Food Blog and Recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
