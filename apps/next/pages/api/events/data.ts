import type { EventDetail } from "@tickety/app/types";

export const mockEvents: EventDetail[] = [
  // ── Music ──────────────────────────────────────────────────
  {
    id: "1",
    name: "Heritage India Tour | Dr. Satinder Sartaaj Live In Delhi",
    date: "Sat, 14 Feb",
    time: "6:00 PM",
    venue: "Jawaharlal Nehru Stadium, Delhi/NCR",
    price: "\u20B91000 onwards",
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1000",
    description:
      "Experience the mesmerizing voice of Dr. Satinder Sartaaj live as he takes you on a Heritage India Tour. An evening filled with soulful Sufi music, poetry, and a celebration of Indian heritage.",
    category: "Music",
    organizer: "Heritage India Events",
    ageRestriction: "All Ages",
    artistId: "1",
  },
  {
    id: "2",
    name: "Bollywood Music Festival",
    date: "Sat, 21 Mar",
    time: "7:00 PM",
    venue: "Indira Gandhi Indoor Stadium, Delhi",
    price: "\u20B91500 onwards",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1000",
    description:
      "A grand celebration of Bollywood music featuring top playback singers and live orchestras performing your favourite hits from classic to contemporary Bollywood.",
    category: "Music",
    organizer: "Bollywood Live Entertainment",
    ageRestriction: "All Ages",
    artistId: "7",
  },
  {
    id: "3",
    name: "Arijit Singh Live - Love Tour 2026",
    date: "Sun, 05 Apr",
    time: "7:30 PM",
    venue: "DY Patil Stadium, Mumbai",
    price: "\u20B92000 onwards",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    description:
      "Arijit Singh performs his greatest hits live — from Tum Hi Ho to Kesariya. An unforgettable night of soulful melodies under the stars.",
    category: "Music",
    organizer: "Live Nation India",
    ageRestriction: "All Ages",
    artistId: "1",
  },
  {
    id: "4",
    name: "Prateek Kuhad Indie Acoustic Night",
    date: "Fri, 18 Apr",
    time: "8:00 PM",
    venue: "The Piano Man Jazz Club, Delhi",
    price: "\u20B91200 onwards",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    description:
      "An intimate acoustic session with Prateek Kuhad performing fan favourites and tracks from his upcoming album in a cozy setting.",
    category: "Music",
    organizer: "The Piano Man",
    ageRestriction: "All Ages",
    artistId: "3",
  },
  {
    id: "5",
    name: "Ritviz x When Chai Met Toast - Double Headline Tour",
    date: "Sat, 26 Apr",
    time: "6:00 PM",
    venue: "Phoenix Marketcity, Bangalore",
    price: "\u20B9800 onwards",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Two of India's hottest indie acts share the stage for a high-energy double headline show blending electronic and folk vibes.",
    category: "Music",
    organizer: "Paytm Insider",
    ageRestriction: "All Ages",
    artistId: "6",
  },

  // ── Nightlife ──────────────────────────────────────────────
  {
    id: "6",
    name: "Sunburn Arena ft. Alan Walker - Delhi",
    date: "Sun, 22 Feb",
    time: "4:00 PM",
    venue: "Backyard Sports Club, Gurgaon",
    price: "\u20B92500 onwards",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
    description:
      "Sunburn Arena presents the internationally acclaimed DJ and producer Alan Walker live in Delhi. Get ready for an electrifying evening of EDM with hits like Faded, Alone, and Darkside.",
    category: "Nightlife",
    organizer: "Sunburn",
    ageRestriction: "18+",
    artistId: "4",
  },
  {
    id: "7",
    name: "Nucleya Bass Drop Night",
    date: "Sat, 08 Mar",
    time: "9:00 PM",
    venue: "Kitty Su, The Lalit, Delhi",
    price: "\u20B91800 onwards",
    image:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    description:
      "Nucleya takes over Kitty Su for a massive bass-heavy night featuring his signature blend of Indian folk and heavy electronic beats.",
    category: "Nightlife",
    organizer: "Kitty Su Events",
    ageRestriction: "21+",
    artistId: "4",
  },
  {
    id: "8",
    name: "Glow Paint Party - Neon Nights",
    date: "Fri, 28 Mar",
    time: "10:00 PM",
    venue: "Aer Lounge, Four Seasons, Mumbai",
    price: "\u20B92000 onwards",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    description:
      "Dance the night away under UV lights and neon paint at Mumbai's most iconic rooftop venue. DJs spinning house and techno all night.",
    category: "Nightlife",
    organizer: "Neon Collective",
    ageRestriction: "21+",
    artistId: "6",
  },

  // ── Comedy ─────────────────────────────────────────────────
  {
    id: "9",
    name: "Zakir Khan Live - Mannpasand Tour",
    date: "Fri, 14 Mar",
    time: "8:00 PM",
    venue: "Siri Fort Auditorium, Delhi",
    price: "\u20B9799 onwards",
    image:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000",
    description:
      "Zakir Khan brings his signature storytelling and humour in this all-new stand-up special. An evening full of relatable comedy and heartwarming tales.",
    category: "Comedy",
    organizer: "OML Entertainment",
    ageRestriction: "16+",
    artistId: "8",
  },
  {
    id: "10",
    name: "Biswa Kalyan Rath - New Material Night",
    date: "Sat, 22 Mar",
    time: "7:30 PM",
    venue: "The Habitat, Mumbai",
    price: "\u20B9599 onwards",
    image:
      "https://images.unsplash.com/photo-1527224538127-308f8790f923?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1527224538127-308f8790f923?auto=format&fit=crop&q=80&w=1000",
    description:
      "Biswa tests fresh material in an intimate setting. Expect sharp observations, dry wit, and plenty of laughs.",
    category: "Comedy",
    organizer: "The Habitat Comedy",
    ageRestriction: "16+",
    artistId: "5",
  },
  {
    id: "11",
    name: "Comedy Night ft. Abhishek Upmanyu",
    date: "Sun, 06 Apr",
    time: "8:00 PM",
    venue: "Canvas Laugh Club, Mumbai",
    price: "\u20B9999 onwards",
    image:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=1000",
    description:
      "Abhishek Upmanyu delivers a hilarious hour of stand-up about everyday life, relationships, and growing up in India.",
    category: "Comedy",
    organizer: "Canvas Laugh Club",
    ageRestriction: "16+",
    artistId: "3",
  },

  // ── Sports ─────────────────────────────────────────────────
  {
    id: "12",
    name: "IPL 2026 - Delhi Capitals vs Mumbai Indians",
    date: "Sun, 30 Mar",
    time: "3:30 PM",
    venue: "Arun Jaitley Stadium, Delhi",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch the thrilling rivalry unfold live as Delhi Capitals take on Mumbai Indians in IPL 2026. Cricket, cheering, and non-stop action.",
    category: "Sports",
    organizer: "BCCI",
    ageRestriction: "All Ages",
    artistId: "1",
  },
  {
    id: "13",
    name: "Delhi Half Marathon 2026",
    date: "Sun, 20 Apr",
    time: "5:30 AM",
    venue: "Jawaharlal Nehru Stadium, Delhi",
    price: "\u20B9800 onwards",
    image:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&q=80&w=1000",
    description:
      "Lace up and run through the heart of the capital. Categories include 5K, 10K, and 21K. Medals, refreshments, and post-run celebrations await.",
    category: "Sports",
    organizer: "Procam International",
    ageRestriction: "All Ages",
    artistId: "2",
  },

  // ── Performances ───────────────────────────────────────────
  {
    id: "14",
    name: "Comic Con India 2026 - Delhi Edition",
    date: "Fri, 06 Mar",
    time: "11:00 AM",
    venue: "NSIC Grounds, Okhla",
    price: "\u20B9899 onwards",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    description:
      "India's greatest pop culture event is back! Comic Con India 2026 Delhi Edition features celebrity panels, cosplay contests, exclusive merchandise, gaming zones, and much more.",
    category: "Performances",
    organizer: "Comic Con India",
    ageRestriction: "All Ages",
    artistId: "8",
  },
  {
    id: "15",
    name: "Kathak Utsav - Classical Dance Evening",
    date: "Sat, 12 Apr",
    time: "6:30 PM",
    venue: "Kamani Auditorium, Delhi",
    price: "\u20B9600 onwards",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000",
    description:
      "An enchanting evening of Kathak performances by leading classical dancers showcasing the beauty and grace of this ancient art form.",
    category: "Performances",
    organizer: "Spic Macay",
    ageRestriction: "All Ages",
    artistId: "2",
  },

  // ── Food & Drink ───────────────────────────────────────────
  {
    id: "16",
    name: "Delhi Street Food Festival 2026",
    date: "Sat, 15 Mar",
    time: "12:00 PM",
    venue: "JLN Stadium Grounds, Delhi",
    price: "\u20B9350 onwards",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000",
    description:
      "Over 100 food stalls featuring Delhi's most iconic street food alongside craft beverages, live music, and cooking demos.",
    category: "Food & Drink",
    organizer: "Foodholic Events",
    ageRestriction: "All Ages",
    artistId: "7",
  },
  {
    id: "17",
    name: "Craft Beer & Burger Fest",
    date: "Sun, 13 Apr",
    time: "1:00 PM",
    venue: "Episode, Sector 29, Gurgaon",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    description:
      "Sample 30+ craft beers from India's best microbreweries paired with gourmet burgers from top chefs. Live DJ sets all afternoon.",
    category: "Food & Drink",
    organizer: "BeerCraft India",
    ageRestriction: "21+",
    artistId: "4",
  },

  // ── Fests & Fairs ──────────────────────────────────────────
  {
    id: "18",
    name: "Holi Music & Color Festival",
    date: "Sun, 15 Mar",
    time: "10:00 AM",
    venue: "Asiad Village, Delhi",
    price: "\u20B91200 onwards",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=1000",
    description:
      "Celebrate Holi with music, colour, and dance! Featuring DJ sets, rain dance, organic colours, and Bollywood performances.",
    category: "Fests & Fairs",
    organizer: "Color Carnival India",
    ageRestriction: "All Ages",
    artistId: "6",
  },
  {
    id: "19",
    name: "Weekend Flea Market & Art Bazaar",
    date: "Sat, 29 Mar",
    time: "11:00 AM",
    venue: "Dilli Haat, INA, Delhi",
    price: "\u20B9100 onwards",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1000",
    description:
      "Browse handcrafted goods, vintage finds, indie fashion, and artisanal food at Delhi's favourite weekend bazaar.",
    category: "Fests & Fairs",
    organizer: "The Lil Flea",
    ageRestriction: "All Ages",
    artistId: "5",
  },

  // ── Social Mixer ───────────────────────────────────────────
  {
    id: "20",
    name: "Strangers' Night - Speed Networking",
    date: "Fri, 07 Mar",
    time: "7:00 PM",
    venue: "Social, Hauz Khas, Delhi",
    price: "\u20B9499 onwards",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    description:
      "Meet new people through fun icebreakers, speed networking rounds, and casual conversations over food and drinks.",
    category: "Social Mixer",
    organizer: "Meetup Delhi",
    ageRestriction: "18+",
    artistId: "3",
  },

  // ── Screenings ─────────────────────────────────────────────
  {
    id: "21",
    name: "Outdoor Movie Night - Dil Chahta Hai",
    date: "Sat, 05 Apr",
    time: "7:30 PM",
    venue: "Sunder Nursery, Delhi",
    price: "\u20B9450 onwards",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch the iconic Dil Chahta Hai under the stars with bean bags, popcorn, and a giant outdoor screen in the beautiful Sunder Nursery.",
    category: "Screenings",
    organizer: "Sunset Cinema Club",
    ageRestriction: "All Ages",
    artistId: "1",
  },
  {
    id: "22",
    name: "Anime Marathon - Studio Ghibli Night",
    date: "Sun, 27 Apr",
    time: "5:00 PM",
    venue: "PVR Director's Cut, Vasant Kunj, Delhi",
    price: "\u20B9600 onwards",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    description:
      "Back-to-back screenings of Spirited Away, My Neighbor Totoro, and Howl's Moving Castle on the big screen with Japanese snacks.",
    category: "Screenings",
    organizer: "Anime Club India",
    ageRestriction: "All Ages",
    artistId: "5",
  },

  // ── Fitness ────────────────────────────────────────────────
  {
    id: "23",
    name: "Sunrise Yoga at India Gate",
    date: "Sun, 09 Mar",
    time: "6:00 AM",
    venue: "India Gate Lawns, Delhi",
    price: "\u20B9300 onwards",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    description:
      "Start your Sunday with a rejuvenating yoga session at India Gate. Open to all levels. Mats and refreshments provided.",
    category: "Fitness",
    organizer: "FitIndia Movement",
    ageRestriction: "All Ages",
    artistId: "2",
  },
  {
    id: "24",
    name: "CrossFit Championship Delhi 2026",
    date: "Sat, 19 Apr",
    time: "8:00 AM",
    venue: "Thyagaraj Sports Complex, Delhi",
    price: "\u20B91500 onwards",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch elite athletes compete in gruelling CrossFit workouts, or sign up for the amateur category and test your own limits.",
    category: "Fitness",
    organizer: "CrossFit India",
    ageRestriction: "16+",
    artistId: "8",
  },

  // ── Conferences ────────────────────────────────────────────
  {
    id: "25",
    name: "TechSpark India 2026 - AI & Future",
    date: "Thu, 10 Apr",
    time: "9:00 AM",
    venue: "India Expo Centre, Greater Noida",
    price: "\u20B93000 onwards",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=1000",
    description:
      "India's premier tech conference featuring keynotes on AI, blockchain, and startups. Network with industry leaders and investors.",
    category: "Conferences",
    organizer: "TechSpark Events",
    ageRestriction: "All Ages",
    artistId: "4",
  },

  // ── Expos ──────────────────────────────────────────────────
  {
    id: "26",
    name: "Auto Expo 2026 - The Motor Show",
    date: "Fri, 25 Apr",
    time: "10:00 AM",
    venue: "India Expo Mart, Greater Noida",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000",
    description:
      "Experience the future of mobility with concept cars, electric vehicles, and superbikes from leading manufacturers around the world.",
    category: "Expos",
    organizer: "SIAM",
    ageRestriction: "All Ages",
    artistId: "7",
  },

  // ── Open Mics ──────────────────────────────────────────────
  {
    id: "27",
    name: "Open Mic Poetry & Spoken Word Night",
    date: "Wed, 12 Mar",
    time: "7:30 PM",
    venue: "Stein Auditorium, India Habitat Centre, Delhi",
    price: "\u20B9200 onwards",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000",
    description:
      "Share your poetry, stories, or music on stage. A welcoming space for first-timers and seasoned performers alike.",
    category: "Open Mics",
    organizer: "Spoke & Word Collective",
    ageRestriction: "All Ages",
    artistId: "3",
  },
  {
    id: "28",
    name: "Comedy Open Mic - Try Out Tuesday",
    date: "Tue, 25 Mar",
    time: "8:00 PM",
    venue: "The Laugh Store, Gurgaon",
    price: "\u20B9150 onwards",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000",
    description:
      "Aspiring comedians get 5 minutes each to make you laugh. Discover the next big name in Indian comedy!",
    category: "Open Mics",
    organizer: "The Laugh Store",
    ageRestriction: "16+",
    artistId: "6",
  },

  // ── Art Exhibitions ────────────────────────────────────────
  {
    id: "29",
    name: "Modern Indian Art - Curated Gallery Walk",
    date: "Sat, 22 Mar",
    time: "11:00 AM",
    venue: "National Gallery of Modern Art, Delhi",
    price: "\u20B9250 onwards",
    image:
      "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80&w=1000",
    description:
      "A guided gallery walk through works by MF Husain, SH Raza, and contemporary Indian artists. Includes complimentary art catalogue.",
    category: "Art Exhibitions",
    organizer: "NGMA Delhi",
    ageRestriction: "All Ages",
    artistId: "2",
  },

  // ── Pets ───────────────────────────────────────────────────
  {
    id: "30",
    name: "Pawsome Pet Carnival 2026",
    date: "Sun, 16 Mar",
    time: "10:00 AM",
    venue: "Leisure Valley Park, Gurgaon",
    price: "\u20B9400 onwards",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
    description:
      "Bring your furry friends for a day of pet shows, agility courses, adoption drives, vet consultations, and pet-friendly food stalls.",
    category: "Pets",
    organizer: "PetFed India",
    ageRestriction: "All Ages",
    artistId: "5",
  },

  // ── Artist-specific Events ────────────────────────────────────
  {
    id: "31",
    name: "Shreya Ghoshal - Melody Queen Live",
    date: "Sat, 10 May",
    time: "7:00 PM",
    venue: "Shanmukhananda Hall, Mumbai",
    price: "\u20B91500 onwards",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000",
    description:
      "Shreya Ghoshal performs an enchanting evening of Bollywood classics and new compositions with a full live orchestra.",
    category: "Music",
    organizer: "Melody Events",
    ageRestriction: "All Ages",
    artistId: "2",
  },
  {
    id: "32",
    name: "Shreya Ghoshal - Classical Crossover Night",
    date: "Sun, 25 May",
    time: "6:30 PM",
    venue: "Siri Fort Auditorium, Delhi",
    price: "\u20B91800 onwards",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80&w=1000",
    description:
      "A unique concert blending Indian classical ragas with contemporary Bollywood melodies, performed by the legendary Shreya Ghoshal.",
    category: "Music",
    organizer: "Spic Macay",
    ageRestriction: "All Ages",
    artistId: "2",
  },
  {
    id: "33",
    name: "Anuv Jain - Baarishein Tour 2026",
    date: "Fri, 02 May",
    time: "8:00 PM",
    venue: "Zorba Entertainment Centre, Delhi",
    price: "\u20B9999 onwards",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Anuv Jain brings his dreamy indie-pop hits to Delhi with an intimate live performance featuring tracks from his latest album.",
    category: "Music",
    organizer: "Paytm Insider",
    ageRestriction: "All Ages",
    artistId: "5",
  },
  {
    id: "34",
    name: "Neha Kakkar Live - Party Anthems Tour",
    date: "Sat, 17 May",
    time: "8:00 PM",
    venue: "NSCI Dome, Mumbai",
    price: "\u20B91200 onwards",
    image:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=1000",
    description:
      "Neha Kakkar delivers an electrifying night of her biggest Bollywood party anthems with high-energy dance performances.",
    category: "Music",
    organizer: "BookMyShow Live",
    ageRestriction: "All Ages",
    artistId: "7",
  },
  {
    id: "35",
    name: "Divine - Gully Gang Live",
    date: "Fri, 09 May",
    time: "9:00 PM",
    venue: "AntiSOCIAL, Mumbai",
    price: "\u20B9800 onwards",
    image:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    description:
      "Divine and the Gully Gang crew bring raw hip-hop energy with a night of bars, beats, and street culture.",
    category: "Music",
    organizer: "Gully Gang Entertainment",
    ageRestriction: "18+",
    artistId: "8",
  },
  {
    id: "36",
    name: "Arijit Singh - Soulful Sundown",
    date: "Sat, 24 May",
    time: "6:00 PM",
    venue: "Jio World Garden, Mumbai",
    price: "\u20B92500 onwards",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    description:
      "An open-air sunset concert featuring Arijit Singh performing romantic ballads and fan favourites in an intimate garden setting.",
    category: "Music",
    organizer: "Live Nation India",
    ageRestriction: "All Ages",
    artistId: "1",
  },
  {
    id: "3",
    name: "Arijit Singh Live - Love Tour 2026",
    date: "Sun, 05 Apr",
    time: "7:30 PM",
    venue: "DY Patil Stadium, Mumbai",
    price: "\u20B92000 onwards",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    description:
      "Arijit Singh performs his greatest hits live — from Tum Hi Ho to Kesariya. An unforgettable night of soulful melodies under the stars.",
    category: "Music",
    organizer: "Live Nation India",
    ageRestriction: "All Ages",
  },
  {
    id: "4",
    name: "Prateek Kuhad Indie Acoustic Night",
    date: "Fri, 18 Apr",
    time: "8:00 PM",
    venue: "The Piano Man Jazz Club, Delhi",
    price: "\u20B91200 onwards",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    description:
      "An intimate acoustic session with Prateek Kuhad performing fan favourites and tracks from his upcoming album in a cozy setting.",
    category: "Music",
    organizer: "The Piano Man",
    ageRestriction: "All Ages",
  },
  {
    id: "5",
    name: "Ritviz x When Chai Met Toast - Double Headline Tour",
    date: "Sat, 26 Apr",
    time: "6:00 PM",
    venue: "Phoenix Marketcity, Bangalore",
    price: "\u20B9800 onwards",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Two of India's hottest indie acts share the stage for a high-energy double headline show blending electronic and folk vibes.",
    category: "Music",
    organizer: "Paytm Insider",
    ageRestriction: "All Ages",
  },

  // ── Nightlife ──────────────────────────────────────────────
  {
    id: "6",
    name: "Sunburn Arena ft. Alan Walker - Delhi",
    date: "Sun, 22 Feb",
    time: "4:00 PM",
    venue: "Backyard Sports Club, Gurgaon",
    price: "\u20B92500 onwards",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
    description:
      "Sunburn Arena presents the internationally acclaimed DJ and producer Alan Walker live in Delhi. Get ready for an electrifying evening of EDM with hits like Faded, Alone, and Darkside.",
    category: "Nightlife",
    organizer: "Sunburn",
    ageRestriction: "18+",
  },
  {
    id: "7",
    name: "Nucleya Bass Drop Night",
    date: "Sat, 08 Mar",
    time: "9:00 PM",
    venue: "Kitty Su, The Lalit, Delhi",
    price: "\u20B91800 onwards",
    image:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    description:
      "Nucleya takes over Kitty Su for a massive bass-heavy night featuring his signature blend of Indian folk and heavy electronic beats.",
    category: "Nightlife",
    organizer: "Kitty Su Events",
    ageRestriction: "21+",
  },
  {
    id: "8",
    name: "Glow Paint Party - Neon Nights",
    date: "Fri, 28 Mar",
    time: "10:00 PM",
    venue: "Aer Lounge, Four Seasons, Mumbai",
    price: "\u20B92000 onwards",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    description:
      "Dance the night away under UV lights and neon paint at Mumbai's most iconic rooftop venue. DJs spinning house and techno all night.",
    category: "Nightlife",
    organizer: "Neon Collective",
    ageRestriction: "21+",
  },

  // ── Comedy ─────────────────────────────────────────────────
  {
    id: "9",
    name: "Zakir Khan Live - Mannpasand Tour",
    date: "Fri, 14 Mar",
    time: "8:00 PM",
    venue: "Siri Fort Auditorium, Delhi",
    price: "\u20B9799 onwards",
    image:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000",
    description:
      "Zakir Khan brings his signature storytelling and humour in this all-new stand-up special. An evening full of relatable comedy and heartwarming tales.",
    category: "Comedy",
    organizer: "OML Entertainment",
    ageRestriction: "16+",
  },
  {
    id: "10",
    name: "Biswa Kalyan Rath - New Material Night",
    date: "Sat, 22 Mar",
    time: "7:30 PM",
    venue: "The Habitat, Mumbai",
    price: "\u20B9599 onwards",
    image:
      "https://images.unsplash.com/photo-1527224538127-308f8790f923?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1527224538127-308f8790f923?auto=format&fit=crop&q=80&w=1000",
    description:
      "Biswa tests fresh material in an intimate setting. Expect sharp observations, dry wit, and plenty of laughs.",
    category: "Comedy",
    organizer: "The Habitat Comedy",
    ageRestriction: "16+",
  },
  {
    id: "11",
    name: "Comedy Night ft. Abhishek Upmanyu",
    date: "Sun, 06 Apr",
    time: "8:00 PM",
    venue: "Canvas Laugh Club, Mumbai",
    price: "\u20B9999 onwards",
    image:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=1000",
    description:
      "Abhishek Upmanyu delivers a hilarious hour of stand-up about everyday life, relationships, and growing up in India.",
    category: "Comedy",
    organizer: "Canvas Laugh Club",
    ageRestriction: "16+",
  },

  // ── Sports ─────────────────────────────────────────────────
  {
    id: "12",
    name: "IPL 2026 - Delhi Capitals vs Mumbai Indians",
    date: "Sun, 30 Mar",
    time: "3:30 PM",
    venue: "Arun Jaitley Stadium, Delhi",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch the thrilling rivalry unfold live as Delhi Capitals take on Mumbai Indians in IPL 2026. Cricket, cheering, and non-stop action.",
    category: "Sports",
    organizer: "BCCI",
    ageRestriction: "All Ages",
  },
  {
    id: "13",
    name: "Delhi Half Marathon 2026",
    date: "Sun, 20 Apr",
    time: "5:30 AM",
    venue: "Jawaharlal Nehru Stadium, Delhi",
    price: "\u20B9800 onwards",
    image:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&q=80&w=1000",
    description:
      "Lace up and run through the heart of the capital. Categories include 5K, 10K, and 21K. Medals, refreshments, and post-run celebrations await.",
    category: "Sports",
    organizer: "Procam International",
    ageRestriction: "All Ages",
  },

  // ── Performances ───────────────────────────────────────────
  {
    id: "14",
    name: "Comic Con India 2026 - Delhi Edition",
    date: "Fri, 06 Mar",
    time: "11:00 AM",
    venue: "NSIC Grounds, Okhla",
    price: "\u20B9899 onwards",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    description:
      "India's greatest pop culture event is back! Comic Con India 2026 Delhi Edition features celebrity panels, cosplay contests, exclusive merchandise, gaming zones, and much more.",
    category: "Performances",
    organizer: "Comic Con India",
    ageRestriction: "All Ages",
  },
  {
    id: "15",
    name: "Kathak Utsav - Classical Dance Evening",
    date: "Sat, 12 Apr",
    time: "6:30 PM",
    venue: "Kamani Auditorium, Delhi",
    price: "\u20B9600 onwards",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000",
    description:
      "An enchanting evening of Kathak performances by leading classical dancers showcasing the beauty and grace of this ancient art form.",
    category: "Performances",
    organizer: "Spic Macay",
    ageRestriction: "All Ages",
  },

  // ── Food & Drink ───────────────────────────────────────────
  {
    id: "16",
    name: "Delhi Street Food Festival 2026",
    date: "Sat, 15 Mar",
    time: "12:00 PM",
    venue: "JLN Stadium Grounds, Delhi",
    price: "\u20B9350 onwards",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000",
    description:
      "Over 100 food stalls featuring Delhi's most iconic street food alongside craft beverages, live music, and cooking demos.",
    category: "Food & Drink",
    organizer: "Foodholic Events",
    ageRestriction: "All Ages",
  },
  {
    id: "17",
    name: "Craft Beer & Burger Fest",
    date: "Sun, 13 Apr",
    time: "1:00 PM",
    venue: "Episode, Sector 29, Gurgaon",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    description:
      "Sample 30+ craft beers from India's best microbreweries paired with gourmet burgers from top chefs. Live DJ sets all afternoon.",
    category: "Food & Drink",
    organizer: "BeerCraft India",
    ageRestriction: "21+",
  },

  // ── Fests & Fairs ──────────────────────────────────────────
  {
    id: "18",
    name: "Holi Music & Color Festival",
    date: "Sun, 15 Mar",
    time: "10:00 AM",
    venue: "Asiad Village, Delhi",
    price: "\u20B91200 onwards",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=1000",
    description:
      "Celebrate Holi with music, colour, and dance! Featuring DJ sets, rain dance, organic colours, and Bollywood performances.",
    category: "Fests & Fairs",
    organizer: "Color Carnival India",
    ageRestriction: "All Ages",
  },
  {
    id: "19",
    name: "Weekend Flea Market & Art Bazaar",
    date: "Sat, 29 Mar",
    time: "11:00 AM",
    venue: "Dilli Haat, INA, Delhi",
    price: "\u20B9100 onwards",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1000",
    description:
      "Browse handcrafted goods, vintage finds, indie fashion, and artisanal food at Delhi's favourite weekend bazaar.",
    category: "Fests & Fairs",
    organizer: "The Lil Flea",
    ageRestriction: "All Ages",
  },

  // ── Social Mixer ───────────────────────────────────────────
  {
    id: "20",
    name: "Strangers' Night - Speed Networking",
    date: "Fri, 07 Mar",
    time: "7:00 PM",
    venue: "Social, Hauz Khas, Delhi",
    price: "\u20B9499 onwards",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    description:
      "Meet new people through fun icebreakers, speed networking rounds, and casual conversations over food and drinks.",
    category: "Social Mixer",
    organizer: "Meetup Delhi",
    ageRestriction: "18+",
  },

  // ── Screenings ─────────────────────────────────────────────
  {
    id: "21",
    name: "Outdoor Movie Night - Dil Chahta Hai",
    date: "Sat, 05 Apr",
    time: "7:30 PM",
    venue: "Sunder Nursery, Delhi",
    price: "\u20B9450 onwards",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch the iconic Dil Chahta Hai under the stars with bean bags, popcorn, and a giant outdoor screen in the beautiful Sunder Nursery.",
    category: "Screenings",
    organizer: "Sunset Cinema Club",
    ageRestriction: "All Ages",
  },
  {
    id: "22",
    name: "Anime Marathon - Studio Ghibli Night",
    date: "Sun, 27 Apr",
    time: "5:00 PM",
    venue: "PVR Director's Cut, Vasant Kunj, Delhi",
    price: "\u20B9600 onwards",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    description:
      "Back-to-back screenings of Spirited Away, My Neighbor Totoro, and Howl's Moving Castle on the big screen with Japanese snacks.",
    category: "Screenings",
    organizer: "Anime Club India",
    ageRestriction: "All Ages",
  },

  // ── Fitness ────────────────────────────────────────────────
  {
    id: "23",
    name: "Sunrise Yoga at India Gate",
    date: "Sun, 09 Mar",
    time: "6:00 AM",
    venue: "India Gate Lawns, Delhi",
    price: "\u20B9300 onwards",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    description:
      "Start your Sunday with a rejuvenating yoga session at India Gate. Open to all levels. Mats and refreshments provided.",
    category: "Fitness",
    organizer: "FitIndia Movement",
    ageRestriction: "All Ages",
  },
  {
    id: "24",
    name: "CrossFit Championship Delhi 2026",
    date: "Sat, 19 Apr",
    time: "8:00 AM",
    venue: "Thyagaraj Sports Complex, Delhi",
    price: "\u20B91500 onwards",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch elite athletes compete in gruelling CrossFit workouts, or sign up for the amateur category and test your own limits.",
    category: "Fitness",
    organizer: "CrossFit India",
    ageRestriction: "16+",
  },

  // ── Conferences ────────────────────────────────────────────
  {
    id: "25",
    name: "TechSpark India 2026 - AI & Future",
    date: "Thu, 10 Apr",
    time: "9:00 AM",
    venue: "India Expo Centre, Greater Noida",
    price: "\u20B93000 onwards",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=1000",
    description:
      "India's premier tech conference featuring keynotes on AI, blockchain, and startups. Network with industry leaders and investors.",
    category: "Conferences",
    organizer: "TechSpark Events",
    ageRestriction: "All Ages",
  },

  // ── Expos ──────────────────────────────────────────────────
  {
    id: "26",
    name: "Auto Expo 2026 - The Motor Show",
    date: "Fri, 25 Apr",
    time: "10:00 AM",
    venue: "India Expo Mart, Greater Noida",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000",
    description:
      "Experience the future of mobility with concept cars, electric vehicles, and superbikes from leading manufacturers around the world.",
    category: "Expos",
    organizer: "SIAM",
    ageRestriction: "All Ages",
  },

  // ── Open Mics ──────────────────────────────────────────────
  {
    id: "27",
    name: "Open Mic Poetry & Spoken Word Night",
    date: "Wed, 12 Mar",
    time: "7:30 PM",
    venue: "Stein Auditorium, India Habitat Centre, Delhi",
    price: "\u20B9200 onwards",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000",
    description:
      "Share your poetry, stories, or music on stage. A welcoming space for first-timers and seasoned performers alike.",
    category: "Open Mics",
    organizer: "Spoke & Word Collective",
    ageRestriction: "All Ages",
  },
  {
    id: "28",
    name: "Comedy Open Mic - Try Out Tuesday",
    date: "Tue, 25 Mar",
    time: "8:00 PM",
    venue: "The Laugh Store, Gurgaon",
    price: "\u20B9150 onwards",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000",
    description:
      "Aspiring comedians get 5 minutes each to make you laugh. Discover the next big name in Indian comedy!",
    category: "Open Mics",
    organizer: "The Laugh Store",
    ageRestriction: "16+",
  },

  // ── Art Exhibitions ────────────────────────────────────────
  {
    id: "29",
    name: "Modern Indian Art - Curated Gallery Walk",
    date: "Sat, 22 Mar",
    time: "11:00 AM",
    venue: "National Gallery of Modern Art, Delhi",
    price: "\u20B9250 onwards",
    image:
      "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80&w=1000",
    description:
      "A guided gallery walk through works by MF Husain, SH Raza, and contemporary Indian artists. Includes complimentary art catalogue.",
    category: "Art Exhibitions",
    organizer: "NGMA Delhi",
    ageRestriction: "All Ages",
  },

  // ── Pets ───────────────────────────────────────────────────
  {
    id: "30",
    name: "Pawsome Pet Carnival 2026",
    date: "Sun, 16 Mar",
    time: "10:00 AM",
    venue: "Leisure Valley Park, Gurgaon",
    price: "\u20B9400 onwards",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
    description:
      "Bring your furry friends for a day of pet shows, agility courses, adoption drives, vet consultations, and pet-friendly food stalls.",
    category: "Pets",
    organizer: "PetFed India",
    ageRestriction: "All Ages",
  },
  {
    id: "3",
    name: "Arijit Singh Live - Love Tour 2026",
    date: "Sun, 05 Apr",
    time: "7:30 PM",
    venue: "DY Patil Stadium, Mumbai",
    price: "\u20B92000 onwards",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    description:
      "Arijit Singh performs his greatest hits live — from Tum Hi Ho to Kesariya. An unforgettable night of soulful melodies under the stars.",
    category: "Music",
    organizer: "Live Nation India",
    ageRestriction: "All Ages",
  },
  {
    id: "4",
    name: "Prateek Kuhad Indie Acoustic Night",
    date: "Fri, 18 Apr",
    time: "8:00 PM",
    venue: "The Piano Man Jazz Club, Delhi",
    price: "\u20B91200 onwards",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    description:
      "An intimate acoustic session with Prateek Kuhad performing fan favourites and tracks from his upcoming album in a cozy setting.",
    category: "Music",
    organizer: "The Piano Man",
    ageRestriction: "All Ages",
  },
  {
    id: "5",
    name: "Ritviz x When Chai Met Toast - Double Headline Tour",
    date: "Sat, 26 Apr",
    time: "6:00 PM",
    venue: "Phoenix Marketcity, Bangalore",
    price: "\u20B9800 onwards",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Two of India's hottest indie acts share the stage for a high-energy double headline show blending electronic and folk vibes.",
    category: "Music",
    organizer: "Paytm Insider",
    ageRestriction: "All Ages",
  },

  // ── Nightlife ──────────────────────────────────────────────
  {
    id: "6",
    name: "Sunburn Arena ft. Alan Walker - Delhi",
    date: "Sun, 22 Feb",
    time: "4:00 PM",
    venue: "Backyard Sports Club, Gurgaon",
    price: "\u20B92500 onwards",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
    description:
      "Sunburn Arena presents the internationally acclaimed DJ and producer Alan Walker live in Delhi. Get ready for an electrifying evening of EDM with hits like Faded, Alone, and Darkside.",
    category: "Nightlife",
    organizer: "Sunburn",
    ageRestriction: "18+",
  },
  {
    id: "7",
    name: "Nucleya Bass Drop Night",
    date: "Sat, 08 Mar",
    time: "9:00 PM",
    venue: "Kitty Su, The Lalit, Delhi",
    price: "\u20B91800 onwards",
    image:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    description:
      "Nucleya takes over Kitty Su for a massive bass-heavy night featuring his signature blend of Indian folk and heavy electronic beats.",
    category: "Nightlife",
    organizer: "Kitty Su Events",
    ageRestriction: "21+",
  },
  {
    id: "8",
    name: "Glow Paint Party - Neon Nights",
    date: "Fri, 28 Mar",
    time: "10:00 PM",
    venue: "Aer Lounge, Four Seasons, Mumbai",
    price: "\u20B92000 onwards",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    description:
      "Dance the night away under UV lights and neon paint at Mumbai's most iconic rooftop venue. DJs spinning house and techno all night.",
    category: "Nightlife",
    organizer: "Neon Collective",
    ageRestriction: "21+",
  },

  // ── Comedy ─────────────────────────────────────────────────
  {
    id: "9",
    name: "Zakir Khan Live - Mannpasand Tour",
    date: "Fri, 14 Mar",
    time: "8:00 PM",
    venue: "Siri Fort Auditorium, Delhi",
    price: "\u20B9799 onwards",
    image:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000",
    description:
      "Zakir Khan brings his signature storytelling and humour in this all-new stand-up special. An evening full of relatable comedy and heartwarming tales.",
    category: "Comedy",
    organizer: "OML Entertainment",
    ageRestriction: "16+",
  },
  {
    id: "10",
    name: "Biswa Kalyan Rath - New Material Night",
    date: "Sat, 22 Mar",
    time: "7:30 PM",
    venue: "The Habitat, Mumbai",
    price: "\u20B9599 onwards",
    image:
      "https://images.unsplash.com/photo-1527224538127-308f8790f923?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1527224538127-308f8790f923?auto=format&fit=crop&q=80&w=1000",
    description:
      "Biswa tests fresh material in an intimate setting. Expect sharp observations, dry wit, and plenty of laughs.",
    category: "Comedy",
    organizer: "The Habitat Comedy",
    ageRestriction: "16+",
  },
  {
    id: "11",
    name: "Comedy Night ft. Abhishek Upmanyu",
    date: "Sun, 06 Apr",
    time: "8:00 PM",
    venue: "Canvas Laugh Club, Mumbai",
    price: "\u20B9999 onwards",
    image:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=1000",
    description:
      "Abhishek Upmanyu delivers a hilarious hour of stand-up about everyday life, relationships, and growing up in India.",
    category: "Comedy",
    organizer: "Canvas Laugh Club",
    ageRestriction: "16+",
  },

  // ── Sports ─────────────────────────────────────────────────
  {
    id: "12",
    name: "IPL 2026 - Delhi Capitals vs Mumbai Indians",
    date: "Sun, 30 Mar",
    time: "3:30 PM",
    venue: "Arun Jaitley Stadium, Delhi",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch the thrilling rivalry unfold live as Delhi Capitals take on Mumbai Indians in IPL 2026. Cricket, cheering, and non-stop action.",
    category: "Sports",
    organizer: "BCCI",
    ageRestriction: "All Ages",
  },
  {
    id: "13",
    name: "Delhi Half Marathon 2026",
    date: "Sun, 20 Apr",
    time: "5:30 AM",
    venue: "Jawaharlal Nehru Stadium, Delhi",
    price: "\u20B9800 onwards",
    image:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&q=80&w=1000",
    description:
      "Lace up and run through the heart of the capital. Categories include 5K, 10K, and 21K. Medals, refreshments, and post-run celebrations await.",
    category: "Sports",
    organizer: "Procam International",
    ageRestriction: "All Ages",
  },

  // ── Performances ───────────────────────────────────────────
  {
    id: "14",
    name: "Comic Con India 2026 - Delhi Edition",
    date: "Fri, 06 Mar",
    time: "11:00 AM",
    venue: "NSIC Grounds, Okhla",
    price: "\u20B9899 onwards",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    description:
      "India's greatest pop culture event is back! Comic Con India 2026 Delhi Edition features celebrity panels, cosplay contests, exclusive merchandise, gaming zones, and much more.",
    category: "Performances",
    organizer: "Comic Con India",
    ageRestriction: "All Ages",
  },
  {
    id: "15",
    name: "Kathak Utsav - Classical Dance Evening",
    date: "Sat, 12 Apr",
    time: "6:30 PM",
    venue: "Kamani Auditorium, Delhi",
    price: "\u20B9600 onwards",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000",
    description:
      "An enchanting evening of Kathak performances by leading classical dancers showcasing the beauty and grace of this ancient art form.",
    category: "Performances",
    organizer: "Spic Macay",
    ageRestriction: "All Ages",
  },

  // ── Food & Drink ───────────────────────────────────────────
  {
    id: "16",
    name: "Delhi Street Food Festival 2026",
    date: "Sat, 15 Mar",
    time: "12:00 PM",
    venue: "JLN Stadium Grounds, Delhi",
    price: "\u20B9350 onwards",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000",
    description:
      "Over 100 food stalls featuring Delhi's most iconic street food alongside craft beverages, live music, and cooking demos.",
    category: "Food & Drink",
    organizer: "Foodholic Events",
    ageRestriction: "All Ages",
  },
  {
    id: "17",
    name: "Craft Beer & Burger Fest",
    date: "Sun, 13 Apr",
    time: "1:00 PM",
    venue: "Episode, Sector 29, Gurgaon",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    description:
      "Sample 30+ craft beers from India's best microbreweries paired with gourmet burgers from top chefs. Live DJ sets all afternoon.",
    category: "Food & Drink",
    organizer: "BeerCraft India",
    ageRestriction: "21+",
  },

  // ── Fests & Fairs ──────────────────────────────────────────
  {
    id: "18",
    name: "Holi Music & Color Festival",
    date: "Sun, 15 Mar",
    time: "10:00 AM",
    venue: "Asiad Village, Delhi",
    price: "\u20B91200 onwards",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=1000",
    description:
      "Celebrate Holi with music, colour, and dance! Featuring DJ sets, rain dance, organic colours, and Bollywood performances.",
    category: "Fests & Fairs",
    organizer: "Color Carnival India",
    ageRestriction: "All Ages",
  },
  {
    id: "19",
    name: "Weekend Flea Market & Art Bazaar",
    date: "Sat, 29 Mar",
    time: "11:00 AM",
    venue: "Dilli Haat, INA, Delhi",
    price: "\u20B9100 onwards",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1000",
    description:
      "Browse handcrafted goods, vintage finds, indie fashion, and artisanal food at Delhi's favourite weekend bazaar.",
    category: "Fests & Fairs",
    organizer: "The Lil Flea",
    ageRestriction: "All Ages",
  },

  // ── Social Mixer ───────────────────────────────────────────
  {
    id: "20",
    name: "Strangers' Night - Speed Networking",
    date: "Fri, 07 Mar",
    time: "7:00 PM",
    venue: "Social, Hauz Khas, Delhi",
    price: "\u20B9499 onwards",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    description:
      "Meet new people through fun icebreakers, speed networking rounds, and casual conversations over food and drinks.",
    category: "Social Mixer",
    organizer: "Meetup Delhi",
    ageRestriction: "18+",
  },

  // ── Screenings ─────────────────────────────────────────────
  {
    id: "21",
    name: "Outdoor Movie Night - Dil Chahta Hai",
    date: "Sat, 05 Apr",
    time: "7:30 PM",
    venue: "Sunder Nursery, Delhi",
    price: "\u20B9450 onwards",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch the iconic Dil Chahta Hai under the stars with bean bags, popcorn, and a giant outdoor screen in the beautiful Sunder Nursery.",
    category: "Screenings",
    organizer: "Sunset Cinema Club",
    ageRestriction: "All Ages",
  },
  {
    id: "22",
    name: "Anime Marathon - Studio Ghibli Night",
    date: "Sun, 27 Apr",
    time: "5:00 PM",
    venue: "PVR Director's Cut, Vasant Kunj, Delhi",
    price: "\u20B9600 onwards",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    description:
      "Back-to-back screenings of Spirited Away, My Neighbor Totoro, and Howl's Moving Castle on the big screen with Japanese snacks.",
    category: "Screenings",
    organizer: "Anime Club India",
    ageRestriction: "All Ages",
  },

  // ── Fitness ────────────────────────────────────────────────
  {
    id: "23",
    name: "Sunrise Yoga at India Gate",
    date: "Sun, 09 Mar",
    time: "6:00 AM",
    venue: "India Gate Lawns, Delhi",
    price: "\u20B9300 onwards",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    description:
      "Start your Sunday with a rejuvenating yoga session at India Gate. Open to all levels. Mats and refreshments provided.",
    category: "Fitness",
    organizer: "FitIndia Movement",
    ageRestriction: "All Ages",
  },
  {
    id: "24",
    name: "CrossFit Championship Delhi 2026",
    date: "Sat, 19 Apr",
    time: "8:00 AM",
    venue: "Thyagaraj Sports Complex, Delhi",
    price: "\u20B91500 onwards",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch elite athletes compete in gruelling CrossFit workouts, or sign up for the amateur category and test your own limits.",
    category: "Fitness",
    organizer: "CrossFit India",
    ageRestriction: "16+",
  },

  // ── Conferences ────────────────────────────────────────────
  {
    id: "25",
    name: "TechSpark India 2026 - AI & Future",
    date: "Thu, 10 Apr",
    time: "9:00 AM",
    venue: "India Expo Centre, Greater Noida",
    price: "\u20B93000 onwards",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=1000",
    description:
      "India's premier tech conference featuring keynotes on AI, blockchain, and startups. Network with industry leaders and investors.",
    category: "Conferences",
    organizer: "TechSpark Events",
    ageRestriction: "All Ages",
  },

  // ── Expos ──────────────────────────────────────────────────
  {
    id: "26",
    name: "Auto Expo 2026 - The Motor Show",
    date: "Fri, 25 Apr",
    time: "10:00 AM",
    venue: "India Expo Mart, Greater Noida",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000",
    description:
      "Experience the future of mobility with concept cars, electric vehicles, and superbikes from leading manufacturers around the world.",
    category: "Expos",
    organizer: "SIAM",
    ageRestriction: "All Ages",
  },

  // ── Open Mics ──────────────────────────────────────────────
  {
    id: "27",
    name: "Open Mic Poetry & Spoken Word Night",
    date: "Wed, 12 Mar",
    time: "7:30 PM",
    venue: "Stein Auditorium, India Habitat Centre, Delhi",
    price: "\u20B9200 onwards",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000",
    description:
      "Share your poetry, stories, or music on stage. A welcoming space for first-timers and seasoned performers alike.",
    category: "Open Mics",
    organizer: "Spoke & Word Collective",
    ageRestriction: "All Ages",
  },
  {
    id: "28",
    name: "Comedy Open Mic - Try Out Tuesday",
    date: "Tue, 25 Mar",
    time: "8:00 PM",
    venue: "The Laugh Store, Gurgaon",
    price: "\u20B9150 onwards",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000",
    description:
      "Aspiring comedians get 5 minutes each to make you laugh. Discover the next big name in Indian comedy!",
    category: "Open Mics",
    organizer: "The Laugh Store",
    ageRestriction: "16+",
  },

  // ── Art Exhibitions ────────────────────────────────────────
  {
    id: "29",
    name: "Modern Indian Art - Curated Gallery Walk",
    date: "Sat, 22 Mar",
    time: "11:00 AM",
    venue: "National Gallery of Modern Art, Delhi",
    price: "\u20B9250 onwards",
    image:
      "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80&w=1000",
    description:
      "A guided gallery walk through works by MF Husain, SH Raza, and contemporary Indian artists. Includes complimentary art catalogue.",
    category: "Art Exhibitions",
    organizer: "NGMA Delhi",
    ageRestriction: "All Ages",
  },

  // ── Pets ───────────────────────────────────────────────────
  {
    id: "30",
    name: "Pawsome Pet Carnival 2026",
    date: "Sun, 16 Mar",
    time: "10:00 AM",
    venue: "Leisure Valley Park, Gurgaon",
    price: "\u20B9400 onwards",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
    description:
      "Bring your furry friends for a day of pet shows, agility courses, adoption drives, vet consultations, and pet-friendly food stalls.",
    category: "Pets",
    organizer: "PetFed India",
    ageRestriction: "All Ages",
  },
  {
    id: "3",
    name: "Arijit Singh Live - Love Tour 2026",
    date: "Sun, 05 Apr",
    time: "7:30 PM",
    venue: "DY Patil Stadium, Mumbai",
    price: "\u20B92000 onwards",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
    description:
      "Arijit Singh performs his greatest hits live — from Tum Hi Ho to Kesariya. An unforgettable night of soulful melodies under the stars.",
    category: "Music",
    organizer: "Live Nation India",
    ageRestriction: "All Ages",
  },
  {
    id: "4",
    name: "Prateek Kuhad Indie Acoustic Night",
    date: "Fri, 18 Apr",
    time: "8:00 PM",
    venue: "The Piano Man Jazz Club, Delhi",
    price: "\u20B91200 onwards",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    description:
      "An intimate acoustic session with Prateek Kuhad performing fan favourites and tracks from his upcoming album in a cozy setting.",
    category: "Music",
    organizer: "The Piano Man",
    ageRestriction: "All Ages",
  },
  {
    id: "5",
    name: "Ritviz x When Chai Met Toast - Double Headline Tour",
    date: "Sat, 26 Apr",
    time: "6:00 PM",
    venue: "Phoenix Marketcity, Bangalore",
    price: "\u20B9800 onwards",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Two of India's hottest indie acts share the stage for a high-energy double headline show blending electronic and folk vibes.",
    category: "Music",
    organizer: "Paytm Insider",
    ageRestriction: "All Ages",
  },

  // ── Nightlife ──────────────────────────────────────────────
  {
    id: "6",
    name: "Sunburn Arena ft. Alan Walker - Delhi",
    date: "Sun, 22 Feb",
    time: "4:00 PM",
    venue: "Backyard Sports Club, Gurgaon",
    price: "\u20B92500 onwards",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
    description:
      "Sunburn Arena presents the internationally acclaimed DJ and producer Alan Walker live in Delhi. Get ready for an electrifying evening of EDM with hits like Faded, Alone, and Darkside.",
    category: "Nightlife",
    organizer: "Sunburn",
    ageRestriction: "18+",
  },
  {
    id: "7",
    name: "Nucleya Bass Drop Night",
    date: "Sat, 08 Mar",
    time: "9:00 PM",
    venue: "Kitty Su, The Lalit, Delhi",
    price: "\u20B91800 onwards",
    image:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=80&w=1000",
    description:
      "Nucleya takes over Kitty Su for a massive bass-heavy night featuring his signature blend of Indian folk and heavy electronic beats.",
    category: "Nightlife",
    organizer: "Kitty Su Events",
    ageRestriction: "21+",
  },
  {
    id: "8",
    name: "Glow Paint Party - Neon Nights",
    date: "Fri, 28 Mar",
    time: "10:00 PM",
    venue: "Aer Lounge, Four Seasons, Mumbai",
    price: "\u20B92000 onwards",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    description:
      "Dance the night away under UV lights and neon paint at Mumbai's most iconic rooftop venue. DJs spinning house and techno all night.",
    category: "Nightlife",
    organizer: "Neon Collective",
    ageRestriction: "21+",
  },

  // ── Comedy ─────────────────────────────────────────────────
  {
    id: "9",
    name: "Zakir Khan Live - Mannpasand Tour",
    date: "Fri, 14 Mar",
    time: "8:00 PM",
    venue: "Siri Fort Auditorium, Delhi",
    price: "\u20B9799 onwards",
    image:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000",
    description:
      "Zakir Khan brings his signature storytelling and humour in this all-new stand-up special. An evening full of relatable comedy and heartwarming tales.",
    category: "Comedy",
    organizer: "OML Entertainment",
    ageRestriction: "16+",
  },
  {
    id: "10",
    name: "Biswa Kalyan Rath - New Material Night",
    date: "Sat, 22 Mar",
    time: "7:30 PM",
    venue: "The Habitat, Mumbai",
    price: "\u20B9599 onwards",
    image:
      "https://images.unsplash.com/photo-1527224538127-308f8790f923?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1527224538127-308f8790f923?auto=format&fit=crop&q=80&w=1000",
    description:
      "Biswa tests fresh material in an intimate setting. Expect sharp observations, dry wit, and plenty of laughs.",
    category: "Comedy",
    organizer: "The Habitat Comedy",
    ageRestriction: "16+",
  },
  {
    id: "11",
    name: "Comedy Night ft. Abhishek Upmanyu",
    date: "Sun, 06 Apr",
    time: "8:00 PM",
    venue: "Canvas Laugh Club, Mumbai",
    price: "\u20B9999 onwards",
    image:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=1000",
    description:
      "Abhishek Upmanyu delivers a hilarious hour of stand-up about everyday life, relationships, and growing up in India.",
    category: "Comedy",
    organizer: "Canvas Laugh Club",
    ageRestriction: "16+",
  },

  // ── Sports ─────────────────────────────────────────────────
  {
    id: "12",
    name: "IPL 2026 - Delhi Capitals vs Mumbai Indians",
    date: "Sun, 30 Mar",
    time: "3:30 PM",
    venue: "Arun Jaitley Stadium, Delhi",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch the thrilling rivalry unfold live as Delhi Capitals take on Mumbai Indians in IPL 2026. Cricket, cheering, and non-stop action.",
    category: "Sports",
    organizer: "BCCI",
    ageRestriction: "All Ages",
  },
  {
    id: "13",
    name: "Delhi Half Marathon 2026",
    date: "Sun, 20 Apr",
    time: "5:30 AM",
    venue: "Jawaharlal Nehru Stadium, Delhi",
    price: "\u20B9800 onwards",
    image:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&q=80&w=1000",
    description:
      "Lace up and run through the heart of the capital. Categories include 5K, 10K, and 21K. Medals, refreshments, and post-run celebrations await.",
    category: "Sports",
    organizer: "Procam International",
    ageRestriction: "All Ages",
  },

  // ── Performances ───────────────────────────────────────────
  {
    id: "14",
    name: "Comic Con India 2026 - Delhi Edition",
    date: "Fri, 06 Mar",
    time: "11:00 AM",
    venue: "NSIC Grounds, Okhla",
    price: "\u20B9899 onwards",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    description:
      "India's greatest pop culture event is back! Comic Con India 2026 Delhi Edition features celebrity panels, cosplay contests, exclusive merchandise, gaming zones, and much more.",
    category: "Performances",
    organizer: "Comic Con India",
    ageRestriction: "All Ages",
  },
  {
    id: "15",
    name: "Kathak Utsav - Classical Dance Evening",
    date: "Sat, 12 Apr",
    time: "6:30 PM",
    venue: "Kamani Auditorium, Delhi",
    price: "\u20B9600 onwards",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000",
    description:
      "An enchanting evening of Kathak performances by leading classical dancers showcasing the beauty and grace of this ancient art form.",
    category: "Performances",
    organizer: "Spic Macay",
    ageRestriction: "All Ages",
  },

  // ── Food & Drink ───────────────────────────────────────────
  {
    id: "16",
    name: "Delhi Street Food Festival 2026",
    date: "Sat, 15 Mar",
    time: "12:00 PM",
    venue: "JLN Stadium Grounds, Delhi",
    price: "\u20B9350 onwards",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1000",
    description:
      "Over 100 food stalls featuring Delhi's most iconic street food alongside craft beverages, live music, and cooking demos.",
    category: "Food & Drink",
    organizer: "Foodholic Events",
    ageRestriction: "All Ages",
  },
  {
    id: "17",
    name: "Craft Beer & Burger Fest",
    date: "Sun, 13 Apr",
    time: "1:00 PM",
    venue: "Episode, Sector 29, Gurgaon",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    description:
      "Sample 30+ craft beers from India's best microbreweries paired with gourmet burgers from top chefs. Live DJ sets all afternoon.",
    category: "Food & Drink",
    organizer: "BeerCraft India",
    ageRestriction: "21+",
  },

  // ── Fests & Fairs ──────────────────────────────────────────
  {
    id: "18",
    name: "Holi Music & Color Festival",
    date: "Sun, 15 Mar",
    time: "10:00 AM",
    venue: "Asiad Village, Delhi",
    price: "\u20B91200 onwards",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=1000",
    description:
      "Celebrate Holi with music, colour, and dance! Featuring DJ sets, rain dance, organic colours, and Bollywood performances.",
    category: "Fests & Fairs",
    organizer: "Color Carnival India",
    ageRestriction: "All Ages",
  },
  {
    id: "19",
    name: "Weekend Flea Market & Art Bazaar",
    date: "Sat, 29 Mar",
    time: "11:00 AM",
    venue: "Dilli Haat, INA, Delhi",
    price: "\u20B9100 onwards",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1000",
    description:
      "Browse handcrafted goods, vintage finds, indie fashion, and artisanal food at Delhi's favourite weekend bazaar.",
    category: "Fests & Fairs",
    organizer: "The Lil Flea",
    ageRestriction: "All Ages",
  },

  // ── Social Mixer ───────────────────────────────────────────
  {
    id: "20",
    name: "Strangers' Night - Speed Networking",
    date: "Fri, 07 Mar",
    time: "7:00 PM",
    venue: "Social, Hauz Khas, Delhi",
    price: "\u20B9499 onwards",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    description:
      "Meet new people through fun icebreakers, speed networking rounds, and casual conversations over food and drinks.",
    category: "Social Mixer",
    organizer: "Meetup Delhi",
    ageRestriction: "18+",
  },

  // ── Screenings ─────────────────────────────────────────────
  {
    id: "21",
    name: "Outdoor Movie Night - Dil Chahta Hai",
    date: "Sat, 05 Apr",
    time: "7:30 PM",
    venue: "Sunder Nursery, Delhi",
    price: "\u20B9450 onwards",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch the iconic Dil Chahta Hai under the stars with bean bags, popcorn, and a giant outdoor screen in the beautiful Sunder Nursery.",
    category: "Screenings",
    organizer: "Sunset Cinema Club",
    ageRestriction: "All Ages",
  },
  {
    id: "22",
    name: "Anime Marathon - Studio Ghibli Night",
    date: "Sun, 27 Apr",
    time: "5:00 PM",
    venue: "PVR Director's Cut, Vasant Kunj, Delhi",
    price: "\u20B9600 onwards",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    description:
      "Back-to-back screenings of Spirited Away, My Neighbor Totoro, and Howl's Moving Castle on the big screen with Japanese snacks.",
    category: "Screenings",
    organizer: "Anime Club India",
    ageRestriction: "All Ages",
  },

  // ── Fitness ────────────────────────────────────────────────
  {
    id: "23",
    name: "Sunrise Yoga at India Gate",
    date: "Sun, 09 Mar",
    time: "6:00 AM",
    venue: "India Gate Lawns, Delhi",
    price: "\u20B9300 onwards",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    description:
      "Start your Sunday with a rejuvenating yoga session at India Gate. Open to all levels. Mats and refreshments provided.",
    category: "Fitness",
    organizer: "FitIndia Movement",
    ageRestriction: "All Ages",
  },
  {
    id: "24",
    name: "CrossFit Championship Delhi 2026",
    date: "Sat, 19 Apr",
    time: "8:00 AM",
    venue: "Thyagaraj Sports Complex, Delhi",
    price: "\u20B91500 onwards",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    description:
      "Watch elite athletes compete in gruelling CrossFit workouts, or sign up for the amateur category and test your own limits.",
    category: "Fitness",
    organizer: "CrossFit India",
    ageRestriction: "16+",
  },

  // ── Conferences ────────────────────────────────────────────
  {
    id: "25",
    name: "TechSpark India 2026 - AI & Future",
    date: "Thu, 10 Apr",
    time: "9:00 AM",
    venue: "India Expo Centre, Greater Noida",
    price: "\u20B93000 onwards",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=1000",
    description:
      "India's premier tech conference featuring keynotes on AI, blockchain, and startups. Network with industry leaders and investors.",
    category: "Conferences",
    organizer: "TechSpark Events",
    ageRestriction: "All Ages",
  },

  // ── Expos ──────────────────────────────────────────────────
  {
    id: "26",
    name: "Auto Expo 2026 - The Motor Show",
    date: "Fri, 25 Apr",
    time: "10:00 AM",
    venue: "India Expo Mart, Greater Noida",
    price: "\u20B9500 onwards",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000",
    description:
      "Experience the future of mobility with concept cars, electric vehicles, and superbikes from leading manufacturers around the world.",
    category: "Expos",
    organizer: "SIAM",
    ageRestriction: "All Ages",
  },

  // ── Open Mics ──────────────────────────────────────────────
  {
    id: "27",
    name: "Open Mic Poetry & Spoken Word Night",
    date: "Wed, 12 Mar",
    time: "7:30 PM",
    venue: "Stein Auditorium, India Habitat Centre, Delhi",
    price: "\u20B9200 onwards",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000",
    description:
      "Share your poetry, stories, or music on stage. A welcoming space for first-timers and seasoned performers alike.",
    category: "Open Mics",
    organizer: "Spoke & Word Collective",
    ageRestriction: "All Ages",
  },
  {
    id: "28",
    name: "Comedy Open Mic - Try Out Tuesday",
    date: "Tue, 25 Mar",
    time: "8:00 PM",
    venue: "The Laugh Store, Gurgaon",
    price: "\u20B9150 onwards",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000",
    description:
      "Aspiring comedians get 5 minutes each to make you laugh. Discover the next big name in Indian comedy!",
    category: "Open Mics",
    organizer: "The Laugh Store",
    ageRestriction: "16+",
  },

  // ── Art Exhibitions ────────────────────────────────────────
  {
    id: "29",
    name: "Modern Indian Art - Curated Gallery Walk",
    date: "Sat, 22 Mar",
    time: "11:00 AM",
    venue: "National Gallery of Modern Art, Delhi",
    price: "\u20B9250 onwards",
    image:
      "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80&w=1000",
    description:
      "A guided gallery walk through works by MF Husain, SH Raza, and contemporary Indian artists. Includes complimentary art catalogue.",
    category: "Art Exhibitions",
    organizer: "NGMA Delhi",
    ageRestriction: "All Ages",
  },

  // ── Pets ───────────────────────────────────────────────────
  {
    id: "30",
    name: "Pawsome Pet Carnival 2026",
    date: "Sun, 16 Mar",
    time: "10:00 AM",
    venue: "Leisure Valley Park, Gurgaon",
    price: "\u20B9400 onwards",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
    bannerImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000",
    description:
      "Bring your furry friends for a day of pet shows, agility courses, adoption drives, vet consultations, and pet-friendly food stalls.",
    category: "Pets",
    organizer: "PetFed India",
    ageRestriction: "All Ages",
  },
];
