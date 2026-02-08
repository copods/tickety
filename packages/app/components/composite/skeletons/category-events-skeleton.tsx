import React, { useState, useEffect } from "react";
import { Box, VStack, HStack } from "../../ui";
import { useWindowDimensions } from "react-native";
import { Skeleton } from "../../ui/skeleton";
import { EventCarouselSkeleton } from "./event-carousel-skeleton";

export const CategoryEventsSkeleton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;
  const cardCount = isMobile ? 2 : 4;

  return (
    <Box backgroundColor="$white" minHeight="$full" accessible={true} accessibilityRole="progressbar" accessibilityLabel="Loading category events">
      <Box gap="$10">
        {/* Carousel skeleton */}
        <EventCarouselSkeleton />

        {/* Events grid skeleton */}
        <Box
          px={isMobile ? "$5" : "$20"}
          gap="$6"
          margin="auto"
          width="100%"
          maxWidth={1440}
          pb="$16"
        >
          {/* Heading */}
          <Skeleton width={280} height={32} borderRadius={4} />

          {/* Event cards grid */}
          <HStack flexWrap="wrap" space="lg" justifyContent="flex-start">
            {Array.from({ length: cardCount }).map((_, i) => (
              <Box
                key={i}
                width={isMobile ? "100%" : "24%"}
                minHeight={isMobile ? 340 : 420}
                borderWidth={1}
                borderColor="$borderLight200"
                borderRadius="$xl"
                overflow="hidden"
              >
                <VStack>
                  {/* Image */}
                  <Skeleton
                    width="100%"
                    height={isMobile ? 360 : 380}
                    borderRadius={0}
                  />
                  {/* Info */}
                  <VStack p="$3" space="xs">
                    <Skeleton width={140} height={12} borderRadius={4} />
                    <Skeleton width="90%" height={18} borderRadius={4} />
                    <Skeleton width={160} height={12} borderRadius={4} />
                    <Skeleton width={80} height={12} borderRadius={4} />
                  </VStack>
                </VStack>
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
