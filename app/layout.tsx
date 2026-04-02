import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuxeSuite — Private Luxury Salon Suites",
  description:
    "Independent beauty professionals: stop splitting your revenue. Rent a private luxury salon suite, keep 100% of your profits, and build the brand you deserve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
