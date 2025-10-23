"use client";

import { ReactNode } from "react";
import { Sidebar } from "../components/global/sidebar/Sidebar";

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="flex min-h-screen w-full bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <Sidebar />

            <section className="flex-1 flex flex-col w-full min-w-0">
                <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        Admin Panel
                    </h2>
                </header>
                
                <div className="flex-1 overflow-y-auto px-6 py-8">{children}</div>
            </section>
        </div>
    );
}
