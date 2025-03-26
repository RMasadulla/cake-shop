import { auth } from "@/auth";
import AddressesSection from "@/components/profile/AddressesSection";
import OrdersSection from "@/components/profile/OrdersSection";
import PaymentSection from "@/components/profile/PaymentSection";
import ProfileSection from "@/components/profile/ProfileSection";
import SettingsSection from "@/components/profile/SettingsSection";
import Sidebar from "@/components/profile/Sidebar";

export default async function ProfilePage() {
  const session = await auth();
  return (
    <main className="bg-gray-100 border-b border-gray-900 py-10">
      <div className="container  mx-auto md:flex md:space-x-8">
        <Sidebar user={session?.user} />
        <div className="md:w-3/4 mt-6 md:mt-0">
          <ProfileSection user={session?.user} />
          <OrdersSection />
          <AddressesSection />
          <PaymentSection />
          <SettingsSection />
        </div>
      </div>
    </main>
  );
}
