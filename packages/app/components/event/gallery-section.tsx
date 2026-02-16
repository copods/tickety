import React from "react";
import { Box, HStack, VStack, Text, Heading } from "../../components/ui";
import { Image, Dimensions } from "react-native";

interface GallerySectionProps {
    images: string[];
}

const DARK = {
    text: "#ffffff",
    placeholder: "gray.800",
};

const SCREEN_WIDTH = Dimensions.get("window").width;
const GAP = 8;
const PADDING = 20; // $5 equivalent
const COLUMN_WIDTH = (SCREEN_WIDTH - (PADDING * 2) - GAP) / 2;

export const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
    // Take first 4 images for the grid
    const displayImages = images.slice(0, 4);

    if (displayImages.length === 0) return null;

    return (
        <VStack space="md" mt="$4">
            <HStack justifyContent="space-between" alignItems="center">
                <Heading size="md" color={DARK.text}>
                    Gallery
                </Heading>
                <Text color={DARK.text} fontSize="$sm">
                    View all
                </Text>
            </HStack>

            <HStack flexWrap="wrap" gap={GAP}>
                {displayImages.map((img, index) => (
                    <Box
                        key={index}
                        width={COLUMN_WIDTH}
                        height={COLUMN_WIDTH}
                        borderRadius="$lg"
                        overflow="hidden"
                        bg={DARK.placeholder}
                    >
                        <Image
                            source={{ uri: img }}
                            style={{ width: "100%", height: "100%" }}
                            resizeMode="cover"
                        />
                        {/* Overlay on the last image if there are more */}
                        {index === 3 && images.length > 4 && (
                            <Box
                                position="absolute"
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
                                bg="rgba(0,0,0,0.5)"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text color="white" fontWeight="bold" fontSize="$xl">
                                    +{images.length - 4}
                                </Text>
                            </Box>
                        )}
                    </Box>
                ))}
            </HStack>
        </VStack>
    );
};
