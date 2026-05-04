"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaHeadphones,
} from "react-icons/fa";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  function updateLocalStorage(updatedCart) {
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  }

  function increaseQty(id) {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item,
    );

    updateLocalStorage(updatedCart);
  }

  function decreaseQty(id) {
    const updatedCart = cartItems
      .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0);

    updateLocalStorage(updatedCart);
  }

  function removeItem(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateLocalStorage(updatedCart);
  }

  function saveCartToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  return (
    <>
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="mb-8">
            <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-800">
              <span className="bg-green-600 text-white p-3 rounded-lg">
                <FaShoppingCart />
              </span>
              Shopping Cart
            </h1>

            <p className="text-gray-500 mt-2">
              You have{" "}
              <span className="text-green-600 font-semibold">
                {cartItems.length} items
              </span>{" "}
              in your cart
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20 border rounded-xl">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Your cart is empty
              </h2>

              <Link
                href="/all-products"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-5 shadow-sm"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-24 h-24 object-contain bg-gray-50 rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{item.title}</h3>

                      <p className="text-sm text-gray-500">{item.category}</p>

                      <p className="text-green-600 font-bold mt-2">
                        {item.price} EGP
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-8 h-8 border rounded flex items-center justify-center"
                        >
                          <FaMinus size={12} />
                        </button>

                        <span className="text-gray-800">{item.qty}</span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-8 h-8 bg-green-600 text-white rounded flex items-center justify-center"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-gray-800">
                        {item.price * item.qty} EGP
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 mt-4"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}

                <Link
                  href="/all-products"
                  className="inline-block text-green-600 font-semibold"
                >
                  ← Continue Shopping
                </Link>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl shadow-sm h-fit overflow-hidden">
                <div className="bg-green-600 text-white p-5">
                  <h2 className="text-xl font-bold">Order Summary</h2>
                  <p className="text-sm">
                    {cartItems.length} items in your cart
                  </p>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{subtotal} EGP</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between font-bold text-gray-800">
                    <span>Total</span>
                    <span>{subtotal} EGP</span>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={saveCartToLocalStorage}
                    className="block text-center w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
                  >
                    Secure Checkout
                  </Link>

                  <p className="text-center text-sm text-gray-500">
                    Mastercard • Visa • PayPal
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-4 gap-5 mt-12">
            <div className="flex items-center gap-3 text-gray-600">
              <FaTruck className="text-green-600" /> Free Shipping
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <FaUndo className="text-green-600" /> Easy Returns
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <FaShieldAlt className="text-green-600" /> Secure Payment
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <FaHeadphones className="text-green-600" /> 24/7 Support
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
