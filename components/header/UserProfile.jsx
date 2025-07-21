"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SignOut from "../auth/SignOut";

export default function UserProfile({ user }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Image
        src={user?.image || "/user.png"}
        alt={user?.name || "User"}
        className="w-10 h-10 rounded-full border-2 border-black cursor-pointer"
        width={40}
        height={40}
        onClick={() => setOpen((prev) => !prev)}
      />

      <div
        className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md p-3 transition-all duration-200 z-50 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        {user ? (
          <>
            <p className="font-semibold mb-2">{user.name}</p>
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="block mb-1 text-sm hover:bg-black hover:text-white px-3 py-1 rounded"
            >
              Profile
            </Link>
            <SignOut customStyle="block w-full text-left text-sm bg-black text-white hover:bg-gray-800 px-3 py-1 rounded" />
          </>
        ) : (
          <>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block text-sm bg-black text-white hover:bg-gray-800 px-3 py-1 rounded mb-1"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="block text-sm text-black hover:bg-black hover:text-white px-3 py-1 rounded"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
