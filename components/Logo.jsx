import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-bold text-3xl text-black hover:text-gray-950"
    >
      S B B
      <span className="text-sm ml-1 hidden md:inline-flex ">
        Sweet Bliss Bakery
      </span>
    </Link>
  );
}
