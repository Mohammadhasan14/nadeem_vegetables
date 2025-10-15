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
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <div className="flex-1 relative flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 text-white">
        <div className="absolute top-10 left-10">
          <h2 className="text-3xl font-extrabold tracking-tight">
            <span className="text-white">Nadeem</span>{" "}
            <span className="text-blue-400">Vegetables</span>
          </h2>
        </div>
        <div className="mt-24">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Admin Portal
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-md">
            Manage staff, monitor sales, and oversee inventory with advanced admin tools.  
            Secure, fast, and built for operational excellence.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-white dark:bg-slate-900 px-8 md:px-16 lg:px-24 py-10">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-slate-800 dark:text-white">
            Admin Registration
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
                placeholder="Admin Name"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white placeholder:text-slate-400"
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
                placeholder="admin@nadeemvegetables.com"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white placeholder:text-slate-400"
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
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
