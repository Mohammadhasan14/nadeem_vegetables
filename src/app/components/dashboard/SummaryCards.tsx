"use client";

import { SUMMARY_CARDS } from "@/config/dashboard";
import { DashboardCard } from "@/app/components/dashboard/DashboardCard";

export function SummaryCards() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {SUMMARY_CARDS.map((card) => (
        <DashboardCard key={card.title} title={card.title} value={card.value} icon={card.icon} />
      ))}
    </div>
  );
}
