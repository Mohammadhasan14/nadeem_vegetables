"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/config/dashboard";
import { usePathname } from "next/navigation";

const ROUTES: Record<string, string> = {
  Dashboard: "/dashboard",
  Vegetables: "/vegetables",
  Customers: "/customers",
  Purchases: "/purchases",
  Credits: "/credits",
  Invoices: "/invoices",
};


export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold">
                    <span className="text-green-600">Nadeem</span>{" "}
                    <span className="text-gray-800 dark:text-gray-100">Vegetables</span>
                </h1>
            </div>

            <nav className="flex-1 p-4 space-y-2 mt-4">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === ROUTES[item];
                    return (
                        <Link key={item} href={ROUTES[item]} className="block">
                            <span
                                className={`w-full flex items-center px-4 py-2 rounded-lg font-medium transition-colors
                  ${isActive ? "bg-green-100 dark:bg-green-900/50 text-green-700" : "text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/50"}`}
                            >
                                {item}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
