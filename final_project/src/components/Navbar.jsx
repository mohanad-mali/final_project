"use client";

import Link from "next/link";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaHeadphones,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="bg-gray-100 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <span>Free Shipping on Orders 500 EGP</span>
            <span>New Arrivals Daily</span>
          </div>

          <div className="flex gap-6 items-center">
            <span>+1 (800) 123-4567</span>
            <span>support@freshcart.com</span>
            <Link href="/profile" className="hover:text-green-600">
              Usama
            </Link>
            <Link
              href="/login"
              className="hover:text-green-600 flex items-center gap-1"
            >
              <FaSignOutAlt />
              Sign Out
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="text-2xl font-bold text-green-600">
            FreshCart
          </Link>

          <div className="flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full border rounded-full px-5 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Link
              href="/all-products"
              className="absolute right-1 top-1 bg-green-600 text-white p-2 rounded-full"
            >
              <FaSearch size={14} />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>

            <Link href="/all-products" className="hover:text-green-600">
              Shop
            </Link>

            <Link href="/categories" className="hover:text-green-600">
              Categories
            </Link>

            <Link href="/brands" className="hover:text-green-600">
              Brands
            </Link>
          </div>

          <div className="flex items-center gap-5 text-gray-700">
            <Link
              href="/profile"
              className="hidden lg:flex items-center gap-2 hover:text-green-600"
            >
              <FaHeadphones />
              <div className="text-xs">
                <p className="font-semibold">Support</p>
                <p className="text-gray-500">24/7 Help</p>
              </div>
            </Link>

            <Link href="/wishlist" className="hover:text-green-600">
              <FaHeart />
            </Link>

            <Link href="/cart" className="relative hover:text-green-600">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>

            <Link href="/profile" className="hover:text-green-600">
              <FaUser />
            </Link>

            <Link
              href="/login"
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
