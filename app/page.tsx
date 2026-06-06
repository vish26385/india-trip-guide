// import Link from "next/link";
// import { ArrowRight, Compass, Map, Sparkles } from "lucide-react";

// import DestinationCard from "@/components/cards/DestinationCard";
// import ItineraryCard from "@/components/cards/ItineraryCard";
// import BlogCard from "@/components/cards/BlogCard";
// import SectionHeading from "@/components/shared/SectionHeading";
// import AdPlaceholder from "@/components/ads/AdPlaceholder";

// import { destinations } from "@/data/destinations";
// import { itineraries } from "@/data/itineraries";
// import { blogs } from "@/data/blogs";
// import DestinationSearch from "@/components/shared/DestinationSearch";

// import Image from "next/image";

// export default function HomePage() {
//   return (
//     <main className="bg-white">
//       <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-sky-50">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
//           <div>
//             <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
//               Explore Incredible India
//             </p>

//             <h1 className="text-5xl font-black tracking-tight text-zinc-950 md:text-7xl">
//               Discover India with premium travel guides
//             </h1>

//             <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
//               Plan better trips with curated destination guides, practical
//               itineraries, budget ideas, travel tips, and inspiring India
//               travel stories.
//             </p>

//             <DestinationSearch />

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 href="/destinations"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
//               >
//                 Explore Destinations <ArrowRight size={18} />
//               </Link>

//               <Link
//                 href="/itineraries"
//                 className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
//               >
//                 View Itineraries
//               </Link>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="overflow-hidden rounded-[2rem] shadow-2xl">
//               {/* <img
//                 src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop"
//                 alt="India travel"
//                 className="h-[520px] w-full object-cover"
//               /> */}
//               <div className="relative h-[520px] w-full">
//                 <Image
//                   src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop"
//                   alt="India travel"
//                   fill
//                   priority
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             <div className="absolute -bottom-6 left-6 rounded-3xl bg-white p-5 shadow-xl">
//               <p className="text-sm font-medium text-zinc-500">Featured guide</p>
//               <p className="mt-1 text-xl font-bold text-zinc-950">
//                 Agra & Taj Mahal Guide
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <SectionHeading
//           eyebrow="Explore by style"
//           title="Find trips by your travel mood"
//           description="Choose the kind of trip you want and discover destinations that match your travel style."
//         />

//         <div className="grid gap-5 md:grid-cols-4">
//           {[
//             { label: "Weekend Trips", href: "/destinations?search=weekend" },
//             { label: "Beach Escapes", href: "/destinations?search=beach" },
//             { label: "Hill Stations", href: "/destinations?search=hill" },
//             { label: "Heritage Cities", href: "/destinations?search=heritage" },
//             { label: "Honeymoon", href: "/destinations?search=honeymoon" },
//             { label: "Budget Travel", href: "/destinations?search=budget" },
//             { label: "Family Trips", href: "/destinations?search=family" },
//             { label: "Adventure", href: "/destinations?search=adventure" },
//           ].map((category) => (
//             <Link
//               key={category.label}
//               href={category.href}
//               className="rounded-3xl border border-zinc-200 bg-white p-6 text-center font-bold text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
//             >
//               {category.label}
//             </Link>
//           ))}          
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <SectionHeading
//           eyebrow="Top destinations"
//           title="Popular places to visit in India"
//           description="Start with handpicked destinations that are perfect for first-time travelers, couples, families, and weekend trips."
//         />

//         <div className="grid gap-6 md:grid-cols-3">
//           {destinations.map((destination) => (
//             <DestinationCard key={destination.slug} destination={destination} />
//           ))}
//         </div>
//       </section>

//       <section className="bg-zinc-50">
//         <div className="mx-auto max-w-7xl px-6 py-20">
//           <SectionHeading
//             eyebrow="Trip plans"
//             title="Ready-made itineraries"
//             description="Save planning time with practical day-by-day travel plans for India’s most loved destinations."
//           />

//           <div className="grid gap-6 md:grid-cols-2">
//             {itineraries.map((itinerary) => (
//               <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <SectionHeading
//           eyebrow="Why IndiaTripGuide"
//           title="Simple, useful and travel-focused"
//           description="Built to help Indian travelers plan faster with clear guides, estimated budgets, best time to visit, and practical tips."
//         />

//         <div className="grid gap-6 md:grid-cols-3">
//           {[
//             {
//               icon: Compass,
//               title: "Curated Guides",
//               text: "Only practical and useful destination information.",
//             },
//             {
//               icon: Map,
//               title: "Smart Itineraries",
//               text: "Day-by-day plans that save hours of planning.",
//             },
//             {
//               icon: Sparkles,
//               title: "Premium Experience",
//               text: "Clean, modern, mobile-first travel reading experience.",
//             },
//           ].map((item) => (
//             <div
//               key={item.title}
//               className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
//             >
//               <item.icon className="h-10 w-10 text-orange-500" />
//               <h3 className="mt-5 text-xl font-bold text-zinc-950">
//                 {item.title}
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-zinc-600">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-zinc-950 text-white">
//         <div className="mx-auto max-w-7xl px-6 py-20">
//           <SectionHeading
//             eyebrow="Travel stories"
//             title="Latest travel guides"
//             description="Read practical travel blogs, budget guides, seasonal advice, and planning tips for Indian destinations."
//           />

//           <div className="grid gap-6 md:grid-cols-3">
//             {blogs.map((blog) => (
//               <BlogCard key={blog.slug} blog={blog} />
//             ))}
//           </div>

//           {/* <AdPlaceholder /> */}
//         </div>
//       </section>

//       {/* <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="rounded-[2rem] bg-gradient-to-br from-zinc-950 to-zinc-800 px-6 py-14 text-center text-white md:px-16">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
//             Travel smarter
//           </p>

//           <h2 className="mt-4 text-3xl font-black md:text-5xl">
//             Get fresh India travel guides
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
//             Discover new destinations, itineraries, budget tips, and travel ideas
//             directly from IndiaTripGuide.
//           </p>

//           <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-3 sm:flex-row">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="h-12 flex-1 rounded-xl px-4 text-zinc-900 outline-none"
//             />

//             <button className="h-12 rounded-xl bg-orange-500 px-6 font-semibold text-white hover:bg-orange-600">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section> */}

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="rounded-[2rem] bg-gradient-to-br from-zinc-950 to-zinc-800 px-6 py-14 text-center text-white md:px-16">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
//             Travel smarter
//           </p>

//           <h2 className="mt-4 text-3xl font-black md:text-5xl">
//             Get fresh India travel guides
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
//             Discover new destinations, itineraries, budget tips, and travel ideas
//             directly from IndiaTripGuide.
//           </p>

//           <div className="mt-8">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
//             >
//               Get Travel Updates
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Compass,
  Map,
  Sparkles,
  ShieldCheck,
  Star,
  Plane,
  Palmtree,
  Mountain,
  Landmark,
  Heart,
  Wallet,
  Users,
  TentTree,
  CalendarDays,
} from "lucide-react";

import DestinationCard from "@/components/cards/DestinationCard";
import ItineraryCard from "@/components/cards/ItineraryCard";
import BlogCard from "@/components/cards/BlogCard";
import SectionHeading from "@/components/shared/SectionHeading";
import DestinationSearch from "@/components/shared/DestinationSearch";
import RegionExplorer from "@/components/home/RegionExplorer";
import MostPopularDestinations from "@/components/home/MostPopularDestinations";
import { destinations } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";
import { blogs } from "@/data/blogs";

export default function HomePage() {
  const featuredDestinations = destinations.slice(0, 6);
  const featuredItineraries = itineraries.slice(0, 6);
  const featuredBlogs = blogs.slice(0, 6);

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative min-h-[760px] bg-zinc-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop"
            alt="India travel"
            fill
            priority
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-24 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-200 shadow-2xl backdrop-blur-xl">
              <Sparkles size={16} />
              Premium India Travel Guides
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Discover India with smarter travel planning.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 md:text-xl">
              Explore curated destinations, day-by-day itineraries, seasonal
              guides, budget tips, and practical travel ideas for unforgettable
              trips across India.
            </p>

            <div className="max-w-2xl">
              <DestinationSearch />
            </div>            

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Explore Destinations <ArrowRight size={18} />
              </Link>

                <Link
                  href="/trip-planner"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-500 bg-orange-500/10 px-7 py-4 text-sm font-bold text-orange-300 transition hover:bg-orange-500/20"
                >
                  Plan Trip <ArrowRight size={18} />
                </Link>

              <Link
                href="/itineraries"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                View Itineraries
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["20+", "Destinations"],
                ["20+", "Itineraries"],
                ["22+", "Guides"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                >
                  <p className="text-2xl font-black text-white">{number}</p>
                  <p className="mt-1 text-xs font-medium text-zinc-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="hidden md:block"> */}
          <div className="block">
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                {/* <div className="relative h-[540px] overflow-hidden rounded-[2rem]"> */}
                <div className="relative h-[320px] overflow-hidden rounded-[2rem] sm:h-[420px] md:h-[540px]">
                  <Image
                    src="/images/rajasthan-roadtrip.jpg"
                    alt="IndiaTripGuide featured travel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 right-8 rounded-3xl bg-white p-5 text-zinc-950 shadow-2xl">
                <div className="flex items-center gap-2 text-orange-500">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="mt-2 text-sm font-semibold text-zinc-500">
                  Trusted planning experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegionExplorer />

      <MostPopularDestinations />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Explore by style"
          title="Find trips by your travel mood"
          description="Choose the kind of trip you want and discover destinations that match your travel style."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Weekend Trips", href: "/destinations?search=weekend", icon: CalendarDays },
            { label: "Beach Escapes", href: "/destinations?search=beach", icon: Palmtree },
            { label: "Hill Stations", href: "/destinations?search=hill", icon: Mountain },
            { label: "Heritage Cities", href: "/destinations?search=heritage", icon: Landmark },
            { label: "Honeymoon", href: "/destinations?search=honeymoon", icon: Heart },
            { label: "Budget Travel", href: "/destinations?search=budget", icon: Wallet },
            { label: "Family Trips", href: "/destinations?search=family", icon: Users },
            { label: "Adventure", href: "/destinations?search=adventure", icon: TentTree },
          ].map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="group rounded-[1.7rem] border border-zinc-200 bg-white p-6 text-center font-black text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                <category.icon size={20} />
              </span>
              <span className="mt-4 block">{category.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-orange-50/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Top destinations"
            title="Popular places to visit in India"
            description="Start with handpicked destinations that are perfect for first-time travelers, couples, families, and weekend trips."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-zinc-800"
            >
              View All Destinations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Trip plans
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Ready-made itineraries
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">
              Save planning time with practical day-by-day travel plans for
              India's most loved destinations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredItineraries.map((itinerary) => (
              <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              View All Itineraries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Why IndiaTripGuide"
          title="Built for smarter India travel"
          description="A clean, practical and premium travel planning experience for Indian destinations."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Curated Guides",
              text: "Useful destination information without unnecessary noise.",
            },
            {
              icon: Map,
              title: "Smart Itineraries",
              text: "Day-by-day plans that save hours of planning.",
            },
            {
              icon: ShieldCheck,
              title: "Travel-Ready Details",
              text: "Best time, budgets, highlights, tips and related guides in one place.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <item.icon size={26} />
              </div>
              <h3 className="mt-6 text-xl font-black text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Travel stories"
            title="Latest travel guides"
            description="Read practical travel blogs, budget guides, seasonal advice, and planning tips for Indian destinations."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-zinc-800"
            >
              Read All Guides <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-8 text-white shadow-2xl md:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                Travel smarter
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black md:text-5xl">
                Get fresh India travel guides and smarter trip ideas.
              </h2>

              <p className="mt-4 max-w-2xl text-zinc-300">
                Explore destinations, itineraries, budget tips and travel
                inspiration curated for better India trips.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Get Travel Updates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}