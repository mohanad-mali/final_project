import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <h2 className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg text-2xl font-bold">
            FreshCart
          </h2>

          <p className="text-sm text-gray-400 mt-5 max-w-md">
            FreshCart is your one-stop destination for quality products. From
            fashion to electronics, we bring you the best brands.
          </p>

          <div className="mt-5 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" /> +1 (800) 123-4567
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-green-500" /> support@freshcart.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500" /> 123 Green Market
              Street
            </p>
          </div>

          <div className="flex gap-4 mt-5">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Shop</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>All Products</li>
            <li>Categories</li>
            <li>Brands</li>
            <li>Electronics</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Account</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>My Account</li>
            <li>Order History</li>
            <li>Wishlist</li>
            <li>Shopping Cart</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Support</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Shipping Info</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © 2026 FreshCart. All rights reserved.
      </div>
    </footer>
  );
}
