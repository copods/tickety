import type { NextApiRequest, NextApiResponse } from "next";
import type { CarouselEvent } from "@tickety/app/components/composite";
import { mockEvents } from "./data";

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
