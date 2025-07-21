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
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 shadow-lg sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileNav />
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <ul className="hidden lg:flex flex-1 justify-center space-x-6 text-sm font-medium">
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

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <Cart />
          <UserProfile user={session?.user} />
        </div>
      </nav>
      <div className="mt-4 block md:hidden">
        <SearchBar />
      </div>
    </header>
  );
}
