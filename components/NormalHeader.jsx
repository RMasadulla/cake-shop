import Link from "next/link";
import SearchIcon from "./Icons";
import Logo from "./Logo";

export default function NormalHeader() {
  return (
    <header class="container mx-auto px-4 py-6">
      <nav class="flex justify-between items-center">
        <Logo />
        <ul class="hidden md:flex space-x-6">
          <li>
            <Link href="/" class="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/categories" class="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/#latest-recipes" class="hover:text-orange-500">
              Latest Recipes
            </Link>
          </li>
          <li>
            <Link href="/#HandPicked" class="hover:text-orange-500">
              HandPicked
            </Link>
          </li>
        </ul>
        <div class="flex items-center space-x-4">
          <Link href="#" class="hover:text-orange-500">
            <SearchIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}
