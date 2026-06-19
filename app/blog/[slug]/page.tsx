// import Link from "next/link";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Clock,
//   HelpCircle,
//   Lightbulb,
//   MapPin,
// } from "lucide-react";

// import { destinations } from "@/data/destinations";
// import { blogs } from "@/data/blogs";
// import Breadcrumbs from "@/components/ui/Breadcrumbs";

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

// function getRelatedBlogs(currentSlug: string) {
//   const relatedBlogMap: Record<string, string[]> = {
//     "best-places-to-visit-in-india-in-july": [
//       "best-places-to-visit-in-india-in-august",
//       "best-places-to-visit-in-india-in-september",
//       "cheapest-places-to-travel-in-india",
//     ],
//     "best-places-to-visit-in-india-in-august": [
//       "best-places-to-visit-in-india-in-july",
//       "best-places-to-visit-in-india-in-september",
//       "best-places-to-visit-in-india-in-october",
//     ],
//     "best-places-to-visit-in-india-in-september": [
//       "best-places-to-visit-in-india-in-august",
//       "best-places-to-visit-in-india-in-october",
//       "best-weekend-getaways-in-india",
//     ],
//     "best-places-to-visit-in-india-in-october": [
//       "best-places-to-visit-in-india-in-september",
//       "best-places-to-visit-in-india-in-november",
//       "best-family-vacation-destinations-in-india",
//     ],
//     "best-places-to-visit-in-india-in-november": [
//       "best-places-to-visit-in-india-in-october",
//       "best-places-to-visit-in-india-in-december",
//       "best-weekend-getaways-in-india",
//     ],
//     "best-places-to-visit-in-india-in-december": [
//       "best-places-to-visit-in-india-in-november",
//       "best-weekend-getaways-in-india",
//       "best-family-vacation-destinations-in-india",
//     ],
//     "cheapest-places-to-travel-in-india": [
//       "india-trip-budget-guide",
//       "best-weekend-getaways-in-india",
//       "best-family-vacation-destinations-in-india",
//     ],
//     "complete-leh-ladakh-travel-guide": [
//       "best-time-to-visit-leh-ladakh",
//       "best-places-to-visit-in-india-in-july",
//       "best-places-to-visit-in-india-in-august",
//     ],
//     "best-time-to-visit-leh-ladakh": [
//       "complete-leh-ladakh-travel-guide",
//       "best-places-to-visit-in-india-in-july",
//       "best-places-to-visit-in-india-in-september",
//     ],
//     "best-family-vacation-destinations-in-india": [
//       "best-weekend-getaways-in-india",
//       "cheapest-places-to-travel-in-india",
//       "best-places-to-visit-in-india-in-december",
//     ],
//     "best-weekend-getaways-in-india": [
//       "cheapest-places-to-travel-in-india",
//       "best-family-vacation-destinations-in-india",
//       "best-places-to-visit-in-india-in-november",
//     ],
//   };

//   const slugs = relatedBlogMap[currentSlug] ?? [];

//   return slugs
//     .map((slug) => blogs.find((blog) => blog.slug === slug))
//     .filter((blog): blog is (typeof blogs)[number] => Boolean(blog));
// }

// export default async function BlogDetailPage({ params }: PageProps) {
//   const { slug } = await params;
//   const blog = blogs.find((item) => item.slug === slug);

//   if (!blog) {
//     notFound();
//   }

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     headline: blog.title,
//     description: blog.description,
//     image: blog.image,
//     datePublished: blog.date,
//     author: {
//       "@type": "Organization",
//       name: "IndiaTripGuide",
//     },
//     publisher: {
//       "@type": "Organization",
//       name: "IndiaTripGuide",
//     },
//   };

//   const blogDestinationMap: Record<string, string> = {
//     "best-time-to-visit-udaipur": "udaipur",
//     "budget-goa-trip-guide": "goa",
//     "best-time-to-visit-jaipur": "jaipur",
//     "best-time-to-visit-manali": "manali",
//     "best-time-to-visit-rishikesh": "rishikesh",
//     "best-time-to-visit-kerala": "kerala",
//     "best-time-to-visit-jaisalmer": "jaisalmer",
//     "complete-shimla-travel-guide": "shimla",
//     "top-hill-stations-in-india": "darjeeling",
//     "best-time-to-visit-andaman": "andaman",
//     "best-time-to-visit-mumbai": "mumbai",
//     "best-time-to-visit-pondicherry": "pondicherry",
//     "best-time-to-visit-munnar": "munnar",
//     "gujarat-road-trip-travel-guide":
//       "gujarat-spiritual-coastal-journey",
//     "best-time-to-visit-kashmir": "kashmir",
//     "best-time-to-visit-mussoorie": "mussoorie",
//     "complete-varanasi-travel-guide": "varanasi",
//     "complete-agra-travel-guide": "agra",
//     "rajasthan-road-trip-guide": "jodhpur",
//   };

//   const relatedDestination = destinations.find(
//     (destination) => destination.slug === blogDestinationMap[blog.slug]
//   );

//   const relatedBlogs = getRelatedBlogs(blog.slug);

//   return (
//     <main className="bg-white">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(jsonLd),
//         }}
//       />

//       <section className="relative min-h-[560px] overflow-hidden bg-zinc-950 text-white md:min-h-[660px]">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           fill
//           priority
//           className="object-cover opacity-60"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/75 to-zinc-950/20" />
//         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

//         <div className="relative mx-auto flex min-h-[560px] max-w-5xl items-end px-6 pb-12 pt-24 md:min-h-[660px] md:pb-16">
//           <div>
//             <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-orange-200 backdrop-blur-xl">
//               <Clock size={16} />
//               {blog.readTime} · {blog.date}
//             </p>

//             <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
//               {blog.title}
//             </h1>

//             <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-100 md:text-lg md:leading-8">
//               {blog.description}
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-4xl px-6 py-14 lg:py-20">
//         <Breadcrumbs
//           items={[
//             { label: "Home", href: "/" },
//             { label: "Blog", href: "/blog" },
//             { label: blog.title },
//           ]}
//         />

//         <article className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
//           <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
//             Travel Guide
//           </p>

//           <div className="mt-6 space-y-6">
//             {blog.content.map((paragraph) => (
//               <p
//                 key={paragraph}
//                 className="text-base leading-8 text-zinc-700 md:text-lg"
//               >
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         </article>

//         {relatedBlogs.length > 0 && (
//           <section className="mt-16">
//             <div className="mb-6">
//               <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
//                 Related Travel Guides
//               </p>

//               <h2 className="mt-2 text-3xl font-black text-zinc-950">
//                 Continue planning your India trip
//               </h2>

//               <p className="mt-3 leading-7 text-zinc-600">
//                 Explore more helpful guides related to this topic.
//               </p>
//             </div>

//             <div className="grid gap-4">
//               {relatedBlogs.map((relatedBlog) => (
//                 <Link
//                   key={relatedBlog.slug}
//                   href={`/blog/${relatedBlog.slug}`}
//                   className="group rounded-3xl border border-zinc-200 bg-zinc-50 p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl"
//                 >
//                   <h3 className="text-xl font-black text-zinc-950">
//                     {relatedBlog.title}
//                   </h3>

//                   <p className="mt-2 leading-7 text-zinc-600">
//                     {relatedBlog.description}
//                   </p>

//                   <span className="mt-4 inline-flex items-center gap-2 font-black text-orange-600">
//                     Read Guide
//                     <ArrowRight
//                       size={17}
//                       className="transition group-hover:translate-x-1"
//                     />
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}

//         <section className="mt-16">
//           <div className="mb-6 flex items-center gap-3">
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
//               <Lightbulb size={24} />
//             </div>

//             <div>
//               <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
//                 Smart Advice
//               </p>
//               <h2 className="text-3xl font-black text-zinc-950">
//                 Quick Travel Tips
//               </h2>
//             </div>
//           </div>

//           <div className="grid gap-4">
//             {[
//               "Always verify attraction timings before visiting.",
//               "Book hotels early during peak travel season.",
//               "Keep some flexibility in your itinerary.",
//             ].map((tip) => (
//               <div
//                 key={tip}
//                 className="flex gap-3 rounded-3xl border border-orange-100 bg-orange-50 p-5"
//               >
//                 <CheckCircle2
//                   size={20}
//                   className="mt-0.5 shrink-0 text-orange-500"
//                 />
//                 <p className="font-semibold leading-7 text-zinc-700">{tip}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="mt-16">
//           <div className="mb-6 flex items-center gap-3">
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
//               <HelpCircle size={24} />
//             </div>

//             <div>
//               <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
//                 Questions
//               </p>
//               <h2 className="text-3xl font-black text-zinc-950">
//                 Frequently Asked Questions
//               </h2>
//             </div>
//           </div>

//           <div className="grid gap-4">
//             <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
//               <h3 className="text-lg font-black text-zinc-950">
//                 Is this information suitable for first-time travelers?
//               </h3>

//               <p className="mt-2 leading-7 text-zinc-600">
//                 Yes. This guide is written especially for first-time visitors.
//               </p>
//             </div>

//             <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
//               <h3 className="text-lg font-black text-zinc-950">
//                 Can travel costs change?
//               </h3>

//               <p className="mt-2 leading-7 text-zinc-600">
//                 Yes. Hotel, transport, and attraction prices may vary by season.
//               </p>
//             </div>
//           </div>
//         </section>

//         {relatedDestination && (
//           <section className="mt-16">
//             <Link
//               href={`/destinations/${relatedDestination.slug}`}
//               className="group block rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl"
//             >
//               <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
//                 <MapPin size={16} />
//                 Explore Destination
//               </p>

//               <h3 className="mt-3 text-2xl font-black text-zinc-950">
//                 {relatedDestination.name}
//               </h3>

//               <p className="mt-3 leading-7 text-zinc-600">
//                 {relatedDestination.description}
//               </p>

//               <span className="mt-5 inline-flex items-center gap-2 font-black text-orange-600">
//                 View Destination
//                 <ArrowRight
//                   size={17}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </span>
//             </Link>
//           </section>
//         )}

//         <section className="mt-16">
//           <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-8 text-white shadow-2xl md:p-12">
//             <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
//             <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

//             <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
//               <div>
//                 <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
//                   Ready to plan?
//                 </p>

//                 <h2 className="mt-3 text-3xl font-black md:text-4xl">
//                   Plan your next India trip smarter.
//                 </h2>

//                 <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
//                   Explore destinations, itineraries, hotels, and practical
//                   travel inspiration.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
//                 <Link
//                   href="/destinations"
//                   className="rounded-full bg-orange-500 px-7 py-4 text-center font-black text-white transition hover:bg-orange-600"
//                 >
//                   Explore Destinations
//                 </Link>

//                 <Link
//                   href="/itineraries"
//                   className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center font-black text-white transition hover:bg-white/15"
//                 >
//                   View Itineraries
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
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
  Plane,
  Train,
  Car,
  Hotel,
  IndianRupee,
  CalendarDays,
  Backpack,
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

function getRelatedBlogs(currentSlug: string) {
  const relatedBlogMap: Record<string, string[]> = {
    "best-time-to-visit-udaipur": [
      "best-time-to-visit-jaipur",
      "rajasthan-road-trip-guide",
      "best-places-to-visit-in-india-in-november",
    ],
    "budget-goa-trip-guide": [
      "best-time-to-visit-goa",
      "cheapest-places-to-travel-in-india",
      "best-weekend-getaways-in-india",
    ],
    "best-time-to-visit-jaipur": [
      "best-time-to-visit-udaipur",
      "rajasthan-road-trip-guide",
      "best-places-to-visit-in-india-in-november",
    ],
    "best-time-to-visit-manali": [
      "top-hill-stations-in-india",
      "best-honeymoon-destinations-in-india",
      "complete-leh-ladakh-travel-guide",
    ],
    "best-time-to-visit-rishikesh": [
      "best-weekend-getaways-in-india",
      "cheapest-places-to-travel-in-india",
      "best-places-to-visit-in-india-in-october",
    ],
    "best-time-to-visit-kerala": [
      "best-time-to-visit-munnar",
      "best-family-vacation-destinations-in-india",
      "best-honeymoon-destinations-in-india",
    ],
    "best-time-to-visit-jaisalmer": [
      "rajasthan-road-trip-guide",
      "best-time-to-visit-jaipur",
      "best-places-to-visit-in-india-in-december",
    ],
    "complete-shimla-travel-guide": [
      "best-time-to-visit-manali",
      "top-hill-stations-in-india",
      "best-family-vacation-destinations-in-india",
    ],
    "top-hill-stations-in-india": [
      "best-time-to-visit-manali",
      "best-time-to-visit-munnar",
      "best-time-to-visit-ooty",
    ],
    "best-time-to-visit-andaman": [
      "best-honeymoon-destinations-in-india",
      "best-family-vacation-destinations-in-india",
      "best-places-to-visit-in-india-in-december",
    ],
    "best-time-to-visit-mumbai": [
      "best-weekend-getaways-in-india",
      "best-time-to-visit-mahabaleshwar",
      "cheapest-places-to-travel-in-india",
    ],
    "best-time-to-visit-pondicherry": [
      "best-weekend-getaways-in-india",
      "cheapest-places-to-travel-in-india",
      "best-family-vacation-destinations-in-india",
    ],
    "best-time-to-visit-munnar": [
      "best-time-to-visit-kerala",
      "top-hill-stations-in-india",
      "best-honeymoon-destinations-in-india",
    ],
    "gujarat-road-trip-travel-guide": [
      "best-time-to-visit-dwarka",
      "best-time-to-visit-somnath",
      "complete-gir-national-park-travel-guide",
    ],
    "best-time-to-visit-kashmir": [
      "best-honeymoon-destinations-in-india",
      "best-places-to-visit-in-india-in-december",
      "complete-leh-ladakh-travel-guide",
    ],
    "best-time-to-visit-mussoorie": [
      "top-hill-stations-in-india",
      "best-weekend-getaways-in-india",
      "best-family-vacation-destinations-in-india",
    ],
    "complete-varanasi-travel-guide": [
      "india-trip-budget-guide",
      "cheapest-places-to-travel-in-india",
      "best-places-to-visit-in-india-in-november",
    ],
    "complete-agra-travel-guide": [
      "rajasthan-road-trip-guide",
      "best-time-to-visit-jaipur",
      "complete-varanasi-travel-guide",
    ],
    "rajasthan-road-trip-guide": [
      "best-time-to-visit-jaipur",
      "best-time-to-visit-jaisalmer",
      "best-time-to-visit-udaipur",
    ],
    "best-places-to-visit-in-india-in-july": [
      "best-places-to-visit-in-india-in-august",
      "best-places-to-visit-in-india-in-september",
      "best-monsoon-destinations-in-india",
    ],
    "best-places-to-visit-in-india-in-august": [
      "best-places-to-visit-in-india-in-july",
      "best-places-to-visit-in-india-in-september",
      "best-monsoon-destinations-in-india",
    ],
    "best-places-to-visit-in-india-in-september": [
      "best-places-to-visit-in-india-in-august",
      "best-places-to-visit-in-india-in-october",
      "best-monsoon-destinations-in-india",
    ],
    "best-places-to-visit-in-india-in-october": [
      "best-places-to-visit-in-india-in-september",
      "best-places-to-visit-in-india-in-november",
      "best-family-vacation-destinations-in-india",
    ],
    "best-places-to-visit-in-india-in-november": [
      "best-places-to-visit-in-india-in-october",
      "best-places-to-visit-in-india-in-december",
      "best-weekend-getaways-in-india",
    ],
    "best-places-to-visit-in-india-in-december": [
      "best-places-to-visit-in-india-in-november",
      "best-weekend-getaways-in-india",
      "best-family-vacation-destinations-in-india",
    ],
    "cheapest-places-to-travel-in-india": [
      "india-trip-budget-guide",
      "best-weekend-getaways-in-india",
      "best-family-vacation-destinations-in-india",
    ],
    "complete-leh-ladakh-travel-guide": [
      "best-time-to-visit-leh-ladakh",
      "complete-spiti-valley-travel-guide",
      "best-time-to-visit-kashmir",
    ],
    "best-time-to-visit-leh-ladakh": [
      "complete-leh-ladakh-travel-guide",
      "complete-spiti-valley-travel-guide",
      "top-hill-stations-in-india",
    ],
    "best-family-vacation-destinations-in-india": [
      "best-weekend-getaways-in-india",
      "cheapest-places-to-travel-in-india",
      "best-places-to-visit-in-india-in-december",
    ],
    "best-weekend-getaways-in-india": [
      "cheapest-places-to-travel-in-india",
      "best-family-vacation-destinations-in-india",
      "best-places-to-visit-in-india-in-november",
    ],
    "best-time-to-visit-coorg": [
      "top-hill-stations-in-india",
      "best-weekend-getaways-in-india",
      "best-monsoon-destinations-in-india",
    ],
    "best-time-to-visit-ooty": [
      "top-hill-stations-in-india",
      "best-family-vacation-destinations-in-india",
      "best-honeymoon-destinations-in-india",
    ],
    "best-time-to-visit-diu": [
      "gujarat-road-trip-travel-guide",
      "best-time-to-visit-somnath",
      "best-time-to-visit-dwarka",
    ],
    "best-time-to-visit-dwarka": [
      "gujarat-road-trip-travel-guide",
      "best-time-to-visit-somnath",
      "best-time-to-visit-diu",
    ],
    "best-time-to-visit-somnath": [
      "gujarat-road-trip-travel-guide",
      "best-time-to-visit-dwarka",
      "complete-gir-national-park-travel-guide",
    ],
    "best-time-to-visit-mahabaleshwar": [
      "best-weekend-getaways-in-india",
      "best-monsoon-destinations-in-india",
      "top-hill-stations-in-india",
    ],
    "complete-spiti-valley-travel-guide": [
      "complete-leh-ladakh-travel-guide",
      "complete-kasol-travel-guide",
      "top-hill-stations-in-india",
    ],
    "complete-kasol-travel-guide": [
      "complete-spiti-valley-travel-guide",
      "best-weekend-getaways-in-india",
      "cheapest-places-to-travel-in-india",
    ],
    "complete-gir-national-park-travel-guide": [
      "gujarat-road-trip-travel-guide",
      "best-time-to-visit-somnath",
      "best-time-to-visit-diu",
    ],
  };

  const slugs = relatedBlogMap[currentSlug] ?? [];

  return slugs
    .map((slug) => blogs.find((blog) => blog.slug === slug))
    .filter((blog): blog is (typeof blogs)[number] => Boolean(blog));
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
    "gujarat-road-trip-travel-guide": "gujarat-spiritual-coastal-journey",
    "best-time-to-visit-kashmir": "kashmir",
    "best-time-to-visit-mussoorie": "mussoorie",
    "complete-varanasi-travel-guide": "varanasi",
    "complete-agra-travel-guide": "agra",
    "rajasthan-road-trip-guide": "jodhpur",
    "complete-leh-ladakh-travel-guide": "leh",
    "best-time-to-visit-leh-ladakh": "leh",
    "best-time-to-visit-coorg": "coorg",
    "best-time-to-visit-ooty": "ooty",
    "best-time-to-visit-diu": "diu",
    "best-time-to-visit-dwarka": "dwarka",
    "best-time-to-visit-somnath": "somnath",
    "best-time-to-visit-mahabaleshwar": "mahabaleshwar",
    "complete-spiti-valley-travel-guide": "spiti-valley",
    "complete-kasol-travel-guide": "kasol",
    "complete-gir-national-park-travel-guide": "gir-national-park",
    "best-monsoon-destinations-in-india": "munnar",
    "best-honeymoon-destinations-in-india": "kashmir",
    "india-trip-budget-guide": "mussoorie",
    "best-places-to-visit-in-india-in-july": "mahabaleshwar",
    "best-places-to-visit-in-india-in-august": "coorg",
    "best-places-to-visit-in-india-in-september": "udaipur",
    "best-places-to-visit-in-india-in-october": "rishikesh",
    "best-places-to-visit-in-india-in-november": "kerala",
    "best-places-to-visit-in-india-in-december": "goa",
    "cheapest-places-to-travel-in-india": "mount-abu",
    "best-family-vacation-destinations-in-india": "manali",
    "best-weekend-getaways-in-india": "mussoorie",
  };

  const relatedDestination = destinations.find(
    (destination) => destination.slug === blogDestinationMap[blog.slug]
  );

  const relatedBlogs = getRelatedBlogs(blog.slug);

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
              {blog.readTime} · Last updated {blog.date}
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
            {blog.overview.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-zinc-700 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {blog.weather && (
          <section className="mt-12 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <CalendarDays size={24} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Weather
                </p>
                <h2 className="text-3xl font-black text-zinc-950">
                  Weather overview
                </h2>
              </div>
            </div>

            <p className="leading-8 text-zinc-700">{blog.weather}</p>
          </section>
        )}

        {(blog.winter || blog.summer || blog.monsoon) && (
          <section className="mt-12">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Seasons
              </p>
              <h2 className="mt-2 text-3xl font-black text-zinc-950">
                Season-wise travel guide
              </h2>
            </div>

            <div className="grid gap-5">
              {blog.winter && (
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-black text-zinc-950">Winter</h3>
                  <p className="mt-3 leading-8 text-zinc-700">{blog.winter}</p>
                </div>
              )}

              {blog.summer && (
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-black text-zinc-950">Summer</h3>
                  <p className="mt-3 leading-8 text-zinc-700">{blog.summer}</p>
                </div>
              )}

              {blog.monsoon && (
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-black text-zinc-950">Monsoon</h3>
                  <p className="mt-3 leading-8 text-zinc-700">{blog.monsoon}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {blog.monthWiseBreakdown && (
          <section className="mt-12">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Monthly Planner
              </p>
              <h2 className="mt-2 text-3xl font-black text-zinc-950">
                Month-wise breakdown
              </h2>
            </div>

            <div className="grid gap-5">
              {blog.monthWiseBreakdown.map((item) => (
                <div
                  key={item.month}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-black text-zinc-950">
                    {item.month}
                  </h3>

                  <p className="mt-3 font-bold text-orange-600">
                    {item.condition}
                  </p>

                  <p className="mt-3 leading-7 text-zinc-700">
                    {item.travelAdvice}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {blog.howToReach && (
          <section className="mt-12 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Travel Access
              </p>
              <h2 className="mt-2 text-3xl font-black text-zinc-950">
                How to reach
              </h2>
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                <Plane className="mb-3 text-orange-500" size={24} />
                <h3 className="font-black text-zinc-950">By Air</h3>
                <p className="mt-2 leading-7 text-zinc-700">
                  {blog.howToReach.byAir}
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                <Car className="mb-3 text-orange-500" size={24} />
                <h3 className="font-black text-zinc-950">By Road</h3>
                <p className="mt-2 leading-7 text-zinc-700">
                  {blog.howToReach.byRoad}
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                <Train className="mb-3 text-orange-500" size={24} />
                <h3 className="font-black text-zinc-950">By Train</h3>
                <p className="mt-2 leading-7 text-zinc-700">
                  {blog.howToReach.byTrain}
                </p>
              </div>
            </div>
          </section>
        )}

        {blog.nearbyPlaces && (
          <section className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <MapPin size={24} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Places
                </p>
                <h2 className="text-3xl font-black text-zinc-950">
                  Places covered
                </h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {blog.nearbyPlaces.map((place) => (
                <div
                  key={place}
                  className="rounded-3xl border border-zinc-200 bg-white p-5 font-bold text-zinc-900 shadow-sm"
                >
                  {place}
                </div>
              ))}
            </div>
          </section>
        )}

        {blog.whereToStay && (
          <section className="mt-12 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Hotel size={24} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Stay Guide
                </p>
                <h2 className="text-3xl font-black text-zinc-950">
                  Where to stay
                </h2>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="font-black text-zinc-950">Budget</h3>
                <p className="mt-2 leading-7 text-zinc-700">
                  {blog.whereToStay.budget}
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="font-black text-zinc-950">Mid Range</h3>
                <p className="mt-2 leading-7 text-zinc-700">
                  {blog.whereToStay.midRange}
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="font-black text-zinc-950">Luxury</h3>
                <p className="mt-2 leading-7 text-zinc-700">
                  {blog.whereToStay.luxury}
                </p>
              </div>
            </div>
          </section>
        )}

        {blog.budgetBreakdown && (
          <section className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <IndianRupee size={24} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Trip Cost
                </p>
                <h2 className="text-3xl font-black text-zinc-950">
                  Budget breakdown
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5">
                <h3 className="font-black text-zinc-950">Backpacker</h3>
                <p className="mt-2 font-bold text-orange-700">
                  {blog.budgetBreakdown.backpacker}
                </p>
              </div>

              <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5">
                <h3 className="font-black text-zinc-950">Mid Range</h3>
                <p className="mt-2 font-bold text-orange-700">
                  {blog.budgetBreakdown.midRange}
                </p>
              </div>

              <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5">
                <h3 className="font-black text-zinc-950">Luxury</h3>
                <p className="mt-2 font-bold text-orange-700">
                  {blog.budgetBreakdown.luxury}
                </p>
              </div>
            </div>
          </section>
        )}

        {blog.idealDuration && (
          <section className="mt-12 rounded-[2rem] border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Clock className="text-orange-300" size={24} />
              <h2 className="text-3xl font-black">Ideal duration</h2>
            </div>

            <p className="leading-8 text-zinc-300">{blog.idealDuration}</p>
          </section>
        )}

        {blog.whatToPack && (
          <section className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Backpack size={24} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Packing List
                </p>
                <h2 className="text-3xl font-black text-zinc-950">
                  What to pack
                </h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {blog.whatToPack.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-3xl border border-orange-100 bg-orange-50 p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />
                  <p className="font-semibold leading-7 text-zinc-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {relatedBlogs.length > 0 && (
          <section className="mt-16">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Related Travel Guides
              </p>

              <h2 className="mt-2 text-3xl font-black text-zinc-950">
                Continue planning your India trip
              </h2>

              <p className="mt-3 leading-7 text-zinc-600">
                Explore more helpful guides related to this topic.
              </p>
            </div>

            <div className="grid gap-4">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blog/${relatedBlog.slug}`}
                  className="group rounded-3xl border border-zinc-200 bg-zinc-50 p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-xl"
                >
                  <h3 className="text-xl font-black text-zinc-950">
                    {relatedBlog.title}
                  </h3>

                  <p className="mt-2 leading-7 text-zinc-600">
                    {relatedBlog.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 font-black text-orange-600">
                    Read Guide
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

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
            {blog.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-black text-zinc-950">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">{faq.answer}</p>
              </div>
            ))}
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