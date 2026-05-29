import { Itinerary } from "@/types";

export const itineraries: Itinerary[] = [
  {
    slug: "3-days-in-udaipur",
    title: "3 Days in Udaipur Itinerary",
    destination: "Udaipur",
    duration: "3 Days",
    budget: "₹12,000 - ₹20,000",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1400&auto=format&fit=crop",
    overview:
      "A perfect 3-day Udaipur itinerary covering lakes, palaces, sunsets, and local experiences.",
    days: [
      {
        day: "Day 1",
        title: "Arrival, City Palace & Lake Pichola",
        plan: ["Check in", "Visit City Palace", "Boat ride at Lake Pichola", "Sunset at Ambrai Ghat"],
      },
      {
        day: "Day 2",
        title: "Fateh Sagar, Bahubali Hills & Markets",
        plan: ["Visit Fateh Sagar Lake", "Explore Bahubali Hills", "Shop at local markets"],
      },
      {
        day: "Day 3",
        title: "Museums, Cafes & Departure",
        plan: ["Visit Vintage Car Museum", "Relax at lakeside cafe", "Departure"],
      },
    ],
  },
  {
    slug: "5-days-in-goa",
    title: "5 Days in Goa Itinerary",
    destination: "Goa",
    duration: "5 Days",
    budget: "₹15,000 - ₹35,000",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop",
    overview:
      "A balanced Goa itinerary covering beaches, nightlife, cafes, churches, and waterfalls.",
    days: [
      {
        day: "Day 1",
        title: "Arrival & North Goa Beaches",
        plan: ["Check in", "Visit Baga Beach", "Explore beach cafes"],
      },
      {
        day: "Day 2",
        title: "Anjuna, Vagator & Nightlife",
        plan: ["Visit Anjuna", "Sunset at Vagator", "Enjoy nightlife"],
      },
      {
        day: "Day 3",
        title: "Old Goa & Panjim",
        plan: ["Visit Old Goa Churches", "Explore Panjim", "Try local food"],
      },
      {
        day: "Day 4",
        title: "Dudhsagar Falls",
        plan: ["Day trip to Dudhsagar Falls", "Relax in evening"],
      },
      {
        day: "Day 5",
        title: "Shopping & Departure",
        plan: ["Local shopping", "Cafe visit", "Departure"],
      },
    ],
  },
  {
    slug: "4-days-in-jaisalmer",
    title: "4 Days in Jaisalmer Itinerary",
    destination: "Jaisalmer",
    duration: "4 Days",
    budget: "₹12,000 - ₹28,000",
    //image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1400&auto=format&fit=crop",
    image: "/images/jaisalmer.jpg",
    overview: "A desert-focused Jaisalmer itinerary covering fort walks, havelis, dunes, camping, and camel safari.",
    days: [
      { day: "Day 1", title: "Arrival & Jaisalmer Fort", plan: ["Check in", "Visit Jaisalmer Fort", "Explore local cafes"] },
      { day: "Day 2", title: "Havelis & Gadisar Lake", plan: ["Visit Patwon Ki Haveli", "Explore Gadisar Lake", "Local shopping"] },
      { day: "Day 3", title: "Sam Sand Dunes", plan: ["Drive to dunes", "Camel safari", "Desert camp stay"] },
      { day: "Day 4", title: "Departure", plan: ["Sunrise in desert", "Breakfast", "Departure"] },
    ],
  },
  {
    slug: "5-days-in-shimla-kufri",
    title: "5 Days in Shimla & Kufri Itinerary",
    destination: "Shimla",
    duration: "5 Days",
    budget: "₹12,000 - ₹30,000",
    //image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1400&auto=format&fit=crop",
    image: "/images/shimla.jpg",
    overview: "A relaxed hill itinerary covering Shimla, Kufri, Mall Road, viewpoints, and local experiences.",
    days: [
      { day: "Day 1", title: "Arrival & Mall Road", plan: ["Check in", "Walk on Mall Road", "Dinner at local cafe"] },
      { day: "Day 2", title: "Jakhu Temple & Ridge", plan: ["Visit Jakhu Temple", "Explore The Ridge", "Shopping"] },
      { day: "Day 3", title: "Kufri Day Trip", plan: ["Visit Kufri", "Enjoy mountain activities", "Return to Shimla"] },
      { day: "Day 4", title: "Local Sightseeing", plan: ["Visit viewpoints", "Relaxed cafe time", "Photography"] },
      { day: "Day 5", title: "Departure", plan: ["Breakfast", "Short walk", "Departure"] },
    ],
  },
  {
    slug: "4-days-in-darjeeling",
    title: "4 Days in Darjeeling Itinerary",
    destination: "Darjeeling",
    duration: "4 Days",
    budget: "₹14,000 - ₹30,000",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1400&auto=format&fit=crop",
    overview: "A scenic Darjeeling itinerary covering Tiger Hill, tea gardens, toy train, viewpoints, and monasteries.",
    days: [
      { day: "Day 1", title: "Arrival & Local Walk", plan: ["Check in", "Explore Mall Road", "Try local tea"] },
      { day: "Day 2", title: "Tiger Hill & Batasia Loop", plan: ["Sunrise at Tiger Hill", "Visit Batasia Loop", "Toy train ride"] },
      { day: "Day 3", title: "Tea Gardens & Monasteries", plan: ["Visit tea estate", "Explore monastery", "Local market"] },
      { day: "Day 4", title: "Departure", plan: ["Breakfast", "Short shopping", "Departure"] },
    ],
  },
  {
    slug: "6-days-in-andaman",
    title: "6 Days in Andaman Itinerary",
    destination: "Andaman",
    duration: "6 Days",
    budget: "₹25,000 - ₹60,000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    overview: "A tropical Andaman itinerary covering Port Blair, Havelock, Neil Island, beaches, and water activities.",
    days: [
      { day: "Day 1", title: "Port Blair Arrival", plan: ["Check in", "Visit Cellular Jail", "Light and sound show"] },
      { day: "Day 2", title: "Havelock Island", plan: ["Ferry to Havelock", "Visit Radhanagar Beach", "Relax"] },
      { day: "Day 3", title: "Water Activities", plan: ["Scuba/snorkeling", "Beach time", "Cafe visit"] },
      { day: "Day 4", title: "Neil Island", plan: ["Ferry to Neil", "Visit beaches", "Sunset"] },
      { day: "Day 5", title: "Return Port Blair", plan: ["Return ferry", "Shopping", "Rest"] },
      { day: "Day 6", title: "Departure", plan: ["Breakfast", "Airport transfer", "Departure"] },
    ],
  },
  {
    slug: "7-days-divine-coastal-gujarat-trail",
    title: "7 Days Divine & Coastal Gujarat Trail",
    destination: "Gujarat",
    duration: "7 Days",
    budget: "₹18,000 - ₹40,000",
    //image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1400&auto=format&fit=crop",
    image: "/images/girnar.jpg",
    overview: "A complete Gujarat road trip covering Somnath, Dwarka, Sasan Gir, Girnar, and Diu.",
    days: [
      { day: "Day 1", title: "Somnath Arrival", plan: ["Reach Somnath", "Somnath Temple darshan", "Evening beach walk"] },
      { day: "Day 2", title: "Somnath to Dwarka", plan: ["Start for Dwarka", "Visit Dwarkadhish Temple", "Evening aarti"] },
      { day: "Day 3", title: "Dwarka Sightseeing", plan: ["Visit Bet Dwarka", "Nageshwar Jyotirlinga", "Rukmini Temple"] },
      { day: "Day 4", title: "Dwarka to Sasan Gir", plan: ["Travel to Gir", "Relax at stay", "Prepare for safari"] },
      { day: "Day 5", title: "Gir Safari & Girnar", plan: ["Morning Gir safari", "Travel to Junagadh", "Visit Girnar area"] },
      { day: "Day 6", title: "Diu Coastal Escape", plan: ["Travel to Diu", "Visit beaches", "Explore Diu Fort"] },
      { day: "Day 7", title: "Departure", plan: ["Relaxed breakfast", "Beach walk", "Departure"] },
    ],
  }
];