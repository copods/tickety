import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
} from "@tickety/app/components/ui";
import {
  fetchArtistById,
  fetchEventsByArtist,
  ArtistDetail,
} from "@tickety/app/services/api";
import type { EventDetail } from "@tickety/app/types";
import { Image, Pressable, Platform, useWindowDimensions } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { ArtistDetailSkeleton } from "@tickety/app/components/composite";
import Head from "next/head";

export default function ArtistPage() {
  const router = useRouter();
  const { id } = router.query;
  const [artist, setArtist] = useState<ArtistDetail | null>(null);
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
    if (!id || typeof id !== "string") return;

    Promise.all([fetchArtistById(id), fetchEventsByArtist(id)])
      .then(([artistData, eventsData]) => {
        setArtist(artistData);
        setEvents(eventsData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <ArtistDetailSkeleton />;
  }

  if (error || !artist) {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        height={400}
        backgroundColor="$white"
      >
        <Text color="$red500">{error || "Artist not found"}</Text>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{artist.name} - Tickety</title>
        <meta name="description" content={artist.bio} />
      </Head>
      <Box backgroundColor="$white" minHeight="$full">
        {/* Back button */}
        <Box px={isMobile ? "$5" : "$20"} pt={isMobile ? "$4" : "$8"}>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => ({
              flexDirection: "row",
              alignItems: "center",
              opacity: pressed ? 0.7 : 1,
              cursor: isWeb ? "pointer" : "default",
              alignSelf: "flex-start",
            })}
          >
            <ChevronLeft size={20} color="#000" strokeWidth={2} />
            <Text fontSize="$sm" fontWeight="$medium" ml="$1">
              Back
            </Text>
          </Pressable>
        </Box>

        {/* ── First Fold: Artist Info ── */}
        <Box
          px={isMobile ? "$5" : "$20"}
          pt={isMobile ? "$5" : "$8"}
          pb={isMobile ? "$8" : "$12"}
          maxWidth={1440}
          width="100%"
          alignSelf="center"
        >
          {isMobile ? (
            // Mobile: stacked vertically
            <VStack space="lg">
              {/* Artist Image */}
              <Box
                width="100%"
                height={320}
                borderRadius="$2xl"
                overflow="hidden"
              >
                <Image
                  source={{ uri: artist.image }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </Box>

              {/* Artist Details */}
              <VStack space="sm">
                <Text fontSize="$2xl" fontWeight="$bold">
                  {artist.name}
                </Text>
                <Text fontSize="$sm" color="$text500">
                  {artist.genre}
                </Text>

                {/* Stats */}
                <HStack space="3xl" pt="$3" pb="$1">
                  <VStack>
                    <Text fontSize="$lg" fontWeight="$bold">
                      {artist.followers}
                    </Text>
                    <Text fontSize="$xs" color="$text500">
                      Followers
                    </Text>
                  </VStack>
                  <VStack>
                    <Text fontSize="$lg" fontWeight="$bold">
                      {artist.upcomingShows}
                    </Text>
                    <Text fontSize="$xs" color="$text500">
                      Upcoming Shows
                    </Text>
                  </VStack>
                </HStack>

                {/* Bio */}
                <Box
                  px="$4"
                  py="$4"
                  mt="$2"
                  backgroundColor="$backgroundLight100"
                  borderRadius="$xl"
                >
                  <Text fontSize="$xs" fontWeight="$bold" mb="$1">
                    About
                  </Text>
                  <Text fontSize="$sm" color="$text700" lineHeight={22}>
                    {artist.bio}
                  </Text>
                </Box>
              </VStack>
            </VStack>
          ) : (
            // Desktop: side by side
            <HStack gap={48}>
              {/* Left: Artist Image */}
              <Box
                width="38%"
                height={460}
                borderRadius="$2xl"
                overflow="hidden"
              >
                <Image
                  source={{ uri: artist.image }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </Box>

              {/* Right: Artist Details */}
              <VStack flex={1} space="md" justifyContent="center">
                <VStack space="xs">
                  <Text fontSize="$5xl" fontWeight="$bold" lineHeight={52}>
                    {artist.name}
                  </Text>
                  <Text fontSize="$md" color="$text500">
                    {artist.genre}
                  </Text>
                </VStack>

                {/* Stats */}
                <HStack space="4xl" pt="$1" pb="$1">
                  <VStack>
                    <Text fontSize="$xl" fontWeight="$bold">
                      {artist.followers}
                    </Text>
                    <Text fontSize="$xs" color="$text500">
                      Followers
                    </Text>
                  </VStack>
                  <VStack>
                    <Text fontSize="$xl" fontWeight="$bold">
                      {artist.upcomingShows}
                    </Text>
                    <Text fontSize="$xs" color="$text500">
                      Upcoming Shows
                    </Text>
                  </VStack>
                </HStack>

                {/* Bio */}
                <Box
                  px="$5"
                  py="$5"
                  backgroundColor="$backgroundLight100"
                  borderRadius="$xl"
                >
                  <Text fontSize="$sm" fontWeight="$bold" mb="$1.5">
                    About
                  </Text>
                  <Text fontSize="$sm" color="$text700" lineHeight={22}>
                    {artist.bio}
                  </Text>
                </Box>
              </VStack>
            </HStack>
          )}
        </Box>

        {/* ── Second Fold: All Events ── */}
        <Box
          px={isMobile ? "$5" : "$20"}
          pb="$16"
          maxWidth={1440}
          width="100%"
          alignSelf="center"
          gap="$6"
        >
          <Heading size="2xl" fontWeight="$bold">
            ALL EVENTS
          </Heading>

          {events.length > 0 ? (
            <HStack flexWrap="wrap" space="lg" justifyContent="flex-start">
              {events.map((event) => (
                <Box
                  key={event.id}
                  width={isMobile ? "100%" : "24%"}
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
                          fontSize="$md"
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
          ) : (
            <Box
              height={200}
              justifyContent="center"
              alignItems="center"
              borderRadius="$xl"
              backgroundColor="$backgroundLight100"
            >
              <Text color="$text500" fontSize="$lg">
                No events found for this artist
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
