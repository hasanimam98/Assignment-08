"use client";

import Link from "next/link";
import { FaHome, FaBoxOpen, FaUser, FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md px-6">
      
      <div className="flex-1">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-orange-500"
        >
            <FaShoppingCart />
          SunCart
        </Link>
      </div>
           <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-2">
<li>
            <Link href="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link href="/products">
              <FaBoxOpen />
              Products
            </Link>
          </li>
           <li>
            <Link href="/my-profile">
              <FaUser />
              My Profile
            </Link>
          </li>
           <li>
            <Link
              href="/login"
              className="btn btn-outline btn-warning"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/register"
              className="btn btn-warning text-white"
            >
              Register
            </Link>
          </li>


        </ul>

        </div>
    </div>
  );
};

export default Navbar;
