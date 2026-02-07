import type { NextApiRequest, NextApiResponse } from "next";
import type { CarouselEvent } from "@tickety/app/components/composite";

const mockEvents: CarouselEvent[] = [
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
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarouselEvent[]>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  res.status(200).json(mockEvents);
}
