"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function BrandsPage() {
  const fallbackBrands = [
    { _id: "canon", name: "Canon", slug: "canon" },
    { _id: "dell", name: "Dell", slug: "dell" },
    { _id: "lenovo", name: "Lenovo", slug: "lenovo" },
    { _id: "sony", name: "Sony", slug: "sony" },
    { _id: "apple", name: "Apple", slug: "apple" },
    { _id: "samsung", name: "Samsung", slug: "samsung" },
    { _id: "nike", name: "Nike", slug: "nike" },
    { _id: "adidas", name: "Adidas", slug: "adidas" },
    { _id: "puma", name: "Puma", slug: "puma" },
    { _id: "reebok", name: "Reebok", slug: "reebok" },
    { _id: "defacto", name: "Defacto", slug: "defacto" },
    { _id: "jack-and-jones", name: "Jack & Jones", slug: "jack-and-jones" },
  ];

  const [brands, setBrands] = useState(fallbackBrands);

  useEffect(() => {
    async function getBrands() {
      try {
        const res = await axios.get(
          "https://ecommerce.routemisr.com/api/v1/brands",
        );

        if (res.data.data && res.data.data.length > 0) {
          setBrands(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getBrands();
  }, []);

  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold">Top Brands</h1>
            <p className="text-sm mt-2">Shop by your favorite brands</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand._id}
                href={`/brands/${brand._id}`}
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition cursor-pointer block"
              >
                {brand.image ? (
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-16 w-full object-contain mb-4"
                  />
                ) : (
                  <div className="h-16 flex items-center justify-center mb-4 text-3xl">
                    🛍️
                  </div>
                )}

                <div className="h-12 flex items-center justify-center text-gray-700 font-semibold">
                  {brand.name}
                </div>

                <p className="text-xs text-gray-400 mt-2">{brand.slug}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
