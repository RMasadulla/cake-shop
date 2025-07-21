"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden relative">
      <button onClick={toggleNav} className="text-2xl">
        {isOpen ? <IoMdClose /> : <FaBarsStaggered />}
      </button>

      <ul
        className={`absolute top-12 left-0 w-52 bg-white shadow-lg z-50 p-4 transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: "Popular", href: "/#popular-items" },
          { label: "New Items", href: "/#latest-recipes" },
        ].map((item) => (
          <li key={item.href} className="mb-2">
            <Link
              href={item.href}
              onClick={toggleNav}
              className={`block px-3 py-2 rounded-md font-medium ${
                pathname === item.href
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
