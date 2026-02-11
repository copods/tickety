import { useState, useEffect } from "react"
import { useRouter, useLocalSearchParams } from "expo-router"
import { EventCarousel, CategoryEventsSkeleton } from "@tickety/app/components/composite"
import type { EventDetail } from "@tickety/app/types"
import { fetchEventsByCategory } from "@tickety/app/services/api"
import { Box, VStack, HStack, Text, Heading } from "@tickety/app/components/ui"
import { Image, Pressable, ScrollView } from "react-native"
import { ChevronLeft } from "lucide-react-native"

const DARK = {
    bg: "#111827",
    cardBg: "#1f2937",
    text: "#ffffff",
    subText: "#9ca3af",
    border: "#374151",
    accent: "#fbbf24",
}

export default function CategoryPage() {
    const router = useRouter()
    const { category } = useLocalSearchParams<{ category: string }>()
    const [events, setEvents] = useState<EventDetail[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const categoryName = category ? decodeURIComponent(category) : ""

    useEffect(() => {
        if (!category) return

        setLoading(true)
        fetchEventsByCategory(decodeURIComponent(category))
            .then((data) => {
                setEvents(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [category])

    if (loading) {
        return <CategoryEventsSkeleton />
    }

    if (error) {
        return (
            <Box
                flex={1}
                justifyContent="center"
                alignItems="center"
                height={400}
                backgroundColor={DARK.bg}
                accessibilityRole="alert"
            >
                <Text color="$red500" accessibilityRole="alert">{error}</Text>
            </Box>
        )
    }

    const carouselEvents = events.slice(0, 5)

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

            <Box gap="$10">
                {/* Event Carousel */}
                {carouselEvents.length > 0 ? (
                    <EventCarousel
                        data={carouselEvents}
                        onEventPress={(event) => router.push(`/events/${event.id}`)}
                    />
                ) : (
                    <Box height={300} justifyContent="center" alignItems="center">
                        <Text color={DARK.subText} fontSize="$lg">
                            No {categoryName} events found
                        </Text>
                    </Box>
                )}

                {/* All Category Events List */}
                {events.length > 0 && (
                    <Box px="$5" gap="$6" pb="$16">
                        <Heading size="2xl" fontWeight="$bold" color={DARK.text}>
                            All {categoryName} Events
                        </Heading>
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
                    </Box>
                )}
            </Box>
        </ScrollView>
    )
}
