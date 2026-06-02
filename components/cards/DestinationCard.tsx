// import Link from "next/link";
// import { MapPin, CalendarDays, Wallet } from "lucide-react";
// import { Destination } from "@/types";
// import Image from "next/image";

// export default function DestinationCard({ destination }: { destination: Destination }) {
//   return (
//     <Link
//       href={`/destinations/${destination.slug}`}
//       className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
//     >
//       <div className="h-56 overflow-hidden">
//         <Image
//           src={destination.image}
//           alt={destination.name}
//           width={700}
//           height={450}
//           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       <div className="p-5">
//         <p className="mb-2 flex items-center gap-2 text-sm font-medium text-orange-500">
//           <MapPin size={16} /> {destination.tagline}
//         </p>

//         <h3 className="text-2xl font-bold text-zinc-950">{destination.name}</h3>

//         <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">
//           {destination.description}
//         </p>

//         <div className="mt-5 grid gap-3 text-sm text-zinc-600">
//           <span className="flex items-center gap-2">
//             <CalendarDays size={16} /> {destination.bestTime}
//           </span>
//           <span className="flex items-center gap-2">
//             <Wallet size={16} /> {destination.budget}
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Wallet } from "lucide-react";
import { Destination } from "@/types";

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl"
    >
      <div className="relative h-60 overflow-hidden sm:h-64">
        <Image
          src={destination.image}
          alt={destination.name}
          width={800}
          height={520}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-zinc-900 shadow-lg backdrop-blur">
          {destination.duration}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
            <MapPin size={14} />
            {destination.tagline}
          </p>

          <h3 className="mt-2 text-2xl font-black leading-tight text-white">
            {destination.name}
          </h3>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="line-clamp-2 text-sm leading-6 text-zinc-600">
          {destination.description}
        </p>

        <div className="mt-5 grid gap-3 text-sm text-zinc-700">
          <div className="flex items-center gap-2 rounded-2xl bg-zinc-50 px-4 py-3">
            <CalendarDays size={16} className="text-orange-500" />
            <span className="font-semibold">{destination.bestTime}</span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-zinc-50 px-4 py-3">
            <Wallet size={16} className="text-orange-500" />
            <span className="font-semibold">{destination.budget}</span>
          </div>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-orange-600">
          Explore Guide
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}