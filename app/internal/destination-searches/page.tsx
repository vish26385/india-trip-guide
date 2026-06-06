"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import {
  DestinationSearchLogItem,
  getTopFailedDestinationSearches,
  ignoreDestinationSearchLog,
  markDestinationSearchLogAdded,
} from "@/lib/internalDestinationSearchLogsApi";

export default function InternalDestinationSearchesPage() {
  const [key, setKey] = useState("");

  const [items, setItems] = useState<DestinationSearchLogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadData() {
    try {
      setLoading(true);
      setError("");

      const data = await getTopFailedDestinationSearches(key);
      setItems(data);
    } catch {
      setError("Unauthorized or failed to load internal report.");
    } finally {
      setLoading(false);
    }
  }

useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  setKey(params.get("key") ?? "");
}, []);

  useEffect(() => {
    if (!key) {
      setError("Missing internal report key.");
      setLoading(false);
      return;
    }

    loadData();
  }, [key]);

  async function handleIgnore(id: number) {
    await ignoreDestinationSearchLog(id, key);
    await loadData();
  }

  async function handleMarkAdded(id: number) {
    await markDestinationSearchLogAdded(id, key);
    await loadData();
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-10">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] bg-zinc-950 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Internal Report
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-5xl">
            Missing Destination Searches
          </h1>

          <p className="mt-4 text-zinc-300">
            Review failed searches. Add real destinations manually, ignore fake
            or useless searches.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-xl">
          {loading && (
            <div className="p-8 text-center font-bold text-zinc-600">
              Loading...
            </div>
          )}

          {error && (
            <div className="p-8 text-center font-bold text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && items.length === 0 && (
            <div className="p-8 text-center font-bold text-zinc-600">
              No failed searches found.
            </div>
          )}

          {!loading && !error && items.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left">
                <thead className="bg-zinc-100 text-sm text-zinc-600">
                  <tr>
                    <th className="px-5 py-4">Search</th>
                    <th className="px-5 py-4">Slug</th>
                    <th className="px-5 py-4">Count</th>
                    <th className="px-5 py-4">Last Search</th>
                    <th className="px-5 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-zinc-100">
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-5 py-4 font-bold text-zinc-950">
                        {item.searchText}
                      </td>

                      <td className="px-5 py-4 text-sm text-zinc-600">
                        {item.searchSlug}
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-black text-orange-600">
                          {item.searchCount}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-zinc-600">
                        {new Date(item.lastSearchedAtUtc).toLocaleString()}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleMarkAdded(item.id)}
                            className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-bold text-white hover:bg-orange-500"
                          >
                            Mark Added
                          </button>

                          <button
                            onClick={() => handleIgnore(item.id)}
                            className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-zinc-100"
                          >
                            Ignore
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}