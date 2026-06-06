"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  IndianRupee,
  Loader2,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import {
  createTripPlan,
  TripPlanResponse,
} from "@/lib/tripPlannerApi";
import { searchDestinationSuggestions } from "@/lib/exploreDestinationApi";

const popularDestinations = ["Munnar", "Goa", "Kashmir", "Manali", "Udaipur"];

const budgetOptions = [
  "₹10,000",
  "₹20,000",
  "₹30,000",
  "₹50,000",
  "₹75,000",
  "₹1,00,000",
];

const travelStyles = [
  "Solo",
  "Couple",
  "Family",
  "Friends",
  "Luxury",
  "Budget",
];

export default function TripPlannerPage() {
  const [destination, setDestination] = useState("");
  
  const [budget, setBudget] = useState("25000");
  const [travelStyle, setTravelStyle] = useState("Couple");

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(
    null
  );
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [plan, setPlan] = useState<TripPlanResponse | null>(null);
  const [days, setDays] = useState("5");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const destinationFromUrl =
    params.get("destination");

  const daysFromUrl =
    params.get("days");

  if (destinationFromUrl) {
    setDestination(destinationFromUrl);
  }

  if (daysFromUrl) {
    setDays(daysFromUrl);
  }
}, []);

  useEffect(() => {
    const value = destination.trim();

    if (
      selectedSuggestion &&
      selectedSuggestion.toLowerCase() === value.toLowerCase()
    ) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    if (value.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(async () => {
      const result = await searchDestinationSuggestions(value);
      setSuggestions(result);
      setShowSuggestions(result.length > 0);
      setActiveSuggestionIndex(-1);
    }, 250);

    return () => clearTimeout(timer);
  }, [destination, selectedSuggestion]);

  async function handleGenerate(value?: string) {
    const finalDestination = (value ?? destination).trim();

    setShowSuggestions(false);
    setSuggestions([]);
    setError("");

    if (!finalDestination) {
      setError("Please enter a destination.");
      return;
    }

    try {
      setLoading(true);
      setPlan(null);

      const result = await createTripPlan({
        destination: finalDestination,
        days: Number(days),
        budget,
        travelStyle,
      });

      setPlan(result);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-visible bg-zinc-950 px-5 py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-orange-300">
              <Sparkles size={16} />
              AI Trip Planner
            </p>

            <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              Plan your India trip in seconds
            </h1>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Choose your destination, budget, days, and travel style. Get a
              practical day-wise itinerary instantly.
            </p>
          </div>

          <div className="relative z-50 mt-10 rounded-[2rem] border border-white/10 bg-white p-4 text-zinc-950 shadow-2xl md:p-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="relative md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-zinc-700">
                  Destination
                </label>

                <div className="relative">
                  <MapPin
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value);
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
                            ? -1
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
                          const selected =
                            suggestions[activeSuggestionIndex];

                          setDestination(selected);
                          setSelectedSuggestion(selected);
                          setShowSuggestions(false);
                          setSuggestions([]);
                          return;
                        }

                        handleGenerate();
                      }

                      if (e.key === "Escape") {
                        setShowSuggestions(false);
                        setSuggestions([]);
                      }
                    }}
                    placeholder="Search Munnar, Goa, Kashmir..."
                    className="h-14 w-full rounded-2xl border border-zinc-200 bg-white pl-12 pr-4 text-base font-semibold outline-none focus:border-orange-400"
                  />

                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute left-0 right-0 top-[62px] z-[9999] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
                      {suggestions.map((item, index) => (
                        <button
                          key={item}
                          type="button"
                          onMouseEnter={() =>
                            setActiveSuggestionIndex(index)
                          }
                          onClick={() => {
                            setDestination(item);
                            setSelectedSuggestion(item);
                            setShowSuggestions(false);
                            setSuggestions([]);
                            //handleGenerate(item);
                          }}
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
              </div>

              <div>
                {/* <label className="mb-2 block text-sm font-bold text-zinc-700">
                  Days
                </label>

                <select
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="h-14 w-full rounded-2xl border border-zinc-200 px-4 font-bold outline-none focus:border-orange-400"
                >
                  {dayOptions.map((item) => (
                    <option key={item} value={item}>
                      {item} days
                    </option>
                  ))}
                </select> */}
               
                    <label className="mb-2 block text-sm font-bold text-zinc-700">
                        Days
                    </label>

                    <input
                        type="number"
                        min="1"
                        max="365"
                        value={days}
                        onChange={(e) => setDays(e.target.value)}
                        placeholder="5"
                        className="h-14 w-full rounded-2xl border border-zinc-200 px-4 font-bold outline-none focus:border-orange-400"
                    />
              
              </div>

              <div>
                {/* <label className="mb-2 block text-sm font-bold text-zinc-700">
                  Budget
                </label>

                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="h-14 w-full rounded-2xl border border-zinc-200 px-4 font-bold outline-none focus:border-orange-400"
                >
                  {budgetOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select> */}
                
                    <label className="mb-2 block text-sm font-bold text-zinc-700">
                        Budget (₹)
                    </label>

                    <input
                        type="number"
                        min="1000"
                        step="1000"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="25000"
                        className="h-14 w-full rounded-2xl border border-zinc-200 px-4 font-bold outline-none focus:border-orange-400"
                    />
               
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto]">
              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-700">
                  Travel Style
                </label>

                <select
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value)}
                  className="h-14 w-full rounded-2xl border border-zinc-200 px-4 font-bold outline-none focus:border-orange-400"
                >
                  {travelStyles.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={() => handleGenerate()}
                disabled={loading}
                className="mt-7 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-8 text-base font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Plan
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {popularDestinations.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setDestination(item);
                    setSelectedSuggestion(item);
                    //handleGenerate(item);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-bold text-zinc-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                >
                  <MapPin size={13} />
                  {item}
                </button>
              ))}
            </div>

            {error && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-600">
                {error}
              </div>
            )}
          </div>
        </div>
      </section>

      {plan && (
        <section className="px-5 py-14">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                    Your AI itinerary
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-zinc-950 md:text-5xl">
                    {plan.days} Days in {plan.destination}
                  </h2>

                  <p className="mt-4 max-w-3xl text-zinc-600">
                    {plan.overview}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <CalendarDays className="mx-auto text-orange-500" />
                    <p className="mt-2 text-xs font-bold text-zinc-500">
                      Days
                    </p>
                    <p className="font-black">{plan.days}</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <IndianRupee className="mx-auto text-orange-500" />
                    <p className="mt-2 text-xs font-bold text-zinc-500">
                      Budget
                    </p>
                    <p className="font-black">{plan.budget}</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <Users className="mx-auto text-orange-500" />
                    <p className="mt-2 text-xs font-bold text-zinc-500">
                      Style
                    </p>
                    <p className="font-black">{plan.travelStyle}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                {plan.dailyPlans.map((day) => (
                  <div
                    key={day.day}
                    className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white">
                        {day.day}
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-zinc-950">
                          {day.title}
                        </h3>

                        <ul className="mt-4 space-y-3">
                          {day.activities.map((activity, index) => (
                            <li
                              key={index}
                              className="flex gap-3 text-zinc-700"
                            >
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.5rem] bg-zinc-950 p-6 text-white">
                  <h3 className="text-xl font-black">Estimated Budget</h3>
                  <p className="mt-3 text-lg font-bold text-orange-300">
                    {plan.estimatedBudget}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6">
                  <h3 className="text-xl font-black text-zinc-950">
                    Travel Tips
                  </h3>

                  <ul className="mt-4 space-y-3 text-zinc-700">
                    {plan.travelTips.map((tip, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}