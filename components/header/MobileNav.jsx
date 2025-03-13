"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex lg:hidden">
      <div
        onClick={toggleNav}
        className={` justify-center items-center w-14 h-10 absolute top-full left-0 bg-white shadow-md border-t-2 border-t-black z-20 ${
          isNavOpen ? "hidden" : "flex"
        }`}
      >
        <FaBarsStaggered className="text-2xl cursor-pointer" />
      </div>

      <ul
        className={`absolute top-full left-0 bg-white p-4 z-10 shadow-md border-t-2 border-black transition-transform duration-300 ease-in-out ${
          isNavOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "200px" }}
      >
        <li
          onClick={(prev) => toggleNav(!prev)}
          className="flex justify-end mb-1"
        >
          <IoMdClose className=" bg-black text-red-500 flex items-end text-2xl cursor-pointer " />
        </li>

        <li onClick={(prev) => toggleNav(!prev)}>
          <Link
            href="/categories"
            className={`inline-flex w-full font-semibold py-2 rounded-sm px-3 ${
              pathname === "/categories"
                ? "text-white bg-black"
                : " text-black hover:text-white hover:bg-black"
            }`}
          >
            Categories
          </Link>
        </li>
        <li onClick={(prev) => toggleNav(!prev)}>
          <Link
            href="/#popular-items"
            className={`inline-flex w-full font-semibold py-2 rounded-sm px-3 ${
              pathname === "/#popular-items"
                ? "text-white bg-black"
                : " text-black hover:text-white hover:bg-black"
            }`}
          >
            Popular
          </Link>
        </li>
        <li onClick={(prev) => toggleNav(!prev)}>
          <Link
            href="/#latest-recipes"
            className={`inline-flex w-full font-semibold py-2 rounded-sm px-3 ${
              pathname === "/#latest-recipes"
                ? "text-white bg-black"
                : " text-black hover:text-white hover:bg-black"
            }`}
          >
            New Items
          </Link>
        </li>
      </ul>
    </div>
  );
}
