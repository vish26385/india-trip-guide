import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Wallet } from "lucide-react";

import AdPlaceholder from "@/components/ads/AdPlaceholder";
import ItineraryCard from "@/components/cards/ItineraryCard";
import { destinations } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";
import { blogs } from "@/data/blogs";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `${destination.name} Travel Guide | IndiaTripGuide`,
    description: destination.description,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: destination.name,
  description: destination.description,
  image: destination.image,
  touristType: "Travelers",
  url: `https://www.indiatripguide.com/destinations/${destination.slug}`,
};

const destinationBlogMap: Record<string, string> = {
  udaipur: "best-time-to-visit-udaipur",
  goa: "budget-goa-trip-guide",
  jaipur: "best-time-to-visit-jaipur",
  manali: "best-time-to-visit-manali",
  rishikesh: "best-time-to-visit-rishikesh",
  kerala: "best-time-to-visit-kerala",
  jaisalmer: "best-time-to-visit-jaisalmer",
  shimla: "complete-shimla-travel-guide",
  darjeeling: "top-hill-stations-in-india",
  "mount-abu": "top-hill-stations-in-india",
  andaman: "best-time-to-visit-andaman",
  mumbai: "best-time-to-visit-mumbai",
  pondicherry: "best-time-to-visit-pondicherry",
  munnar: "best-time-to-visit-munnar",
  "gujarat-spiritual-coastal-journey":
    "gujarat-road-trip-travel-guide",
  kashmir: "best-time-to-visit-kashmir",
  mussoorie: "best-time-to-visit-mussoorie",
  jodhpur: "rajasthan-road-trip-guide",
  varanasi: "complete-varanasi-travel-guide",
  agra: "complete-agra-travel-guide",
};

  const relatedItineraries = itineraries.filter(
    (item) =>
      item.destination.toLowerCase() === destination.name.toLowerCase() ||
      item.title.toLowerCase().includes(destination.name.toLowerCase())
  );

const relatedBlog = blogs.find(
  (blog) => blog.slug === destinationBlogMap[destination.slug]
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
        <div className="relative h-[420px] overflow-hidden md:h-[560px]">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-12 text-white"> */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-8 text-white md:pb-12">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            <MapPin size={18} /> {destination.tagline}
          </p>

          {/* <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl"> */}
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
            {destination.name}
          </h1>

          {/* <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-100"> */}
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-100 md:mt-5 md:text-lg md:leading-8">
            {destination.description}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 p-5">
              <CalendarDays className="mb-3 text-orange-500" />
              <p className="text-sm text-zinc-500">Best Time</p>
              <p className="font-bold text-zinc-950">{destination.bestTime}</p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-5">
              <Wallet className="mb-3 text-orange-500" />
              <p className="text-sm text-zinc-500">Budget</p>
              <p className="font-bold text-zinc-950">{destination.budget}</p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-5">
              <MapPin className="mb-3 text-orange-500" />
              <p className="text-sm text-zinc-500">Ideal Duration</p>
              <p className="font-bold text-zinc-950">{destination.duration}</p>
            </div>
          </div>

          {/* <AdPlaceholder /> */}

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-zinc-950">
              Top places to visit in {destination.name}
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {destination.highlights.map((place) => (
                <div
                  key={place}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 font-semibold text-zinc-800"
                >
                  {place}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-zinc-950">Things to do</h2>

            <ul className="mt-6 space-y-4">
              {destination.thingsToDo.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-zinc-200 p-5 text-zinc-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-zinc-950">Travel tips</h2>

            <ul className="mt-6 space-y-4">
              {destination.travelTips.map((tip) => (
                <li
                  key={tip}
                  className="rounded-2xl bg-orange-50 p-5 text-zinc-700"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          {relatedItineraries.length > 0 && (
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-zinc-950">
                Related itineraries
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {relatedItineraries.map((itinerary) => (
                  <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
                ))}
              </div>
            </section>
          )}

          {relatedBlog && (
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-zinc-950">
                Related Guides
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

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-zinc-950">FAQs</h2>

            <div className="mt-6 space-y-4">
              {destination.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-zinc-200 p-5"
                >
                  <h3 className="font-bold text-zinc-950">{faq.question}</h3>
                  <p className="mt-2 text-zinc-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-3xl border border-zinc-200 bg-zinc-50 p-6 lg:sticky lg:top-24">
          <h3 className="text-xl font-bold text-zinc-950">Plan your trip</h3>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Compare stays, flights, and travel packages for {destination.name}.
          </p>

          <div className="mt-6 space-y-3">
            <Link
              href="/contact"
              className="block rounded-full bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Hotels
            </Link>

            <Link
              href="/contact"
              className="block rounded-full border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-900"
            >
              Find Flights
            </Link>

            <Link
              href="/contact"
              className="block rounded-full border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-900"
            >
              Explore Packages
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}