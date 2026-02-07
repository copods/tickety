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
<<<<<<< HEAD
  artistId?: string;
=======
>>>>>>> ead0c7c (Added event categories carousle and detail page)
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

<<<<<<< HEAD
// ── Filter & Pagination Types ────────────────────────────────
export type SortByOption =
  | "popularity"
  | "price_low_high"
  | "price_high_low"
  | "date"
  | "distance";

export interface EventFilters {
  sortBy?: SortByOption;
  genres?: string[];
}

export interface PaginatedEventsResponse {
  events: EventDetail[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

=======
>>>>>>> ead0c7c (Added event categories carousle and detail page)
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
<<<<<<< HEAD

export interface AllEventsProps {
  genres: string[];
  onEventPress?: (event: CarouselEvent) => void;
}

export interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: EventFilters) => void;
  genres: string[];
  currentFilters: EventFilters;
  useDarkTheme: boolean;
}
=======
>>>>>>> ead0c7c (Added event categories carousle and detail page)
