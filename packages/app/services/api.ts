import { Platform } from "react-native";
import type {
  CarouselEvent,
  Artist,
  ArtistDetail,
  EventDetail,
  EventCategory,
  PaginatedEventsResponse,
} from "../types";
export type { ArtistDetail } from "../types";

// On web (Next.js), relative URLs work. On native, we need the full URL
// pointing to the Next.js dev server.
const API_BASE = Platform.select({
  web: "",
  ios: "http://localhost:3000",
  android: "http://10.0.2.2:3000",
  default: "http://localhost:3000",
});

const EVENTS_API_URL = `${API_BASE}/api/events`;
const ARTISTS_API_URL = `${API_BASE}/api/artists`;
const CATEGORIES_API_URL = `${API_BASE}/api/categories`;

export async function fetchEvents(): Promise<CarouselEvent[]> {
  const res = await fetch(EVENTS_API_URL);
  if (!res.ok) throw new Error(`Failed to fetch events (${res.status})`);
  return res.json();
}

export async function fetchAllEvents(params: {
  page?: number;
  limit?: number;
  sortBy?: string;
  genre?: string;
}): Promise<PaginatedEventsResponse> {
  // NOTE:
  // - Some React Native environments don't have a full `URLSearchParams` implementation,
  //   which was causing the AllEvents API call to fail silently and return no data.
  // - We build the query string manually so this works consistently on web and native.
  const queryEntries: [string, string][] = [];

  if (params.page != null) queryEntries.push(["page", String(params.page)]);
  if (params.limit != null) queryEntries.push(["limit", String(params.limit)]);
  if (params.sortBy) queryEntries.push(["sortBy", params.sortBy]);
  if (params.genre) queryEntries.push(["genre", params.genre]);

  const queryString = queryEntries
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");

  const url = queryString ? `${EVENTS_API_URL}?${queryString}` : EVENTS_API_URL;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch events (${res.status})`);
  return res.json();
}

export async function fetchArtists(): Promise<Artist[]> {
  const res = await fetch(ARTISTS_API_URL);
  if (!res.ok) throw new Error(`Failed to fetch artists (${res.status})`);
  return res.json();
}

export async function fetchArtistById(id: string): Promise<ArtistDetail> {
  const res = await fetch(`${ARTISTS_API_URL}/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch artist (${res.status})`);
  return res.json();
}

export async function fetchEventById(id: string): Promise<EventDetail> {
  const res = await fetch(`${EVENTS_API_URL}/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch event (${res.status})`);
  return res.json();
}

export async function fetchEventsByCategory(
  category: string
): Promise<EventDetail[]> {
  const res = await fetch(
    `${EVENTS_API_URL}?category=${encodeURIComponent(category)}`
  );
  if (!res.ok) throw new Error(`Failed to fetch events (${res.status})`);
  return res.json();
}

export async function fetchEventsByArtist(
  artistId: string
): Promise<EventDetail[]> {
  const res = await fetch(
    `${EVENTS_API_URL}?artistId=${encodeURIComponent(artistId)}`
  );
  if (!res.ok) throw new Error(`Failed to fetch events (${res.status})`);
  return res.json();
}

export async function fetchCategories(): Promise<EventCategory[]> {
  const res = await fetch(CATEGORIES_API_URL);
  if (!res.ok) throw new Error(`Failed to fetch categories (${res.status})`);
  return res.json();
}
