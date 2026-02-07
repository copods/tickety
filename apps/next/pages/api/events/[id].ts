import type { NextApiRequest, NextApiResponse } from "next";
import type { EventDetail } from "@tickety/app/types";
import { mockEvents } from "./data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EventDetail | { message: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id } = req.query;
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.status(200).json(event);
}
