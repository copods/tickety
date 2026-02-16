import React from "react";
import { Box, Text, VStack } from "../ui";
import { Image, Pressable, Platform, useWindowDimensions } from "react-native";
import { Bookmark, Volume2 } from "lucide-react-native";
import { MotiView } from "moti";
import type { CarouselEvent } from "../../types";

interface FeaturedEventCardProps {
    event: CarouselEvent;
    onPress?: (event: CarouselEvent) => void;
}

export const FeaturedEventCard: React.FC<FeaturedEventCardProps> = ({
    event,
    onPress,
}) => {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const isWeb = Platform.OS === "web";

    return (
        <Box
            width="100%"
            height={isMobile ? 450 : 500}
            borderRadius="$3xl"
            overflow="hidden"
            position="relative"
            bg="#1a1a1a"
        >
            <Pressable
                onPress={() => onPress?.(event)}
                style={{ flex: 1 }}
            >
                <Image
                    source={{ uri: event.image }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                />

                {/* Gradient Overlay */}
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    height="100%"
                    bg="rgba(0,0,0,0.3)"
                />

                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    height="50%"
                    // Linear Gradient workaround for now
                    style={
                        Platform.select({
                            web: { backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))" },
                            default: { backgroundColor: "rgba(0,0,0,0.6)" }
                        }) as any
                    }
                />


                {/* Top Right Controls */}
                <Box position="absolute" top={20} right={20} flexDirection="row" gap={12}>
                    <Box
                        bg="rgba(255,255,255,0.2)"
                        p="$2.5"
                        borderRadius="$full"
                        style={Platform.select({ web: { backdropFilter: "blur(10px)" } }) as any}
                    >
                        <Volume2 size={20} color="#ffffff" />
                    </Box>
                </Box>

                {/* Content */}
                <VStack
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p="$6"
                    space="sm"
                >
                    {/* Promo Badge */}
                    <Box
                        bg="#4C1D95"
                        alignSelf="flex-start"
                        px="$3"
                        py="$1"
                        borderRadius="$md"
                        mb="$2"
                        flexDirection="row"
                        alignItems="center"
                        gap="$2"
                    >
                        {/* Tag Icon */}
                        <Box width={12} height={12} bg="white" borderRadius="$full" style={{ transform: [{ rotate: "45deg" }] }} />
                        <Text color="#ffffff" fontWeight="$bold" fontSize="$xs">
                            Pay only 50% to reserve your tickets
                        </Text>
                    </Box>

                    <Text color="#fbbf24" fontWeight="$semibold" fontSize="$sm">
                        {event.date}, {event.time}
                    </Text>

                    <Text color="#ffffff" fontWeight="$bold" fontSize="$3xl" numberOfLines={2}>
                        {event.name}
                    </Text>
                    <Text color="#cccccc" fontSize="$md" numberOfLines={1}>
                        {event.venue}
                    </Text>

                    {/* Save Button */}
                    <Box position="absolute" bottom={24} right={24}>
                        <Box bg="rgba(255,255,255,0.1)" p="$3" borderRadius="$xl">
                            <Bookmark size={24} color="#ffffff" />
                        </Box>
                    </Box>

                </VStack>
            </Pressable>
        </Box>
    );
};
