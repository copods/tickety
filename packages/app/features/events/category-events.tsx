import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Heading,
    HStack,
    Text,
    VStack,
} from "../../components/ui";
import {
    ScrollView,
    Pressable,
    Platform,
    useWindowDimensions,
    StatusBar,
    SafeAreaView,
} from "react-native";
import {
    ArrowLeft,
    Search,
    SlidersHorizontal,
    ChevronDown,
} from "lucide-react-native";
import { useRouter } from "solito/router";
import { AllEvents } from "../../components/composite/all-events";
import { FeaturedEventCard } from "../../components/composite/featured-event-card";
import { fetchEvents } from "../../services/api";
import type { CarouselEvent } from "../../types";

type CategoryEventsProps = {
    category: string;
};

// Mock sub-categories for now, ideally this comes from API or config
const SUB_CATEGORIES: Record<string, string[]> = {
    Music: ["All", "Live Gigs", "Concerts", "Music Festivals"],
    Comedy: ["All", "Stand-up", "Open Mic", "Improv"],
    default: ["All", "Today", "Tomorrow", "Weekend"],
};

const SORT_OPTIONS = ["Sort by", "Today", "Tomorrow", "This Weekend"];

export function CategoryEvents({ category }: CategoryEventsProps) {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isWeb = Platform.OS === "web";
    const [activeSubCategory, setActiveSubCategory] = useState("All");
    const [featuredEvent, setFeaturedEvent] = useState<CarouselEvent | null>(
        null
    );

    // Get sub-categories for this category, or default
    const subCategories =
        SUB_CATEGORIES[category] || SUB_CATEGORIES["default"] || [];

    useEffect(() => {
        // Fetch a random event to feature (mocking the "Featured" logic)
        fetchEvents().then((events) => {
            if (events.length > 0) {
                // Just pick the first one for now
                setFeaturedEvent(events[0]);
            }
        });
    }, [category]);

    const handleBack = () => {
        router.back();
    };

    return (
        <Box flex={1} bg="#000000">
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <VStack flex={1} space="md">
                    {/* Top Header Bar */}
                    <HStack
                        px="$4"
                        py="$2"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Pressable onPress={handleBack}>
                            <ArrowLeft color="#ffffff" size={24} />
                        </Pressable>
                        <Heading color="#ffffff" size="lg" fontWeight="bold">
                            {category}
                        </Heading>
                        <Pressable>
                            <Search color="#ffffff" size={24} />
                        </Pressable>
                    </HStack>

                    {/* Scrolling Content */}
                    <ScrollView
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator={false}
                    >
                        <VStack space="xl">
                            {/* 3D Icon & Large Title Placeholder - 
                   In a real app, we'd map category to specific 3D assets. 
                   For now, we just use a large text header or simple icon wrapper.
               */}
                            <HStack px="$5" alignItems="center" space="md">
                                {/* Placeholder for 3D Icon */}
                                {/* <Box width={60} height={60} bg="#333" borderRadius="$xl" /> */}
                                {/* The design shows the title "Music" alongside a 3D speaker icon. 
                       We'll stick to text for now as we don't have 3D assets.
                       Or we can use a large lucide icon.
                   */}
                            </HStack>

                            {/* Sub-Category Tabs */}
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 20, gap: 24 }}
                            >
                                {subCategories.map((subCat) => {
                                    const isActive = activeSubCategory === subCat;
                                    return (
                                        <Pressable
                                            key={subCat}
                                            onPress={() => setActiveSubCategory(subCat)}
                                        >
                                            <VStack space="xs" alignItems="center">
                                                <Text
                                                    color={isActive ? "#ffffff" : "#9ca3af"}
                                                    fontWeight={isActive ? "bold" : "medium"}
                                                    fontSize="$md"
                                                >
                                                    {subCat}
                                                </Text>
                                                {isActive && (
                                                    <Box
                                                        height={3}
                                                        width="100%"
                                                        bg="#8B5CF6"
                                                        borderRadius="$full"
                                                    />
                                                )}
                                            </VStack>
                                        </Pressable>
                                    );
                                })}
                            </ScrollView>

                            {/* Featured Section */}
                            {featuredEvent && (
                                <VStack space="md" px="$5">
                                    <HStack alignItems="center" space="md" justifyContent="center" mb="$2">
                                        <Box h={1} flex={1} bg="#333" />
                                        <Text color="#ffffff" fontSize="$xs" letterSpacing={2} fontWeight="bold">FEATURED</Text>
                                        <Box h={1} flex={1} bg="#333" />
                                    </HStack>
                                    <FeaturedEventCard event={featuredEvent} />
                                </VStack>
                            )}

                            {/* All Events List Section */}
                            <VStack space="md" pt="$4">
                                <Box px="$5" mb="$2">
                                    <Text color="#ffffff" fontSize="$xs" letterSpacing={2} fontWeight="bold">
                                        ALL {category.toUpperCase()} EVENTS
                                    </Text>
                                </Box>

                                {/* Custom Filter Row (Sort by, Today, etc.) matching design */}
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
                                    {SORT_OPTIONS.map((opt, i) => (
                                        <Pressable key={opt}>
                                            <Box
                                                borderColor="#333"
                                                borderWidth={1}
                                                borderRadius="$full"
                                                px="$4"
                                                py="$2"
                                                flexDirection="row"
                                                alignItems="center"
                                                gap="$2"
                                            >
                                                <Text color="#ffffff" fontSize="$sm">{opt}</Text>
                                                {i === 0 && <ChevronDown size={14} color="#ffffff" />}
                                            </Box>
                                        </Pressable>
                                    ))}
                                </ScrollView>

                                {/* Re-using AllEvents component without its internal header/filters */}
                                <AllEvents
                                    genres={[category === "All" ? "" : category]}
                                    hideHeader
                                    hideFilters
                                />
                            </VStack>

                        </VStack>
                    </ScrollView>
                </VStack>
            </SafeAreaView>
        </Box>
    );
}
