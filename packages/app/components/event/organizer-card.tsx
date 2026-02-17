import React from "react";
import { Box, HStack, VStack, Text, Heading } from "../../components/ui";
import { Image } from "react-native";

interface OrganizerCardProps {
    name: string;
    avatar: string;
    likedPercentage: string;
    hostedEvents: string;
    hostingYears: string;
}

const DARK = {
    cardBg: "#1f2937",
    text: "#ffffff",
    subText: "#9ca3af",
};

export const OrganizerCard: React.FC<OrganizerCardProps> = ({
    name,
    avatar,
    likedPercentage,
    hostedEvents,
    hostingYears,
}) => {
    return (
        <VStack space="md">
            <Heading size="md" color={DARK.text} mb="$2">
                Organised By
            </Heading>
            <Box
                bg={DARK.cardBg}
                borderRadius="$2xl"
                p="$4"
            >
                <HStack alignItems="center" space="xl">
                    {/* Organizer Avatar & Name */}
                    <VStack alignItems="center" space="sm" flex={1}>
                        <Box
                            width={80}
                            height={80}
                            borderRadius="$full"
                            overflow="hidden"
                            bg="gray.700"
                        >
                            <Image
                                source={{ uri: avatar }}
                                style={{ width: "100%", height: "100%" }}
                                resizeMode="cover"
                            />
                        </Box>
                        <Text color={DARK.text} fontWeight="bold" textAlign="center" fontSize="$md">
                            {name}
                        </Text>
                    </VStack>

                    {/* Stats */}
                    <VStack space="md" flex={1} borderLeftWidth={0.5} borderLeftColor="gray.600" pl="$4">
                        <VStack>
                            <Text color={DARK.text} fontWeight="bold" fontSize="$lg">
                                {likedPercentage}
                            </Text>
                            <Text color={DARK.subText} fontSize="$xs">
                                Liked
                            </Text>
                        </VStack>
                        <Box height={0.5} bg="gray.600" width="100%" />
                        <VStack>
                            <Text color={DARK.text} fontWeight="bold" fontSize="$lg">
                                {hostedEvents}
                            </Text>
                            <Text color={DARK.subText} fontSize="$xs">
                                Hosted events
                            </Text>
                        </VStack>
                        <Box height={0.5} bg="gray.600" width="100%" />
                        <VStack>
                            <Text color={DARK.text} fontWeight="bold" fontSize="$lg">
                                {hostingYears}
                            </Text>
                            <Text color={DARK.subText} fontSize="$xs">
                                Hosting
                            </Text>
                        </VStack>
                    </VStack>
                </HStack>
            </Box>
        </VStack>
    );
};
