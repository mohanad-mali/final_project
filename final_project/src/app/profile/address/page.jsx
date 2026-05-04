"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { FaUser, FaCog, FaMapMarkerAlt, FaLock } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        <div className="bg-green-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <FaUser /> My Account
            </h1>
            <p className="text-sm mt-2">
              Manage your addresses and account settings
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-12 gap-8">
          <aside className="col-span-3 bg-white p-5 rounded-xl shadow-sm h-fit">
            <h3 className="font-bold mb-4 text-gray-700">My Account</h3>

            <Link
              href="/profile/address"
              className="flex items-center gap-2 text-gray-500 mb-3 hover:text-green-600"
            >
              <FaMapMarkerAlt />
              <span>My Addresses</span>
            </Link>

            <Link
              href="/profile"
              className="flex items-center gap-2 text-green-600"
            >
              <FaCog />
              <span>Settings</span>
            </Link>
          </aside>

          <section className="col-span-9 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaUser /> Profile Information
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <input
                  className="border p-3 rounded-lg"
                  placeholder="Full Name"
                />
                <input
                  className="border p-3 rounded-lg"
                  placeholder="Email Address"
                />
                <input
                  className="border p-3 rounded-lg col-span-2"
                  placeholder="Phone Number"
                />
              </div>

              <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg">
                Save Changes
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaLock /> Change Password
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  className="border p-3 rounded-lg col-span-2"
                  placeholder="Current Password"
                />
                <input
                  type="password"
                  className="border p-3 rounded-lg"
                  placeholder="New Password"
                />
                <input
                  type="password"
                  className="border p-3 rounded-lg"
                  placeholder="Confirm Password"
                />
              </div>

              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg">
                Change Password
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
