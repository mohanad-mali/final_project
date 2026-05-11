"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaHeart, FaTrash, FaShoppingCart } from "react-icons/fa";
import { getWishlist, removeFromWishlist } from "@/api/wishlistApi";
import { addToCart } from "@/api/cartApi";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchWishlist() {
    try {
      setLoading(true);
      const res = await getWishlist();
      setWishlistItems(res.data.data || []);
    } catch (error) {
      console.log(error);
      setWishlistItems([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleRemove(productId) {
    try {
      await removeFromWishlist(productId);
      fetchWishlist();
    } catch (error) {
      console.log(error);
      alert("Cannot remove item");
    }
  }

  async function handleAddToCart(productId) {
    try {
      await addToCart(productId);
      alert("Product added to cart ✅");
    } catch (error) {
      console.log(error);
      alert("Please login first ❌");
    }
  }

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <>
        <main className="bg-white min-h-screen flex items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-700">
            Loading Wishlist...
          </h2>
        </main>
        <Footer />
      </>
    );
  }

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

          {wishlistItems.length === 0 ? (
            <div className="text-center py-20 border rounded-xl">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Your wishlist is empty
              </h2>

              <Link
                href="/products"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-12 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-600">
                <div className="col-span-6">Product</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2 text-center">Actions</div>
              </div>

              {wishlistItems.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-12 items-center px-5 py-5 border-t"
                >
                  <div className="col-span-6 flex items-center gap-4">
                    <img
                      src={item.imageCover}
                      alt={item.title}
                      className="w-16 h-16 object-contain bg-gray-50 rounded"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.category?.name}
                      </p>
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
                    <button
                      onClick={() => handleAddToCart(item._id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                    >
                      <FaShoppingCart />
                      Add
                    </button>

                    <button
                      onClick={() => handleRemove(item._id)}
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

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
