import type { Metadata } from "next";
import { Poppins, Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "Gowthami Nursery - Exquisite & Decorative Plants",
  description: "Gowthami Nursery provides all varieties of Nursery Products to transform the way your plantations looks and to keep you relaxed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={`${poppins.variable} ${heebo.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

