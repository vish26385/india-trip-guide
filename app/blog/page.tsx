import BlogCard from "@/components/cards/BlogCard";
import SectionHeading from "@/components/shared/SectionHeading";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-orange-50 via-white to-zinc-50 px-6 py-20">
        <SectionHeading
          as="h1"
          eyebrow="Travel Blog"
          title="Latest travel guides and tips"
          description="Read destination guides, travel planning advice, budget tips, and seasonal travel recommendations."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* <AdPlaceholder /> */}
      </section>
    </main>
  );
}