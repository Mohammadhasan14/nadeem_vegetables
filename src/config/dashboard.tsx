import { Users, ShoppingCart, CreditCard, DollarSign } from "lucide-react";

export const NAV_ITEMS = [
  "Dashboard",
  "Vegetables",
  "Customers",
  "Purchases",
  "Credits",
  "Invoices",
];

export const SUMMARY_CARDS = [
  { title: "Total Customers", value: "128", icon: <Users className="text-green-600 w-6 h-6" /> },
  { title: "Today’s Sales", value: "₹12,480", icon: <ShoppingCart className="text-green-600 w-6 h-6" /> },
  { title: "Pending Credits", value: "₹4,320", icon: <CreditCard className="text-green-600 w-6 h-6" /> },
  { title: "Total Revenue", value: "₹1,24,500", icon: <DollarSign className="text-green-600 w-6 h-6" /> },
];

export const RECENT_PURCHASES = [
  { name: "Ravi Traders", veg: "Tomatoes, Onions", total: "₹1,250", payment: "Credit", date: "23 Oct 2025" },
  { name: "FreshMart", veg: "Potatoes", total: "₹980", payment: "Instant", date: "23 Oct 2025" },
];
