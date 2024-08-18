import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../../providers";
import "./globals.css";
import { lato } from './util/fonts';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Dealer Application ",
  description: "Full-Stack JS engineer test assessment - the Car Dealer App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={lato.className}>{children}</body>
      </Providers>
    </html>
  );
}
