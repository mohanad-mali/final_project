export default function Offers() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 grid md:grid-cols-2 gap-6">
      {/* Left Card */}
      <div className="bg-green-600 text-white p-8 rounded-xl">
        <p className="text-sm mb-2">Deal of the Day</p>
        <h3 className="text-2xl font-bold mb-2">Fresh Organic Fruits</h3>
        <p className="mb-4">Get up to 40% off</p>

        <h2 className="text-3xl font-bold mb-4">40% OFF</h2>

        <button className="bg-white text-green-700 px-5 py-2 rounded-lg">
          Shop Now →
        </button>
      </div>

      {/* Right Card */}
      <div className="bg-orange-500 text-white p-8 rounded-xl">
        <p className="text-sm mb-2">New Arrivals</p>
        <h3 className="text-2xl font-bold mb-2">Exotic Vegetables</h3>
        <p className="mb-4">Discover fresh vegetables</p>

        <h2 className="text-3xl font-bold mb-4">25% OFF</h2>

        <button className="bg-white text-orange-600 px-5 py-2 rounded-lg">
          Explore Now →
        </button>
      </div>
    </section>
  );
}
