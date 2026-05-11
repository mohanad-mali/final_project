"use client";

import Link from "next/link";

const categories = [
  { name: "Music", img: "/cat1.png" },
  { name: "Men's Fashion", img: "/cat2.png" },
  { name: "Women's Fashion", img: "/cat3.png" },
  { name: "SuperMarket", img: "/cat4.png" },
  { name: "Baby & Toys", img: "/cat5.png" },
  { name: "Home", img: "/cat6.png" },
  { name: "Books", img: "/cat7.png" },
  { name: "Beauty & Health", img: "/cat8.png" },
  { name: "Mobiles", img: "/cat9.png" },
  { name: "Electronics", img: "/cat10.png" },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-14">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-3xl font-bold text-gray-800">
          <span className="text-green-600 mr-3">|</span>
          Shop By <span className="text-green-600">Category</span>
        </h2>

        <Link
          href="/categories"
          className="text-green-600 font-medium cursor-pointer"
        >
          View All Categories →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={`/categories/${cat.name
              .toLowerCase()
              .replaceAll(" ", "-")
              .replaceAll("&", "and")}`}
          >
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl h-36 flex flex-col items-center justify-center gap-3 hover:shadow-md transition cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-14 h-14 object-contain"
                />
              </div>

              <h3 className="text-sm font-semibold text-gray-800">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
