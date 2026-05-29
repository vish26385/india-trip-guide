export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  bestTime: string;
  budget: string;
  duration: string;
  highlights: string[];
  thingsToDo: string[];
  travelTips: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type Itinerary = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  budget: string;
  image: string;
  overview: string;
  days: {
    day: string;
    title: string;
    plan: string[];
  }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  content: string[];
};