import Link from "next/link";
import { Clock } from "lucide-react";
import { BlogPost } from "@/types";
import Image from "next/image";

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="h-56 overflow-hidden">
        {/* <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        /> */}
        <Image
          src={blog.image}
          alt={blog.title}
          width={700}
          height={450}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
          <Clock size={16} /> {blog.readTime}
        </p>

        <h3 className="text-xl font-bold text-zinc-950">{blog.title}</h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">
          {blog.description}
        </p>

        <p className="mt-5 text-sm font-semibold text-orange-500">
          Read guide →
        </p>
      </div>
    </Link>
  );
}