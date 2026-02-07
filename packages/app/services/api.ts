import type {
  CarouselEvent,
  Artist,
  ArtistDetail,
  EventDetail,
  EventCategory,
} from "../types";

const EVENTS_API_URL = "/api/events";
const ARTISTS_API_URL = "/api/artists";
const CATEGORIES_API_URL = "/api/categories";

export async function fetchEvents(): Promise<CarouselEvent[]> {
  const res = await fetch(EVENTS_API_URL);
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

export async function fetchCategories(): Promise<EventCategory[]> {
  const res = await fetch(CATEGORIES_API_URL);
  if (!res.ok) throw new Error(`Failed to fetch categories (${res.status})`);
  return res.json();
}
