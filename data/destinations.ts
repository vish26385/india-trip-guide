import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    slug: "udaipur",
    name: "Udaipur",
    tagline: "The City of Lakes",
    description:
      "Udaipur is one of India's most romantic destinations, famous for lakes, palaces, sunsets, and royal heritage.",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1400&auto=format&fit=crop",
    bestTime: "October to March",
    budget: "₹12,000 - ₹25,000",
    duration: "3-4 Days",
    highlights: [
      "Lake Pichola",
      "City Palace",
      "Bahubali Hills",
      "Fateh Sagar Lake",
    ],
    thingsToDo: [
      "Boat ride at Lake Pichola",
      "Sunset at Ambrai Ghat",
      "Visit royal palaces",
      "Explore local markets",
    ],
    travelTips: [
      "Visit during winter for best weather",
      "Book lake-view hotels early",
      "Carry comfortable footwear",
    ],
    faqs: [
      {
        question: "What is the best time to visit Udaipur?",
        answer:
          "October to March is considered the best time due to pleasant weather.",
      },
      {
        question: "How many days are enough for Udaipur?",
        answer:
          "3 to 4 days are ideal for exploring major attractions comfortably.",
      },
    ],
    tags: ["weekend", "family", "heritage"],
  },
  {
    slug: "goa",
    name: "Goa",
    tagline: "India's Beach Paradise",
    description:
      "Goa is famous for beaches, nightlife, Portuguese culture, cafes, and water sports.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop",
    bestTime: "November to February",
    budget: "₹15,000 - ₹35,000",
    duration: "4-5 Days",
    highlights: [
      "Baga Beach",
      "Anjuna Beach",
      "Dudhsagar Falls",
      "Old Goa Churches",
    ],
    thingsToDo: [
      "Beach hopping",
      "Water sports",
      "Nightlife experience",
      "Cafe exploration",
    ],
    travelTips: [
      "Rent a scooter for easy travel",
      "Avoid peak holiday pricing",
      "Carry sunscreen",
    ],
    faqs: [
      {
        question: "Which part of Goa is best?",
        answer:
          "North Goa is famous for nightlife while South Goa is calmer and more relaxing.",
      },
    ],
    tags: ["beach", "coastal", "weekend", "honeymoon", "budget"]
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    tagline: "The Pink City",
    description:
      "Jaipur offers royal forts, colorful markets, heritage hotels, and rich Rajasthani culture.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1400&auto=format&fit=crop",
    bestTime: "October to March",
    budget: "₹10,000 - ₹22,000",
    duration: "4 Days",
    highlights: [
      "Amber Fort",
      "Hawa Mahal",
      "City Palace",
      "Nahargarh Fort",
    ],
    thingsToDo: [
      "Fort exploration",
      "Shopping in bazaars",
      "Rajasthani food tasting",
      "Sunset viewpoints",
    ],
    travelTips: [
      "Start sightseeing early morning",
      "Use local guides at forts",
      "Carry water during summers",
    ],
    faqs: [
      {
        question: "Is Jaipur good for family trips?",
        answer:
          "Yes, Jaipur is excellent for families, couples, and cultural travelers.",
      },
    ],
    tags: ["heritage", "family", "weekend"],
  },
  {
    slug: "manali",
    name: "Manali",
    tagline: "Mountain Escape",
    description:
      "Manali is a beautiful Himachal destination known for snow views, adventure activities, riverside stays, and mountain cafes.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1400&auto=format&fit=crop",
    bestTime: "March to June, October to February",
    budget: "₹12,000 - ₹28,000",
    duration: "4-5 Days",
    highlights: ["Solang Valley", "Hadimba Temple", "Old Manali", "Atal Tunnel"],
    thingsToDo: ["Paragliding", "Cafe hopping", "Snow activities", "River views"],
    travelTips: ["Pack warm clothes", "Book stays early", "Check road conditions"],
    faqs: [
      {
        question: "Is Manali good for couples?",
        answer: "Yes, Manali is one of the most popular couple-friendly mountain destinations in India.",
      },
    ],
    tags: ["hill", "adventure", "honeymoon"],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    tagline: "Yoga & Adventure Capital",
    description:
      "Rishikesh is famous for river rafting, yoga retreats, spiritual vibes, cafes, and scenic Ganga views.",
    //image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop",
    image: "/images/rishikesh.jpg",
    bestTime: "September to April",
    budget: "₹8,000 - ₹20,000",
    duration: "2-3 Days",
    highlights: ["Laxman Jhula", "Ram Jhula", "Triveni Ghat", "River Rafting"],
    thingsToDo: ["River rafting", "Attend Ganga Aarti", "Visit cafes", "Yoga sessions"],
    travelTips: ["Avoid monsoon rafting", "Carry light clothes", "Respect spiritual places"],
    faqs: [
      {
        question: "How many days are enough for Rishikesh?",
        answer: "2 to 3 days are enough for major attractions and adventure activities.",
      },
    ],
    tags: ["adventure", "weekend"],
  },
  {
    slug: "kerala",
    name: "Kerala",
    tagline: "God’s Own Country",
    description:
      "Kerala offers backwaters, beaches, hill stations, tea gardens, houseboats, and peaceful nature experiences.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1400&auto=format&fit=crop",
    bestTime: "October to March",
    budget: "₹18,000 - ₹45,000",
    duration: "5-7 Days",
    highlights: ["Munnar", "Alleppey", "Kochi", "Wayanad"],
    thingsToDo: ["Houseboat stay", "Tea garden visit", "Beach relaxation", "Ayurveda spa"],
    travelTips: ["Plan city transfers carefully", "Book houseboats in advance", "Carry light cotton clothes"],
    faqs: [
      {
        question: "Which is the best Kerala trip route?",
        answer: "Kochi, Munnar, Thekkady, and Alleppey is a popular first-time Kerala route.",
      },
    ],
    tags: ["family", "honeymoon", "nature"],
  },
  {
    slug: "jaisalmer",
    name: "Jaisalmer",
    tagline: "Golden Desert City",
    description: "Jaisalmer is famous for golden forts, desert camps, camel safaris, sand dunes, and royal Rajasthani culture.",
    //image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1400&auto=format&fit=crop",
    image: "/images/jaisalmer.jpg",
    bestTime: "October to March",
    budget: "₹12,000 - ₹28,000",
    duration: "3-4 Days",
    highlights: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli", "Gadisar Lake"],
    thingsToDo: ["Camel safari", "Desert camping", "Fort visit", "Sunset photography"],
    travelTips: ["Book desert camps early", "Carry warm clothes for nights", "Avoid peak summer"],
    faqs: [{ question: "How many days are enough for Jaisalmer?", answer: "3 to 4 days are ideal for Jaisalmer and desert experiences." }],
    tags: ["heritage", "weekend", "adventure"],
  },
  {
    slug: "shimla",
    name: "Shimla",
    tagline: "Queen of Hills",
    description: "Shimla is a classic hill station known for colonial charm, Mall Road, mountain views, and nearby Kufri.",
    //image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1400&auto=format&fit=crop",
    image: "/images/shimla.jpg",
    bestTime: "March to June, December to February",
    budget: "₹10,000 - ₹25,000",
    duration: "4-5 Days",
    highlights: ["Mall Road", "Kufri", "Jakhu Temple", "The Ridge"],
    thingsToDo: ["Walk on Mall Road", "Visit Kufri", "Enjoy snowfall season", "Try local cafes"],
    travelTips: ["Book hotels early in peak season", "Carry warm clothes", "Check snow conditions in winter"],
    faqs: [{ question: "Is Shimla good for family trips?", answer: "Yes, Shimla is excellent for families, couples, and first-time hill station travelers." }],
    tags: ["hill", "family", "honeymoon"],
  },
  {
    slug: "darjeeling",
    name: "Darjeeling",
    tagline: "Tea & Mountain Paradise",
    description: "Darjeeling is known for tea gardens, Himalayan views, toy train rides, monasteries, and peaceful mountain weather.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1400&auto=format&fit=crop",
    bestTime: "March to May, October to December",
    budget: "₹14,000 - ₹30,000",
    duration: "3-4 Days",
    highlights: ["Tiger Hill", "Tea Gardens", "Toy Train", "Batasia Loop"],
    thingsToDo: ["Watch sunrise at Tiger Hill", "Visit tea estates", "Ride toy train", "Explore local markets"],
    travelTips: ["Start early for Tiger Hill", "Carry light woolens", "Book toy train tickets early"],
    faqs: [{ question: "What is Darjeeling famous for?", answer: "Darjeeling is famous for tea gardens, Kanchenjunga views, and the toy train." }],
    tags: ["hill", "family", "nature"],
  },
  {
    slug: "andaman",
    name: "Andaman",
    tagline: "Tropical Island Escape",
    description: "Andaman offers turquoise beaches, coral reefs, water sports, island hopping, and peaceful tropical stays.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    bestTime: "October to May",
    budget: "₹25,000 - ₹60,000",
    duration: "5-6 Days",
    highlights: ["Havelock Island", "Radhanagar Beach", "Neil Island", "Cellular Jail"],
    thingsToDo: ["Scuba diving", "Snorkeling", "Beach hopping", "Island ferry rides"],
    travelTips: ["Book ferries in advance", "Keep buffer time for weather", "Carry beach essentials"],
    faqs: [{ question: "How many days are enough for Andaman?", answer: "5 to 6 days are ideal for Port Blair, Havelock, and Neil Island." }],
    tags: ["beach", "coastal", "honeymoon", "adventure"]
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    tagline: "City of Dreams",
    description: "Mumbai is a vibrant city known for Marine Drive, Bollywood, street food, colonial landmarks, and nightlife.",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1400&auto=format&fit=crop",
    bestTime: "November to February",
    budget: "₹8,000 - ₹25,000",
    duration: "2-3 Days",
    highlights: ["Marine Drive", "Gateway of India", "Colaba", "Juhu Beach"],
    thingsToDo: ["Walk at Marine Drive", "Try street food", "Visit Gateway of India", "Explore Colaba"],
    travelTips: ["Use local trains carefully", "Avoid monsoon flooding areas", "Keep travel time buffer"],
    faqs: [{ question: "Is Mumbai good for a short trip?", answer: "Yes, Mumbai is perfect for a 2 to 3 day city break." }],
    tags: ["weekend", "family", "city"],
  },
  {
    slug: "pondicherry",
    name: "Pondicherry",
    tagline: "French Coastal Charm",
    description: "Pondicherry is loved for French-style streets, peaceful beaches, cafes, churches, and relaxed coastal vibes.",
    //image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1400&auto=format&fit=crop",
    image: "/images/pondicherry.jpg",
    bestTime: "October to March",
    budget: "₹10,000 - ₹24,000",
    duration: "2-3 Days",
    highlights: ["White Town", "Promenade Beach", "Auroville", "French Cafes"],
    thingsToDo: ["Cafe hopping", "Beach walk", "Visit Auroville", "Explore French streets"],
    travelTips: ["Rent a scooter", "Stay near White Town", "Visit cafes early"],
    faqs: [{ question: "How many days are enough for Pondicherry?", answer: "2 to 3 days are enough for Pondicherry." }],
    tags: ["beach", "coastal", "honeymoon", "weekend"],
  },
  {
    slug: "mount-abu",
    name: "Mount Abu",
    tagline: "Rajasthan’s Hill Escape",
    description: "Mount Abu is Rajasthan’s only hill station, known for Nakki Lake, Dilwara Temples, viewpoints, and cool weather.",
    //image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
    image: "/images/mount_abu.jpg",
    bestTime: "October to March",
    budget: "₹7,000 - ₹18,000",
    duration: "2 Days",
    highlights: ["Nakki Lake", "Dilwara Temples", "Guru Shikhar", "Sunset Point"],
    thingsToDo: ["Boating", "Temple visit", "Sunset viewpoint", "Local market walk"],
    travelTips: ["Good for weekend trips", "Carry light woolens in winter", "Start sightseeing early"],
    faqs: [{ question: "Is Mount Abu good for weekend trip?", answer: "Yes, Mount Abu is perfect for a 2-day weekend trip." }],
    tags: ["hill", "weekend", "family"],
  },
  {
    slug: "munnar",
    name: "Munnar",
    tagline: "Tea Valley Paradise",
    description: "Munnar is a beautiful Kerala hill station known for tea gardens, waterfalls, misty hills, and romantic stays.",
    //image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1400&auto=format&fit=crop",
    image: "/images/munnar.jpg",
    bestTime: "September to March",
    budget: "₹12,000 - ₹30,000",
    duration: "3-4 Days",
    highlights: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam", "Top Station"],
    thingsToDo: ["Tea estate visit", "Nature photography", "Waterfall visit", "Hill viewpoint drive"],
    travelTips: ["Keep warm clothes", "Book hill-view stay", "Avoid tight travel schedule"],
    faqs: [{ question: "Is Munnar good for honeymoon?", answer: "Yes, Munnar is one of the best romantic hill destinations in South India." }],
    tags: ["hill", "honeymoon", "nature"],
  },
  {
    slug: "gujarat-spiritual-coastal-journey",
    //name: "Gujarat Spiritual & Coastal Journey",
    name: "Gujarat",
    tagline: "Divine & Coastal Gujarat Trail",
    description: "A powerful Gujarat route covering Somnath, Dwarka, Sasan Gir, Girnar, and Diu with temples, wildlife, mountains, and beaches.",
    //image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1400&auto=format&fit=crop",    
    image: "/images/girnar.jpg",
    bestTime: "October to March",
    budget: "₹18,000 - ₹40,000",
    duration: "6-7 Days",
    highlights: ["Somnath Temple", "Dwarkadhish Temple", "Sasan Gir", "Girnar", "Diu"],
    thingsToDo: ["Temple darshan", "Gir safari", "Girnar climb", "Diu beach relaxation"],
    travelTips: ["Book Gir safari early", "Plan road travel carefully", "Keep one buffer day"],
    faqs: [{ question: "How many days are enough for this Gujarat trip?", answer: "6 to 7 days are ideal for Somnath, Dwarka, Gir, Girnar, and Diu." }],
    tags: ["heritage", "family", "beach"],
  },
  {
  slug: "jodhpur",
  name: "Jodhpur",
  tagline: "The Blue City",
  description:
    "Jodhpur is famous for Mehrangarh Fort, blue-painted old town streets, royal palaces, and vibrant Rajasthani culture.",
  image: "/images/jodhpur-new.jpg",
  bestTime: "October to March",
  budget: "₹10,000 - ₹24,000",
  duration: "2-3 Days",
  highlights: [
    "Mehrangarh Fort",
    "Jaswant Thada",
    "Clock Tower Market",
    "Umaid Bhawan Palace",
  ],
  thingsToDo: [
    "Explore Mehrangarh Fort",
    "Visit blue city lanes",
    "Shop at local markets",
    "Enjoy rooftop cafes",
  ],
  travelTips: [
    "Visit fort early morning",
    "Carry sunscreen",
    "Stay near old city",
  ],
  faqs: [
    {
      question: "How many days are enough for Jodhpur?",
      answer: "2 to 3 days are ideal for exploring Jodhpur.",
    },
  ],
  tags: ["heritage", "weekend", "family"],
},
{
  slug: "kashmir",
  name: "Kashmir",
  tagline: "Paradise on Earth",
  description:
    "Kashmir is known for stunning valleys, snow-capped mountains, houseboats, gardens, and breathtaking scenery.",
  image: "/images/kashmir.jpg",
  bestTime: "March to October",
  budget: "₹20,000 - ₹50,000",
  duration: "5-7 Days",
  highlights: [
    "Srinagar",
    "Gulmarg",
    "Pahalgam",
    "Sonmarg",
  ],
  thingsToDo: [
    "Stay in a houseboat",
    "Ride Gulmarg Gondola",
    "Explore valleys",
    "Enjoy local cuisine",
  ],
  travelTips: [
    "Carry warm clothes",
    "Book flights early",
    "Check weather forecasts",
  ],
  faqs: [
    {
      question: "What is the best time to visit Kashmir?",
      answer: "March to October is best for sightseeing and pleasant weather.",
    },
  ],
  tags: ["hill", "honeymoon", "adventure"],
},
{
  slug: "mussoorie",
  name: "Mussoorie",
  tagline: "Queen of the Hills",
  description:
    "Mussoorie is a charming hill station offering mountain views, waterfalls, pleasant weather, and colonial charm.",
  image: "/images/mussoorie.jpg",
  bestTime: "March to June, September to November",
  budget: "₹8,000 - ₹22,000",
  duration: "2-3 Days",
  highlights: [
    "Kempty Falls",
    "Mall Road",
    "Gun Hill",
    "Lal Tibba",
  ],
  thingsToDo: [
    "Visit waterfalls",
    "Walk on Mall Road",
    "Cable car ride",
    "View Himalayan peaks",
  ],
  travelTips: [
    "Avoid long weekends",
    "Carry light jackets",
    "Start sightseeing early",
  ],
  faqs: [
    {
      question: "Is Mussoorie good for families?",
      answer: "Yes, Mussoorie is excellent for family vacations.",
    },
  ],
  tags: ["hill", "family", "weekend"],
},
{
  slug: "varanasi",
  name: "Varanasi",
  tagline: "Spiritual Capital of India",
  description:
    "Varanasi is one of the world's oldest cities, famous for ghats, temples, Ganga Aarti, and spiritual experiences.",
  image: "/images/varanasi.jpg",
  bestTime: "October to March",
  budget: "₹8,000 - ₹20,000",
  duration: "2-3 Days",
  highlights: [
    "Dashashwamedh Ghat",
    "Kashi Vishwanath Temple",
    "Assi Ghat",
    "Ganga Aarti",
  ],
  thingsToDo: [
    "Boat ride on Ganga",
    "Attend evening Aarti",
    "Temple visits",
    "Explore old city",
  ],
  travelTips: [
    "Wake up early for ghat views",
    "Respect religious customs",
    "Keep cash handy",
  ],
  faqs: [
    {
      question: "How many days are enough for Varanasi?",
      answer: "2 to 3 days are enough for major spiritual attractions.",
    },
  ],
  tags: ["heritage", "family", "spiritual"],
},
{
  slug: "agra",
  name: "Agra",
  tagline: "Home of the Taj Mahal",
  description:
    "Agra is famous worldwide for the Taj Mahal, Mughal architecture, historic forts, and rich heritage.",
  image: "/images/agra.jpg",
  bestTime: "October to March",
  budget: "₹7,000 - ₹18,000",
  duration: "2-3 Days",
  highlights: [
    "Taj Mahal",
    "Agra Fort",
    "Mehtab Bagh",
    "Fatehpur Sikri",
  ],
  thingsToDo: [
    "Visit Taj Mahal at sunrise",
    "Explore Agra Fort",
    "Try Mughlai food",
    "Visit Fatehpur Sikri",
  ],
  travelTips: [
    "Visit early morning",
    "Book tickets online",
    "Avoid peak afternoon heat",
  ],
  faqs: [
    {
      question: "Is one day enough for Agra?",
      answer: "Yes, most travelers can cover major attractions in one full day.",
    },
  ],
  tags: ["heritage", "family", "weekend"],
},


{
  slug: "leh",
  name: "Leh",
  tagline: "Gateway to Ladakh",
  description:
    "Leh is a high-altitude destination in Ladakh, famous for monasteries, mountain views, scenic roads, and peaceful Himalayan landscapes.",
  image:
    "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1400&auto=format&fit=crop",
  bestTime: "May to September",
  budget: "₹25,000 - ₹50,000",
  duration: "5-7 Days",
  highlights: [
    "Shanti Stupa",
    "Leh Palace",
    "Pangong Lake",
    "Nubra Valley",
    "Khardung La",
  ],
  thingsToDo: [
    "Visit monasteries",
    "Explore Leh Market",
    "Take a road trip to Pangong Lake",
    "Visit Nubra Valley",
    "Enjoy mountain photography",
  ],
  travelTips: [
    "Keep one day for acclimatization",
    "Carry warm clothes even in summer",
    "Drink enough water at high altitude",
    "Check permits and road conditions before travel",
  ],
  faqs: [
    {
      question: "What is the best time to visit Leh?",
      answer:
        "May to September is generally the best time to visit Leh for sightseeing and road trips.",
    },
    {
      question: "How many days are enough for Leh?",
      answer:
        "5 to 7 days are ideal to explore Leh, Nubra Valley, Pangong Lake, and nearby attractions comfortably.",
    },
  ],
  tags: ["adventure", "mountain", "roadtrip"],
},
{
  slug: "coorg",
  name: "Coorg",
  tagline: "The Coffee Country of Karnataka",
  description:
    "Coorg is a peaceful hill destination in Karnataka, known for coffee plantations, waterfalls, misty hills, and relaxing nature stays.",
  image:
    "/images/coorg.jpg",
  bestTime: "October to March",
  budget: "₹10,000 - ₹25,000",
  duration: "2-3 Days",
  highlights: [
    "Abbey Falls",
    "Raja's Seat",
    "Dubare Elephant Camp",
    "Coffee Plantations",
    "Talacauvery",
  ],
  thingsToDo: [
    "Visit coffee estates",
    "Explore Abbey Falls",
    "Watch sunset at Raja's Seat",
    "Visit Dubare Elephant Camp",
    "Try local Coorg cuisine",
  ],
  travelTips: [
    "Book plantation stays early on weekends",
    "Carry light woolens during winter",
    "Road travel is the best way to explore Coorg",
    "Monsoon is scenic but roads can be slippery",
  ],
  faqs: [
    {
      question: "What is Coorg famous for?",
      answer:
        "Coorg is famous for coffee plantations, waterfalls, misty hills, and peaceful nature stays.",
    },
    {
      question: "How many days are enough for Coorg?",
      answer:
        "2 to 3 days are enough for a relaxed Coorg trip covering major attractions.",
    },
  ],
  tags: ["weekend", "hill", "nature"],
},
{
  slug: "ooty",
  name: "Ooty",
  tagline: "Queen of the Nilgiris",
  description:
    "Ooty is a famous hill station in Tamil Nadu, known for cool weather, tea gardens, lakes, viewpoints, and family-friendly sightseeing.",
  image:
    "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?q=80&w=1400&auto=format&fit=crop",
  bestTime: "October to June",
  budget: "₹10,000 - ₹25,000",
  duration: "2-3 Days",
  highlights: [
    "Ooty Lake",
    "Botanical Garden",
    "Doddabetta Peak",
    "Tea Gardens",
    "Nilgiri Mountain Railway",
  ],
  thingsToDo: [
    "Enjoy boating at Ooty Lake",
    "Visit Botanical Garden",
    "Explore tea plantations",
    "Ride the Nilgiri Mountain Railway",
    "Visit Doddabetta Peak",
  ],
  travelTips: [
    "Carry warm clothes due to cool weather",
    "Book hotels early during holidays",
    "Start sightseeing early to avoid crowds",
    "Keep motion sickness medicine for ghat roads",
  ],
  faqs: [
    {
      question: "What is the best time to visit Ooty?",
      answer:
        "October to June is a good time to visit Ooty, with pleasant weather for sightseeing.",
    },
    {
      question: "Is Ooty good for family trips?",
      answer:
        "Yes, Ooty is a popular family destination with gardens, lakes, viewpoints, and easy sightseeing options.",
    },
  ],
  tags: ["hill", "family", "weekend"],
},
{
  slug: "spiti-valley",
  name: "Spiti Valley",
  tagline: "The Cold Desert of Himachal",
  description:
    "Spiti Valley is a remote Himalayan destination in Himachal Pradesh, known for monasteries, rugged landscapes, high-altitude villages, and adventure road trips.",
  image:
    "/images/spiti-valley.jpg",
  bestTime: "May to October",
  budget: "₹25,000 - ₹55,000",
  duration: "6-8 Days",
  highlights: [
    "Key Monastery",
    "Kaza",
    "Chandratal Lake",
    "Tabo Monastery",
    "Hikkim",
  ],
  thingsToDo: [
    "Visit Key Monastery",
    "Explore Kaza",
    "See Chandratal Lake",
    "Visit high-altitude villages",
    "Enjoy road trip photography",
  ],
  travelTips: [
    "Prepare for long road journeys",
    "Carry warm clothes even in summer",
    "Keep buffer days for weather or road delays",
    "Travel slowly to adjust to altitude",
  ],
  faqs: [
    {
      question: "What is the best time to visit Spiti Valley?",
      answer:
        "May to October is generally the best time for Spiti Valley road trips and sightseeing.",
    },
    {
      question: "How many days are enough for Spiti Valley?",
      answer:
        "6 to 8 days are ideal because Spiti requires long travel time and slow high-altitude travel.",
    },
  ],
  tags: ["adventure", "roadtrip", "mountain"],
},
{
  slug: "kasol",
  name: "Kasol",
  tagline: "Backpacker Village of Himachal",
  description:
    "Kasol is a popular village in Himachal Pradesh, known for Parvati Valley views, cafes, riverside stays, short treks, and backpacker culture.",
  image:
    "/images/kasol.jpg",
  bestTime: "March to June and October to November",
  budget: "₹8,000 - ₹20,000",
  duration: "2-3 Days",
  highlights: [
    "Parvati River",
    "Manikaran Sahib",
    "Chalal",
    "Tosh",
    "Cafes in Kasol",
  ],
  thingsToDo: [
    "Relax near Parvati River",
    "Visit Manikaran Sahib",
    "Walk to Chalal",
    "Explore local cafes",
    "Take short treks nearby",
  ],
  travelTips: [
    "Carry cash as network/payment issues can happen",
    "Respect local culture and nature",
    "Pack warm layers for evenings",
    "Avoid risky river spots during monsoon",
  ],
  faqs: [
    {
      question: "What is Kasol famous for?",
      answer:
        "Kasol is famous for Parvati Valley views, cafes, riverside stays, backpacker culture, and nearby short treks.",
    },
    {
      question: "How many days are enough for Kasol?",
      answer:
        "2 to 3 days are enough for Kasol, Manikaran, Chalal, cafes, and nearby experiences.",
    },
  ],
  tags: ["budget", "backpacker", "mountain"],
},
{
  slug: "dwarka",
  name: "Dwarka",
  tagline: "Kingdom of Lord Krishna",
  description:
    "Dwarka is one of India's most important Hindu pilgrimage destinations, famous for Dwarkadhish Temple, spiritual heritage, and coastal views along the Arabian Sea.",
  image:
    "/images/dwarka.jpg",
  bestTime: "October to March",
  budget: "₹8,000 - ₹20,000",
  duration: "2-3 Days",
  highlights: [
    "Dwarkadhish Temple",
    "Bet Dwarka",
    "Sudama Setu",
    "Rukmini Devi Temple",
    "Gomti Ghat",
  ],
  thingsToDo: [
    "Attend temple aarti",
    "Visit Bet Dwarka",
    "Explore Gomti Ghat",
    "See sunset by the coast",
    "Visit nearby temples",
  ],
  travelTips: [
    "Visit early morning for a peaceful temple experience",
    "Carry modest clothing for temple visits",
    "Avoid peak festival crowds if seeking a relaxed trip",
    "Keep cash for local purchases",
  ],
  faqs: [
    {
      question: "What is Dwarka famous for?",
      answer:
        "Dwarka is famous for the Dwarkadhish Temple and its connection with Lord Krishna.",
    },
    {
      question: "How many days are enough for Dwarka?",
      answer:
        "2 to 3 days are usually enough to explore Dwarka and nearby attractions.",
    },
  ],
  tags: ["spiritual", "family", "heritage"],
},
{
  slug: "somnath",
  name: "Somnath",
  tagline: "The Eternal Jyotirlinga",
  description:
    "Somnath is one of the most sacred pilgrimage destinations in India, known for the historic Somnath Temple located on the Arabian Sea coast of Gujarat.",
  image:
    "/images/somnath.jpg",
  bestTime: "October to March",
  budget: "₹8,000 - ₹18,000",
  duration: "2 Days",
  highlights: [
    "Somnath Temple",
    "Triveni Sangam",
    "Somnath Beach",
    "Bhalka Tirth",
    "Light and Sound Show",
  ],
  thingsToDo: [
    "Attend temple aarti",
    "Watch the evening light show",
    "Visit Triveni Sangam",
    "Explore Bhalka Tirth",
    "Enjoy coastal views",
  ],
  travelTips: [
    "Attend evening aarti for the best experience",
    "Carry light cotton clothes in summer",
    "Book accommodation near the temple area",
    "Respect temple dress and photography rules",
  ],
  faqs: [
    {
      question: "Why is Somnath famous?",
      answer:
        "Somnath is famous for the Somnath Jyotirlinga Temple, one of the most sacred Shiva temples in India.",
    },
    {
      question: "Can Dwarka and Somnath be covered together?",
      answer:
        "Yes, many travelers combine Dwarka and Somnath in the same Gujarat pilgrimage trip.",
    },
  ],
  tags: ["spiritual", "pilgrimage", "heritage"],
},
{
  slug: "gir-national-park",
  name: "Gir National Park",
  tagline: "Home of the Asiatic Lion",
  description:
    "Gir National Park is the only place in the world where Asiatic lions can be seen in the wild, making it one of India's most important wildlife destinations.",
  image:
    "/images/gir-new.jpg",
  bestTime: "December to March",
  budget: "₹10,000 - ₹25,000",
  duration: "2-3 Days",
  highlights: [
    "Lion Safari",
    "Devalia Safari Park",
    "Wildlife Photography",
    "Bird Watching",
    "Forest Landscapes",
  ],
  thingsToDo: [
    "Take a lion safari",
    "Visit Devalia Interpretation Zone",
    "Enjoy wildlife photography",
    "Spot birds and other animals",
    "Stay in nature resorts",
  ],
  travelTips: [
    "Book safari permits in advance",
    "Carry binoculars and camera gear",
    "Follow forest department guidelines",
    "Avoid loud noises during safaris",
  ],
  faqs: [
    {
      question: "What is Gir National Park famous for?",
      answer:
        "Gir National Park is famous as the last natural habitat of Asiatic lions.",
    },
    {
      question: "How many safaris should I book in Gir?",
      answer:
        "At least 2 safari sessions increase the chances of wildlife sightings.",
    },
  ],
  tags: ["wildlife", "family", "nature"],
},
{
  slug: "mahabaleshwar",
  name: "Mahabaleshwar",
  tagline: "The Strawberry Capital of India",
  description:
    "Mahabaleshwar is a scenic hill station in Maharashtra known for viewpoints, strawberry farms, valleys, pleasant weather, and weekend getaways.",
  image:
    "/images/mahabaleshwar.jpg",
  bestTime: "October to June",
  budget: "₹8,000 - ₹20,000",
  duration: "2-3 Days",
  highlights: [
    "Arthur Seat Point",
    "Elephant's Head Point",
    "Venna Lake",
    "Mapro Garden",
    "Strawberry Farms",
  ],
  thingsToDo: [
    "Visit scenic viewpoints",
    "Enjoy boating at Venna Lake",
    "Taste fresh strawberries",
    "Explore Mapro Garden",
    "Watch sunrise and sunset",
  ],
  travelTips: [
    "Weekdays are less crowded than weekends",
    "Carry light jackets during winter",
    "Start sightseeing early for better views",
    "Monsoon offers beautiful greenery",
  ],
  faqs: [
    {
      question: "What is Mahabaleshwar famous for?",
      answer:
        "Mahabaleshwar is famous for viewpoints, strawberries, pleasant weather, and scenic valleys.",
    },
    {
      question: "How many days are enough for Mahabaleshwar?",
      answer:
        "2 to 3 days are enough to cover major attractions comfortably.",
    },
  ],
  tags: ["hill", "family", "weekend"],
},
{
  slug: "diu",
  name: "Diu",
  tagline: "Peaceful Island Getaway",
  description:
    "Diu is a coastal destination known for beaches, Portuguese heritage, forts, seafood, and a relaxed atmosphere away from crowded tourist hubs.",
  image:
    "/images/diu.jpg",
  bestTime: "October to March",
  budget: "₹8,000 - ₹20,000",
  duration: "2-3 Days",
  highlights: [
    "Diu Fort",
    "Nagoa Beach",
    "St. Paul's Church",
    "Sunset Point",
    "Naida Caves",
  ],
  thingsToDo: [
    "Relax at beaches",
    "Visit Diu Fort",
    "Explore Naida Caves",
    "Watch sunset by the sea",
    "Try local seafood",
  ],
  travelTips: [
    "Rent a scooter for local travel",
    "Carry sunscreen and sunglasses",
    "Visit beaches early morning or evening",
    "Avoid peak afternoon heat in summer",
  ],
  faqs: [
    {
      question: "What is Diu famous for?",
      answer:
        "Diu is famous for beaches, Portuguese architecture, forts, and a peaceful coastal atmosphere.",
    },
    {
      question: "Is Diu good for a weekend trip?",
      answer:
        "Yes, Diu is one of the best coastal weekend destinations in western India.",
    },
  ],
  tags: ["beach", "coastal", "weekend", "family"],
},
];