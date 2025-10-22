import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nadeem Vegetables",
  description: "Manage inventory, sales etc.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex items-center justify-center p-4">
        {children}
      </body>
    </html>
  );
}

