"use client";

import { RECENT_PURCHASES } from "@/config/dashboard";

export function RecentPurchases() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-2xl p-6 w-full">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Recent Purchases
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700/40">
            <tr>
              <th className="py-3 px-4 font-medium">Customer</th>
              <th className="py-3 px-4 font-medium">Vegetables</th>
              <th className="py-3 px-4 font-medium">Total</th>
              <th className="py-3 px-4 font-medium">Payment Type</th>
              <th className="py-3 px-4 text-right font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {RECENT_PURCHASES.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="py-3 px-4">{row.name}</td>
                <td className="py-3 px-4">{row.veg}</td>
                <td className="py-3 px-4 font-medium">{row.total}</td>
                <td className="py-3 px-4">{row.payment}</td>
                <td className="py-3 px-4 text-right text-gray-500">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
