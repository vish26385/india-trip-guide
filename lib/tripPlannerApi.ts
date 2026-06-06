export type TripDayPlan = {
  day: number;
  title: string;
  activities: string[];
};

export type TripPlanResponse = {
  destination: string;
  days: number;
  budget: string;
  travelStyle: string;
  overview: string;
  dailyPlans: TripDayPlan[];
  estimatedBudget: string;
  travelTips: string[];
};

export type CreateTripPlanRequest = {
  destination: string;
  days: number;
  budget: string;
  travelStyle: string;
};

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function createTripPlan(
  request: CreateTripPlanRequest
): Promise<TripPlanResponse> {
  const response = await fetch(`${baseUrl}/api/trip-planner`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || "Failed to generate trip plan.");
  }

  return response.json();
}