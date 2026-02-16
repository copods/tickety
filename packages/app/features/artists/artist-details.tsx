import { useState, useEffect } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, ActivityIndicator, SafeAreaView, View } from "react-native";
import { useRouter } from "solito/router";
import {
    ArrowLeft,
    Share2,
    Bookmark
} from "lucide-react-native";
import {
    Box,
    Heading,
    HStack,
    Text,
    VStack,
} from "../../components/ui";
import { ArtistEventCard } from "../../components/composite/artist-event-card";
import { ArtistProfile } from "../../components/artist/artist-profile";
import { SectionHeader } from "../../components/artist/section-header"; // Assuming I create this
import { fetchArtistById, fetchEventsByArtist } from "../../services/api";
import type { ArtistDetail, EventDetail } from "../../types";

const DARK = {
    bg: "#111827", // Dark background
    text: "#ffffff",
    subText: "#9ca3af",
    accent: "#fbbf24",
};

interface ArtistDetailsProps {
    artistId: string;
}

export function ArtistDetails({ artistId }: ArtistDetailsProps) {
    const router = useRouter();
    const [artist, setArtist] = useState<ArtistDetail | null>(null);
    const [events, setEvents] = useState<EventDetail[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!artistId) return;

        const loadData = async () => {
            try {
                setLoading(true);
                // Fetch artist and events in parallel
                const [artistData, eventsData] = await Promise.all([
                    fetchArtistById(artistId), // This returns ArtistDetail which has image, name, bio
                    fetchEventsByArtist(artistId),
                ]);
                setArtist(artistData);
                setEvents(eventsData);
            } catch (error) {
                console.error("Failed to fetch artist details", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [artistId]);

    if (loading) {
        return (
            <Box flex={1} bg={DARK.bg} justifyContent="center" alignItems="center">
                <ActivityIndicator size="large" color={DARK.accent} />
            </Box>
        );
    }

    if (!artist) {
        return (
            <Box flex={1} bg={DARK.bg} justifyContent="center" alignItems="center">
                <Text color={DARK.text}>Artist not found</Text>
            </Box>
        );
    }

    // Mock location grouping logic
    const nearYouEvents = events.slice(0, 1);
    const otherCityEvents = events.slice(1);

    return (
        <Box flex={1} bg={DARK.bg}>
            <SafeAreaView style={{ backgroundColor: DARK.bg }}>
                {/* Header matches design: Back, Name, Share */}
                <HStack
                    px="$4"
                    py="$3"
                    alignItems="center"
                    justifyContent="space-between"
                    bg={DARK.bg}
                    zIndex={10}
                >
                    <Pressable onPress={() => router.back()} hitSlop={10}>
                        <ArrowLeft color="#ffffff" size={24} />
                    </Pressable>

                    <Heading size="md" color="#ffffff" numberOfLines={1} flex={1} textAlign="left" ml="$4">
                        {artist.name}
                    </Heading>

                    <Pressable onPress={() => console.log("Share")} hitSlop={10}>
                        <Share2 color="#ffffff" size={24} />
                    </Pressable>
                </HStack>
            </SafeAreaView>

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <VStack space="2xl" pb="$10">

                    {/* Artist Profile Section */}
                    <ArtistProfile
                        image={artist.image}
                        name={artist.name}
                        bio={artist.bio || `Comedy • ${events.length} Events`} // Fallback bio if empty
                    />

                    {/* Events Section */}
                    <VStack space="lg" px="$4">
                        <Heading size="lg" color={DARK.text}>
                            All events
                        </Heading>

                        {/* Near You */}
                        {nearYouEvents.length > 0 && (
                            <VStack space="md">
                                <SectionHeader title="NEAR YOU" />
                                <VStack space="md">
                                    {nearYouEvents.map((event) => (
                                        <ArtistEventCard
                                            key={event.id}
                                            event={event}
                                            onPress={(e) => router.push(`/events/${e.id}`)}
                                        />
                                    ))}
                                </VStack>
                            </VStack>
                        )}

                        {/* Other Cities */}
                        {otherCityEvents.length > 0 && (
                            <VStack space="md">
                                <SectionHeader title="IN OTHER CITIES" />
                                <VStack space="md">
                                    {otherCityEvents.map((event) => (
                                        <ArtistEventCard
                                            key={event.id}
                                            event={event}
                                            onPress={(e) => router.push(`/events/${e.id}`)}
                                        />
                                    ))}
                                </VStack>
                            </VStack>
                        )}

                        {/* Empty State */}
                        {events.length === 0 && (
                            <Box py="$10" alignItems="center">
                                <Text color={DARK.subText}>No upcoming events found.</Text>
                            </Box>
                        )}
                    </VStack>

                </VStack>
            </ScrollView>
        </Box>
    );
}
