import type { NextApiRequest, NextApiResponse } from "next";
import type { Artist } from "@tickety/app/components/composite";
import { mockArtists } from "./data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Artist[]>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  res.status(200).json(mockArtists);
}
