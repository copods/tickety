import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { EventCarousel } from "@tickety/app/components/composite";
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
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        height={400}
        backgroundColor="$white"
      >
        <Text color="$text500">Loading {categoryName} events...</Text>
      </Box>
    );
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
              <VStack flexDirection="row" flexWrap="wrap" space="lg">
                {events.map((event) => (
                  <Pressable
                    key={event.id}
                    onPress={() => router.push(`/events/${event.id}`)}
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.85 : 1,
                      cursor: isWeb ? "pointer" : "default",
                    })}
                  >
                    <HStack
                      space="md"
                      borderRadius="$xl"
                      overflow="hidden"
                      borderWidth={1}
                      borderColor="$borderLight200"
                      flexDirection="column"
                      padding="$4"
                    >
                      {/* Event Image */}
                      <Box
                        width={isMobile ? 120 : 200}
                        height={isMobile ? 140 : 160}
                      >
                        <Image
                          source={{ uri: event.image }}
                          style={{ width: "100%", height: "100%" }}
                          resizeMode="cover"
                        />
                      </Box>

                      {/* Event Info */}
                      <VStack
                        flex={1}
                        py="$3"
                        pr="$4"
                        justifyContent="center"
                        space="xs"
                      >
                        <Text
                          fontSize="$xs"
                          fontWeight="$semibold"
                          color="$text500"
                          textTransform="uppercase"
                          letterSpacing={0.5}
                        >
                          {event.date} • {event.time}
                        </Text>
                        <Text
                          fontSize={isMobile ? "$md" : "$lg"}
                          fontWeight="$bold"
                          numberOfLines={2}
                        >
                          {event.name}
                        </Text>
                        <Text fontSize="$sm" color="$text500" numberOfLines={1}>
                          {event.venue}
                        </Text>
                        <Text
                          fontSize="$md"
                          fontWeight="$semibold"
                          color="$black"
                        >
                          {event.price}
                        </Text>
                      </VStack>
                    </HStack>
                  </Pressable>
                ))}
              </VStack>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
