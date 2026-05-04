"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        { email },
      );

      localStorage.setItem("resetEmail", email);
      router.push("/verify-code");
    } catch (error) {
      alert("Email not found or API error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2 text-green-600">FreshCart</h2>
          <h3 className="text-lg font-semibold mb-2">Forgot Password?</h3>
          <p className="text-gray-500 text-sm mb-6">
            Enter your email to receive reset code
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded"
            >
              {loading ? "Sending..." : "Send Reset Code"}
            </button>
          </form>

          <Link href="/login" className="block mt-4 text-sm text-green-600">
            Back to Sign in
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
