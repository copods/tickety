import type { NextApiRequest, NextApiResponse } from "next";
import { mockArtists, ArtistDetail } from "./data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArtistDetail | { message: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id } = req.query;
  const artist = mockArtists.find((a) => a.id === id);

  if (!artist) {
    return res.status(404).json({ message: "Artist not found" });
  }

  res.status(200).json(artist);
}
