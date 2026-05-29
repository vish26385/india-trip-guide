import Link from "next/link";
import { CalendarDays, MapPin, Wallet } from "lucide-react";
import { Itinerary } from "@/types";
import Image from "next/image";

export default function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
  return (
    <Link
      href={`/itineraries/${itinerary.slug}`}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="h-56 overflow-hidden">
        {/* <img
          src={itinerary.image}
          alt={itinerary.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        /> */}
        <Image
          src={itinerary.image}
          alt={itinerary.title}
          width={700}
          height={450}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 flex items-center gap-2 text-sm font-medium text-orange-500">
          <MapPin size={16} /> {itinerary.destination}
        </p>

        <h3 className="text-xl font-bold text-zinc-950">{itinerary.title}</h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">
          {itinerary.overview}
        </p>

        <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-600">
          <span className="flex items-center gap-2">
            <CalendarDays size={16} /> {itinerary.duration}
          </span>
          <span className="flex items-center gap-2">
            <Wallet size={16} /> {itinerary.budget}
          </span>
        </div>
      </div>
    </Link>
  );
}