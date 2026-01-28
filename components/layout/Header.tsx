"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "ホーム", href: "/" },
  { name: "同好会について", href: "/about" },
  { name: "活動内容", href: "/activities" },
  { name: "入会案内", href: "/join" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        "bg-white/70 backdrop-blur-xl border-zinc-200 dark:bg-zinc-900/70 dark:border-zinc-800 shadow-sm"
      )}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold tracking-tight text-blue-600">
            航空操縦学同好会
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-zinc-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-zinc-900 hover:text-blue-600 transition-colors dark:text-zinc-50 dark:hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact" className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
            お問い合わせ <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-zinc-200 dark:bg-zinc-900/95 dark:border-zinc-800 p-6 shadow-xl">
           <div className="flex flex-col space-y-4">
             {navigation.map((item) => (
               <Link
                 key={item.name}
                 href={item.href}
                 className="text-lg font-semibold leading-6 text-zinc-900 dark:text-zinc-50"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {item.name}
               </Link>
             ))}
              <Link
                 href="/contact"
                 className="text-lg font-semibold leading-6 text-blue-600"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 お問い合わせ
               </Link>
           </div>
        </div>
      )}
    </header>
  );
}
