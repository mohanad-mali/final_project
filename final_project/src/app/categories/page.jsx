"use client";

import Footer from "@/components/Footer";
import Link from "next/link";

export default function CategoriesPage() {
  const categories = [
    { id: "music", name: "Music", img: "/images/music.png" },
    { id: "mens-fashion", name: "Men's Fashion", img: "/images/men.png" },
    { id: "womens-fashion", name: "Women's Fashion", img: "/images/women.png" },
    { id: "supermarket", name: "SuperMarket", img: "/images/market.png" },
    { id: "baby-and-toys", name: "Baby & Toys", img: "/images/baby.png" },
    { id: "home", name: "Home", img: "/images/home.png" },
    { id: "books", name: "Books", img: "/images/books.png" },
    {
      id: "beauty-and-health",
      name: "Beauty & Health",
      img: "/images/beauty.png",
    },
    { id: "mobiles", name: "Mobiles", img: "/images/mobile.png" },
    { id: "electronics", name: "Electronics", img: "/images/electronics.png" },
  ];

  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        <div className="bg-green-600 text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold">All Categories</h1>
            <p className="text-sm mt-2">
              Browse all available product categories
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="bg-white p-5 rounded-xl shadow-sm text-center hover:shadow-md transition cursor-pointer block"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-20 h-20 mx-auto object-contain mb-3"
                />

                <h3 className="text-sm font-semibold text-gray-700">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
