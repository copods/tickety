import React from "react";
import { Platform } from "react-native";
import { Image, Pressable } from "react-native";
import { Box, HStack, VStack, Text } from "../ui";
import { Bookmark, MapPin } from "lucide-react-native";
import { EventDetail } from "@tickety/app/types";

export interface ArtistEventCardProps {
    event: EventDetail;
    onPress?: (event: EventDetail) => void;
}

const DARK = {
    cardBg: "#1f2937",
    text: "#ffffff",
    subText: "#9ca3af",
    accent: "#fbbf24", // Gold/Yellow
    border: "#374151",
};

export const ArtistEventCard: React.FC<ArtistEventCardProps> = ({
    event,
    onPress,
}) => {
    return (
        <Pressable
            onPress={() => onPress?.(event)}
            style={({ pressed }) => ({
                opacity: pressed ? 0.8 : 1,
            })}
        >
            <Box
                bg={DARK.cardBg}
                borderRadius="$2xl"
                borderWidth={1}
                borderColor={DARK.border}
                overflow="hidden"
                p="$3"
            >
                <HStack space="md" alignItems="center">
                    {/* Left: Image */}
                    <Box
                        width={80}
                        height={100}
                        borderRadius="$xl"
                        overflow="hidden"
                        bg="gray.800"
                    >
                        <Image
                            source={{ uri: event.image }}
                            style={{ width: "100%", height: "100%" }}
                            resizeMode="cover"
                        />
                    </Box>

                    {/* Center: Details */}
                    <VStack flex={1} space="xs">
                        {/* Date & Time */}
                        <Text
                            color={DARK.accent}
                            fontWeight="$bold"
                            fontSize="$xs"
                            numberOfLines={1}
                        >
                            {event.date}, {event.time}
                        </Text>

                        {/* Title */}
                        <Text
                            color={DARK.text}
                            fontWeight="$bold"
                            fontSize="$md"
                            numberOfLines={2}
                            lineHeight={22}
                        >
                            {event.name}
                        </Text>

                        {/* Venue & City */}
                        <HStack alignItems="center" space="xs">
                            <Text color={DARK.subText} fontSize="$xs" numberOfLines={1}>
                                {event.venue}, {event.city || "City"}
                            </Text>
                        </HStack>

                        {/* Price */}
                        <Text color={DARK.subText} fontSize="$xs" mt="$1">
                            {event.price}
                        </Text>
                    </VStack>

                    {/* Right: Bookmark Action */}
                    <Box alignSelf="flex-start">
                        <Box bg="rgba(255,255,255,0.1)" p="$2" borderRadius="$full">
                            <Bookmark size={18} color={DARK.subText} />
                        </Box>
                    </Box>
                </HStack>
            </Box>
        </Pressable>
    );
};
