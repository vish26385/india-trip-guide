import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Trip Planner India | IndiaTripGuide",
  description:
    "Create day-wise India travel itineraries using AI. Choose destination, budget, days and travel style.",
};

export default function TripPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}