"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";

export default function ResetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("resetEmail");
    if (savedEmail) setEmail(savedEmail);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        {
          email,
          newPassword,
        },
      );

      localStorage.removeItem("resetEmail");
      localStorage.removeItem("resetCode");

      alert("Password reset successfully");
      router.push("/login");
    } catch (error) {
      alert("Reset password failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-2">FreshCart</h2>
          <h3 className="text-lg font-semibold mb-2">Create New Password</h3>
          <p className="text-gray-500 text-sm mb-6">Enter your new password</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <button
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>

          <Link href="/login" className="block mt-4 text-sm text-gray-400">
            Back to Login
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
