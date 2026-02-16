import React from "react";
import { Image, Platform } from "react-native";
import { Box, HStack, Text, Heading, VStack } from "../ui";
import { Bookmark } from "lucide-react-native";
import { Pressable } from "react-native";

interface ArtistProfileProps {
    image: string;
    name: string;
    bio: string;
}

const DARK = {
    text: "#ffffff",
    subText: "#9ca3af",
    buttonBorder: "#4b5563",
};

export const ArtistProfile: React.FC<ArtistProfileProps> = ({
    image,
    name,
    bio,
}) => {
    return (
        <VStack space="md">
            {/* Artist Image */}
            <Box
                width="100%"
                aspectRatio={1} // Square image as per second screenshot seems appropriate or slight rectangle
                borderRadius="$none" // Image goes edge to edge in design? Or maybe padded?
                // Checking design again: It seems to have padding left/right maybe?
                // Actually in the second screenshot, it seems to be inside a container with padding?
                // No, it touches the edges in the second screenshot? Hard to tell exactly but let's assume some padding or full width. 
                // Let's go with full width or slight radius.
                // The provided design shows it inside the screen content.
                // Let's us Aspect Ratio ~ 4/3 or 1/1.
                overflow="hidden"
                bg="gray.800"
            >
                <Image
                    source={{ uri: image }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                />
            </Box>

            <VStack space="sm" px="$4">
                {/* Name and Button Row */}
                <HStack justifyContent="space-between" alignItems="flex-start" mt="$2">
                    <Heading
                        size="xl"
                        color={DARK.text}
                        flex={1}
                        mr="$4"
                        lineHeight={32}
                    >
                        {name}
                    </Heading>

                    <Pressable
                        style={({ pressed }) => ({
                            opacity: pressed ? 0.7 : 1,
                            borderColor: DARK.buttonBorder,
                            borderWidth: 1,
                            borderRadius: 8,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 6,
                        })}
                        onPress={() => console.log("Added to Hotlist")}
                    >
                        <Bookmark size={16} color={DARK.text} />
                        <Text color={DARK.text} fontSize="$xs" fontWeight="$medium">
                            Add to Hotlist
                        </Text>
                    </Pressable>
                </HStack>

                {/* Bio */}
                <Text color={DARK.subText} fontSize="$sm" lineHeight={20}>
                    {bio}
                </Text>
            </VStack>
        </VStack>
    );
};
