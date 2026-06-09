import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  MapPin,
  Route,
  Sparkles,
  Wallet,
} from "lucide-react";

import { destinations } from "@/data/destinations";
import { blogs } from "@/data/blogs";
import { itineraries } from "@/data/itineraries";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

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
    "7-days-divine-coastal-gujarat-trail":
      "gujarat-spiritual-coastal-journey",
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

      <section className="relative min-h-[560px] overflow-hidden bg-zinc-950 text-white md:min-h-[680px]">
        <Image
          src={itinerary.image}
          alt={itinerary.title}
          fill
          priority
          className="object-cover opacity-65"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-6 pb-12 pt-24 md:min-h-[680px] md:pb-16">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-orange-200 backdrop-blur-xl">
              <MapPin size={16} />
              {itinerary.destination}
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              {itinerary.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-100 md:text-lg md:leading-8">
              {itinerary.overview}
            </p>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <CalendarDays className="mb-2 text-orange-300" size={20} />
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Duration
                </p>
                <p className="mt-1 font-black text-white">
                  {itinerary.duration}
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <Wallet className="mb-2 text-orange-300" size={20} />
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Budget
                </p>
                <p className="mt-1 font-black text-white">
                  {itinerary.budget}
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <Route className="mb-2 text-orange-300" size={20} />
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Destination
                </p>
                <p className="mt-1 font-black text-white">
                  {itinerary.destination}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
         <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Itineraries", href: "/itineraries" },
              { label: itinerary.title },
            ]}
          />
        <section>
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
              Trip Plan
            </p>
            <h2 className="mt-2 text-3xl font-black text-zinc-950 md:text-4xl">
              Day-by-day itinerary
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
              Follow this practical route to make your trip easier, smoother,
              and more enjoyable.
            </p>
          </div>

          <div className="relative space-y-6">
            {itinerary.days.map((day, index) => (
              <div
                key={day.day}
                className="relative rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-orange-200 hover:shadow-xl sm:p-6"
              >
                <div className="flex flex-col gap-5 md:flex-row">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/25">
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                      {day.day}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-zinc-950">
                      {day.title}
                    </h3>

                    <ul className="mt-5 grid gap-3">
                      {day.plan.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-2xl bg-zinc-50 p-4 text-zinc-700"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-orange-500"
                          />
                          <span className="font-medium leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
              <Wallet size={24} />
            </div>

            <h2 className="mt-5 text-3xl font-black text-zinc-950">
              Budget Planning
            </h2>

            <p className="mt-3 leading-7 text-zinc-600">
              Estimated trip budget for this itinerary:
            </p>

            <p className="mt-4 text-3xl font-black text-zinc-950">
              {itinerary.budget}
            </p>
          </div>

          <div className="rounded-[2rem] border border-orange-100 bg-orange-50 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-orange-500">
              <Lightbulb size={24} />
            </div>

            <h2 className="mt-5 text-3xl font-black text-zinc-950">
              Travel Tips
            </h2>

            <div className="mt-5 space-y-3">
              {[
                "Book hotels early during peak season.",
                "Keep local transport options ready.",
                "Start sightseeing early to avoid crowds.",
              ].map((tip) => (
                <div key={tip} className="flex gap-3 rounded-2xl bg-white p-4">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />
                  <p className="font-medium leading-6 text-zinc-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
              <HelpCircle size={24} />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Questions
              </p>
              <h2 className="text-3xl font-black text-zinc-950">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-zinc-950">
                Is this itinerary suitable for first-time visitors?
              </h3>

              <p className="mt-2 leading-7 text-zinc-600">
                Yes. This itinerary is designed for travelers visiting the
                destination for the first time.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-zinc-950">
                Can I customize this itinerary?
              </h3>

              <p className="mt-2 leading-7 text-zinc-600">
                Absolutely. You can add or remove attractions based on your
                interests and available time.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          {relatedDestination && (
            <Link
              href={`/destinations/${relatedDestination.slug}`}
              className="group block rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Explore Destination
              </p>

              <h3 className="mt-3 text-2xl font-black text-zinc-950">
                {relatedDestination.name}
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                {relatedDestination.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 font-black text-orange-600">
                View Destination
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          )}

          {relatedBlog && (
            <Link
              href={`/blog/${relatedBlog.slug}`}
              className="group block rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Related Guide
              </p>

              <h3 className="mt-3 text-2xl font-black text-zinc-950">
                {relatedBlog.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                {relatedBlog.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 font-black text-orange-600">
                Read Guide
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          )}
        </section>

        <section className="mt-16">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-8 text-white shadow-2xl md:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                  Ready to plan?
                </p>

                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Start planning your {itinerary.destination} trip.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
                  Compare hotels, flights, and travel packages for this
                  destination.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href={`/trip-planner?destination=${encodeURIComponent(
                    itinerary.destination
                  )}&days=${parseInt(itinerary.duration)}`}
                  className="rounded-full bg-orange-500 px-7 py-4 text-center font-black text-white transition hover:bg-orange-600"
                >
                  Plan Trip
                </Link>

                {/* <Link
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center font-black text-white transition hover:bg-white/15"
                >
                  Book Hotels
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center font-black text-white transition hover:bg-white/15"
                >
                  Find Flights
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}