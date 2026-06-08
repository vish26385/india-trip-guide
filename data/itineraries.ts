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
  slug: "4-days-in-jaipur",
  title: "4 Days in Jaipur Itinerary",
  destination: "Jaipur",
  duration: "4 Days",
  budget: "₹10,000 - ₹22,000",
  image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1400&auto=format&fit=crop",
  overview: "A complete Jaipur itinerary covering forts, palaces, food, and colorful local markets.",
  days: [
    { day: "Day 1", title: "Arrival & City Palace", plan: ["Reach Jaipur", "Check in", "Visit City Palace", "Explore local cafes"] },
    { day: "Day 2", title: "Amber Fort & Hawa Mahal", plan: ["Visit Amber Fort", "See Hawa Mahal", "Explore Johari Bazaar"] },
    { day: "Day 3", title: "Nahargarh & Local Markets", plan: ["Visit Nahargarh Fort", "Try Rajasthani food", "Shop in local markets"] },
    { day: "Day 4", title: "Relaxed Sightseeing & Departure", plan: ["Visit Albert Hall Museum", "Short cafe stop", "Departure"] },
  ],
},
{
  slug: "4-days-in-manali",
  title: "4 Days in Manali Itinerary",
  destination: "Manali",
  duration: "4 Days",
  budget: "₹12,000 - ₹28,000",
  image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1400&auto=format&fit=crop",
  overview: "A scenic Manali itinerary covering Solang Valley, Old Manali, temples, cafes, and mountain views.",
  days: [
    { day: "Day 1", title: "Arrival & Old Manali", plan: ["Reach Manali", "Check in", "Explore Old Manali", "Cafe hopping"] },
    { day: "Day 2", title: "Solang Valley Adventure", plan: ["Visit Solang Valley", "Try adventure activities", "Enjoy mountain views"] },
    { day: "Day 3", title: "Hadimba Temple & Local Sightseeing", plan: ["Visit Hadimba Temple", "Explore Mall Road", "Relax by the river"] },
    { day: "Day 4", title: "Short Walk & Departure", plan: ["Breakfast with mountain views", "Short local walk", "Departure"] },
  ],
},
{
  slug: "3-days-in-rishikesh",
  title: "3 Days in Rishikesh Itinerary",
  destination: "Rishikesh",
  duration: "3 Days",
  budget: "₹8,000 - ₹20,000",
  image: "/images/rishikesh.jpg",
  overview: "A balanced Rishikesh itinerary with river rafting, yoga, cafes, temples, and Ganga Aarti.",
  days: [
    { day: "Day 1", title: "Arrival & Ganga Aarti", plan: ["Reach Rishikesh", "Check in", "Visit Triveni Ghat", "Attend Ganga Aarti"] },
    { day: "Day 2", title: "Rafting & Cafes", plan: ["Go river rafting", "Visit Laxman Jhula area", "Relax at a riverside cafe"] },
    { day: "Day 3", title: "Yoga, Temples & Departure", plan: ["Morning yoga session", "Visit nearby temples", "Departure"] },
  ],
},
{
  slug: "5-days-in-kerala",
  title: "5 Days in Kerala Itinerary",
  destination: "Kerala",
  duration: "5 Days",
  budget: "₹18,000 - ₹45,000",
  image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1400&auto=format&fit=crop",
  overview: "A Kerala itinerary covering Kochi, Munnar, Alleppey backwaters, tea gardens, and peaceful nature experiences.",
  days: [
    { day: "Day 1", title: "Kochi Arrival", plan: ["Reach Kochi", "Explore Fort Kochi", "Visit Chinese fishing nets"] },
    { day: "Day 2", title: "Kochi to Munnar", plan: ["Drive to Munnar", "Visit waterfalls on the way", "Check in at hill stay"] },
    { day: "Day 3", title: "Munnar Sightseeing", plan: ["Visit tea gardens", "Explore Mattupetty Dam", "Enjoy viewpoints"] },
    { day: "Day 4", title: "Alleppey Backwaters", plan: ["Travel to Alleppey", "Houseboat or backwater stay", "Relax by the water"] },
    { day: "Day 5", title: "Departure", plan: ["Breakfast", "Return to Kochi", "Departure"] },
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
  slug: "3-days-in-mumbai",
  title: "3 Days in Mumbai Itinerary",
  destination: "Mumbai",
  duration: "3 Days",
  budget: "₹8,000 - ₹25,000",
  image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1400&auto=format&fit=crop",
  overview: "A complete Mumbai itinerary covering Marine Drive, Gateway of India, street food, markets, and city life.",
  days: [
    {
      day: "Day 1",
      title: "Gateway of India & Colaba",
      plan: [
        "Reach Mumbai",
        "Visit Gateway of India",
        "Explore Colaba Causeway",
        "Dinner near Colaba"
      ],
    },
    {
      day: "Day 2",
      title: "Marine Drive & City Attractions",
      plan: [
        "Walk at Marine Drive",
        "Visit Chhatrapati Shivaji Maharaj Terminus",
        "Explore Kala Ghoda",
        "Enjoy sunset at Marine Drive"
      ],
    },
    {
      day: "Day 3",
      title: "Juhu Beach & Departure",
      plan: [
        "Visit Juhu Beach",
        "Try Mumbai street food",
        "Local shopping",
        "Departure"
      ],
    },
  ],
},
{
  slug: "3-days-in-pondicherry",
  title: "3 Days in Pondicherry Itinerary",
  destination: "Pondicherry",
  duration: "3 Days",
  budget: "₹10,000 - ₹24,000",
  image: "/images/pondicherry.jpg",
  overview: "A relaxing Pondicherry itinerary covering White Town, beaches, French streets, cafes, and Auroville.",
  days: [
    {
      day: "Day 1",
      title: "White Town & Promenade",
      plan: [
        "Reach Pondicherry",
        "Check in",
        "Explore White Town",
        "Evening walk at Promenade Beach"
      ],
    },
    {
      day: "Day 2",
      title: "Auroville & Cafes",
      plan: [
        "Visit Auroville",
        "See Matrimandir area",
        "Cafe hopping",
        "Explore French streets"
      ],
    },
    {
      day: "Day 3",
      title: "Beach Time & Departure",
      plan: [
        "Visit Serenity Beach",
        "Relax by the coast",
        "Local shopping",
        "Departure"
      ],
    },
  ],
},
{
  slug: "2-days-in-mount-abu",
  title: "2 Days in Mount Abu Itinerary",
  destination: "Mount Abu",
  duration: "2 Days",
  budget: "₹7,000 - ₹18,000",
  image: "/images/mount_abu.jpg",
  overview: "A quick hill station escape covering Nakki Lake, Dilwara Temples, sunset points, and local markets.",
  days: [
    { day: "Day 1", title: "Arrival, Nakki Lake & Sunset Point", plan: ["Reach Mount Abu", "Check in", "Boating at Nakki Lake", "Visit Sunset Point"] },
    { day: "Day 2", title: "Dilwara Temples & Departure", plan: ["Visit Dilwara Temples", "Explore Guru Shikhar", "Local market walk", "Departure"] },
  ],
},
{
  slug: "4-days-in-munnar",
  title: "4 Days in Munnar Itinerary",
  destination: "Munnar",
  duration: "4 Days",
  budget: "₹12,000 - ₹30,000",
  image: "/images/munnar.jpg",
  overview: "A peaceful Munnar itinerary covering tea gardens, waterfalls, viewpoints, dams, and scenic hill drives.",
  days: [
    { day: "Day 1", title: "Arrival & Tea Garden Views", plan: ["Reach Munnar", "Check in", "Visit nearby tea gardens", "Relax"] },
    { day: "Day 2", title: "Mattupetty Dam & Viewpoints", plan: ["Visit Mattupetty Dam", "Explore Echo Point", "Drive to Top Station"] },
    { day: "Day 3", title: "Eravikulam & Waterfalls", plan: ["Visit Eravikulam National Park", "Explore waterfalls", "Cafe time"] },
    { day: "Day 4", title: "Slow Morning & Departure", plan: ["Breakfast with hill views", "Local shopping", "Departure"] },
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
  },
  {
  slug: "3-days-in-jodhpur",
  title: "3 Days in Jodhpur Itinerary",
  destination: "Jodhpur",
  duration: "3 Days",
  budget: "₹10,000 - ₹24,000",
  image: "/images/jodhpur-new.jpg",
  overview: "Explore Mehrangarh Fort, blue city lanes, markets, palaces, and rooftop views.",
  days: [
    { day: "Day 1", title: "Arrival & Clock Tower Market", plan: ["Reach Jodhpur", "Check in", "Explore Clock Tower Market", "Try local snacks"] },
    { day: "Day 2", title: "Mehrangarh Fort & Blue City", plan: ["Visit Mehrangarh Fort", "Explore Jaswant Thada", "Walk through blue city lanes"] },
    { day: "Day 3", title: "Umaid Bhawan & Departure", plan: ["Visit Umaid Bhawan Palace Museum", "Relax at rooftop cafe", "Departure"] },
  ],
},
{
  slug: "6-days-in-kashmir",
  title: "6 Days in Kashmir Itinerary",
  destination: "Kashmir",
  duration: "6 Days",
  budget: "₹20,000 - ₹50,000",
  image: "/images/kashmir.jpg",
  overview: "A beautiful Kashmir itinerary covering Srinagar, Gulmarg, Pahalgam, Sonmarg, gardens, and mountain scenery.",
  days: [
    { day: "Day 1", title: "Srinagar Arrival", plan: ["Reach Srinagar", "Check in", "Enjoy Dal Lake shikara ride"] },
    { day: "Day 2", title: "Srinagar Local Sightseeing", plan: ["Visit Mughal Gardens", "Explore old city", "Stay in houseboat"] },
    { day: "Day 3", title: "Gulmarg Day Trip", plan: ["Travel to Gulmarg", "Ride gondola if available", "Return to Srinagar"] },
    { day: "Day 4", title: "Pahalgam", plan: ["Drive to Pahalgam", "Explore valleys", "Relax in nature"] },
    { day: "Day 5", title: "Sonmarg or Leisure Day", plan: ["Visit Sonmarg or relax", "Photography", "Local shopping"] },
    { day: "Day 6", title: "Departure", plan: ["Breakfast", "Airport transfer", "Departure"] },
  ],
},
{
  slug: "3-days-in-mussoorie",
  title: "3 Days in Mussoorie Itinerary",
  destination: "Mussoorie",
  duration: "3 Days",
  budget: "₹8,000 - ₹22,000",
  image: "/images/mussoorie.jpg",
  overview: "A beautiful Mussoorie itinerary covering Mall Road, Kempty Falls, viewpoints, and Himalayan scenery.",
  days: [
    {
      day: "Day 1",
      title: "Arrival & Mall Road",
      plan: [
        "Reach Mussoorie",
        "Check in",
        "Walk on Mall Road",
        "Enjoy evening mountain views"
      ],
    },
    {
      day: "Day 2",
      title: "Kempty Falls & Viewpoints",
      plan: [
        "Visit Kempty Falls",
        "Explore Gun Hill",
        "Visit Lal Tibba",
        "Photography and sightseeing"
      ],
    },
    {
      day: "Day 3",
      title: "Relaxed Morning & Departure",
      plan: [
        "Breakfast with mountain views",
        "Local shopping",
        "Short nature walk",
        "Departure"
      ],
    },
  ],
},
{
  slug: "3-days-in-varanasi",
  title: "3 Days in Varanasi Itinerary",
  destination: "Varanasi",
  duration: "3 Days",
  budget: "₹8,000 - ₹20,000",
  image: "/images/varanasi.jpg",
  overview: "A spiritual Varanasi itinerary covering ghats, temples, boat rides, Ganga Aarti, and old city walks.",
  days: [
    { day: "Day 1", title: "Arrival & Evening Ganga Aarti", plan: ["Reach Varanasi", "Check in", "Attend Ganga Aarti at Dashashwamedh Ghat"] },
    { day: "Day 2", title: "Sunrise Boat Ride & Temples", plan: ["Early morning boat ride", "Visit Kashi Vishwanath Temple", "Explore old city lanes"] },
    { day: "Day 3", title: "Sarnath & Departure", plan: ["Visit Sarnath", "Local shopping", "Departure"] },
  ],
},
{
  slug: "3-days-in-agra",
  title: "3 Days in Agra Itinerary",
  destination: "Agra",
  duration: "3 Days",
  budget: "₹7,000 - ₹18,000",
  image: "/images/agra.jpg",
  overview: "A heritage Agra itinerary covering the Taj Mahal, Agra Fort, Mehtab Bagh, Fatehpur Sikri, and Mughal food.",
  days: [
    { day: "Day 1", title: "Arrival & Agra Fort", plan: ["Reach Agra", "Check in", "Visit Agra Fort", "Try Mughlai dinner"] },
    { day: "Day 2", title: "Taj Mahal & Mehtab Bagh", plan: ["Visit Taj Mahal at sunrise", "Relax at hotel", "Sunset at Mehtab Bagh"] },
    { day: "Day 3", title: "Fatehpur Sikri & Departure", plan: ["Visit Fatehpur Sikri", "Local shopping", "Departure"] },
  ],
},

{
  slug: "5-days-in-leh-ladakh",
  title: "5 Days in Leh Ladakh Itinerary",
  destination: "Leh",
  duration: "5 Days",
  budget: "₹18,000 - ₹40,000",
  image:
    "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1400&auto=format&fit=crop",
  overview:
    "A scenic Leh itinerary covering monasteries, high-altitude landscapes, Pangong Lake, and local culture.",
  days: [
    {
      day: "Day 1",
      title: "Arrival & Acclimatization",
      plan: ["Check in", "Rest due to altitude", "Evening market walk"],
    },
    {
      day: "Day 2",
      title: "Leh Local Sightseeing",
      plan: ["Shanti Stupa", "Leh Palace", "Hall of Fame"],
    },
    {
      day: "Day 3",
      title: "Pangong Lake",
      plan: ["Drive to Pangong", "Photography", "Lakeside stay"],
    },
    {
      day: "Day 4",
      title: "Monasteries & Local Culture",
      plan: ["Thiksey Monastery", "Shey Palace", "Local cafes"],
    },
    {
      day: "Day 5",
      title: "Departure",
      plan: ["Shopping", "Airport transfer"],
    },
  ],
},
{
  slug: "4-days-in-coorg",
  title: "4 Days in Coorg Itinerary",
  destination: "Coorg",
  duration: "4 Days",
  budget: "₹12,000 - ₹25,000",
  image:
    "/images/coorg.jpg",
  overview:
    "A relaxing Coorg itinerary with coffee plantations, waterfalls, viewpoints, and local cuisine.",
  days: [
    {
      day: "Day 1",
      title: "Arrival & Coffee Estates",
      plan: ["Check in", "Coffee plantation tour", "Local food"],
    },
    {
      day: "Day 2",
      title: "Abbey Falls & Raja's Seat",
      plan: ["Visit Abbey Falls", "Raja's Seat", "Sunset views"],
    },
    {
      day: "Day 3",
      title: "Dubare & Nature",
      plan: ["Dubare Elephant Camp", "Nature walk", "Photography"],
    },
    {
      day: "Day 4",
      title: "Markets & Departure",
      plan: ["Local shopping", "Departure"],
    },
  ],
},
{
  slug: "4-days-in-ooty",
  title: "4 Days in Ooty Itinerary",
  destination: "Ooty",
  duration: "4 Days",
  budget: "₹10,000 - ₹22,000",
  image:
    "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?q=80&w=1400&auto=format&fit=crop",
  overview:
    "Explore tea gardens, lakes, viewpoints, and the charming Nilgiri hills in Ooty.",
  days: [
    {
      day: "Day 1",
      title: "Arrival & Ooty Lake",
      plan: ["Check in", "Boating at Ooty Lake", "Market visit"],
    },
    {
      day: "Day 2",
      title: "Botanical Garden & Rose Garden",
      plan: ["Botanical Garden", "Rose Garden", "Local cafes"],
    },
    {
      day: "Day 3",
      title: "Doddabetta Peak",
      plan: ["Doddabetta Peak", "Tea factory visit", "Photography"],
    },
    {
      day: "Day 4",
      title: "Shopping & Departure",
      plan: ["Tea shopping", "Departure"],
    },
  ],
},
{
  slug: "5-days-in-spiti-valley",
  title: "5 Days in Spiti Valley Itinerary",
  destination: "Spiti Valley",
  duration: "5 Days",
  budget: "₹18,000 - ₹40,000",
  image:
    "/images/spiti-valley.jpg",
  overview:
    "Discover monasteries, villages, mountain landscapes, and the unique beauty of Spiti Valley.",
  days: [
    {
      day: "Day 1",
      title: "Arrival at Kaza",
      plan: ["Check in", "Local exploration", "Acclimatization"],
    },
    {
      day: "Day 2",
      title: "Key Monastery",
      plan: ["Visit Key Monastery", "Kibber Village", "Photography"],
    },
    {
      day: "Day 3",
      title: "Langza & Hikkim",
      plan: ["Langza", "Hikkim Post Office", "Komik Village"],
    },
    {
      day: "Day 4",
      title: "Chandratal Excursion",
      plan: ["Visit Chandratal Lake", "Nature views"],
    },
    {
      day: "Day 5",
      title: "Departure",
      plan: ["Breakfast", "Return journey"],
    },
  ],
},
{
  slug: "3-days-in-kasol",
  title: "3 Days in Kasol Itinerary",
  destination: "Kasol",
  duration: "3 Days",
  budget: "₹8,000 - ₹18,000",
  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop",
  overview:
    "A peaceful Kasol itinerary featuring riverside cafes, mountain views, and village walks.",
  days: [
    {
      day: "Day 1",
      title: "Arrival & Cafe Exploration",
      plan: ["Check in", "Explore cafes", "River walk"],
    },
    {
      day: "Day 2",
      title: "Manikaran & Villages",
      plan: ["Visit Manikaran", "Explore nearby villages"],
    },
    {
      day: "Day 3",
      title: "Nature & Departure",
      plan: ["Morning hike", "Photography", "Departure"],
    },
  ],
},
{
  slug: "3-days-in-dwarka",
  title: "3 Days in Dwarka Itinerary",
  destination: "Dwarka",
  duration: "3 Days",
  budget: "₹8,000 - ₹20,000",
  image:
    "/images/dwarka.jpg",
  overview:
    "Explore temples, spiritual heritage, coastal views, and local culture in Dwarka.",
  days: [
    {
      day: "Day 1",
      title: "Dwarkadhish Temple",
      plan: ["Temple visit", "Gomti Ghat", "Evening aarti"],
    },
    {
      day: "Day 2",
      title: "Bet Dwarka",
      plan: ["Boat ride", "Temple visits", "Coastal sightseeing"],
    },
    {
      day: "Day 3",
      title: "Local Attractions",
      plan: ["Sudama Setu", "Shopping", "Departure"],
    },
  ],
},
{
  slug: "2-days-in-somnath",
  title: "2 Days in Somnath Itinerary",
  destination: "Somnath",
  duration: "2 Days",
  budget: "₹8,000 - ₹18,000",
  image:
    "/images/somnath.jpg",
  overview:
    "A spiritual getaway focused on Somnath Temple, coastal views, and local attractions.",
  days: [
    {
      day: "Day 1",
      title: "Temple & Beach",
      plan: ["Somnath Temple", "Beach walk", "Evening aarti"],
    },
    {
      day: "Day 2",
      title: "Nearby Attractions",
      plan: ["Bhalka Tirth", "Triveni Sangam", "Departure"],
    },
  ],
},
{
  slug: "3-days-in-gir-national-park",
  title: "3 Days in Gir National Park Itinerary",
  destination: "Gir National Park",
  duration: "3 Days",
  budget: "₹10,000 - ₹25,000",
  image:
    "/images/gir.jpg",
  overview:
    "A wildlife-focused itinerary featuring lion safaris, nature experiences, and photography.",
  days: [
    {
      day: "Day 1",
      title: "Arrival & Nature Resort",
      plan: ["Check in", "Nature walk", "Relax"],
    },
    {
      day: "Day 2",
      title: "Lion Safari",
      plan: ["Morning safari", "Photography", "Wildlife spotting"],
    },
    {
      day: "Day 3",
      title: "Devalia & Departure",
      plan: ["Visit Devalia", "Departure"],
    },
  ],
},
{
  slug: "3-days-in-mahabaleshwar",
  title: "3 Days in Mahabaleshwar Itinerary",
  destination: "Mahabaleshwar",
  duration: "3 Days",
  budget: "₹8,000 - ₹20,000",
  image:
    "/images/mahabaleshwar.jpg",
  overview:
    "Enjoy viewpoints, strawberry farms, lakes, and cool weather in Mahabaleshwar.",
  days: [
    {
      day: "Day 1",
      title: "Arrival & Venna Lake",
      plan: ["Check in", "Boating", "Market visit"],
    },
    {
      day: "Day 2",
      title: "Viewpoints",
      plan: ["Arthur Seat", "Elephant Head Point", "Photography"],
    },
    {
      day: "Day 3",
      title: "Mapro Garden & Departure",
      plan: ["Visit Mapro Garden", "Shopping", "Departure"],
    },
  ],
},
{
  slug: "3-days-in-diu",
  title: "3 Days in Diu Itinerary",
  destination: "Diu",
  duration: "3 Days",
  budget: "₹8,000 - ₹20,000",
  image:
    "/images/diu.jpg",
  overview:
    "A coastal itinerary covering beaches, forts, Portuguese heritage, and relaxation.",
  days: [
    {
      day: "Day 1",
      title: "Arrival & Nagoa Beach",
      plan: ["Check in", "Beach time", "Sunset views"],
    },
    {
      day: "Day 2",
      title: "Fort & Heritage",
      plan: ["Diu Fort", "St. Paul's Church", "Naida Caves"],
    },
    {
      day: "Day 3",
      title: "Relax & Departure",
      plan: ["Morning beach walk", "Shopping", "Departure"],
    },
  ],
},
];