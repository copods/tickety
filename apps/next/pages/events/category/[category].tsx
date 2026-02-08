import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { EventCarousel, CategoryEventsSkeleton } from "@tickety/app/components/composite";
import type { EventDetail } from "@tickety/app/types";
import { fetchEventsByCategory } from "@tickety/app/services/api";
import { Box, VStack, HStack, Text, Heading } from "@tickety/app/components/ui";
import { Image, Pressable, Platform, useWindowDimensions } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import Head from "next/head";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const [events, setEvents] = useState<EventDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  const isWeb = Platform.OS === "web";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;

  useEffect(() => {
    if (!category || typeof category !== "string") return;

    setLoading(true);
    fetchEventsByCategory(category)
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  const categoryName = typeof category === "string" ? category : "";

  if (loading) {
    return <CategoryEventsSkeleton />;
  }

  if (error) {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        height={400}
        backgroundColor="$white"
      >
        <Text color="$red500">{error}</Text>
      </Box>
    );
  }

  const carouselEvents = events.slice(0, 5);

  return (
    <>
      <Head>
        <title>{categoryName} Events - Tickety</title>
        <meta
          name="description"
          content={`Browse ${categoryName} events and book your tickets`}
        />
      </Head>
      <Box backgroundColor="$white" minHeight="$full">
        <Box gap="$10">
          {/* Event Carousel - max 5 slides */}
          {carouselEvents.length > 0 ? (
            <EventCarousel
              data={carouselEvents}
              onEventPress={(event) => router.push(`/events/${event.id}`)}
            />
          ) : (
            <Box height={300} justifyContent="center" alignItems="center">
              <Text color="$text500" fontSize="$lg">
                No {categoryName} events found
              </Text>
            </Box>
          )}

          {/* All Category Events List */}
          {events.length > 0 && (
            <Box
              px={isMobile ? "$5" : "$20"}
              gap="$6"
              margin="auto"
              width="100%"
              maxWidth={1440}
              pb="$16"
            >
              <Heading size="2xl" fontWeight="$bold">
                All {categoryName} Events
              </Heading>
              <HStack flexWrap="wrap" space="lg" justifyContent="flex-start">
                {events.map((event) => (
                  <Box
                    key={event.id}
                    width={
                      isMobile
                        ? "100%" // 1 per row on mobile
                        : "24%" // 4 per row on web
                    }
                    minHeight={isMobile ? 340 : 420}
                    borderWidth={1}
                    borderColor="$borderLight200"
                    borderRadius="$xl"
                    overflow="hidden"
                  >
                    <Pressable
                      onPress={() => router.push(`/events/${event.id}`)}
                      style={({ pressed }) => ({
                        opacity: pressed ? 0.85 : 1,
                        cursor: isWeb ? "pointer" : "default",
                      })}
                    >
                      <VStack overflow="hidden" height="100%">
                        {/* Event Image */}
                        <Box width="100%" height={isMobile ? 360 : 380}>
                          <Image
                            source={{ uri: event.image }}
                            style={{ width: "100%", height: "100%" }}
                            resizeMode="cover"
                          />
                        </Box>

                        {/* Event Info */}
                        <VStack p="$3" space="xs">
                          <Text
                            fontSize="$xs"
                            fontWeight="$semibold"
                            color="$goldVarient"
                            letterSpacing={0.5}
                          >
                            {event.date} • {event.time}
                          </Text>

                          <Text
                            fontSize={isMobile ? "$md" : "$md"}
                            fontWeight="$bold"
                            numberOfLines={2}
                          >
                            {event.name}
                          </Text>

                          <Text
                            fontSize="$xs"
                            numberOfLines={1}
                            color="$warmgray"
                          >
                            {event.venue}
                          </Text>

                          <Text
                            fontSize="$xs"
                            fontWeight="$semibold"
                            color="$warmgray"
                          >
                            {event.price}
                          </Text>
                        </VStack>
                      </VStack>
                    </Pressable>
                  </Box>
                ))}
              </HStack>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
