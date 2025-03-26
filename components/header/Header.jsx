import { auth } from "@/auth";
import Link from "next/link";
import Logo from "../Logo";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

export default async function Header() {
  const session = await auth();

  return (
    <header className="w-full mx-auto px-8 py-4 shadow-lg sticky top-0 bg-white z-50">
      <MobileNav />
      <nav className="flex gap-2 justify-between items-center">
        <h1>
          <Logo />
        </h1>
        <ul className="hidden flex-1 lg:flex justify-center space-x-6 ">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/#trending-Cakes" className="hover:text-orange-500">
              Popular
            </Link>
          </li>
          <li>
            <Link href="/#Special-Offers" className="hover:text-orange-500">
              Offers
            </Link>
          </li>
        </ul>
        <div className=" flex items-center justify-end space-x-8 ">
          <SearchBar />
          <Cart />
          <UserProfile user={session?.user} />
        </div>
      </nav>
    </header>
  );
}
