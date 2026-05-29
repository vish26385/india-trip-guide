import Link from "next/link";
import { ArrowRight, Compass, Map, Sparkles } from "lucide-react";

import DestinationCard from "@/components/cards/DestinationCard";
import ItineraryCard from "@/components/cards/ItineraryCard";
import BlogCard from "@/components/cards/BlogCard";
import SectionHeading from "@/components/shared/SectionHeading";
import AdPlaceholder from "@/components/ads/AdPlaceholder";

import { destinations } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";
import { blogs } from "@/data/blogs";
import DestinationSearch from "@/components/shared/DestinationSearch";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-sky-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              Explore Incredible India
            </p>

            <h1 className="text-5xl font-black tracking-tight text-zinc-950 md:text-7xl">
              Discover India with premium travel guides
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Plan better trips with curated destination guides, practical
              itineraries, budget ideas, travel tips, and inspiring India
              travel stories.
            </p>

            {/* <div className="mt-8 rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-xl">
              <div className="flex flex-col gap-3 md:flex-row">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="h-14 flex-1 rounded-2xl border border-zinc-200 px-5 outline-none focus:border-orange-400"
                />

                <button className="h-14 rounded-2xl bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600">
                  Search
                </button>
              </div>
            </div> */}

            <DestinationSearch />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Explore Destinations <ArrowRight size={18} />
              </Link>

              <Link
                href="/itineraries"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                View Itineraries
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              {/* <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop"
                alt="India travel"
                className="h-[520px] w-full object-cover"
              /> */}
              <div className="relative h-[520px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop"
                  alt="India travel"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 rounded-3xl bg-white p-5 shadow-xl">
              <p className="text-sm font-medium text-zinc-500">Featured guide</p>
              <p className="mt-1 text-xl font-bold text-zinc-950">
                Agra & Taj Mahal Guide
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Explore by style"
          title="Find trips by your travel mood"
          description="Choose the kind of trip you want and discover destinations that match your travel style."
        />

        <div className="grid gap-5 md:grid-cols-4">
          {[
            { label: "Weekend Trips", href: "/destinations?search=weekend" },
            { label: "Beach Escapes", href: "/destinations?search=beach" },
            { label: "Hill Stations", href: "/destinations?search=hill" },
            { label: "Heritage Cities", href: "/destinations?search=heritage" },
            { label: "Honeymoon", href: "/destinations?search=romantic" },
            { label: "Budget Travel", href: "/destinations?search=budget" },
            { label: "Family Trips", href: "/destinations?search=family" },
            { label: "Adventure", href: "/destinations?search=adventure" },
          ].map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="rounded-3xl border border-zinc-200 bg-white p-6 text-center font-bold text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {category.label}
            </Link>
          ))}
          {/* {[
            "Weekend Trips",
            "Beach Escapes",
            "Hill Stations",
            "Heritage Cities",
            "Honeymoon",
            "Budget Travel",
            "Family Trips",
            "Adventure",
          ].map((category) => (
            <div
              key={category}
              className="rounded-3xl border border-zinc-200 bg-white p-6 text-center font-bold text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {category}
            </div>
          ))} */}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Top destinations"
          title="Popular places to visit in India"
          description="Start with handpicked destinations that are perfect for first-time travelers, couples, families, and weekend trips."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Trip plans"
            title="Ready-made itineraries"
            description="Save planning time with practical day-by-day travel plans for India’s most loved destinations."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {itineraries.map((itinerary) => (
              <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Why IndiaTripGuide"
          title="Simple, useful and travel-focused"
          description="Built to help Indian travelers plan faster with clear guides, estimated budgets, best time to visit, and practical tips."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Curated Guides",
              text: "Only practical and useful destination information.",
            },
            {
              icon: Map,
              title: "Smart Itineraries",
              text: "Day-by-day plans that save hours of planning.",
            },
            {
              icon: Sparkles,
              title: "Premium Experience",
              text: "Clean, modern, mobile-first travel reading experience.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <item.icon className="h-10 w-10 text-orange-500" />
              <h3 className="mt-5 text-xl font-bold text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Travel stories"
            title="Latest travel guides"
            description="Read practical travel blogs, budget guides, seasonal advice, and planning tips for Indian destinations."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>

          {/* <AdPlaceholder /> */}
        </div>
      </section>

      {/* <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-zinc-950 to-zinc-800 px-6 py-14 text-center text-white md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Travel smarter
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Get fresh India travel guides
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Discover new destinations, itineraries, budget tips, and travel ideas
            directly from IndiaTripGuide.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-xl px-4 text-zinc-900 outline-none"
            />

            <button className="h-12 rounded-xl bg-orange-500 px-6 font-semibold text-white hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-zinc-950 to-zinc-800 px-6 py-14 text-center text-white md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Travel smarter
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Get fresh India travel guides
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Discover new destinations, itineraries, budget tips, and travel ideas
            directly from IndiaTripGuide.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Get Travel Updates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}