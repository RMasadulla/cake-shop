"use client";

import { signOut } from "next-auth/react";

export default function SignOut({ customStyle }) {
  return (
    <button
      className={customStyle}
      onClick={() =>
        signOut({
          callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/login`,
        })
      }
    >
      Log Out
    </button>
  );
}
