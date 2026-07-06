"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBoxOpen, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-2 ${
      pathname === path
        ? "text-orange-500 font-bold"
        : "text-gray-700 hover:text-orange-500"
    }`;

    return (
    <div className="navbar bg-white shadow-md px-6">
      
      {/* Logo */}
      <div className="flex-1">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-orange-500"
        >
          <FaShoppingCart />
          JackFruit
        </Link>
      </div>

       <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-2">

          <li>
            <Link href="/" className={linkClass("/")}>
              <FaHome />
              Home
            </Link>
          </li>

          <li>
            <Link href="/products" className={linkClass("/products")}>
              <FaBoxOpen />
              Products
            </Link>
          </li>

              <li>
            <Link href="/my-profile" className={linkClass("/my-profile")}>
              <FaUser />
              My Profile
            </Link>
          </li>

          <li>
            <Link href="/login" className="btn btn-outline btn-warning">
              Login
            </Link>
          </li>

          <li>
            <Link href="/register" className="btn btn-warning text-white">
              Register
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;