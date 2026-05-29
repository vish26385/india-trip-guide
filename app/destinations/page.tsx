import DestinationCard from "@/components/cards/DestinationCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { destinations } from "@/data/destinations";

type PageProps = {
  searchParams?: Promise<{
    search?: string;
  }>;
};

export default async function DestinationsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const search = params?.search?.toLowerCase() ?? "";

  const filteredDestinations = search
    ? destinations.filter((destination) =>
        `${destination.name} ${destination.tagline} ${destination.description}`
          .toLowerCase()
          .includes(search)
      )
    : destinations;

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-orange-50 via-white to-sky-50 px-6 py-20">
        <SectionHeading
          eyebrow="Destinations"
          title="Explore India’s best travel destinations"
          description="Find beautiful cities, beaches, hill stations, heritage places, and peaceful escapes across India."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {search && (
          <p className="mb-8 text-sm font-medium text-zinc-600">
            Search results for:{" "}
            <span className="font-bold text-zinc-950">{search}</span>
          </p>
        )}

        {filteredDestinations.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-10 text-center">
            <h2 className="text-2xl font-bold text-zinc-950">
              No destination found
            </h2>
            <p className="mt-3 text-zinc-600">
              Try searching for Udaipur, Goa, Shimla, Manali, Mumbai, or Gujarat.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}