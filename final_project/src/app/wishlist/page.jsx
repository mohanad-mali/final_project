"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { FaHeart, FaTrash, FaShoppingCart } from "react-icons/fa";

const wishlistItems = [
  {
    id: 1,
    title: "Hoops 3.0 Low Classic Vintage Shoes",
    category: "Men's Fashion",
    price: 1629,
    img: "https://ecommerce.routemisr.com/Route-Academy-products/1680400280600-1.jpeg",
  },
  {
    id: 2,
    title: "Galaxy 6 Running Shoes",
    category: "Men's Fashion",
    price: 1629,
    img: "https://ecommerce.routemisr.com/Route-Academy-products/1680400280600-1.jpeg",
  },
  {
    id: 3,
    title: "Victus 16-D1016ne Laptop",
    category: "Electronics",
    price: 42960,
    img: "https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-1.jpeg",
  },
  {
    id: 4,
    title: "Duramo 10 Running Shoes",
    category: "Men's Fashion",
    price: 1314,
    img: "https://ecommerce.routemisr.com/Route-Academy-products/1680400280600-1.jpeg",
  },
  {
    id: 5,
    title: "Woman Shawl",
    category: "Women's Fashion",
    price: 149,
    img: "https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-1.jpeg",
  },
];

export default function WishlistPage() {
  return (
    <>
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-4 py-10">
          <p className="text-sm text-gray-500 mb-5">Home / Wishlist</p>

          <div className="mb-8">
            <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-800">
              <FaHeart className="text-red-500" />
              My Wishlist
            </h1>
            <p className="text-gray-500 mt-2">
              {wishlistItems.length} items saved
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-600">
              <div className="col-span-6">Product</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-center">Actions</div>
            </div>

            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 items-center px-5 py-5 border-t"
              >
                <div className="col-span-6 flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-contain bg-gray-50 rounded"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>

                <div className="col-span-2 font-semibold text-gray-800">
                  {item.price} EGP
                </div>

                <div className="col-span-2">
                  <span className="text-green-600 text-sm font-semibold">
                    In Stock
                  </span>
                </div>

                <div className="col-span-2 flex justify-center gap-3">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                    <FaShoppingCart />
                    Add to Cart
                  </button>

                  <button className="text-red-500">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="inline-block mt-6 text-green-600 font-semibold"
          >
            ← Continue Shopping
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
