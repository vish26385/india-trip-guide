// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const destinationMap: Record<string, string> = {
//   udaipur: "udaipur",
//   goa: "goa",
//   jaipur: "jaipur",
//   manali: "manali",
//   rishikesh: "rishikesh",
//   kerala: "kerala",
//   jaisalmer: "jaisalmer",
//   shimla: "shimla",
//   darjeeling: "darjeeling",
//   andaman: "andaman",
//   mumbai: "mumbai",
//   pondicherry: "pondicherry",
//   "mount abu": "mount-abu",
//   munnar: "munnar",
//   gujarat: "gujarat-spiritual-coastal-journey",
// };

// export default function DestinationSearch() {
//   const router = useRouter();
//   const [query, setQuery] = useState("");

//   function handleSearch() {
//     const normalized = query.trim().toLowerCase();

//     if (!normalized) return;

//     const slug = destinationMap[normalized];

//     if (slug) {
//       router.push(`/destinations/${slug}`);
//       return;
//     }

//     router.push(`/destinations?search=${encodeURIComponent(normalized)}`);
//   }

//   return (
//     <div className="mt-8 rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-xl">
//       <div className="flex flex-col gap-3 md:flex-row">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleSearch();
//           }}
//           placeholder="Search destinations..."
//           //className="h-14 flex-1 rounded-2xl border border-zinc-200 px-5 outline-none focus:border-orange-400"
//           className="min-h-14 flex-1 rounded-2xl border border-zinc-200 px-5 py-4 text-base outline-none focus:border-orange-400"
//         />

//         <button
//           type="button"
//           onClick={handleSearch}
//           //className="h-14 rounded-2xl bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600"
//           className="min-h-14 rounded-2xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Search } from "lucide-react";

const destinationMap: Record<string, string> = {
  udaipur: "udaipur",
  goa: "goa",
  jaipur: "jaipur",
  manali: "manali",
  rishikesh: "rishikesh",
  kerala: "kerala",
  jaisalmer: "jaisalmer",
  shimla: "shimla",
  darjeeling: "darjeeling",
  andaman: "andaman",
  mumbai: "mumbai",
  pondicherry: "pondicherry",
  "mount abu": "mount-abu",
  munnar: "munnar",
  gujarat: "gujarat-spiritual-coastal-journey",
  jodhpur: "jodhpur",
  kashmir: "kashmir",
  mussoorie: "mussoorie",
  varanasi: "varanasi",
  agra: "agra",
};

const suggestions = ["Goa", "Kashmir", "Jaipur", "Manali", "Udaipur"];

export default function DestinationSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function searchDestination(value?: string) {
    const normalized = (value ?? query).trim().toLowerCase();
    if (!normalized) return;

    const slug = destinationMap[normalized];

    if (slug) {
      router.push(`/destinations/${slug}`);
      return;
    }

    router.push(`/destinations?search=${encodeURIComponent(normalized)}`);
  }

  return (
    <div className="mt-8 rounded-[2rem] border border-white/15 bg-white/95 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={21}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") searchDestination();
            }}
            placeholder="Search Udaipur, Goa, Kashmir..."
            className="h-16 w-full rounded-2xl border border-zinc-200 bg-white pl-14 pr-5 text-base font-semibold text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <button
          type="button"
          onClick={() => searchDestination()}
          className="inline-flex h-16 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-8 text-base font-black text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-600"
        >
          Search <ArrowRight size={18} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 px-1">
        {suggestions.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => searchDestination(item)}
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-bold text-zinc-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
          >
            <MapPin size={13} />
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}