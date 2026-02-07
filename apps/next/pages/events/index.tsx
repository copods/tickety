import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  EventCarousel,
  ArtistCarousel,
  EventCategories,
<<<<<<< HEAD
  AllEvents,
  EventCarouselSkeleton,
  ArtistCarouselSkeleton,
  EventCategoriesSkeleton,
  Navbar,
  Footer,
=======
>>>>>>> ead0c7c (Added event categories carousle and detail page)
} from "@tickety/app/components/composite";
import type {
  CarouselEvent,
  Artist,
  EventCategory,
} from "@tickety/app/types";
import {
  fetchEvents,
  fetchArtists,
  fetchCategories,
} from "@tickety/app/services/api";
import { Box } from "@tickety/app/components/ui/box";
import { Text } from "@tickety/app/components/ui";

import Head from "next/head";

export default function Events() {
  const router = useRouter();
  const [events, setEvents] = useState<CarouselEvent[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [categories, setCategories] = useState<EventCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchEvents(), fetchArtists(), fetchCategories()])
      .then(([eventsData, artistsData, categoriesData]) => {
        setEvents(eventsData);
        setArtists(artistsData);
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const genreNames = categories.map((c) => c.name);

  return (
    <>
      <Head>
        <title>Events - Tickety</title>
        <meta
          name="description"
          content="Browse upcoming events and book your tickets"
        />
      </Head>
      <Box backgroundColor="$white" minHeight="$full" role="main" accessibilityLabel="Events page">
        {error ? (
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            height={600}
            accessibilityRole="alert"
          >
            <Text color="$red500" accessibilityRole="alert">{error}</Text>
          </Box>
        ) : loading ? (
          <Box gap="$16">
            <EventCarouselSkeleton />
            <EventCategoriesSkeleton />
            <ArtistCarouselSkeleton />
          </Box>
        ) : (
<<<<<<< HEAD
          <Box>
            <Navbar />
            <Box gap="$16">
            <EventCarousel
              data={events.slice(0, 5)}
              onEventPress={(event) => router.push(`/events/${event.id}`)}
            />
              <EventCategories
                categories={categories}
                onCategoryPress={(category) =>
                  router.push(`/events/category/${encodeURIComponent(category.name)}`)
                }
              />
              <ArtistCarousel
                artists={artists}
                onArtistPress={(artist) => router.push(`/artists/${artist.id}`)}
              />
              <AllEvents
                genres={genreNames}
                onEventPress={(event) => router.push(`/events/${event.id}`)}
              />
            </Box>
            <Footer />
=======
          <Box gap="$16">
            <EventCarousel
              data={events.slice(0, 5)}
              onEventPress={(event) => router.push(`/events/${event.id}`)}
            />
            <EventCategories
              categories={categories}
              onCategoryPress={(category) =>
                router.push(`/events/category/${encodeURIComponent(category.name)}`)
              }
            />
            <ArtistCarousel
              artists={artists}
              onArtistPress={(artist) => router.push(`/artists/${artist.id}`)}
            />
            <div></div>
>>>>>>> ead0c7c (Added event categories carousle and detail page)
          </Box>
        )}
      </Box>
    </>
  );
}
