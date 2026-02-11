import { useState, useEffect } from "react"
import { useRouter, useLocalSearchParams } from "expo-router"
import { Box, VStack, HStack, Text, Button, ButtonText } from "@tickety/app/components/ui"
import { fetchEventById } from "@tickety/app/services/api"
import type { EventDetail } from "@tickety/app/types"
import { Image, Pressable, ScrollView, StyleSheet } from "react-native"
import { ChevronLeft, Bookmark, MapPin } from "lucide-react-native"
import { EventDetailSkeleton } from "@tickety/app/components/composite"

const DARK = {
    bg: "#111827",
    cardBg: "#1f2937",
    text: "#ffffff",
    subText: "#9ca3af",
    border: "#374151",
    accent: "#fbbf24",
}

export default function EventPage() {
    const router = useRouter()
    const { id } = useLocalSearchParams<{ id: string }>()
    const [event, setEvent] = useState<EventDetail | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) return

        fetchEventById(id)
            .then((data) => {
                setEvent(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <EventDetailSkeleton />
    }

    if (error || !event) {
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
                    {error || "Event not found"}
                </Text>
            </Box>
        )
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: DARK.bg }}>
            {/* Banner Image */}
            <Box width="100%" height={320} position="relative">
                <Image
                    source={{ uri: event.bannerImage || event.image }}
                    style={StyleSheet.absoluteFill}
                    resizeMode="cover"
                    accessibilityLabel={`Banner image for ${event.name}`}
                />
                {/* Dark overlay */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="rgba(0,0,0,0.4)"
                />
                {/* Top bar: back + save */}
                {/* Back button */}
                <Box position="absolute" top="$12" left="$4" zIndex={2}>
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
                {/* Save icon */}
                <Box position="absolute" top="$12" right="$4" zIndex={2}>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Save this event"
                        style={({ pressed }) => ({
                            backgroundColor: pressed
                                ? "rgba(0,0,0,0.95)"
                                : "rgba(0,0,0,0.7)",
                            borderRadius: 999,
                            padding: 10,
                        })}
                    >
                        <Bookmark size={20} color="#ffffff" strokeWidth={2.2} />
                    </Pressable>
                </Box>

                {/* Bottom gradient with title snippet */}
                <Box
                    position="absolute"
                    left={0}
                    right={0}
                    bottom={0}
                    px="$5"
                    pb="$5"
                    pt="$16"
                    justifyContent="flex-end"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.35)",
                    }}
                >
                    <Text
                        fontSize="$sm"
                        color={DARK.subText}
                        numberOfLines={1}
                    >
                        {event.category}
                    </Text>
                    <Text
                        fontSize="$2xl"
                        fontWeight="$bold"
                        color={DARK.text}
                        numberOfLines={2}
                    >
                        {event.name}
                    </Text>
                    <Text fontSize="$xs" color={DARK.subText} mt="$1">
                        {event.date} • {event.time}
                    </Text>
                </Box>
            </Box>

            {/* Content */}
            <VStack
                px="$5"
                py="$6"
                space="lg"
            >
                {/* Date, Time, Venue */}
                <VStack space="xs">
                    <Text fontSize="$md" fontWeight="$semibold" color={DARK.accent}>
                        {event.date} • {event.time}
                    </Text>
                    <HStack alignItems="center" space="xs">
                        <MapPin size={14} color={DARK.subText} />
                        <Text fontSize="$md" color={DARK.subText} flex={1}>
                            {event.venue}
                        </Text>
                    </HStack>
                </VStack>

                {/* Price & Book */}
                <HStack
                    alignItems="center"
                    justifyContent="space-between"
                    py="$4"
                    borderTopWidth={1}
                    borderBottomWidth={1}
                    borderColor={DARK.border}
                >
                    <VStack>
                        <Text fontSize="$sm" color={DARK.subText}>
                            Starting from
                        </Text>
                        <Text fontSize="$2xl" fontWeight="$bold" color={DARK.text}>
                            {event.price}
                        </Text>
                    </VStack>
                    <Button
                        size="lg"
                        bg="$white"
                        action="primary"
                        borderRadius="$full"
                        accessibilityRole="button"
                        accessibilityLabel={`Book tickets for ${event.name}`}
                        width={160}
                        height={48}
                    >
                        <ButtonText color="$black" fontWeight="$bold" fontSize="$md">
                            Book Tickets
                        </ButtonText>
                    </Button>
                </HStack>

                {/* Description */}
                <VStack space="sm">
                    <Text fontSize="$lg" fontWeight="$bold" color={DARK.text}>
                        About this Event
                    </Text>
                    <Text fontSize="$md" color={DARK.subText} lineHeight={24}>
                        {event.description}
                    </Text>
                </VStack>

                {/* Details Card */}
                <Box
                    width="100%"
                    px="$4"
                    py="$6"
                    backgroundColor={DARK.cardBg}
                    borderRadius="$xl"
                >
                    <VStack space="md">
                        <HStack justifyContent="space-between">
                            <Text fontSize="$sm" color={DARK.subText}>
                                Organizer
                            </Text>
                            <Text fontSize="$sm" fontWeight="$semibold" color={DARK.text}>
                                {event.organizer}
                            </Text>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text fontSize="$sm" color={DARK.subText}>
                                Age Restriction
                            </Text>
                            <Text fontSize="$sm" fontWeight="$semibold" color={DARK.text}>
                                {event.ageRestriction}
                            </Text>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text fontSize="$sm" color={DARK.subText}>
                                Category
                            </Text>
                            <Text fontSize="$sm" fontWeight="$semibold" color={DARK.text}>
                                {event.category}
                            </Text>
                        </HStack>
                    </VStack>
                </Box>
            </VStack>
        </ScrollView>
    )
}
