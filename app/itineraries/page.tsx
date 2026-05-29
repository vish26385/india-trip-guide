import ItineraryCard from "@/components/cards/ItineraryCard";
import SectionHeading from "@/components/shared/SectionHeading";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import { itineraries } from "@/data/itineraries";

export default function ItinerariesPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-sky-50 via-white to-orange-50 px-6 py-20">
        <SectionHeading
          eyebrow="Itineraries"
          title="Ready-made India travel plans"
          description="Discover practical itineraries with day-by-day travel plans, budget estimates, and travel tips."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {itineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
          ))}
        </div>

        {/* <AdPlaceholder /> */}
      </section>
    </main>
  );
}