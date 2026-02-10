import { useState, useEffect } from "react"
import { useRouter, useLocalSearchParams } from "expo-router"
import { Box, VStack, HStack, Text, Heading } from "@tickety/app/components/ui"
import {
    fetchArtistById,
    fetchEventsByArtist,
    ArtistDetail,
} from "@tickety/app/services/api"
import type { EventDetail } from "@tickety/app/types"
import { Image, Pressable, ScrollView } from "react-native"
import { ChevronLeft } from "lucide-react-native"
import { ArtistDetailSkeleton } from "@tickety/app/components/composite"

const DARK = {
    bg: "#111827",
    cardBg: "#1f2937",
    text: "#ffffff",
    subText: "#9ca3af",
    border: "#374151",
    accent: "#fbbf24",
}

export default function ArtistPage() {
    const router = useRouter()
    const { id } = useLocalSearchParams<{ id: string }>()
    const [artist, setArtist] = useState<ArtistDetail | null>(null)
    const [events, setEvents] = useState<EventDetail[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) return

        Promise.all([fetchArtistById(id), fetchEventsByArtist(id)])
            .then(([artistData, eventsData]) => {
                setArtist(artistData)
                setEvents(eventsData)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <ArtistDetailSkeleton />
    }

    if (error || !artist) {
        return (
            <Box
                flex={1}
                justifyContent="center"
                alignItems="center"
                height={400}
                backgroundColor={DARK.bg}
                accessibilityRole="alert"
            >
                <Text color="$red500" accessibilityRole="alert">
                    {error || "Artist not found"}
                </Text>
            </Box>
        )
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: DARK.bg }}>
            {/* Back Button */}
            <Box position="absolute" top="$12" left="$4" zIndex={10}>
                <Pressable
                    onPress={() => router.back()}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                    style={({ pressed }) => ({
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: pressed
                            ? "rgba(0,0,0,0.95)"
                            : "rgba(0,0,0,0.6)",
                        borderRadius: 24,
                        paddingHorizontal: 14,
                        paddingVertical: 8,
                    })}
                >
                    <ChevronLeft size={18} color="white" strokeWidth={2} />
                    <Text color="$white" fontSize="$sm" fontWeight="$medium" ml="$1">
                        Back
                    </Text>
                </Pressable>
            </Box>

            {/* Artist Info */}
            <VStack px="$5" pt="$16" pb="$8" space="lg">
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
                        accessibilityLabel={`Photo of ${artist.name}`}
                    />
                </Box>

                {/* Artist Details */}
                <VStack space="sm">
                    <Text fontSize="$2xl" fontWeight="$bold" color={DARK.text}>
                        {artist.name}
                    </Text>
                    <Text fontSize="$sm" color={DARK.subText}>
                        {artist.genre}
                    </Text>

                    {/* Stats */}
                    <HStack space="3xl" pt="$3" pb="$1">
                        <VStack>
                            <Text fontSize="$lg" fontWeight="$bold" color={DARK.text}>
                                {artist.followers}
                            </Text>
                            <Text fontSize="$xs" color={DARK.subText}>
                                Followers
                            </Text>
                        </VStack>
                        <VStack>
                            <Text fontSize="$lg" fontWeight="$bold" color={DARK.text}>
                                {artist.upcomingShows}
                            </Text>
                            <Text fontSize="$xs" color={DARK.subText}>
                                Upcoming Shows
                            </Text>
                        </VStack>
                    </HStack>

                    {/* Bio */}
                    <Text fontSize="$sm" color={DARK.subText} lineHeight={22}>
                        {artist.bio}
                    </Text>
                </VStack>
            </VStack>

            {/* Events Section */}
            <Box px="$5" pb="$16" gap="$6">
                <Heading size="2xl" fontWeight="$bold" color={DARK.text}>
                    ALL EVENTS
                </Heading>

                {events.length > 0 ? (
                    <VStack space="lg">
                        {events.map((event) => (
                            <Pressable
                                key={event.id}
                                onPress={() => router.push(`/events/${event.id}`)}
                                accessibilityRole="link"
                                accessibilityLabel={`${event.name}, ${event.date} at ${event.venue}, ${event.price}`}
                                style={({ pressed }) => ({
                                    opacity: pressed ? 0.85 : 1,
                                })}
                            >
                                <Box
                                    borderWidth={1}
                                    borderColor={DARK.border}
                                    borderRadius="$xl"
                                    overflow="hidden"
                                    backgroundColor={DARK.cardBg}
                                >
                                    <Box width="100%" height={220}>
                                        <Image
                                            source={{ uri: event.image }}
                                            style={{ width: "100%", height: "100%" }}
                                            resizeMode="cover"
                                            accessibilityLabel={`${event.name} event poster`}
                                        />
                                    </Box>
                                    <VStack p="$3" space="xs">
                                        <Text
                                            fontSize="$xs"
                                            fontWeight="$semibold"
                                            color={DARK.accent}
                                            letterSpacing={0.5}
                                        >
                                            {event.date} • {event.time}
                                        </Text>
                                        <Text
                                            fontSize="$md"
                                            fontWeight="$bold"
                                            numberOfLines={2}
                                            color={DARK.text}
                                        >
                                            {event.name}
                                        </Text>
                                        <Text
                                            fontSize="$xs"
                                            numberOfLines={1}
                                            color={DARK.subText}
                                        >
                                            {event.venue}
                                        </Text>
                                        <Text
                                            fontSize="$xs"
                                            fontWeight="$semibold"
                                            color={DARK.subText}
                                        >
                                            {event.price}
                                        </Text>
                                    </VStack>
                                </Box>
                            </Pressable>
                        ))}
                    </VStack>
                ) : (
                    <Box
                        height={200}
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="$xl"
                        backgroundColor={DARK.cardBg}
                    >
                        <Text color={DARK.subText} fontSize="$lg">
                            No events found for this artist
                        </Text>
                    </Box>
                )}
            </Box>
        </ScrollView>
    )
}
