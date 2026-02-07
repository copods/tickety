import type { CarouselEvent } from "../components/composite";
import type { Artist } from "../components/composite";

const EVENTS_API_URL = "/api/events";
const ARTISTS_API_URL = "/api/artists";

export interface ArtistDetail extends Artist {
  genre: string;
  bio: string;
  followers: string;
  upcomingShows: number;
}

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

export interface EventDetail extends CarouselEvent {
  description: string;
  category: string;
  organizer: string;
  ageRestriction: string;
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
