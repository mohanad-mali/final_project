"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaHeart, FaEye, FaSync, FaPlus } from "react-icons/fa";

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const res = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products",
      );
      setProducts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  function addToCart(product) {
    const oldCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingProduct = oldCart.find((item) => item.id === product._id);

    let updatedCart;

    if (existingProduct) {
      updatedCart = oldCart.map((item) =>
        item.id === product._id ? { ...item, qty: item.qty + 1 } : item,
      );
    } else {
      updatedCart = [
        ...oldCart,
        {
          id: product._id,
          title: product.title,
          category: product.category?.name,
          price: product.price,
          qty: 1,
          img: product.imageCover,
        },
      ];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    alert("Product added to cart ✅");
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        <div className="bg-green-600 text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold">All Products</h1>
            <p className="text-sm mt-2">Browse all available products</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <Link key={product._id} href={`/product/${product._id}`}>
                <div className="bg-white border rounded-xl p-4 relative hover:shadow-lg transition cursor-pointer">
                  <div className="absolute right-3 top-3 flex flex-col gap-3 text-gray-400 z-10">
                    <FaHeart className="hover:text-red-500" />
                    <FaEye className="hover:text-green-600" />
                    <FaSync className="hover:text-blue-500" />
                  </div>

                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-full h-40 object-contain mb-3"
                  />

                  <p className="text-xs text-gray-400">
                    {product.category?.name}
                  </p>

                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                    {product.title}
                  </h3>

                  <div className="text-yellow-400 text-sm mb-2">
                    ⭐ {product.ratingsAverage}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">
                      {product.price} EGP
                    </span>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-700"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
