'use client';
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-slate-800 dark:text-white">
        Create Account 🚀
      </h1>
      <form onSubmit={handleSignup} className="space-y-5">
        <div>
          <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">
            Full Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">
            Password
          </label>
          <input
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-5">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
