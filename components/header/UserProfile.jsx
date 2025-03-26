"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SignOut from "../auth/SignOut";

export default function UserProfile({ user }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      {/* User Profile Image (Round Shape) */}
      <div
        className="cursor-pointer relative group w-16"
        onClick={toggleProfile}
      >
        <Image
          src={user?.image ? user?.image : "/user.png"}
          alt={user ? user?.name : "Profile"}
          className="wave-animation w-10 h-10 rounded-full border-2 border-black shadow-lg"
          width={100}
          height={100}
        />
      </div>

      {/* User Details (Slide-In Panel) */}
      <div
        className={`absolute top-full right-0 bg-white p-4 z-10 shadow-md border-t-2 border-black transition-transform duration-100 ease-in-out ${
          isProfileOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
        style={{ width: "200px" }}
      >
        {user ? (
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-800 mb-3">{user?.name}</p>
            <Link
              href={"/profile"}
              onClick={toggleProfile}
              className=" mb-1 font-semibold text-black hover:text-white hover:bg-black px-3 py-2 rounded-sm"
            >
              Profile
            </Link>
            <SignOut customStyle="mb-1 bg-black font-semibold text-white hover:text-gray-200 px-3 py-2 rounded-sm" />
          </div>
        ) : (
          <div className="flex flex-col">
            <Link
              href={"/login"}
              onClick={toggleProfile}
              className=" mb-1 bg-black font-semibold text-white hover:text-gray-200 px-3 py-2 rounded-sm"
            >
              Login
            </Link>
            <Link
              href={"/register"}
              onClick={toggleProfile}
              className="font-semibold text-black hover:text-white hover:bg-black px-3 py-2 rounded-sm  transition-all"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
