import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="text-gray-600 mt-2 text-sm">
                Freshly baked delights made with love — from classic cakes to
                custom creations, we bring sweetness to every celebration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">SBB Bakery</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-orange-500"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-orange-500"
                  >
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-orange-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-orange-500"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-orange-500"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-orange-500"
                  >
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-4  flex flex-col md:flex-row items-center justify-between">
          <p>
            &copy; {new Date().getFullYear()} Sweet Bliss Bakery. All rights
            reserved.
          </p>
          <div className="mt-2 flex justify-center gap-4">
            <p className="mt-2">
              Developed by{" "}
              <Link
                href="https://rm-asadulla-portfolio.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 transition font-medium"
              >
                RM Asadulla
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
