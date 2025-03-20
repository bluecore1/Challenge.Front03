"use client";

import Header from "@/components/Header";
import { usePathname } from "next/navigation";


export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-4 flex-grow">{children}</main>

    </div>
  );
}
