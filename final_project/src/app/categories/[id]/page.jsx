"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaPlus } from "react-icons/fa";

export default function CategoryDetailsPage() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      category: "mobiles",
      title: "iPhone 15 Pro",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "mobiles",
      title: "Samsung S24 Ultra",
      price: 1100,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "electronics",
      title: "Sony Headphones",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "electronics",
      title: "Dell Laptop",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "mens-fashion",
      title: "Nike Shoes",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "beauty-and-health",
      title: "Beauty Cream",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === id,
  );

  function addToCart(product) {
    const oldCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const exist = oldCart.find((item) => item.id === product.id);

    const updatedCart = exist
      ? oldCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        )
      : [
          ...oldCart,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            qty: 1,
            img: product.image,
          },
        ];

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    alert("Added To Cart ✅");
  }

  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-green-600 text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold capitalize">
              {id.replaceAll("-", " ")}
            </h1>

            <p className="text-sm mt-2">Browse products in this category</p>
          </div>
        </div>

        {/* Products */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center text-gray-500">
              No products found in this category
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="bg-white border rounded-xl p-4 hover:shadow-lg transition cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-contain mb-3"
                    />

                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                      {product.title}
                    </h3>

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
