import Link from "next/link";
import Logo from "../Logo";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <header className="w-full mx-auto px-8 py-4 shadow-lg fixed top-0 bg-white z-50">
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
            <Link href="/#latest-recipes" className="hover:text-orange-500">
              Popular
            </Link>
          </li>
          <li>
            <Link href="/#latest-recipes" className="hover:text-orange-500">
              New Items
            </Link>
          </li>
        </ul>
        <div className=" flex items-center justify-end space-x-8 ">
          <SearchBar />
          <Cart />
          <UserProfile />
        </div>
      </nav>
    </header>
  );
}
