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
  Sparkles,
  Wallet,
} from "lucide-react";

import DestinationCard from "@/components/cards/DestinationCard";
import ItineraryCard from "@/components/cards/ItineraryCard";
import { destinations } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";
import { blogs } from "@/data/blogs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

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

// function getRelatedDestinations(currentDestination: (typeof destinations)[number]) {
//   const stopWords = new Set([
//     "the",
//     "and",
//     "for",
//     "with",
//     "from",
//     "this",
//     "that",
//     "your",
//     "you",
//     "are",
//     "is",
//     "in",
//     "of",
//     "to",
//     "a",
//     "an",
//     "trip",
//     "travel",
//     "india",
//     "destination",
//   ]);

//   const getWords = (text: string) =>
//     text
//       .toLowerCase()
//       .replace(/[^a-z0-9\s]/g, " ")
//       .split(/\s+/)
//       .filter((word) => word.length > 3 && !stopWords.has(word));

//   const currentText = [
//     currentDestination.name,
//     currentDestination.tagline,
//     currentDestination.description,
//     currentDestination.bestTime,
//     currentDestination.budget,
//     currentDestination.duration,
//     currentDestination.highlights.join(" "),
//     currentDestination.thingsToDo.join(" "),
//     currentDestination.travelTips.join(" "),
//   ].join(" ");

//   const currentWords = new Set(getWords(currentText));

//   const scored = destinations
//     .filter((item) => item.slug !== currentDestination.slug)
//     .map((item) => {
//       const itemText = [
//         item.name,
//         item.tagline,
//         item.description,
//         item.bestTime,
//         item.budget,
//         item.duration,
//         item.highlights.join(" "),
//         item.thingsToDo.join(" "),
//         item.travelTips.join(" "),
//       ].join(" ");

//       const itemWords = getWords(itemText);

//       let score = 0;

//       itemWords.forEach((word) => {
//         if (currentWords.has(word)) {
//           score += 1;
//         }
//       });

//       if (
//         item.tagline.toLowerCase() ===
//         currentDestination.tagline.toLowerCase()
//       ) {
//         score += 5;
//       }

//       return {
//         destination: item,
//         score,
//       };
//     })
//     .sort((a, b) => b.score - a.score);

//   const bestMatches = scored
//     .filter((item) => item.score > 0)
//     .slice(0, 3)
//     .map((item) => item.destination);

//   if (bestMatches.length >= 3) {
//     return bestMatches;
//   }

//   const fallback = destinations
//     .filter(
//       (item) =>
//         item.slug !== currentDestination.slug &&
//         !bestMatches.some((match) => match.slug === item.slug)
//     )
//     .slice(0, 3 - bestMatches.length);

//   return [...bestMatches, ...fallback];
// }

function getRelatedDestinations(currentDestination: (typeof destinations)[number]) {
  const currentTags = new Set(
    (currentDestination.tags ?? []).map((tag) => tag.toLowerCase())
  );

  const currentText = [
    currentDestination.name,
    currentDestination.tagline,
    currentDestination.description,
    currentDestination.highlights.join(" "),
    currentDestination.thingsToDo.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  const getCategoryBoost = (item: (typeof destinations)[number]) => {
    const itemText = [
      item.name,
      item.tagline,
      item.description,
      item.highlights.join(" "),
      item.thingsToDo.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    let score = 0;

    const coastalWords = ["beach", "coast", "coastal", "sea", "island"];
    const hillWords = ["hill", "mountain", "valley", "peak", "tea"];
    const spiritualWords = ["temple", "spiritual", "pilgrimage", "jyotirlinga"];
    const wildlifeWords = ["wildlife", "national park", "safari", "forest"];
    const heritageWords = ["fort", "palace", "heritage", "monument"];

    const hasAny = (text: string, words: string[]) =>
      words.some((word) => text.includes(word));

    if (hasAny(currentText, coastalWords) && hasAny(itemText, coastalWords)) {
      score += 8;
    }

    if (hasAny(currentText, hillWords) && hasAny(itemText, hillWords)) {
      score += 8;
    }

    if (
      hasAny(currentText, spiritualWords) &&
      hasAny(itemText, spiritualWords)
    ) {
      score += 8;
    }

    if (hasAny(currentText, wildlifeWords) && hasAny(itemText, wildlifeWords)) {
      score += 8;
    }

    if (hasAny(currentText, heritageWords) && hasAny(itemText, heritageWords)) {
      score += 5;
    }

    return score;
  };

  const scored = destinations
    .filter((item) => item.slug !== currentDestination.slug)
    .map((item) => {
      let score = 0;

      const itemTags = (item.tags ?? []).map((tag) => tag.toLowerCase());

      itemTags.forEach((tag) => {
        if (currentTags.has(tag)) {
          score += 10;
        }
      });

      score += getCategoryBoost(item);

      if (item.bestTime === currentDestination.bestTime) {
        score += 1;
      }

      if (item.duration === currentDestination.duration) {
        score += 1;
      }

      return {
        destination: item,
        score,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 3).map((item) => item.destination);
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
    "gujarat-spiritual-coastal-journey": "gujarat-road-trip-travel-guide",
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

  const relatedDestinations = getRelatedDestinations(destination);

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

      <section className="relative min-h-[560px] overflow-hidden bg-zinc-950 text-white md:min-h-[680px]">
        <Image
          src={destination.image}
          alt={destination.name}
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
              {destination.tagline}
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              {destination.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-100 md:text-lg md:leading-8">
              {destination.description}
            </p>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <CalendarDays className="mb-2 text-orange-300" size={20} />
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Best Time
                </p>
                <p className="mt-1 font-black text-white">
                  {destination.bestTime}
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <Wallet className="mb-2 text-orange-300" size={20} />
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Budget
                </p>
                <p className="mt-1 font-black text-white">
                  {destination.budget}
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <Sparkles className="mb-2 text-orange-300" size={20} />
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Duration
                </p>
                <p className="mt-1 font-black text-white">
                  {destination.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_360px] lg:py-20">
        <div className="lg:col-span-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Destinations", href: "/destinations" },
              { label: destination.name },
            ]}
          />
        </div>

        <div>
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <MapPin size={24} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Highlights
                </p>
                <h2 className="text-3xl font-black text-zinc-950">
                  Top places to visit in {destination.name}
                </h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {destination.highlights.map((place) => (
                <div
                  key={place}
                  className="group rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <CheckCircle2 className="mb-4 text-orange-500" size={22} />
                  <p className="font-black text-zinc-900">{place}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Sparkles size={24} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Experiences
                </p>
                <h2 className="text-3xl font-black text-zinc-950">
                  Things to do
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {destination.thingsToDo.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />
                  <p className="font-medium leading-7 text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Lightbulb size={24} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Smart Advice
                </p>
                <h2 className="text-3xl font-black text-zinc-950">
                  Travel tips
                </h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {destination.travelTips.map((tip) => (
                <div
                  key={tip}
                  className="rounded-3xl border border-orange-100 bg-orange-50 p-5 text-zinc-800"
                >
                  <p className="font-semibold leading-7">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {relatedItineraries.length > 0 && (
            <section className="mt-16">
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Trip Plans
                </p>
                <h2 className="mt-2 text-3xl font-black text-zinc-950">
                  Related itineraries
                </h2>
              </div>

              <div className="grid gap-6">
                {relatedItineraries.map((itinerary) => (
                  <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
                ))}
              </div>
            </section>
          )}

          {relatedDestinations.length > 0 && (
            <section className="mt-16">
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Explore More
                </p>

                <h2 className="mt-2 text-3xl font-black text-zinc-950">
                  Related destinations
                </h2>

                <p className="mt-3 max-w-2xl text-zinc-600">
                  Discover more places similar to {destination.name} and plan a
                  better India trip.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedDestinations.map((item) => (
                  <DestinationCard key={item.slug} destination={item} />
                ))}
              </div>
            </section>
          )}

          {relatedBlog && (
            <section className="mt-16">
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Travel Guide
                </p>
                <h2 className="mt-2 text-3xl font-black text-zinc-950">
                  Related guide
                </h2>
              </div>

              <Link
                href={`/blog/${relatedBlog.slug}`}
                className="group block rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black text-zinc-950">
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
            </section>
          )}

          <section className="mt-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <HelpCircle size={24} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Questions
                </p>
                <h2 className="text-3xl font-black text-zinc-950">FAQs</h2>
              </div>
            </div>

            <div className="space-y-4">
              {destination.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-black text-zinc-950">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-[2rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-2xl lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
            Plan your trip
          </p>

          <h3 className="mt-3 text-2xl font-black">
            Start planning {destination.name}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Compare stays, flights, and travel packages for this destination.
          </p>

          <div className="mt-6 space-y-3">
            <Link
              href={`/trip-planner?destination=${encodeURIComponent(
                destination.name
              )}&days=${parseInt(destination.duration)}`}
              className="block rounded-full bg-orange-500 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-orange-600"
            >
              Plan Trip
            </Link>

            {/* <Link
              href="/contact"
              className="block rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-white/15"
            >
              Book Hotels
            </Link>

            <Link
              href="/contact"
              className="block rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-white/15"
            >
              Find Flights
            </Link> 

            <Link
              href="/contact"
              className="block rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-white/15"
            >
              Explore Packages
            </Link> */}
          </div>
        </aside>
      </section>
    </main>
  );
}