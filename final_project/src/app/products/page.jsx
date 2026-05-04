"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaHeart, FaEye, FaSync, FaPlus, FaSearch } from "react-icons/fa";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function getProducts() {
    try {
      const res = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products",
      );
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-4 py-10">
          <p className="text-sm text-gray-500 mb-4">Home / Search Results</p>

          <div className="relative mb-8">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border rounded-lg py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="hidden lg:block">
              <div className="border rounded-xl p-5">
                <h3 className="font-bold mb-4 text-gray-800">Categories</h3>

                {[
                  "Men's Fashion",
                  "Women's Fashion",
                  "Electronics",
                  "Mobiles",
                  "SuperMarket",
                ].map((cat) => (
                  <label
                    key={cat}
                    className="flex gap-2 mb-3 text-sm text-gray-600"
                  >
                    <input type="checkbox" />
                    {cat}
                  </label>
                ))}

                <h3 className="font-bold mt-6 mb-4 text-gray-800">
                  Price Range
                </h3>
                <input type="range" className="w-full" />

                <h3 className="font-bold mt-6 mb-4 text-gray-800">Brands</h3>

                {["DeFacto", "Adidas", "Nike", "Samsung"].map((brand) => (
                  <label
                    key={brand}
                    className="flex gap-2 mb-3 text-sm text-gray-600"
                  >
                    <input type="checkbox" />
                    {brand}
                  </label>
                ))}
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>

                <select className="border rounded-lg px-3 py-2 text-gray-600">
                  <option>Sort by</option>
                  <option>Price Low to High</option>
                  <option>Price High to Low</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.slice(0, 12).map((product) => (
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
                        className="w-full h-44 object-contain mb-3"
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
                          className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-700"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
