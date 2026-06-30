import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";
import { blogs } from "@/data/blogs";
import type { Destination } from "@/types";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://www.indiatripguide.com";

function getDestination(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}

function normalize(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

function getRelatedItinerary(destination: Destination) {
  const destinationName = destination.name.toLowerCase();
  const destinationSlug = normalize(destination.name);

  return itineraries.find((itinerary) => {
    const title = itinerary.title.toLowerCase();
    const itineraryDestination = itinerary.destination.toLowerCase();

    return (
      itineraryDestination === destinationName ||
      title.includes(destinationName) ||
      itinerary.slug.includes(destination.slug) ||
      itinerary.slug.includes(destinationSlug)
    );
  });
}

function getRelatedBlog(destination: Destination) {
  const destinationName = destination.name.toLowerCase();
  const destinationSlug = normalize(destination.name);

  return blogs.find((blog) => {
    const title = blog.title.toLowerCase();
    const description = blog.description.toLowerCase();

    return (
      title.includes(destinationName) ||
      description.includes(destinationName) ||
      blog.slug.includes(destination.slug) ||
      blog.slug.includes(destinationSlug)
    );
  });
}

function getRelatedDestinations(destination: Destination) {
  const tagMatches = destinations
    .filter((item) => item.slug !== destination.slug)
    .map((item) => ({
      destination: item,
      score: item.tags.filter((tag) => destination.tags.includes(tag)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.destination);

  return tagMatches.slice(0, 3);
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto mb-10 max-w-3xl text-center" : "mb-8"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-600">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white p-6 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.55)]">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-100 transition duration-300 group-hover:scale-125" />
      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white">
          {icon}
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <p className="mt-2 text-xl font-black text-slate-950">{value}</p>
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-600">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PremiumCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon?: string;
}) {
  return (
    <article className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
      {icon ? (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-xl">
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function PremiumCardNew({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-zinc-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

function NumberedGrid({
  items,
  columns = "md:grid-cols-2 lg:grid-cols-3",
}: {
  items: string[];
  columns?: string;
}) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {items.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="group rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
        >
          <div className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-sm font-black text-orange-600 group-hover:bg-orange-600 group-hover:text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm font-semibold leading-7 text-slate-700">
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return {
      title: "Destination Not Found - IndiaTripGuide",
    };
  }

  return {
    title: `${destination.name} Travel Guide - Places, Cost, Food & Tips`,
    description: destination.description,
    alternates: {
      canonical: `${siteUrl}/destinations/${destination.slug}`,
    },
    openGraph: {
      title: `${destination.name} Travel Guide - IndiaTripGuide`,
      description: destination.description,
      url: `${siteUrl}/destinations/${destination.slug}`,
      siteName: "IndiaTripGuide",
      images: [
        {
          url: destination.image,
          width: 1200,
          height: 630,
          alt: `${destination.name} travel guide`,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${destination.name} Travel Guide - IndiaTripGuide`,
      description: destination.description,
      images: [destination.image],
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  const relatedItinerary = getRelatedItinerary(destination);
  const relatedBlog = getRelatedBlog(destination);
  const relatedDestinations = getRelatedDestinations(destination);

  const destinationImage = destination.image.startsWith("http")
    ? destination.image
    : `${siteUrl}${destination.image}`;

  const destinationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.description,
    image: destinationImage,
    url: `${siteUrl}/destinations/${destination.slug}`,
    touristType: destination.tags,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: destination.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-[#f8fafc] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={destination.image}
            alt={`${destination.name} travel guide`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.72)_38%,rgba(2,6,23,0.35)_72%,rgba(2,6,23,0.58)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/65 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-20 sm:px-6 md:pt-24 lg:px-8 lg:pb-32">
          <nav className="mb-12 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/80">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/destinations" className="transition hover:text-white">
              Destinations
            </Link>
            <span>/</span>
            <span className="text-white">{destination.name}</span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-4 text-base font-black uppercase tracking-[0.22em] text-orange-300">
              {destination.tagline}
            </p>

            <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white drop-shadow-2xl md:text-7xl">
              {destination.name} Travel Guide
            </h1>

            <p className="mt-7 max-w-3xl text-lg font-medium leading-9 text-white/90 md:text-xl">
              {destination.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              {relatedItinerary ? (
                <Link
                  href={`/itineraries/${relatedItinerary.slug}`}
                  className="rounded-full bg-orange-500 px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_-20px_rgba(249,115,22,0.9)] transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  View Itinerary
                </Link>
              ) : (
                <Link
                  href="/itineraries"
                  className="rounded-full bg-orange-500 px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_-20px_rgba(249,115,22,0.9)] transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Explore Itineraries
                </Link>
              )}

              <a
                href="#guide"
                className="rounded-full border border-white/20 bg-white px-7 py-4 text-sm font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Read Full Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <StatCard label="Best Time" value={destination.bestTime} icon="☀️" />
          <StatCard label="Budget" value={destination.budget} icon="₹" />
          <StatCard label="Duration" value={destination.duration} icon="🧭" />
        </div>
      </section>

      <section id="guide" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_350px]">
          <div className="space-y-12">
            <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_80px_-55px_rgba(15,23,42,0.55)]">
              <div className="border-b border-slate-100 bg-gradient-to-r from-orange-50 via-white to-slate-50 p-7 md:p-9">
                <SectionHeading
                  eyebrow="About"
                  title={`Why visit ${destination.name}?`}
                  description="A rich travel overview to help you understand the destination, its travel style, and the best way to experience it."
                />
              </div>

              <div className="space-y-6 p-7 md:p-9">
                {destination.overview.map((paragraph, index) => (
                  <p
                    key={`${destination.slug}-overview-${index}`}
                    className="text-base leading-9 text-slate-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Season Guide"
                title={`Best time to visit ${destination.name}`}
                description="Understand how the destination feels across seasons before choosing your travel dates."
              />

              <div className="grid gap-5 md:grid-cols-2">
                <PremiumCard
                  icon="⭐"
                  title="Recommended Season"
                  text={destination.bestTimeToVisit.recommendedSeason}
                />
                <PremiumCard
                  icon="❄️"
                  title="Winter"
                  text={destination.bestTimeToVisit.winter}
                />
                <PremiumCard
                  icon="🌤️"
                  title="Summer"
                  text={destination.bestTimeToVisit.summer}
                />
                <PremiumCard
                  icon="🌧️"
                  title="Monsoon"
                  text={destination.bestTimeToVisit.monsoon}
                />
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Attractions"
                title={`Must-visit places in ${destination.name}`}
                description="The most important places, viewpoints, temples, beaches, markets, landmarks, and nearby attractions to include in your plan."
              />

              <NumberedGrid items={destination.mustVisitPlaces} />
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Experiences"
                title={`Things to do in ${destination.name}`}
                description="Use these ideas to create a deeper and more useful travel itinerary."
              />

              <NumberedGrid items={destination.thingsToDo} columns="md:grid-cols-2" />
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Food"
                title={`Local food to try in ${destination.name}`}
                description="Regional dishes, snacks, drinks, desserts, and food experiences worth trying."
              />

              <PillList items={destination.localFood} />
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Transport"
                title={`How to reach ${destination.name}`}
              />

              <div className="grid gap-5">
                <PremiumCard icon="✈️" title="By Air" text={destination.howToReach.byAir} />
                <PremiumCard icon="🚗" title="By Road" text={destination.howToReach.byRoad} />
                <PremiumCard icon="🚆" title="By Train" text={destination.howToReach.byTrain} />
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Stay"
                title={`Where to stay in ${destination.name}`}
                description="Choose your stay area and accommodation style based on comfort, budget, and itinerary."
              />

              <div className="grid gap-5 md:grid-cols-3">
                <PremiumCard
                  icon="🎒"
                  title="Budget"
                  text={destination.whereToStay.budget}
                />
                <PremiumCard
                  icon="🏨"
                  title="Mid-range"
                  text={destination.whereToStay.midRange}
                />
                <PremiumCard
                  icon="✨"
                  title="Luxury"
                  text={destination.whereToStay.luxury}
                />
              </div>
            </section>

            {/* <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_28px_80px_-55px_rgba(15,23,42,0.55)] md:p-9">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-100/70 blur-3xl" />
              <div className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-slate-200/70 blur-3xl" />

              <div className="relative">
                <SectionHeading
                  eyebrow="Trip Cost"
                  title={`${destination.name} budget breakdown`}
                  description="Destination-specific spending guidance for different travel styles."
                />

                <div className="grid gap-5">
                  <article className="rounded-[1.6rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-xl text-white">
                      🎒
                    </div>
                    <h3 className="text-xl font-black text-slate-950">Backpacker</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {destination.budgetBreakdown.backpacker}
                    </p>
                  </article>

                  <article className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white">
                      🏨
                    </div>
                    <h3 className="text-xl font-black text-slate-950">Mid-range</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {destination.budgetBreakdown.midRange}
                    </p>
                  </article>

                  <article className="rounded-[1.6rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-xl text-white">
                      ✨
                    </div>
                    <h3 className="text-xl font-black text-white">Luxury</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {destination.budgetBreakdown.luxury}
                    </p>
                  </article>
                </div>
              </div>              

            </section> */}

            {/* <section className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#070711] via-[#10101c] to-[#1b0d06] p-6 text-white shadow-[0_32px_90px_rgba(15,23,42,0.28)] md:p-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <SectionTitle
                eyebrow="Trip Cost"
                title={`${destination.name} budget breakdown`}
                description="Destination-specific spending guidance for different travel styles."
              />

              <div className="grid gap-5 lg:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-2xl">
                    🎒
                  </div>
                  <h3 className="text-2xl font-black text-white">Backpacker</h3>
                  <p className="mt-4 text-sm font-medium leading-8 text-white/78">
                    {destination.budgetBreakdown.backpacker}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-orange-400/30 bg-orange-500/10 p-6 backdrop-blur">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-2xl">
                    🏨
                  </div>
                  <h3 className="text-2xl font-black text-white">Mid-range</h3>
                  <p className="mt-4 text-sm font-medium leading-8 text-white/78">
                    {destination.budgetBreakdown.midRange}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-2xl">
                    👑
                  </div>
                  <h3 className="text-2xl font-black text-white">Luxury</h3>
                  <p className="mt-4 text-sm font-medium leading-8 text-white/78">
                    {destination.budgetBreakdown.luxury}
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          <section className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-950 p-7 shadow-[0_35px_100px_-50px_rgba(15,23,42,0.9)] md:p-9">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl" />
            <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-400">
                Trip Cost
              </p>

              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                {destination.name} budget breakdown
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Destination-specific spending guidance for backpacker, mid-range, and luxury travel styles.
              </p>

              <div className="mt-8 grid gap-5">
                {[
                  {
                    title: "Backpacker",
                    icon: "🎒",
                    text: destination.budgetBreakdown.backpacker,
                    badge: "Best for budget trips",
                  },
                  {
                    title: "Mid-range",
                    icon: "🏨",
                    text: destination.budgetBreakdown.midRange,
                    badge: "Most balanced",
                  },
                  {
                    title: "Luxury",
                    icon: "✨",
                    text: destination.budgetBreakdown.luxury,
                    badge: "Premium comfort",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/[0.09]"
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-400/10 blur-2xl transition group-hover:bg-orange-400/20" />

                    <div className="relative flex flex-col gap-5 md:flex-row md:items-start">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-2xl shadow-lg shadow-orange-950/30">
                        {item.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-black text-white">{item.title}</h3>
                          <span className="rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-orange-300">
                            {item.badge}
                          </span>
                        </div>

                        <p className="mt-3 text-sm font-medium leading-8 text-slate-300">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Planning"
                title={`Ideal duration for ${destination.name}`}
              />

              <p className="text-base leading-9 text-slate-700">
                {destination.idealDuration}
              </p>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Nearby"
                title={`Nearby places from ${destination.name}`}
                description="Add these places if you want a longer and more complete route."
              />

              <NumberedGrid items={destination.nearbyPlaces} />
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Tips"
                title={`${destination.name} travel tips`}
                description="Practical advice to avoid common travel mistakes."
              />

              <NumberedGrid items={destination.travelTips} columns="md:grid-cols-2" />
            </section>

            {relatedItinerary ? (
              <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-500 via-orange-600 to-slate-950 p-7 text-white shadow-[0_35px_80px_-45px_rgba(249,115,22,0.9)] md:p-9">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10" />
                <div className="relative max-w-3xl">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-100">
                    Related itinerary
                  </p>
                  <h2 className="text-3xl font-black md:text-4xl">
                    {relatedItinerary.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/85">
                    {relatedItinerary.overview}
                  </p>
                  <Link
                    href={`/itineraries/${relatedItinerary.slug}`}
                    className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100"
                  >
                    Open itinerary
                  </Link>
                </div>
              </section>
            ) : null}

            {relatedBlog ? (
              <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
                <SectionHeading
                  eyebrow="Related blog"
                  title={relatedBlog.title}
                  description={relatedBlog.description}
                />

                <Link
                  href={`/blog/${relatedBlog.slug}`}
                  className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-slate-800"
                >
                  Read blog
                </Link>
              </section>
            ) : null}

            <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <SectionHeading
                eyebrow="Questions"
                title={`FAQs about ${destination.name}`}
                description="Answers to common questions travelers ask before planning this trip."
              />

              <div className="space-y-4">
                {destination.faqs.map((faq, index) => (
                  <details
                    key={`${faq.question}-${index}`}
                    className="group rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 transition hover:border-orange-200 hover:bg-orange-50/40"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-black text-slate-950">
                      <span>{faq.question}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-55px_rgba(15,23,42,0.6)]">
              <div className="relative h-44">
                <Image
                  src={destination.image}
                  alt={`${destination.name} trip planner`}
                  fill
                  sizes="350px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
                    Plan Your Trip
                  </p>
                  <h2 className="text-2xl font-black text-white">
                    {destination.name}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <div className="rounded-[1.5rem] bg-slate-50 p-5">
                  {/* <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
                    Plan Your Trip
                  </p> */}
                  <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950">
                    Start planning {destination.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                    Compare stays, flights, and travel packages for this destination.
                  </p>
                </div>

                {/* <Link
                  href="/plan-trip"
                  className="mt-5 flex w-full justify-center rounded-full bg-orange-500 px-6 py-4 text-sm font-black text-white transition hover:bg-orange-600"
                >
                  Plan Trip
                </Link> */}

                <Link
                  href={`/trip-planner?destination=${encodeURIComponent(
                    destination.name
                  )}&days=${parseInt(destination.duration)}`}
                  className="mt-5 flex w-full justify-center rounded-full bg-orange-500 px-6 py-4 text-sm font-black text-white transition hover:bg-orange-600"
                >
                  Plan Trip
                </Link>

              </div>
            </div>

            {/* {relatedDestinations.length > 0 ? (
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-950">
                  Related Destinations
                </h2>

                <div className="mt-5 space-y-3">
                  {relatedDestinations.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/destinations/${item.slug}`}
                      className="group block rounded-2xl border border-slate-200 p-4 transition hover:border-orange-200 hover:bg-orange-50"
                    >
                      <p className="font-black text-slate-950 group-hover:text-orange-700">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {item.tagline}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null} */}

          {relatedDestinations.length > 0 ? (
            <PremiumCardNew className="p-6">
              <h3 className="text-xl font-black text-zinc-950">
                Related destinations
              </h3>

              <div className="mt-5 space-y-4">
                {relatedDestinations.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/destinations/${item.slug}`}
                    className="group block overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    <div className="relative h-28">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="320px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <p className="text-lg font-black text-white">{item.name}</p>
                        <p className="text-xs font-semibold text-white/80">
                          {item.tagline}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </PremiumCardNew>
          ) : null}


          </aside>
        </div>
      </section>
    </main>
  );
}

