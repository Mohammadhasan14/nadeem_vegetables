'use client';
import Loader from "@/app/components/ui/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setSubmitting] = useState(false)
  const router = useRouter();


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }
      console.log("Login successful!");
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setSubmitting(false)
    }
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
            Admin Login
          </h1>

          <form onSubmit={handleLogin} className="space-y-5">
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
              disabled={isSubmitting}
              type="submit"
              className={`w-full py-2 ${isSubmitting ? "opacity-50" : ""} bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer`}
            >
              {isSubmitting ?
                <div className="flex justify-center items-center"><Loader width="w-6 " height="h-6" /></div>
                : "Log In"}
            </button>
          </form>

          <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
