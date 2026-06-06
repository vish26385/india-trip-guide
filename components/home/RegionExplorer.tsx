import Link from "next/link";
import { regions } from "@/data/regions";

export default function RegionExplorer() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-zinc-950">
            Explore India by Region
          </h2>

          <p className="mt-4 text-zinc-600">
            Discover destinations across North, South,
            East and West India.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <div
              key={region.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-5 text-xl font-black">
                {region.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {region.destinations.map((destination) => (
                  <Link
                    key={destination.slug}
                    href={`/destinations/${destination.slug}`}
                    className="rounded-full border border-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:border-orange-500 hover:text-orange-600"
                  >
                    {destination.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}