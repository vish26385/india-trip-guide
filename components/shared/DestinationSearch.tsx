"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
};

export default function DestinationSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch() {
    const normalized = query.trim().toLowerCase();

    if (!normalized) return;

    const slug = destinationMap[normalized];

    if (slug) {
      router.push(`/destinations/${slug}`);
      return;
    }

    router.push(`/destinations?search=${encodeURIComponent(normalized)}`);
  }

  return (
    <div className="mt-8 rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-xl">
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder="Search destinations..."
          className="h-14 flex-1 rounded-2xl border border-zinc-200 px-5 outline-none focus:border-orange-400"
        />

        <button
          type="button"
          onClick={handleSearch}
          className="h-14 rounded-2xl bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600"
        >
          Search
        </button>
      </div>
    </div>
  );
}