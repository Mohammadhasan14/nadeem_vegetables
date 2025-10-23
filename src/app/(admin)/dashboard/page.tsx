"use client";

import { SummaryCards } from "@/app/components/dashboard/SummaryCards";
import { RecentPurchases } from "@/app/components/dashboard/RecentPurchases";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <SummaryCards />
      <RecentPurchases />
    </div>
  );
}
