// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// const navItems = [
//   { label: "Destinations", href: "/destinations" },
//   { label: "Itineraries", href: "/itineraries" },
//   { label: "Blog", href: "/blog" },
//   { label: "About", href: "/about" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
//         <Link
//           href="/"
//           className="flex h-16 items-center"
//           onClick={() => setOpen(false)}
//         >
//           <Image
//             src="/logo.svg"
//             alt="IndiaTripGuide"
//             width={260}
//             height={52}
//             priority
//             className="h-10 w-auto object-contain"
//           />
//         </Link>

//         <nav className="hidden items-center gap-7 md:flex">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <Link
//           href="/destinations"
//           className="hidden rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 md:inline-flex"
//         >
//           Explore
//         </Link>

//         <button
//           type="button"
//           onClick={() => setOpen((value) => !value)}
//           className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 md:hidden"
//           aria-label="Toggle menu"
//         >
//           {open ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {open && (
//         <div className="border-t border-zinc-200 bg-white px-6 py-5 md:hidden">
//           <nav className="space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="block rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <Link
//               href="/destinations"
//               onClick={() => setOpen(false)}
//               className="block rounded-2xl bg-zinc-950 px-4 py-3 text-center text-sm font-semibold text-white"
//             >
//               Explore Destinations
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Itineraries", href: "/itineraries" },
  { label: "Blog", href: "/blog" },
  { label: "Explore India", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="IndiaTripGuide"
            width={260}
            height={52}
            priority
            className="h-9 w-auto object-contain sm:h-10 md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold transition ${
                  active ? "text-zinc-950" : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-orange-500 transition-all ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/trip-planner"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-zinc-950/10 transition hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-orange-500/25"
          >
            Plan Trip<ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-sm transition hover:bg-zinc-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-4 text-base font-bold transition ${
                    active
                      ? "bg-orange-50 text-orange-600"
                      : "text-zinc-800 hover:bg-zinc-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/trip-planner"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-5 py-4 text-base font-bold text-white transition hover:bg-orange-500"
            >
              Plan Trip <ArrowRight size={18} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}