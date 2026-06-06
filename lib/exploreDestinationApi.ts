export type ExploreDestinationGuide = {
  name: string;
  state: string;
  overview: string;
  bestTime: string;
  budget: string;
  highlights: string[];
  thingsToDo: string[];
  travelTips: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export async function exploreDestination(
  destination: string
): Promise<ExploreDestinationGuide> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is missing");
  }

  const response = await fetch(
    `${baseUrl}/api/explore-destination?destination=${encodeURIComponent(
      destination
    )}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

if (!response.ok) {
  const error = await response.json();

  throw new Error(
    error.message ||
    "Please enter a valid destination in India."
  );
}

  return response.json();
}

export async function searchDestinationSuggestions(
  query: string
): Promise<string[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl || query.trim().length < 2) {
    return [];
  }

  const response = await fetch(
    `${baseUrl}/api/explore-destination/search?q=${encodeURIComponent(query.trim())}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
}