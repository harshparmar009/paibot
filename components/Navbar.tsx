"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `block px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "text-indigo-600 bg-indigo-50 font-semibold"
        : "text-slate-700 hover:text-indigo-600 hover:bg-slate-100"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-indigo-600"
        >
          PAIBOT
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/hotels" className={linkClass("/hotels")}>
            Hotels
          </Link>
          <Link href="/flats" className={linkClass("/flats")}>
            Flats
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-white border border-slate-200 rounded-xl shadow-md p-2 space-y-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={linkClass("/")}
            >
              Home
            </Link>
            <Link
              href="/hotels"
              onClick={() => setOpen(false)}
              className={linkClass("/hotels")}
            >
              Hotels
            </Link>
            <Link
              href="/flats"
              onClick={() => setOpen(false)}
              className={linkClass("/flats")}
            >
              Flats
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
