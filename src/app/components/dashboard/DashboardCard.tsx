import React from "react";

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-5 flex items-center gap-4 border dark:border-gray-700">
      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">{icon}</div>
      <div>
        <h4 className="text-sm text-gray-500 dark:text-gray-400">{title}</h4>
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {value}
        </p>
      </div>
    </div>
  );
};
