"use client";

import googleImg from "@/public/googleIcon.png";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SocialLogin() {
  const hangleAuthG = (event) => {
    signIn("google", { callBackUrl: "/" }); //callback mention the redict url //http:localhost:300/profile like this
  };

  return (
    <div
      onClick={hangleAuthG}
      className="w-full flex items-center justify-center gap-2 border-1 border-black mt-3 rounded-sm cursor-pointer"
    >
      <Image src={googleImg} height={40} width={40} alt="google" />
      <span>Google</span>
    </div>
  );
}
