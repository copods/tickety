// ── Event Types ──────────────────────────────────────────────
export interface CarouselEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  price: string;
  image: string;
  bannerImage: string;
}

export interface EventDetail extends CarouselEvent {
  description: string;
  category: string;
  organizer: string;
  ageRestriction: string;
  artistId?: string;
}

export interface EventCategory {
  id: string;
  name: string;
  image: string;
}

// ── Artist Types ─────────────────────────────────────────────
export interface Artist {
  id: string;
  name: string;
  image: string;
}

export interface ArtistDetail extends Artist {
  genre: string;
  bio: string;
  followers: string;
  upcomingShows: number;
}

// ── Component Props ──────────────────────────────────────────
export interface EventCarouselProps {
  data: CarouselEvent[];
  onEventPress?: (event: CarouselEvent) => void;
}

export interface ArtistCarouselProps {
  artists: Artist[];
  onArtistPress?: (artist: Artist) => void;
}

export interface EventCategoriesProps {
  categories: EventCategory[];
  onCategoryPress?: (category: EventCategory) => void;
}
