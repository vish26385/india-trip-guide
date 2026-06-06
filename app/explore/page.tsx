"use client";

import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Loader2,
  MapPin,
  Search,
  Sparkles,
  Wallet,
  CalendarDays,
} from "lucide-react";
import {
  ExploreDestinationGuide,
  exploreDestination,
  searchDestinationSuggestions
} from "@/lib/exploreDestinationApi";

import { useEffect, useRef, useState } from "react";

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [guide, setGuide] = useState<ExploreDestinationGuide | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const suppressAutocompleteRef = useRef("");

// useEffect(() => {
//   const value = query.trim();

//   if (
//     selectedSuggestion &&
//     selectedSuggestion.toLowerCase() === value.toLowerCase()
//   ) {
//     setShowSuggestions(false);
//     setSuggestions([]);
//     return;
//   }

//   if (value.length < 2) {
//     setSuggestions([]);
//     setShowSuggestions(false);
//     return;
//   }

//   const timer = setTimeout(async () => {
//   const result = await searchDestinationSuggestions(value);    

//     setSuggestions(result);
//     setShowSuggestions(result.length > 0);
//     setActiveSuggestionIndex(-1);
//   }, 250);

//   return () => clearTimeout(timer);
// }, [query, selectedSuggestion]);

useEffect(() => {
  const value = query.trim();

  if (
    suppressAutocompleteRef.current &&
    suppressAutocompleteRef.current.toLowerCase() === value.toLowerCase()
  ) {
    setShowSuggestions(false);
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    return;
  }

  if (
    selectedSuggestion &&
    selectedSuggestion.toLowerCase() === value.toLowerCase()
  ) {
    setShowSuggestions(false);
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    return;
  }

  if (value.length < 2) {
    setSuggestions([]);
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
    return;
  }

  const timer = setTimeout(async () => {
    const result = await searchDestinationSuggestions(value);

    if (
      suppressAutocompleteRef.current &&
      suppressAutocompleteRef.current.toLowerCase() === value.toLowerCase()
    ) {
      setShowSuggestions(false);
      setSuggestions([]);
      setActiveSuggestionIndex(-1);
      return;
    }

    setSuggestions(result);
    setShowSuggestions(result.length > 0);
    setActiveSuggestionIndex(-1);
  }, 250);

  return () => clearTimeout(timer);
}, [query, selectedSuggestion]);

  async function handleExplore(value?: string) {
    setShowSuggestions(false);
    setSuggestions([]);

    const destination = (value ?? query).trim();

    if (!destination) return;

    try {
      setLoading(true);
      setError("");
      setGuide(null);

      const result = await exploreDestination(destination);
      setGuide(result);
    } catch (err: any) {
    setError(
        err.message ||
        "Please enter a valid destination in India."
    );
    } finally {
      setLoading(false);
    }
  }

  const popularDestinations = ["Leh", "Hampi", "Coorg", "Auli", "Gokarna"];

  return (
    <main className="bg-white">
      <section className="relative overflow-visible bg-zinc-950 text-white">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-orange-200 backdrop-blur-xl">
              <Sparkles size={16} />
              Explore Any Destination in India
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              Search any Indian destination instantly.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
              Enter any place in India and get a smart travel guide with
              overview, best time, budget, highlights, things to do, tips, and
              FAQs.
            </p>

            <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-white/15 bg-white/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search
                    size={21}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                    <input
                      value={query}
                      // onChange={(e) => {
                      //   setQuery(e.target.value);
                      //   setSelectedSuggestion(null);
                      // }}
                      onChange={(e) => {
                        suppressAutocompleteRef.current = "";
                        setQuery(e.target.value);
                        setSelectedSuggestion(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                          e.preventDefault();

                          setActiveSuggestionIndex((prev) =>
                            suggestions.length === 0
                              ? -1
                              : prev < 0
                                ? 0
                                : Math.min(prev + 1, suggestions.length - 1)
                          );

                          return;
                        }

                        if (e.key === "ArrowUp") {
                          e.preventDefault();

                          setActiveSuggestionIndex((prev) =>
                            suggestions.length === 0
                              ? 0
                              : Math.max(prev - 1, 0)
                          );

                          return;
                        }

                        if (e.key === "Enter") {
                          e.preventDefault();

                          if (
                            showSuggestions &&
                            suggestions.length > 0 &&
                            activeSuggestionIndex >= 0
                          ) {
                            const selected = suggestions[activeSuggestionIndex];

                            setQuery(selected);
                            setSelectedSuggestion(selected);
                            setShowSuggestions(false);
                            setSuggestions([]);

                            handleExplore(selected);
                            return;
                          }

                          setShowSuggestions(false);
                          setSuggestions([]);
                          handleExplore();
                        }

                        if (e.key === "Escape") {
                          setShowSuggestions(false);
                          setSuggestions([]);
                        }
                      }}

                      placeholder="Search Leh, Hampi, Coorg..."
                      className="h-16 w-full rounded-2xl border border-zinc-200 bg-white pl-14 pr-5 text-base font-semibold text-zinc-950 outline-none placeholder:text-zinc-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />

                    {showSuggestions && suggestions.length > 0 && (
                      <div className="absolute left-0 right-0 top-[72px] z-50 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
                        {suggestions.map((item, index) => (
                          <button
                            key={item}
                            type="button"
                            onMouseEnter={() => setActiveSuggestionIndex(index)}
                            onClick={() => {
                              setQuery(item);
                              setSelectedSuggestion(item);

                              setShowSuggestions(false);
                              setSuggestions([]);

                              handleExplore(item);
                            }}
                            //className="flex w-full items-center gap-3 px-5 py-4 text-left text-sm font-bold text-zinc-800 transition hover:bg-orange-50 hover:text-orange-600"
                            className={`flex w-full items-center gap-3 px-5 py-4 text-left text-sm font-bold transition ${
                              index === activeSuggestionIndex
                                ? "bg-orange-50 text-orange-600"
                                : "text-zinc-800 hover:bg-orange-50 hover:text-orange-600"
                            }`}
                          >
                            <MapPin size={16} className="text-orange-500" />
                            {item}
                          </button>
                        ))}
                      </div>
                    )}

                </div>

                <button
                  type="button"
                  onClick={() => {
                    setShowSuggestions(false);
                    setSuggestions([]);
                    handleExplore();
                  }}
                  disabled={loading}
                  className="inline-flex h-16 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-8 text-base font-black text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Exploring
                    </>
                  ) : (
                    <>
                      Explore <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2 px-1">
                {popularDestinations.map((item) => (
                  <button
                    key={item}
                    type="button"
                    // onClick={() => {
                    //   setQuery(item);
                    //   setSelectedSuggestion(item);
                    //   setShowSuggestions(false);
                    //   setSuggestions([]);
                    //   setActiveSuggestionIndex(-1);
                    //   handleExplore(item);
                    // }}
                    onClick={() => {
                      suppressAutocompleteRef.current = item;

                      setQuery(item);
                      setSelectedSuggestion(item);
                      setShowSuggestions(false);
                      setSuggestions([]);
                      setActiveSuggestionIndex(-1);

                      handleExplore(item);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-bold text-zinc-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <MapPin size={13} />
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {error}
              </p>
            )}
          </div>
        </div>
      </section>

      {!guide && !loading && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cache-first system",
                text: "Repeated destinations are served from database cache to reduce AI cost.",
              },
              {
                title: "India-focused travel info",
                text: "Get best time, estimated budget, attractions, tips and FAQs.",
              },
              {
                title: "Built for future planner",
                text: "This becomes the base for AI trip planning and personalized itineraries.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <Sparkles size={22} />
                </div>

                <h3 className="text-xl font-black text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {loading && (
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 text-center">
            <Loader2 className="mx-auto h-10 w-10 animate-spin text-orange-500" />
            <h2 className="mt-5 text-2xl font-black text-zinc-950">
              Creating your destination guide...
            </h2>
            <p className="mt-3 text-zinc-600">
              First-time searches may take a few seconds. After that, this guide
              is cached for faster future access.
            </p>
          </div>
        </section>
      )}

      {guide && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600">
              <MapPin size={16} />
              {guide.state}
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 md:text-6xl">
              {guide.name}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
              {guide.overview}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <CalendarDays className="mb-4 text-orange-500" />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                Best Time
              </p>
              <p className="mt-2 text-xl font-black text-zinc-950">
                {guide.bestTime}
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <Wallet className="mb-4 text-orange-500" />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                Budget
              </p>
              <p className="mt-2 text-xl font-black text-zinc-950">
                {guide.budget}
              </p>
            </div>
          </div>

          <section className="mt-14">
            <h3 className="text-3xl font-black text-zinc-950">
              Top Highlights
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {guide.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mb-4 text-orange-500" size={22} />
                  <p className="font-black text-zinc-900">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl font-black text-zinc-950">
              Things To Do
            </h3>

            <div className="mt-6 space-y-4">
              {guide.thingsToDo.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-3xl border border-zinc-200 bg-zinc-50 p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />
                  <p className="font-medium leading-7 text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h3 className="text-3xl font-black text-zinc-950">
              Travel Tips
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {guide.travelTips.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-orange-100 bg-orange-50 p-5"
                >
                  <p className="font-semibold leading-7 text-zinc-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <HelpCircle size={24} />
              </div>

              <h3 className="text-3xl font-black text-zinc-950">FAQs</h3>
            </div>

            <div className="space-y-4">
              {guide.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <h4 className="text-lg font-black text-zinc-950">
                    {faq.question}
                  </h4>
                  <p className="mt-2 leading-7 text-zinc-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      )}
    </main>
  );
}