import type { CarouselEvent } from "@tickety/app/components/composite";

export interface EventDetail extends CarouselEvent {
  description: string;
  category: string;
  organizer: string;
  ageRestriction: string;
}

export const mockEvents: EventDetail[] = [
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
  },
  {
    id: "2",
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
    category: "EDM / Festival",
    organizer: "Sunburn",
    ageRestriction: "16+",
  },
  {
    id: "3",
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
    category: "Entertainment",
    organizer: "Comic Con India",
    ageRestriction: "All Ages",
  },
  {
    id: "4",
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
  },
];
