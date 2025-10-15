"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
      <div className="w-full max-w-4xl text-center px-6 animate-pulse space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Welcome to MyApp
        </h1>
        <p className="text-lg md:text-2xl text-gray-200">
          Preparing your experience...
        </p>
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mt-6" />
      </div>
    </main>

  );
}
