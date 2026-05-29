import Link from "next/link";
import { MapPin, CalendarDays, Wallet } from "lucide-react";
import { Destination } from "@/types";
import Image from "next/image";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="h-56 overflow-hidden">
        {/* <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        /> */}
        <Image
          src={destination.image}
          alt={destination.name}
          width={700}
          height={450}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 flex items-center gap-2 text-sm font-medium text-orange-500">
          <MapPin size={16} /> {destination.tagline}
        </p>

        <h3 className="text-2xl font-bold text-zinc-950">{destination.name}</h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">
          {destination.description}
        </p>

        <div className="mt-5 grid gap-3 text-sm text-zinc-600">
          <span className="flex items-center gap-2">
            <CalendarDays size={16} /> {destination.bestTime}
          </span>
          <span className="flex items-center gap-2">
            <Wallet size={16} /> {destination.budget}
          </span>
        </div>
      </div>
    </Link>
  );
}