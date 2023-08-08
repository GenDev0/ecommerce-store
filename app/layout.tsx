import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={urbanist.className}>
        <ModalProvider />
        <ToastProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
