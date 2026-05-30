import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Wallet } from "lucide-react";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { blogs } from "@/data/blogs";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import { itineraries } from "@/data/itineraries";

import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return itineraries.map((itinerary) => ({
    slug: itinerary.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const itinerary = itineraries.find((item) => item.slug === slug);

  return {
    title: itinerary
      ? `${itinerary.title} | IndiaTripGuide`
      : "Itinerary Not Found",
    description: itinerary?.overview ?? "India travel itinerary guide.",
  };
}

export default async function ItineraryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const itinerary = itineraries.find((item) => item.slug === slug);

  if (!itinerary) {
    notFound();
  }

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelItinerary",
  name: itinerary.title,
  description: itinerary.overview,
  image: itinerary.image,
  itineraryLength: itinerary.duration,
  url: `https://www.indiatripguide.com/itineraries/${itinerary.slug}`,
};  

const itineraryDestinationMap: Record<string, string> = {
  "3-days-in-udaipur": "udaipur",
  "5-days-in-goa": "goa",
  "4-days-in-jaisalmer": "jaisalmer",
  "5-days-in-shimla-kufri": "shimla",
  "4-days-in-darjeeling": "darjeeling",
  "6-days-in-andaman": "andaman",
  "7-days-divine-coastal-gujarat-trail": "gujarat-spiritual-coastal-journey",
  "4-days-in-jaipur": "jaipur",
  "3-days-in-jodhpur": "jodhpur",
  "2-days-in-mount-abu": "mount-abu",
  "4-days-in-manali": "manali",
  "3-days-in-rishikesh": "rishikesh",
  "5-days-in-kerala": "kerala",
  "4-days-in-munnar": "munnar",
  "6-days-in-kashmir": "kashmir",
  "3-days-in-varanasi": "varanasi",
  "3-days-in-agra": "agra",
  "4-days-in-amritsar": "amritsar",
  "5-days-in-coorg-ooty": "coorg",
  "7-days-rajasthan-road-trip": "jodhpur",
  "3-days-in-mumbai": "mumbai",
  "3-days-in-pondicherry": "pondicherry",
  "3-days-in-mussoorie": "mussoorie",
};

const itineraryBlogMap: Record<string, string> = {
  "3-days-in-udaipur": "best-time-to-visit-udaipur",
  "5-days-in-goa": "budget-goa-trip-guide",
  "4-days-in-jaisalmer": "best-time-to-visit-jaisalmer",
  "5-days-in-shimla-kufri": "complete-shimla-travel-guide",
  "4-days-in-darjeeling": "top-hill-stations-in-india",
  "6-days-in-andaman": "best-time-to-visit-andaman",
  "7-days-divine-coastal-gujarat-trail": "gujarat-road-trip-travel-guide",
  "4-days-in-jaipur": "best-time-to-visit-jaipur",
  "3-days-in-jodhpur": "rajasthan-road-trip-guide",
  "2-days-in-mount-abu": "top-hill-stations-in-india",
  "4-days-in-manali": "best-time-to-visit-manali",
  "3-days-in-rishikesh": "best-time-to-visit-rishikesh",
  "5-days-in-kerala": "best-time-to-visit-kerala",
  "4-days-in-munnar": "best-time-to-visit-munnar",
  "6-days-in-kashmir": "best-time-to-visit-kashmir",
  "3-days-in-varanasi": "complete-varanasi-travel-guide",
  "3-days-in-agra": "complete-agra-travel-guide",
  "3-days-in-mumbai": "best-time-to-visit-mumbai",
  "3-days-in-pondicherry": "best-time-to-visit-pondicherry",
  "3-days-in-mussoorie": "best-time-to-visit-mussoorie",
};

const relatedDestination = destinations.find(
  (destination) =>
    destination.slug === itineraryDestinationMap[itinerary.slug]
);

const relatedBlog = blogs.find(
  (blog) => blog.slug === itineraryBlogMap[itinerary.slug]
);

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <section className="relative">
        <div className="h-[420px] overflow-hidden md:h-[540px]">
          <Image
            src={itinerary.image}
            alt={itinerary.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-12 text-white">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            <MapPin size={18} /> {itinerary.destination}
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-7xl">
            {itinerary.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-100">
            {itinerary.overview}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 p-5">
            <CalendarDays className="mb-3 text-orange-500" />
            <p className="text-sm text-zinc-500">Duration</p>
            <p className="font-bold text-zinc-950">{itinerary.duration}</p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-5">
            <Wallet className="mb-3 text-orange-500" />
            <p className="text-sm text-zinc-500">Estimated Budget</p>
            <p className="font-bold text-zinc-950">{itinerary.budget}</p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-5">
            <MapPin className="mb-3 text-orange-500" />
            <p className="text-sm text-zinc-500">Destination</p>
            <p className="font-bold text-zinc-950">{itinerary.destination}</p>
          </div>
        </div>

        {/* <AdPlaceholder /> */}

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-zinc-950">
            Day-by-day itinerary
          </h2>

          <div className="mt-8 space-y-6">
            {itinerary.days.map((day) => (
              <div
                key={day.day}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <p className="text-sm font-semibold text-orange-500">
                  {day.day}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-zinc-950">
                  {day.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {day.plan.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-white p-4 text-zinc-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-zinc-950">
            Budget Planning
          </h2>

          <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-zinc-700">
              Estimated trip budget for this itinerary:
            </p>

            <p className="mt-3 text-2xl font-black text-zinc-950">
              {itinerary.budget}
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-zinc-950">
            Travel Tips
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-orange-50 p-5">
              Book hotels early during peak season.
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              Keep local transport options ready.
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              Start sightseeing early to avoid crowds.
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-zinc-950">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-bold">
                Is this itinerary suitable for first-time visitors?
              </h3>

              <p className="mt-2 text-zinc-600">
                Yes. This itinerary is designed for travelers visiting the destination for the first time.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-bold">
                Can I customize this itinerary?
              </h3>

              <p className="mt-2 text-zinc-600">
                Absolutely. You can add or remove attractions based on your interests and available time.
              </p>
            </div>
          </div>
        </section>

        {relatedDestination && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-zinc-950">
              Explore Destination
            </h2>

            <Link
              href={`/destinations/${relatedDestination.slug}`}
              className="mt-6 block rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-orange-300 hover:bg-orange-50"
            >
              <h3 className="text-xl font-bold text-zinc-950">
                {relatedDestination.name}
              </h3>

              <p className="mt-2 text-zinc-600">
                {relatedDestination.description}
              </p>

              <span className="mt-4 inline-block font-semibold text-orange-600">
                View Destination →
              </span>
            </Link>
          </section>
        )}

        {relatedBlog && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-zinc-950">
              Related Guide
            </h2>

            <Link
              href={`/blog/${relatedBlog.slug}`}
              className="mt-6 block rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-orange-300 hover:bg-orange-50"
            >
              <h3 className="text-xl font-bold text-zinc-950">
                {relatedBlog.title}
              </h3>

              <p className="mt-2 text-zinc-600">
                {relatedBlog.description}
              </p>

              <span className="mt-4 inline-block font-semibold text-orange-600">
                Read Guide →
              </span>
            </Link>
          </section>
        )}

        <section className="mt-16">
          <div className="rounded-[2rem] bg-zinc-950 p-8 text-white">
            <h2 className="text-3xl font-black">
              Ready to plan your trip?
            </h2>

            <p className="mt-4 text-zinc-300">
              Compare hotels, flights, and travel packages for this destination.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white"
              >
                Book Hotels
              </a>

              <a
                href="/contact"
                className="rounded-full border border-zinc-600 px-6 py-3 text-center font-semibold text-white"
              >
                Find Flights
              </a>
            </div>
          </div>
        </section>

      </section>
    </main>
  );
}