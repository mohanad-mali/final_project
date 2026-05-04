"use client";

import Footer from "@/components/Footer";

export default function BrandsPage() {
  const brands = [
    "Canon",
    "Dell",
    "Lenovo",
    "Sony",
    "Infinix",
    "Realme",
    "Honor",
    "Nokia",
    "Oppo",
    "Huawei",
    "Apple",
    "Xiaomi",
    "Samsung",
    "Jack & Jones",
    "LC Waikiki",
    "Andora",
    "Puma",
    "Skechers",
    "Reserved",
    "Reebok",
    "Adidas",
    "Nike",
    "Defacto",
    "Beko",
    "Kenwood",
    "Black & Decker",
    "Mienta",
    "Fresh",
    "Philips",
    "Toshiba",
    "Tornado",
    "Braun",
    "Garnier",
    "Essence",
    "Bourjois",
    "Kemei",
  ];

  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold">Top Brands</h1>
            <p className="text-sm mt-2">Shop by your favorite brands</p>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition cursor-pointer"
              >
                <div className="h-12 flex items-center justify-center text-gray-700 font-semibold">
                  {brand}
                </div>

                <p className="text-xs text-gray-400 mt-2">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
