// export type Destination = {
//   slug: string;
//   name: string;
//   tagline: string;
//   description: string;
//   image: string;
//   bestTime: string;
//   budget: string;
//   duration: string;
//   highlights: string[];
//   thingsToDo: string[];
//   travelTips: string[];
//   faqs: {
//     question: string;
//     answer: string;
//   }[];

//   howToReach: {
//     byAir: string;
//     byRoad: string;
//     byTrain: string;
//   };

//   localFood: string[];

//   nearbyPlaces: string[];

//   whereToStay: {
//     budget: string;
//     midRange: string;
//     luxury: string;
//   };

//   budgetBreakdown: {
//     backpacker: string;
//     midRange: string;
//     luxury: string;
//   };

//   idealDuration: string;

//   tags: string[];
// };

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;

  bestTime: string;
  budget: string;
  duration: string;

  overview: string[];

  bestTimeToVisit: {
    recommendedSeason: string;
    winter: string;
    summer: string;
    monsoon: string;
  };

  mustVisitPlaces: string[];

  thingsToDo: string[];

  localFood: string[];

  travelTips: string[];

  howToReach: {
    byAir: string;
    byRoad: string;
    byTrain: string;
  };

  nearbyPlaces: string[];

  whereToStay: {
    budget: string;
    midRange: string;
    luxury: string;
  };

  budgetBreakdown: {
    backpacker: string;
    midRange: string;
    luxury: string;
  };

  idealDuration: string;

  faqs: {
    question: string;
    answer: string;
  }[];

  tags: string[];
};

// export type BlogPost = {
//   slug: string;
//   title: string;
//   description: string;
//   image: string;
//   date: string;
//   readTime: string;
//   content: string[];
// };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;

  overview: string[];

  weather?: string;
  winter?: string;
  summer?: string;
  monsoon?: string;

  monthWiseBreakdown?: {
    month: string;
    condition: string;
    travelAdvice: string;
  }[];

  whatToPack?: string[];

  howToReach?: {
    byAir: string;
    byRoad: string;
    byTrain: string;
  };

  nearbyPlaces?: string[];

  whereToStay?: {
    budget: string;
    midRange: string;
    luxury: string;
  };

  budgetBreakdown?: {
    backpacker: string;
    midRange: string;
    luxury: string;
  };

  idealDuration?: string;

  faqs: {
    question: string;
    answer: string;
  }[];
};

// export type Itinerary = {
//   slug: string;
//   title: string;
//   destination: string;
//   duration: string;
//   budget: string;
//   image: string;
//   overview: string;
//   days: {
//     day: string;
//     title: string;
//     plan: string[];
//   }[];
// };

export type Itinerary = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  budget: string;
  image: string;

  overview: string;

  bestFor: string[];

  days: {
    day: string;
    title: string;
    morning: string;
    afternoon: string;
    evening: string;
    travelTime: string;
    approximateCost: string;
    foodRecommendation: string;
  }[];
};