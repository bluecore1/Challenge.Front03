"use client";

import Link from "next/link"


export default function login() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex space-x-4">
          <Link href="/login" className="text-white"></Link>
          <Link href="/cadastro" className="text-white bg-white bg-opacity-20 px-4 py-2 rounded"></Link>
        </div>
      </div>
    </nav>
  );
}