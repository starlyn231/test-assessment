import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../../../app/globals.css";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full flex-col items-center">


      <div className="flex h-screen flex-col w-[80%]">{children}</div>
    </div>
  );
}
