import React, { useState, useEffect } from "react";
import { Box, VStack, HStack } from "../../ui";
import { useWindowDimensions, ScrollView } from "react-native";
import { Skeleton } from "../../ui/skeleton";

export const ArtistCarouselSkeleton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;
  const ITEM_WIDTH = isMobile ? 120 : 160;
  const itemCount = isMobile ? 4 : 8;

  return (
    <Box
      px={isMobile ? "$5" : "$20"}
      gap="$6"
      margin="auto"
      width="100%"
      overflow="hidden"
      maxWidth={1440}
    >
      {/* Header */}
      <HStack justifyContent="space-between" alignItems="center">
        <Skeleton width={260} height={30} borderRadius={4} />

        {!isMobile && (
          <HStack space="sm">
            <Skeleton width={40} height={40} borderRadius={24} />
            <Skeleton width={40} height={40} borderRadius={24} />
          </HStack>
        )}
      </HStack>

      {/* Scrollable artist items */}
      <Box width="100%" overflow="hidden">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        >
          <HStack space="lg" gap={isMobile ? "$2" : "$6"}>
            {Array.from({ length: itemCount }).map((_, i) => (
              <VStack key={i} alignItems="center" gap="$2">
                <Skeleton
                  width={ITEM_WIDTH}
                  height={ITEM_WIDTH}
                  borderRadius={999}
                />
                <Skeleton width={ITEM_WIDTH * 0.7} height={14} borderRadius={4} />
              </VStack>
            ))}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};
