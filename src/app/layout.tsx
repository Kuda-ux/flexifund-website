import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlexiFund (Private) Limited | Microfinance Solutions Zimbabwe",
  description:
    "FlexiFund is a licensed microfinance institution providing accessible, flexible, and sustainable financial solutions to individuals, salaried employees, entrepreneurs, and government workers across Zimbabwe.",
  keywords: [
    "FlexiFund",
    "microfinance",
    "Zimbabwe",
    "loans",
    "salary loans",
    "school fees loans",
    "financial inclusion",
    "RBZ licensed",
  ],
  openGraph: {
    title: "FlexiFund (Private) Limited",
    description:
      "Accessible, flexible, and sustainable financial solutions across Zimbabwe.",
    url: "https://www.flexifund.co.zw",
    siteName: "FlexiFund",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
