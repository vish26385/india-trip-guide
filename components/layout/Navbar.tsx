"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Itineraries", href: "/itineraries" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* <Link
          href="/"
          className="text-xl font-black tracking-tight text-zinc-950"
          onClick={() => setOpen(false)}
        >
          India<span className="text-orange-500">Trip</span>Guide
        </Link> */}

        <Link
          href="/"
          className="flex h-16 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="IndiaTripGuide"
            width={260}
            height={52}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/destinations"
          className="hidden rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 md:inline-flex"
        >
          Explore
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-5 md:hidden">
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/destinations"
              onClick={() => setOpen(false)}
              className="block rounded-2xl bg-zinc-950 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Explore Destinations
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}