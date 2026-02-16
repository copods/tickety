import React from "react";
import { StyleSheet, Image, Platform, Pressable } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Box, HStack, Text } from "../../components/ui";
import { ChevronLeft, Bookmark, Share2 } from "lucide-react-native";
import { useRouter } from "solito/router";

interface EventBackgroundProps {
    mediaUri: string; // URL for video or image
    mediaType: "video" | "image";
    posterUri?: string; // Poster for video
}

export const EventBackground: React.FC<EventBackgroundProps> = ({
    mediaUri,
    mediaType,
    posterUri,
}) => {
    const router = useRouter();
    const videoRef = React.useRef<Video>(null);

    return (
        <Box position="absolute" top={0} left={0} right={0} height="60%" bg="black">
            {mediaType === "video" ? (
                <Video
                    ref={videoRef}
                    style={StyleSheet.absoluteFill}
                    source={{ uri: mediaUri }}
                    posterSource={posterUri ? { uri: posterUri } : undefined}
                    usePoster={!!posterUri}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay
                    isMuted
                />
            ) : (
                <Image
                    source={{ uri: mediaUri }}
                    style={StyleSheet.absoluteFill}
                    resizeMode="contain"
                />
            )}

            {/* Dark Overlay */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                backgroundColor="rgba(0,0,0,0.3)"
            />

            {/* Top Navigation Bar */}
            <HStack
                position="absolute"
                top={Platform.OS === "ios" ? 60 : 40} // Adjust forSafeArea
                left={0}
                right={0}
                px="$4"
                justifyContent="space-between"
                alignItems="center"
                zIndex={10}
            >
                <Pressable
                    onPress={() => router.back()}
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.7 : 1,
                        padding: 8,
                    })}
                >
                    <ChevronLeft size={28} color="white" />
                </Pressable>

                <HStack space="md">
                    <Pressable
                        style={({ pressed }) => ({
                            opacity: pressed ? 0.7 : 1,
                            padding: 8,
                        })}
                    >
                        <Bookmark size={24} color="white" />
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => ({
                            opacity: pressed ? 0.7 : 1,
                            padding: 8,
                        })}
                    >
                        <Share2 size={24} color="white" />
                    </Pressable>
                </HStack>
            </HStack>
        </Box>
    );
};
