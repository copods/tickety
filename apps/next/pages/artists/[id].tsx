import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, VStack, HStack, Text } from "@tickety/app/components/ui";
import { fetchArtistById, ArtistDetail } from "@tickety/app/services/api";
import { Image, Pressable, Platform } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import Head from "next/head";

export default function ArtistPage() {
  const router = useRouter();
  const { id } = router.query;
  const [artist, setArtist] = useState<ArtistDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isWeb = Platform.OS === "web";

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    fetchArtistById(id)
      .then((data) => {
        setArtist(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        height={400}
        backgroundColor="$white"
      >
        <Text color="$text500">Loading artist...</Text>
      </Box>
    );
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
        <Box px="$6" pt="$6">
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

        {/* Artist Profile */}
        <VStack
          alignItems="center"
          px="$6"
          py="$10"
          maxWidth={800}
          width="100%"
          alignSelf="center"
          space="xl"
        >
          {/* Circular Image */}
          <Box
            width={200}
            height={200}
            borderRadius={999}
            overflow="hidden"
          >
            <Image
              source={{ uri: artist.image }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </Box>

          {/* Name & Genre */}
          <VStack alignItems="center" space="xs">
            <Text fontSize="$3xl" fontWeight="$bold">
              {artist.name}
            </Text>
            <Text fontSize="$md" color="$text500">
              {artist.genre}
            </Text>
          </VStack>

          {/* Stats */}
          <HStack space="4xl">
            <VStack alignItems="center">
              <Text fontSize="$xl" fontWeight="$bold">
                {artist.followers}
              </Text>
              <Text fontSize="$sm" color="$text500">
                Followers
              </Text>
            </VStack>
            <VStack alignItems="center">
              <Text fontSize="$xl" fontWeight="$bold">
                {artist.upcomingShows}
              </Text>
              <Text fontSize="$sm" color="$text500">
                Upcoming Shows
              </Text>
            </VStack>
          </HStack>

          {/* Bio */}
          <Box
            width="100%"
            px="$4"
            py="$6"
            backgroundColor="$backgroundLight100"
            borderRadius="$xl"
          >
            <Text fontSize="$sm" fontWeight="$bold" mb="$2">
              About
            </Text>
            <Text fontSize="$md" color="$text700" lineHeight={24}>
              {artist.bio}
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
