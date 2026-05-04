"use client";

import Footer from "@/components/Footer";

const orders = [
  {
    id: "70651",
    status: "Processing",
    date: "Feb 23, 2026",
    total: 149,
    img: "https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-1.jpeg",
    title: "Woman Shawl",
    items: "1 item",
  },
  {
    id: "70652",
    status: "Delivered",
    date: "Feb 21, 2026",
    total: 2613,
    img: "https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-1.jpeg",
    title: "Woman Cardigan",
    items: "3 items",
  },
  {
    id: "70653",
    status: "Pending",
    date: "Feb 18, 2026",
    total: 647,
    img: "https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-1.jpeg",
    title: "Woman Shawl",
    items: "2 items",
  },
];

export default function OrdersPage() {
  return (
    <>
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
            <p className="text-gray-500 mt-2">Track and manage your orders.</p>
          </div>

          <div className="space-y-5">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 grid md:grid-cols-4 gap-5 items-center"
              >
                <div className="flex items-center gap-4 md:col-span-2">
                  <img
                    src={order.img}
                    alt={order.title}
                    className="w-24 h-24 object-contain bg-gray-50 rounded-lg"
                  />

                  <div>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      {order.status}
                    </span>

                    <h3 className="font-bold text-gray-800 mt-3">
                      {order.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Order #{order.id} • {order.date}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Items</p>
                  <p className="font-semibold text-gray-800">{order.items}</p>
                </div>

                <div className="text-right">
                  <p className="text-gray-500 text-sm">Total</p>
                  <p className="text-green-600 font-bold">{order.total} EGP</p>

                  <button className="mt-3 bg-green-600 text-white px-5 py-2 rounded-lg text-sm">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
