"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  FaGoogle,
  FaFacebookF,
  FaEnvelope,
  FaLock,
  FaEye,
  FaTruck,
  FaShieldAlt,
  FaHeadphones,
} from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        { email, password },
      );

      localStorage.setItem("token", res.data.token);
      alert("Login Success");
    } catch (error) {
      alert("Invalid email or password");
    }
  }

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="text-center">
          <div className="mx-auto w-[430px] max-w-full h-[330px] flex items-center justify-center">
            <img
              src="/login-cart.png"
              alt="FreshCart Login"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">
            FreshCart - Your One-Stop Shop for Fresh Products
          </h2>

          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Join thousands of happy customers who trust FreshCart for their
            daily grocery needs.
          </p>

          <div className="flex justify-center gap-6 mt-5 text-sm text-green-600">
            <span className="flex items-center gap-2">
              <FaTruck /> Free Delivery
            </span>
            <span className="flex items-center gap-2">
              <FaShieldAlt /> Secure Payment
            </span>
            <span className="flex items-center gap-2">
              <FaHeadphones /> 24/7 Support
            </span>
          </div>
        </div>

        {/* Login Form */}
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-bold text-green-600 text-center">
            FreshCart
          </h1>

          <h2 className="text-2xl font-bold text-gray-800 text-center mt-3">
            Welcome Back!
          </h2>

          <p className="text-gray-500 text-center mt-2">
            Sign in to continue your fresh shopping experience
          </p>

          <div className="mt-7 space-y-3">
            <button className="w-full border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-3 text-gray-700 hover:bg-gray-50">
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            <button className="w-full border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-3 text-gray-700 hover:bg-gray-50">
              <FaFacebookF className="text-blue-600" />
              Continue with Facebook
            </button>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">
              OR CONTINUE WITH EMAIL
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <form onSubmit={handleLogin}>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>

            <div className="relative mt-2 mb-4">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-lg py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <Link href="/forgot-password" className="text-sm text-green-600">
                Forgot Password?
              </Link>
            </div>

            <div className="relative mt-2 mb-4">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-200 rounded-lg py-3 pl-11 pr-11 outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex items-center gap-2 mb-5">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            New to FreshCart?{" "}
            <Link href="/register" className="text-green-600 font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
