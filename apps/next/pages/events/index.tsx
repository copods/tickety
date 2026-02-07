import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  EventCarousel,
  CarouselEvent,
  ArtistCarousel,
  Artist,
} from "@tickety/app/components/composite";
import { fetchEvents, fetchArtists } from "@tickety/app/services/api";
import { Box } from "@tickety/app/components/ui/box";
import { Text } from "@tickety/app/components/ui";
import Head from "next/head";

export default function Events() {
  const router = useRouter();
  const [events, setEvents] = useState<CarouselEvent[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchEvents(), fetchArtists()])
      .then(([eventsData, artistsData]) => {
        setEvents(eventsData);
        setArtists(artistsData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Events - Tickety</title>
        <meta
          name="description"
          content="Browse upcoming events and book your tickets"
        />
      </Head>
      <Box backgroundColor="$white" minHeight="$full">
        {loading ? (
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            height={600}
          >
            <Text color="$text500">Loading events...</Text>
          </Box>
        ) : error ? (
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            height={600}
          >
            <Text color="$red500">{error}</Text>
          </Box>
        ) : (
          <Box gap="$20">
            <EventCarousel
              data={events}
              onEventPress={(event) =>
                router.push(`/events/${event.id}`)
              }
            />
            <ArtistCarousel
              artists={artists}
              onArtistPress={(artist) =>
                router.push(`/artists/${artist.id}`)
              }
            />
            <div></div>
          </Box>
        )}
      </Box>
    </>
  );
}
