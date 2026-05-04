"use client";

import Footer from "@/components/Footer";
import { FaUser, FaCog, FaLock } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        {/* Top Banner */}
        <div className="bg-green-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <FaUser /> My Account
            </h1>
            <p className="text-sm mt-2">
              Manage your account and personal settings
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-3 bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-bold mb-4 text-gray-700">My Account</h3>

            <div className="flex items-center gap-2 text-green-600 mb-3">
              <FaUser />
              <span>My Account</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <FaCog />
              <span>Settings</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-9 space-y-8">
            {/* Profile Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaUser /> Profile Information
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Full Name"
                  className="border p-3 rounded-lg"
                />
                <input
                  placeholder="Email Address"
                  className="border p-3 rounded-lg"
                />
                <input
                  placeholder="Phone Number"
                  className="border p-3 rounded-lg col-span-2"
                />
              </div>

              <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg">
                Save Changes
              </button>
            </div>

            {/* Account Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">Account Information</h3>

              <p className="text-gray-600 text-sm">User ID: #12345</p>
            </div>

            {/* Change Password */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaLock /> Change Password
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="border p-3 rounded-lg col-span-2"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="border p-3 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border p-3 rounded-lg"
                />
              </div>

              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
