import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import Image from "next/image";

import AdPlaceholder from "@/components/ads/AdPlaceholder";
import { blogs } from "@/data/blogs";

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

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
          <Clock size={16} />
          {blog.readTime} · {blog.date}
        </p>

        <h1 className="text-4xl font-black tracking-tight text-zinc-950 md:text-6xl">
          {blog.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-zinc-600">
          {blog.description}
        </p>

        <div className="relative mt-10 h-[420px] overflow-hidden rounded-[2rem]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* <AdPlaceholder /> */}

        <article className="prose prose-zinc mt-10 max-w-none">
          {blog.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-zinc-950">
            Quick Travel Tips
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-orange-50 p-5">
              Always verify attraction timings before visiting.
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              Book hotels early during peak travel season.
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              Keep some flexibility in your itinerary.
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
                Is this information suitable for first-time travelers?
              </h3>

              <p className="mt-2 text-zinc-600">
                Yes. This guide is written especially for first-time visitors.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-bold">
                Can travel costs change?
              </h3>

              <p className="mt-2 text-zinc-600">
                Yes. Hotel, transport, and attraction prices may vary by season.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-[2rem] bg-zinc-950 p-8 text-white">
            <h2 className="text-3xl font-black">
              Ready to plan your trip?
            </h2>

            <p className="mt-4 text-zinc-300">
              Explore destinations, itineraries, hotels, and travel inspiration.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/destinations"
                className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white"
              >
                Explore Destinations
              </a>

              <a
                href="/itineraries"
                className="rounded-full border border-zinc-600 px-6 py-3 text-center font-semibold text-white"
              >
                View Itineraries
              </a>
            </div>
          </div>
        </section>

        {/* <AdPlaceholder /> */}
      </section>
    </main>
  );
}