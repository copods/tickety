import type { NextApiRequest, NextApiResponse } from "next";
import type { EventDetail } from "@tickety/app/types";
import { mockEvents } from "./data";

interface PaginatedResponse {
  events: EventDetail[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

function extractPrice(priceStr: string): number {
  const match = priceStr.match(/[\d,]+/);
  return match ? parseInt(match[0].replace(/,/g, ""), 10) : 0;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EventDetail[] | PaginatedResponse>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { category, artistId, page, limit, sortBy, genre } = req.query;

  // Legacy: filter by artistId (non-paginated)
  if (artistId && typeof artistId === "string") {
    const filtered = mockEvents.filter((e) => e.artistId === artistId);
    return res.status(200).json(filtered);
  }

  // Legacy: filter by category (non-paginated, when no page param)
  if (category && typeof category === "string" && !page) {
    const filtered = mockEvents.filter(
      (e) => e.category.toLowerCase() === category.toLowerCase()
    );
    return res.status(200).json(filtered);
  }

  let filtered = [...mockEvents];

  // Genre filtering (comma-separated category names)
  if (genre && typeof genre === "string") {
    const genres = genre.split(",").map((g) => g.trim().toLowerCase());
    filtered = filtered.filter((e) =>
      genres.includes(e.category.toLowerCase())
    );
  }

  // Sorting
  if (sortBy && typeof sortBy === "string") {
    switch (sortBy) {
      case "price_low_high":
        filtered.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
        break;
      case "price_high_low":
        filtered.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
        break;
      case "date":
        filtered.sort((a, b) => a.date.localeCompare(b.date));
        break;
      case "popularity":
      case "distance":
      default:
        break;
    }
  }

  // Paginated response (when page param is provided)
  if (page && typeof page === "string") {
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(
      1,
      parseInt(typeof limit === "string" ? limit : "16", 10)
    );
    const startIdx = (pageNum - 1) * limitNum;
    const paginatedEvents = filtered.slice(startIdx, startIdx + limitNum);

    return res.status(200).json({
      events: paginatedEvents,
      total: filtered.length,
      page: pageNum,
      limit: limitNum,
      hasMore: startIdx + limitNum < filtered.length,
    });
  }

  // Non-paginated response (backward compatible)
  res.status(200).json(filtered);
}
