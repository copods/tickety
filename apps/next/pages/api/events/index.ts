import type { NextApiRequest, NextApiResponse } from "next";
import type { EventDetail } from "@tickety/app/types";
import { mockEvents } from "./data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EventDetail[]>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { category, artistId } = req.query;

  if (artistId && typeof artistId === "string") {
    const filtered = mockEvents.filter((e) => e.artistId === artistId);
    return res.status(200).json(filtered);
  }

  if (category && typeof category === "string") {
    const filtered = mockEvents.filter(
      (e) => e.category.toLowerCase() === category.toLowerCase()
    );
    return res.status(200).json(filtered);
  }

  res.status(200).json(mockEvents);
}
