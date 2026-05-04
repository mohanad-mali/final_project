export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-20 mb-14">
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            NEWSLETTER
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-5">
            Get the Freshest Updates{" "}
            <span className="text-green-600">Delivered Free</span>
          </h2>

          <p className="text-gray-500 mt-3">
            Weekly recipes, seasonal offers & exclusive member perks.
          </p>

          <div className="flex flex-wrap gap-3 mt-5 text-sm text-gray-600">
            <span className="bg-white shadow border rounded-full px-4 py-2">
              Fresh Picks Weekly
            </span>
            <span className="bg-white shadow border rounded-full px-4 py-2">
              Free Delivery Codes
            </span>
            <span className="bg-white shadow border rounded-full px-4 py-2">
              Members-Only Deals
            </span>
          </div>

          <div className="flex mt-6 max-w-xl">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 border border-gray-200 rounded-l-xl px-5 py-3 outline-none text-gray-700"
            />
            <button className="bg-green-600 text-white px-8 rounded-r-xl font-semibold">
              Subscribe →
            </button>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-7 shadow-lg">
          <span className="bg-green-700 text-xs px-3 py-1 rounded-full">
            MOBILE APP
          </span>

          <h3 className="text-2xl font-bold mt-4">Shop Faster on Our App</h3>

          <p className="text-gray-400 text-sm mt-2">
            Get app-exclusive deals & 15% off your first order.
          </p>

          <div className="mt-5 space-y-3">
            <button className="w-full bg-gray-800 rounded-xl p-3">
              App Store
            </button>

            <button className="w-full bg-gray-800 rounded-xl p-3">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
