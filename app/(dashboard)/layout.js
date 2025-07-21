import { SidebarProvider } from "@/providers/SidebarProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

import AdminLayout from "@/components/admin/layout/AdminLayout";
import { dbConnect } from "@/service/mongo";
import { Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export default async function MainAdminLayout({ children }) {
  await dbConnect();

  return (
    <div id="dashboard" className={`${outfit.className} dark:bg-gray-900`}>
      <ThemeProvider>
        <SidebarProvider>
          <AdminLayout>{children}</AdminLayout>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
