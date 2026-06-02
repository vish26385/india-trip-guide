// import Link from "next/link";
// import { CalendarDays, MapPin, Wallet } from "lucide-react";
// import { Itinerary } from "@/types";
// import Image from "next/image";

// export default function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
//   return (
//     <Link
//       href={`/itineraries/${itinerary.slug}`}
//       className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
//     >
//       <div className="h-56 overflow-hidden">
//         <Image
//           src={itinerary.image}
//           alt={itinerary.title}
//           width={700}
//           height={450}
//           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       <div className="p-5">
//         <p className="mb-2 flex items-center gap-2 text-sm font-medium text-orange-500">
//           <MapPin size={16} /> {itinerary.destination}
//         </p>

//         <h3 className="text-xl font-bold text-zinc-950">{itinerary.title}</h3>

//         <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">
//           {itinerary.overview}
//         </p>

//         <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-600">
//           <span className="flex items-center gap-2">
//             <CalendarDays size={16} /> {itinerary.duration}
//           </span>
//           <span className="flex items-center gap-2">
//             <Wallet size={16} /> {itinerary.budget}
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Wallet } from "lucide-react";
import { Itinerary } from "@/types";

export default function ItineraryCard({
  itinerary,
}: {
  itinerary: Itinerary;
}) {
  return (
    <Link
      href={`/itineraries/${itinerary.slug}`}
      className="group block overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl"
    >
      {/* <div className="grid md:grid-cols-[260px_1fr]"> */}
      <div>
        {/* <div className="relative h-60 overflow-hidden md:h-full"> */}
        <div className="relative h-60 overflow-hidden sm:h-64">
          <Image
            src={itinerary.image}
            alt={itinerary.title}
            width={700}
            height={520}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-black text-white shadow-lg">
            {itinerary.duration}
          </div>
        </div>

        {/* <div className="flex flex-col p-5 sm:p-6"> */}
        <div className="p-5 sm:p-6">
          <p className="flex items-center gap-2 text-sm font-bold text-orange-600">
            <MapPin size={16} />
            {itinerary.destination}
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-zinc-950">
            {itinerary.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">
            {itinerary.overview}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 font-semibold">
              <CalendarDays size={16} className="text-orange-500" />
              {itinerary.duration}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 font-semibold">
              <Wallet size={16} className="text-orange-500" />
              {itinerary.budget}
            </span>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-orange-600">
            View Itinerary
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}