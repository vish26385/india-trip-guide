// import { notFound } from "next/navigation";
// import { Clock } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { destinations } from "@/data/destinations";
// import AdPlaceholder from "@/components/ads/AdPlaceholder";
// import { blogs } from "@/data/blogs";

// type PageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export function generateStaticParams() {
//   return blogs.map((blog) => ({
//     slug: blog.slug,
//   }));
// }

// export async function generateMetadata({ params }: PageProps) {
//   const { slug } = await params;
//   const blog = blogs.find((item) => item.slug === slug);

//   return {
//     title: blog ? `${blog.title} | IndiaTripGuide` : "Blog Not Found",
//     description: blog?.description ?? "India travel blog.",
//   };
// }

// export default async function BlogDetailPage({ params }: PageProps) {
//   const { slug } = await params;
//   const blog = blogs.find((item) => item.slug === slug);

//   if (!blog) {
//     notFound();
//   }

//   const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "BlogPosting",
//   headline: blog.title,
//   description: blog.description,
//   image: blog.image,
//   datePublished: blog.date,
//   author: {
//     "@type": "Organization",
//     name: "IndiaTripGuide",
//   },
//   publisher: {
//     "@type": "Organization",
//     name: "IndiaTripGuide",
//   },
// };

// const blogDestinationMap: Record<string, string> = {
//   "best-time-to-visit-udaipur": "udaipur",
//   "budget-goa-trip-guide": "goa",
//   "best-time-to-visit-jaipur": "jaipur",
//   "best-time-to-visit-manali": "manali",
//   "best-time-to-visit-rishikesh": "rishikesh",
//   "best-time-to-visit-kerala": "kerala",
//   "best-time-to-visit-jaisalmer": "jaisalmer",
//   "complete-shimla-travel-guide": "shimla",
//   "top-hill-stations-in-india": "darjeeling",
//   "best-time-to-visit-andaman": "andaman",
//   "best-time-to-visit-mumbai": "mumbai",
//   "best-time-to-visit-pondicherry": "pondicherry",
//   "best-time-to-visit-munnar": "munnar",
//   "gujarat-road-trip-travel-guide":
//     "gujarat-spiritual-coastal-journey",
//   "best-time-to-visit-kashmir": "kashmir",
//   "best-time-to-visit-mussoorie": "mussoorie",
//   "complete-varanasi-travel-guide": "varanasi",
//   "complete-agra-travel-guide": "agra",
//   "rajasthan-road-trip-guide": "jodhpur",
// };

// const relatedDestination = destinations.find(
//   (destination) =>
//     destination.slug === blogDestinationMap[blog.slug]
// );

//   return (
//     <main className="bg-white">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(jsonLd),
//         }}
//       />
//       <section className="mx-auto max-w-4xl px-6 py-16">
//         <p className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
//           <Clock size={16} />
//           {blog.readTime} · {blog.date}
//         </p>

//         <h1 className="text-4xl font-black tracking-tight text-zinc-950 md:text-6xl">
//           {blog.title}
//         </h1>

//         <p className="mt-5 text-lg leading-8 text-zinc-600">
//           {blog.description}
//         </p>

//         <div className="relative mt-10 h-[420px] overflow-hidden rounded-[2rem]">
//           <Image
//             src={blog.image}
//             alt={blog.title}
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>

//         {/* <AdPlaceholder /> */}

//         <article className="prose prose-zinc mt-10 max-w-none">
//           {blog.content.map((paragraph) => (
//             <p key={paragraph}>{paragraph}</p>
//           ))}
//         </article>

//         <section className="mt-16">
//           <h2 className="text-3xl font-bold text-zinc-950">
//             Quick Travel Tips
//           </h2>

//           <div className="mt-6 space-y-4">
//             <div className="rounded-2xl bg-orange-50 p-5">
//               Always verify attraction timings before visiting.
//             </div>

//             <div className="rounded-2xl bg-orange-50 p-5">
//               Book hotels early during peak travel season.
//             </div>

//             <div className="rounded-2xl bg-orange-50 p-5">
//               Keep some flexibility in your itinerary.
//             </div>
//           </div>
//         </section>

//         <section className="mt-16">
//           <h2 className="text-3xl font-bold text-zinc-950">
//             Frequently Asked Questions
//           </h2>

//           <div className="mt-6 space-y-4">
//             <div className="rounded-2xl border border-zinc-200 p-5">
//               <h3 className="font-bold">
//                 Is this information suitable for first-time travelers?
//               </h3>

//               <p className="mt-2 text-zinc-600">
//                 Yes. This guide is written especially for first-time visitors.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-zinc-200 p-5">
//               <h3 className="font-bold">
//                 Can travel costs change?
//               </h3>

//               <p className="mt-2 text-zinc-600">
//                 Yes. Hotel, transport, and attraction prices may vary by season.
//               </p>
//             </div>
//           </div>
//         </section>

//         {relatedDestination && (
//           <section className="mt-16">
//             <h2 className="text-3xl font-bold text-zinc-950">
//               Explore Destination
//             </h2>

//             <Link
//               href={`/destinations/${relatedDestination.slug}`}
//               className="mt-6 block rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-orange-300 hover:bg-orange-50"
//             >
//               <h3 className="text-xl font-bold text-zinc-950">
//                 {relatedDestination.name}
//               </h3>

//               <p className="mt-2 text-zinc-600">
//                 {relatedDestination.description}
//               </p>

//               <span className="mt-4 inline-block font-semibold text-orange-600">
//                 View Destination →
//               </span>
//             </Link>
//           </section>
//         )}

//         <section className="mt-16">
//           <div className="rounded-[2rem] bg-zinc-950 p-8 text-white">
//             <h2 className="text-3xl font-black">
//               Ready to plan your trip?
//             </h2>

//             <p className="mt-4 text-zinc-300">
//               Explore destinations, itineraries, hotels, and travel inspiration.
//             </p>

//             <div className="mt-6 flex flex-col gap-3 sm:flex-row">
//               <a
//                 href="/destinations"
//                 className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white"
//               >
//                 Explore Destinations
//               </a>

//               <a
//                 href="/itineraries"
//                 className="rounded-full border border-zinc-600 px-6 py-3 text-center font-semibold text-white"
//               >
//                 View Itineraries
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* <AdPlaceholder /> */}
//       </section>
//     </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  HelpCircle,
  Lightbulb,
  MapPin,
} from "lucide-react";

import { destinations } from "@/data/destinations";
import { blogs } from "@/data/blogs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  return {
    title: blog ? `${blog.title} | IndiaTripGuide` : "Blog Not Found",
    description: blog?.description ?? "India travel blog.",
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    datePublished: blog.date,
    author: {
      "@type": "Organization",
      name: "IndiaTripGuide",
    },
    publisher: {
      "@type": "Organization",
      name: "IndiaTripGuide",
    },
  };

  const blogDestinationMap: Record<string, string> = {
    "best-time-to-visit-udaipur": "udaipur",
    "budget-goa-trip-guide": "goa",
    "best-time-to-visit-jaipur": "jaipur",
    "best-time-to-visit-manali": "manali",
    "best-time-to-visit-rishikesh": "rishikesh",
    "best-time-to-visit-kerala": "kerala",
    "best-time-to-visit-jaisalmer": "jaisalmer",
    "complete-shimla-travel-guide": "shimla",
    "top-hill-stations-in-india": "darjeeling",
    "best-time-to-visit-andaman": "andaman",
    "best-time-to-visit-mumbai": "mumbai",
    "best-time-to-visit-pondicherry": "pondicherry",
    "best-time-to-visit-munnar": "munnar",
    "gujarat-road-trip-travel-guide":
      "gujarat-spiritual-coastal-journey",
    "best-time-to-visit-kashmir": "kashmir",
    "best-time-to-visit-mussoorie": "mussoorie",
    "complete-varanasi-travel-guide": "varanasi",
    "complete-agra-travel-guide": "agra",
    "rajasthan-road-trip-guide": "jodhpur",
  };

  const relatedDestination = destinations.find(
    (destination) => destination.slug === blogDestinationMap[blog.slug]
  );

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative min-h-[560px] overflow-hidden bg-zinc-950 text-white md:min-h-[660px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/75 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[560px] max-w-5xl items-end px-6 pb-12 pt-24 md:min-h-[660px] md:pb-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-orange-200 backdrop-blur-xl">
              <Clock size={16} />
              {blog.readTime} · {blog.date}
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              {blog.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-100 md:text-lg md:leading-8">
              {blog.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 lg:py-20">
         <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: blog.title },
            ]}
          />
        <article className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
            Travel Guide
          </p>

          <div className="mt-6 space-y-6">
            {blog.content.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-zinc-700 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

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
                Quick Travel Tips
              </h2>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              "Always verify attraction timings before visiting.",
              "Book hotels early during peak travel season.",
              "Keep some flexibility in your itinerary.",
            ].map((tip) => (
              <div
                key={tip}
                className="flex gap-3 rounded-3xl border border-orange-100 bg-orange-50 p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <p className="font-semibold leading-7 text-zinc-700">{tip}</p>
              </div>
            ))}
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

          <div className="grid gap-4">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-zinc-950">
                Is this information suitable for first-time travelers?
              </h3>

              <p className="mt-2 leading-7 text-zinc-600">
                Yes. This guide is written especially for first-time visitors.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-zinc-950">
                Can travel costs change?
              </h3>

              <p className="mt-2 leading-7 text-zinc-600">
                Yes. Hotel, transport, and attraction prices may vary by season.
              </p>
            </div>
          </div>
        </section>

        {relatedDestination && (
          <section className="mt-16">
            <Link
              href={`/destinations/${relatedDestination.slug}`}
              className="group block rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl"
            >
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                <MapPin size={16} />
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
          </section>
        )}

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
                  Plan your next India trip smarter.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
                  Explore destinations, itineraries, hotels, and practical
                  travel inspiration.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/destinations"
                  className="rounded-full bg-orange-500 px-7 py-4 text-center font-black text-white transition hover:bg-orange-600"
                >
                  Explore Destinations
                </Link>

                <Link
                  href="/itineraries"
                  className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center font-black text-white transition hover:bg-white/15"
                >
                  View Itineraries
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}