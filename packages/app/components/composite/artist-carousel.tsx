import React, { useRef, useState, useEffect } from "react";
import { Box, VStack, HStack, Text } from "../ui";
import {
  Image,
  Pressable,
  ScrollView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";

export interface Artist {
  id: string;
  name: string;
  image: string;
}

interface ArtistCarouselProps {
  artists: Artist[];
  onArtistPress?: (artist: Artist) => void;
}

export const ArtistCarousel = ({
  artists,
  onArtistPress,
}: ArtistCarouselProps) => {
  const isWeb = Platform.OS === "web";
  const scrollRef = useRef<ScrollView>(null);
  const [scrollX, setScrollX] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;

  const ITEM_WIDTH = isMobile ? 120 : 160;
  const ITEM_GAP = 18; // approx "lg" space
  const SCROLL_AMOUNT = (ITEM_WIDTH + ITEM_GAP) * 3;
  const canScrollLeft = scrollX > 0;
  const canScrollRight = scrollX + containerWidth < contentWidth - 1;

  const scrollLeft = () => {
    const newX = Math.max(0, scrollX - SCROLL_AMOUNT);
    scrollRef.current?.scrollTo({ x: newX, animated: true });
  };

  const scrollRight = () => {
    const maxX = contentWidth - containerWidth;
    const newX = Math.min(maxX, scrollX + SCROLL_AMOUNT);
    scrollRef.current?.scrollTo({ x: newX, animated: true });
  };

  if (!artists || artists.length === 0) return null;

  return (
    <Box
      px={isMobile ? "$5" : "$20"}
      gap="$6"
      margin="auto"
      width="100%"
      overflow="hidden"
      maxWidth={1440}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize="$4xl" color="$black" fontWeight="$bold">
          Artists in your District
        </Text>

        {!isMobile && (
          <HStack space="sm">
            <Pressable
              onPress={scrollLeft}
              disabled={!canScrollLeft}
              style={({ pressed }) => ({
                backgroundColor: pressed
                  ? "rgba(0,0,0,0.95)"
                  : "rgba(0,0,0,0.75)",
                borderRadius: 24,
                padding: 8,
                opacity: canScrollLeft ? (pressed ? 0.9 : 1) : 0.3,
                cursor: isWeb
                  ? canScrollLeft
                    ? "pointer"
                    : "default"
                  : "default",
              })}
            >
              <ChevronLeft size={20} color="white" strokeWidth={2.5} />
            </Pressable>
            <Pressable
              onPress={scrollRight}
              disabled={!canScrollRight}
              style={({ pressed }) => ({
                backgroundColor: pressed
                  ? "rgba(0,0,0,0.95)"
                  : "rgba(0,0,0,0.75)",
                borderRadius: 24,
                padding: 8,
                opacity: canScrollRight ? (pressed ? 0.9 : 1) : 0.3,
                cursor: isWeb
                  ? canScrollRight
                    ? "pointer"
                    : "default"
                  : "default",
              })}
            >
              <ChevronRight size={20} color="white" strokeWidth={2.5} />
            </Pressable>
          </HStack>
        )}
      </HStack>

      <Box width="100%" overflow="hidden">
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => setScrollX(e.nativeEvent.contentOffset.x)}
          scrollEventThrottle={16}
          onContentSizeChange={(w) => setContentWidth(w)}
          onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
        >
          <HStack space="lg" gap={isMobile ? "$2" : "$6"}>
            {artists.map((artist) => (
              <Pressable
                key={artist.id}
                onPress={() => onArtistPress?.(artist)}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.7 : 1,
                  cursor: isWeb ? "pointer" : "default",
                })}
              >
                <VStack alignItems="center" gap="$2">
                  <Box
                    width={ITEM_WIDTH}
                    height={ITEM_WIDTH}
                    borderRadius={999}
                    overflow="hidden"
                    mb="$2"
                  >
                    <Image
                      source={{ uri: artist.image }}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="cover"
                    />
                  </Box>

                  <Text
                    textAlign="center"
                    fontSize="$sm"
                    fontWeight="$medium"
                    numberOfLines={2}
                  >
                    {artist.name}
                  </Text>
                </VStack>
              </Pressable>
            ))}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};
