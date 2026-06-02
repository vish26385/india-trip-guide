// import Link from "next/link";
// import { Clock } from "lucide-react";
// import { BlogPost } from "@/types";
// import Image from "next/image";

// export default function BlogCard({ blog }: { blog: BlogPost }) {
//   return (
//     <Link
//       href={`/blog/${blog.slug}`}
//       className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
//     >
//       <div className="h-56 overflow-hidden">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           width={700}
//           height={450}
//           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       <div className="p-5">
//         <p className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
//           <Clock size={16} /> {blog.readTime}
//         </p>

//         <h3 className="text-xl font-bold text-zinc-950">{blog.title}</h3>

//         <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">
//           {blog.description}
//         </p>

//         <p className="mt-5 text-sm font-semibold text-orange-500">
//           Read guide →
//         </p>
//       </div>
//     </Link>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/types";

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl"
    >
      <div className="relative h-56 overflow-hidden sm:h-60">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={520}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-zinc-900 shadow-lg backdrop-blur">
          <Clock size={14} />
          {blog.readTime}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
          Travel Guide
        </p>

        <h3 className="mt-3 text-xl font-black leading-tight text-zinc-950 sm:text-2xl">
          {blog.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600">
          {blog.description}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-orange-600">
          Read Guide
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}