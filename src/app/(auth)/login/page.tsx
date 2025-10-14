'use client';
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-slate-800 dark:text-white">
        Welcome Back 👋
      </h1>
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
        >
          Log In
        </button>
      </form>

      <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-5">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
