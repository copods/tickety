import React from "react";
import { Box, VStack, HStack, Text, Heading } from "../../components/ui";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native";
// Note: Using gesture-handler ScrollView is better inside BottomSheet
import { OrganizerCard } from "./organizer-card";
import { GallerySection } from "./gallery-section";
import { MapPin, Clock, CalendarDays, Ticket, HelpCircle, ChevronRight, FileText } from "lucide-react-native";
import type { EventDetail } from "../../types";

interface EventContentProps {
    event: EventDetail;
    scrollEnabled?: boolean;
}

const DARK = {
    text: "#ffffff",
    subText: "#9ca3af",
    accent: "#fbbf24",
    tagBg: "#374151",
};

export const EventContent: React.FC<EventContentProps> = ({ event, scrollEnabled = true }) => {
    // Mock gallery images
    const galleryImages = [
        event.image,
        "https://images.unsplash.com/photo-1459749411177-33450b52eade?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2574&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop",
    ];

    return (
        <Box flex={1} bg="#111827">
            <BottomSheetScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 360 }}>
                <VStack p="$5" space="xl">

                    {/* Tags */}
                    <HStack space="sm" flexWrap="wrap">
                        {["Music Festivals", "Standup", "Music", "Comedy"].map((tag) => (
                            <Box key={tag} bg={DARK.tagBg} px="$3" py="$1.5" borderRadius="$full">
                                <Text color={DARK.text} fontSize="$xs">
                                    {tag}
                                </Text>
                            </Box>
                        ))}
                    </HStack>

                    {/* Title */}
                    <VStack space="xs">
                        <Heading size="2xl" color={DARK.text} lineHeight={36}>
                            {event.name}
                        </Heading>
                        <Text color={DARK.accent} fontWeight="bold" fontSize="$md">
                            {event.date}, {event.time}
                        </Text>
                    </VStack>

                    {/* Location & Time Box */}
                    <VStack space="md">
                        <HStack alignItems="center" space="md">
                            <Box bg="gray.800" p="$3" borderRadius="$xl">
                                <MapPin color="white" size={24} />
                            </Box>
                            <VStack>
                                <Text color={DARK.text} fontWeight="bold" fontSize="$md">
                                    {event.venue}, {event.city || "Pune"}
                                </Text>
                                <Text color={DARK.subText} fontSize="$sm">
                                    24.4 km away
                                </Text>
                            </VStack>
                            <Box flex={1} alignItems="flex-end">
                                {/* Arrow right icon could go here */}
                            </Box>
                        </HStack>

                        <HStack alignItems="center" space="md">
                            <Box bg="gray.800" p="$3" borderRadius="$xl">
                                <Clock color="white" size={24} />
                            </Box>
                            <VStack>
                                <Text color={DARK.text} fontWeight="bold" fontSize="$md">
                                    Gates open at 2:30 PM
                                </Text>
                                <Text color={DARK.subText} fontSize="$sm">
                                    View full schedule & timeline
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>

                    {/* Why this event stands out */}
                    <Box
                        bg="#1f2937"
                        p="$4"
                        borderRadius="$2xl"
                        borderWidth={1}
                        borderColor="rgba(251, 191, 36, 0.2)" // Gold tint
                        overflow="hidden"
                    >
                        {/* Background decoration could go here */}
                        <VStack space="sm">
                            <HStack space="sm" alignItems="center">
                                {/* Crown icon */}
                                <Ticket color={DARK.accent} size={18} />
                                <Text color={DARK.text} fontWeight="bold" fontSize="$md">
                                    Why this event stands out
                                </Text>
                            </HStack>
                            <Text color={DARK.subText} lineHeight={22}>
                                {event.description || "Values this event unites music lovers with a diverse lineup and its signature happiest-festival vibe."}
                            </Text>
                        </VStack>
                    </Box>

                    {/* Gallery (Who's taking the stage mock) */}
                    <VStack space="md">
                        <Heading size="md" color={DARK.text}>
                            Who's taking the stage
                        </Heading>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <HStack space="md">
                                {galleryImages.map((img, idx) => (
                                    <Box
                                        key={idx}
                                        width={280}
                                        height={180}
                                        borderRadius="$xl"
                                        overflow="hidden"
                                    >
                                        <Image
                                            source={{ uri: img }}
                                            style={{ width: "100%", height: "100%" }}
                                            resizeMode="cover"
                                        />
                                    </Box>
                                ))}
                            </HStack>
                        </ScrollView>
                    </VStack>

                    {/* Gallery Grid */}
                    <GallerySection images={galleryImages} />

                    {/* Organizer */}
                    <OrganizerCard
                        name={event.organizer || "Nodwin Gaming Pvt Ltd"}
                        avatar="https://ui-avatars.com/api/?name=NG&background=random"
                        likedPercentage="85%"
                        hostedEvents="20+"
                        hostingYears="7.3 years"
                    />

                    {/* More Menu */}
                    <VStack space="md" mb="$20">
                        <Heading size="md" color={DARK.text}>
                            More
                        </Heading>
                        <VStack
                            bg="#1f2937"
                            borderRadius="$2xl"
                            overflow="hidden"
                        >
                            <HStack p="$4" justifyContent="space-between" alignItems="center" borderBottomWidth={1} borderBottomColor="gray.700">
                                <HStack space="md" alignItems="center">
                                    <HelpCircle color={DARK.subText} size={20} />
                                    <Text color={DARK.text} fontWeight="medium">Frequently asked questions</Text>
                                </HStack>
                                <ChevronRight color={DARK.subText} size={20} />
                            </HStack>
                            <HStack p="$4" justifyContent="space-between" alignItems="center">
                                <HStack space="md" alignItems="center">
                                    <FileText color={DARK.subText} size={20} />
                                    <Text color={DARK.text} fontWeight="medium">Terms and conditions</Text>
                                </HStack>
                                <ChevronRight color={DARK.subText} size={20} />
                            </HStack>
                        </VStack>
                    </VStack>

                </VStack>
            </BottomSheetScrollView>
        </Box>
    );
};
