"use client";

import Footer from "@/components/Footer";

export default function CategoriesPage() {
  const categories = [
    { name: "Music", img: "/images/music.png" },
    { name: "Men's Fashion", img: "/images/men.png" },
    { name: "Women's Fashion", img: "/images/women.png" },
    { name: "SuperMarket", img: "/images/market.png" },
    { name: "Baby & Toys", img: "/images/baby.png" },
    { name: "Home", img: "/images/home.png" },
    { name: "Books", img: "/images/books.png" },
    { name: "Beauty & Health", img: "/images/beauty.png" },
    { name: "Mobiles", img: "/images/mobile.png" },
    { name: "Electronics", img: "/images/electronics.png" },
  ];

  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-green-600 text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold">All Categories</h1>
            <p className="text-sm mt-2">
              Browse all available product categories
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm text-center hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-20 h-20 mx-auto object-contain mb-3"
                />

                <h3 className="text-sm font-semibold text-gray-700">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
