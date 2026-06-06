import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { popularDestinations } from "@/data/popularDestinations";

export default function MostPopularDestinations() {
  return (
    <section className="bg-orange-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Popular searches
            </p>

            <h2 className="mt-3 text-3xl font-black text-zinc-950 md:text-5xl">
              Most popular destinations
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-600">
              Quickly explore India’s most searched travel destinations and start planning faster.
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {popularDestinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-orange-100 bg-white px-5 py-4 font-bold text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-600 hover:shadow-xl"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} className="text-orange-500" />
                {destination.name}
              </span>

              <ArrowRight
                size={16}
                className="text-zinc-400 transition group-hover:translate-x-1 group-hover:text-orange-500"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}