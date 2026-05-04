"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 mt-10 mb-20">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Complete Your Order
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="border rounded-xl p-5">
              <h3 className="bg-green-600 text-white px-4 py-2 rounded mb-4">
                Shipping Address
              </h3>

              <input
                className="w-full border p-3 rounded mb-3"
                placeholder="City"
              />
              <input
                className="w-full border p-3 rounded mb-3"
                placeholder="Street Address"
              />
              <input
                className="w-full border p-3 rounded"
                placeholder="Phone Number"
              />
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="bg-green-600 text-white px-4 py-2 rounded mb-4">
                Payment Method
              </h3>

              <div className="border p-4 rounded flex justify-between items-center">
                <span>Cash on Delivery</span>
                <input type="radio" checked readOnly />
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-5 h-fit">
            <h3 className="bg-green-600 text-white px-4 py-2 rounded mb-4">
              Order Summary
            </h3>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.title} × {item.qty}
                  </span>
                  <span>{item.price * item.qty} EGP</span>
                </div>
              ))}

              <hr />

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal} EGP</span>
              </div>

              <div className="flex justify-between text-green-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{subtotal} EGP</span>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded mt-4">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
