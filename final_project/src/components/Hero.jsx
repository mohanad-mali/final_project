"use client";

import { FaTruck, FaShieldAlt, FaUndo, FaHeadphones } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <div className="relative h-[360px] rounded-xl overflow-hidden bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-800/70"></div>

        <div className="relative z-10 h-full flex flex-col justify-center px-14 text-white">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Fresh Products Delivered <br /> to your Door
          </h1>

          <p className="text-lg mb-7">Get 20% off your first order</p>

          <div className="flex gap-4">
            <button className="bg-white text-green-700 px-7 py-3 rounded-lg font-semibold">
              Shop Now
            </button>
            <button className="border border-white text-white px-7 py-3 rounded-lg font-semibold">
              View Deals
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaTruck className="text-blue-500 text-2xl" />
          <div>
            <h3 className="font-bold text-gray-800">Free Shipping</h3>
            <p className="text-sm text-gray-500">On orders over 500 EGP</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaShieldAlt className="text-green-600 text-2xl" />
          <div>
            <h3 className="font-bold text-gray-800">Secure Payment</h3>
            <p className="text-sm text-gray-500">100% secure transactions</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaUndo className="text-orange-500 text-2xl" />
          <div>
            <h3 className="font-bold text-gray-800">Easy Returns</h3>
            <p className="text-sm text-gray-500">14-day return policy</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaHeadphones className="text-purple-500 text-2xl" />
          <div>
            <h3 className="font-bold text-gray-800">24/7 Support</h3>
            <p className="text-sm text-gray-500">Dedicated support team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
