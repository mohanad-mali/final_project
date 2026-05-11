"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebookF, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.rePassword) {
      alert("Password and Confirm Password must match");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        form,
      );

      alert("Account created successfully ✅");
      router.push("/login");
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          "Register failed. Check your data and try again",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-green-600">FreshCart</span>
          </h2>

          <p className="text-gray-500 mb-6">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Premium Quality</h4>
                <p className="text-gray-500 text-sm">
                  Products sourced from trusted suppliers
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Fast Delivery</h4>
                <p className="text-gray-500 text-sm">
                  Same-day delivery available
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold">Secure Shopping</h4>
                <p className="text-gray-500 text-sm">Your data is protected</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md w-full mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Create Your Account
          </h2>

          <p className="text-gray-500 mb-6">
            Start your fresh journey with us today
          </p>

          <div className="flex gap-3 mb-4">
            <button
              type="button"
              className="flex-1 border rounded-lg py-2 flex justify-center items-center gap-2"
            >
              <FaGoogle /> Google
            </button>

            <button
              type="button"
              className="flex-1 border rounded-lg py-2 flex justify-center items-center gap-2"
            >
              <FaFacebookF /> Facebook
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm mb-4">OR</div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="password"
              name="rePassword"
              placeholder="Confirm Password"
              value={form.rePassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" required />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </div>

            <button
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold disabled:bg-gray-400"
            >
              {loading ? "Creating..." : "Create My Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
