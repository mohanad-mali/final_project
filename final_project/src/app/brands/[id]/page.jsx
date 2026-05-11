"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaPlus } from "react-icons/fa";

export default function BrandDetailsPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [brandName, setBrandName] = useState("");

  useEffect(() => {
    async function getBrandProducts() {
      try {
        const res = await axios.get(
          "https://ecommerce.routemisr.com/api/v1/products?limit=200",
        );

        const allProducts = res.data.data || [];

        const filtered = allProducts.filter((product) => {
          return (
            product.brand?._id === id ||
            product.brand?.slug === id ||
            product.brand?.name?.toLowerCase() === id?.toLowerCase()
          );
        });

        setProducts(filtered);

        if (filtered.length > 0) {
          setBrandName(filtered[0].brand?.name);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getBrandProducts();
  }, [id]);

  function addToCart(product) {
    const oldCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const exist = oldCart.find((item) => item.id === product._id);

    const updatedCart = exist
      ? oldCart.map((item) =>
          item.id === product._id ? { ...item, qty: item.qty + 1 } : item,
        )
      : [
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

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    alert("Product added to cart ✅");
  }

  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold">
              {brandName || "Brand"} Products
            </h1>
            <p className="text-sm mt-2">Browse products for this brand</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-10">
          {products.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center text-gray-500">
              No products found for this brand
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {products.map((product) => (
                <Link key={product._id} href={`/product/${product._id}`}>
                  <div className="bg-white border rounded-xl p-4 hover:shadow-lg transition cursor-pointer">
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
                        className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
