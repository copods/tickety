import { useState, useEffect } from "react";
import {
  EventCarousel,
  CarouselEvent,
} from "@tickety/app/components/composite";
import { Box } from "@tickety/app/components/ui/box";
import { Text } from "@tickety/app/components/ui";
import Head from "next/head";

// Change this to your real API endpoint when ready
const EVENTS_API_URL = "/api/events";

export default function Events() {
  const [events, setEvents] = useState<CarouselEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(EVENTS_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch events (${res.status})`);
        return res.json();
      })
      .then((data: CarouselEvent[]) => {
        setEvents(data);
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
          <EventCarousel data={events} />
        )}
      </Box>
    </>
  );
}
