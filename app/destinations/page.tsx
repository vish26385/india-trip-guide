import DestinationCard from "@/components/cards/DestinationCard";
import SectionHeading from "@/components/shared/SectionHeading";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
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
        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>

        <AdPlaceholder />
      </section>
    </main>
  );
}