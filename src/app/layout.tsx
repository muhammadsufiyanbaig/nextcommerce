import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Provider from "./components/Provider";
import ShoppingCartModal from "./components/ShoppingCartModal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Commerce",
  description: "Next Commerce a best ecommerce for best people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Navbar/>
        <ShoppingCartModal/>
        {children}
        </Provider>
        </body>
    </html>
  );
}
