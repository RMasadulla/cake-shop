import Image from "next/image";
import Link from "next/link";
import {
  FaClipboardList,
  FaCog,
  FaCreditCard,
  FaHeart,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import SignOut from "../auth/SignOut";

const navItems = [
  { href: "/profile", icon: <FaUser />, label: "Profile" },
  {
    href: "/profile/#orders",
    icon: <FaClipboardList />,
    label: "Orders",
  },
  {
    href: "/profile/#addresses",
    icon: <FaMapMarkerAlt />,
    label: "Addresses",
  },
  {
    href: "/profile/#payment",
    icon: <FaCreditCard />,
    label: "Payment Methods",
  },
  {
    href: "/profile/#wishlist",
    icon: <FaHeart />,
    label: "Wishlist",
  },
  { href: "/profile/#settings", icon: <FaCog />, label: "Settings" },
];

export default function Sidebar({ user }) {
  return (
    <div className="md:w-1/4">
      <div className="bg-white shadow rounded-lg p-4 sticky top-24">
        <div className="flex flex-col items-center mb-6">
          <Image
            className="h-24 w-24 rounded-full mb-2"
            src={user?.image ? user?.image : "/user.png"}
            alt={user ? user?.name : "Profile"}
            width={100}
            height={100}
          />
          <h2 className="text-lg font-medium">
            {user?.name ? user?.name : "Abc"}
          </h2>
          <p className="text-gray-500 text-sm">
            {user?.email ? user?.email : "abc.doe@example.com"}
          </p>
        </div>
        <nav className="space-y-1">
          {navItems.map(({ href, icon, label, className }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                className ||
                "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="mr-3">{icon}</span>
              {label}
            </Link>
          ))}

          <span
            className="mr-3 flex gap-4 items-center px-3 py-2 text-sm font-medium rounded-md 
                text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <FaSignOutAlt />
            <SignOut />
          </span>
        </nav>
      </div>
    </div>
  );
}
