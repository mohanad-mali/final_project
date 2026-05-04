"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";

export default function VerifyCode() {
  const router = useRouter();
  const [resetCode, setResetCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        { resetCode },
      );

      localStorage.setItem("resetCode", resetCode);
      router.push("/reset-password");
    } catch (error) {
      alert("Invalid reset code");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-2">FreshCart</h2>
          <h3 className="text-lg font-semibold mb-2">Check Your Email</h3>
          <p className="text-gray-500 text-sm mb-6">
            Enter the reset code sent to your email
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter reset code"
              className="w-full border p-3 text-center tracking-widest text-lg rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              required
            />

            <button
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded"
            >
              {loading ? "Verifying..." : "Verify Code"}
            </button>
          </form>

          <Link
            href="/forgot-password"
            className="block mt-4 text-sm text-gray-400"
          >
            Back
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
