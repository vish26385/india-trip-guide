// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-zinc-950 text-white">
//       <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
//       <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 pt-16">
//         <div className="mb-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
//           <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
//             <div>
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
//                 Travel Inspiration
//               </p>

//               <h3 className="mt-3 text-3xl font-black md:text-4xl">
//                 Explore India one destination at a time.
//               </h3>

//               <p className="mt-4 max-w-2xl text-zinc-300">
//                 Discover destinations, itineraries, travel guides, and practical
//                 tips curated for smarter India travel.
//               </p>
//             </div>

//             <Link
//               href="/destinations"
//               className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
//             >
//               Explore Destinations
//               <ArrowRight size={18} />
//             </Link>
//           </div>
//         </div>

//         <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
//           <div>
//             <Image
//               src="/logo-footer.svg"
//               alt="IndiaTripGuide"
//               width={260}
//               height={52}
//               className="h-10 w-auto object-contain"
//             />

//             <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
//               Premium India travel guides, destination ideas, itineraries, and
//               practical travel tips for unforgettable journeys.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold">Explore</h4>

//             <div className="mt-5 space-y-3 text-sm text-zinc-400">
//               <Link
//                 href="/destinations"
//                 className="block transition hover:text-white"
//               >
//                 Destinations
//               </Link>

//               <Link
//                 href="/itineraries"
//                 className="block transition hover:text-white"
//               >
//                 Itineraries
//               </Link>

//               <Link
//                 href="/blog"
//                 className="block transition hover:text-white"
//               >
//                 Travel Blog
//               </Link>

//               <Link
//                 href="/about"
//                 className="block transition hover:text-white"
//               >
//                 About Us
//               </Link>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold">Popular Places</h4>

//             <div className="mt-5 space-y-3 text-sm text-zinc-400">
//               <Link
//                 href="/destinations/goa"
//                 className="flex items-center gap-2 transition hover:text-white"
//               >
//                 <MapPin size={14} />
//                 Goa
//               </Link>

//               <Link
//                 href="/destinations/jaipur"
//                 className="flex items-center gap-2 transition hover:text-white"
//               >
//                 <MapPin size={14} />
//                 Jaipur
//               </Link>

//               <Link
//                 href="/destinations/manali"
//                 className="flex items-center gap-2 transition hover:text-white"
//               >
//                 <MapPin size={14} />
//                 Manali
//               </Link>

//               <Link
//                 href="/destinations/kashmir"
//                 className="flex items-center gap-2 transition hover:text-white"
//               >
//                 <MapPin size={14} />
//                 Kashmir
//               </Link>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold">Legal</h4>

//             <div className="mt-5 space-y-3 text-sm text-zinc-400">
//               <Link
//                 href="/privacy-policy"
//                 className="block transition hover:text-white"
//               >
//                 Privacy Policy
//               </Link>

//               <Link
//                 href="/terms"
//                 className="block transition hover:text-white"
//               >
//                 Terms
//               </Link>

//               <Link
//                 href="/disclaimer"
//                 className="block transition hover:text-white"
//               >
//                 Disclaimer
//               </Link>

//               <Link
//                 href="/contact"
//                 className="block transition hover:text-white"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/10 py-6">
//           <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-zinc-500 md:flex-row">
//             <p>
//               © {new Date().getFullYear()} IndiaTripGuide. All rights reserved.
//             </p>

//             <p>
//               Made for travelers exploring India.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16">
        <div className="mb-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                Travel Inspiration
              </p>

              <h3 className="mt-3 text-3xl font-black md:text-4xl">
                Explore India one destination at a time.
              </h3>

              <p className="mt-4 max-w-2xl text-zinc-300">
                Discover destinations, itineraries, travel guides, and practical
                tips curated for smarter India travel.
              </p>
            </div>

            <Link
              href="/explore"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Explore India
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo-footer.svg"
              alt="IndiaTripGuide"
              width={260}
              height={52}
              className="h-10 w-auto object-contain"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              Premium India travel guides, destination ideas, itineraries, and
              practical travel tips for unforgettable journeys.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold">Explore</h4>

            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              <Link href="/" className="block transition hover:text-white">
                Home
              </Link>

              <Link
                href="/destinations"
                className="block transition hover:text-white"
              >
                Destinations
              </Link>

              <Link
                href="/itineraries"
                className="block transition hover:text-white"
              >
                Itineraries
              </Link>

              <Link href="/blog" className="block transition hover:text-white">
                Travel Blog
              </Link>

              <Link
                href="/explore"
                className="block transition hover:text-white"
              >
                Explore India
              </Link>

              <Link
                href="/trip-planner"
                className="block transition hover:text-white"
              >
                Trip Planner
              </Link>

              <Link href="/about" className="block transition hover:text-white">
                About Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Popular Places</h4>

            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              <Link
                href="/destinations/leh"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <MapPin size={14} />
                Leh
              </Link>

              <Link
                href="/destinations/spiti-valley"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <MapPin size={14} />
                Spiti Valley
              </Link>

              <Link
                href="/destinations/gir-national-park"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <MapPin size={14} />
                Gir National Park
              </Link>

              <Link
                href="/destinations/goa"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <MapPin size={14} />
                Goa
              </Link>

              <Link
                href="/destinations/kashmir"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <MapPin size={14} />
                Kashmir
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Legal</h4>

            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              <Link
                href="/privacy-policy"
                className="block transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link href="/terms" className="block transition hover:text-white">
                Terms
              </Link>

              <Link
                href="/disclaimer"
                className="block transition hover:text-white"
              >
                Disclaimer
              </Link>

              <Link
                href="/contact"
                className="block transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-zinc-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} IndiaTripGuide. All rights reserved.
            </p>

            <p>Made for travelers exploring India.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}