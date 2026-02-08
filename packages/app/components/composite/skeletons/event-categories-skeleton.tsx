import React, { useState, useEffect } from "react";
import { Box, HStack } from "../../ui";
import { useWindowDimensions, ScrollView } from "react-native";
import { Skeleton } from "../../ui/skeleton";

export const EventCategoriesSkeleton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;
  const isTablet = isMounted ? width >= 768 && width < 1024 : false;

  const cardWidth = isMobile ? 150 : isTablet ? 180 : 148;
  const cardHeight = isMobile ? 180 : isTablet ? 210 : 180;

  const mobileCount = 4;
  const desktopCount = 8;

  return (
    <Box
      px={isMobile ? "$5" : "$20"}
      gap="$6"
      margin="auto"
      width="100%"
      maxWidth={1440}
      accessible={true}
      accessibilityRole="progressbar"
      accessibilityLabel="Loading event categories"
    >
      {/* Title skeleton */}
      <Skeleton width={200} height={30} borderRadius={4} />

      {isMobile ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{ paddingRight: 16, paddingBottom: 4 }}
        >
          <Box flexDirection="column" gap="$3">
            <Box flexDirection="row" gap="$3">
              {Array.from({ length: mobileCount }).map((_, i) => (
                <Skeleton
                  key={`r1-${i}`}
                  width={cardWidth}
                  height={cardHeight}
                  borderRadius={12}
                />
              ))}
            </Box>
            <Box flexDirection="row" gap="$3">
              {Array.from({ length: mobileCount }).map((_, i) => (
                <Skeleton
                  key={`r2-${i}`}
                  width={cardWidth}
                  height={cardHeight}
                  borderRadius={12}
                />
              ))}
            </Box>
          </Box>
        </ScrollView>
      ) : (
        <HStack space="lg" flexWrap="wrap" gap="$3">
          {Array.from({ length: desktopCount }).map((_, i) => (
            <Skeleton
              key={i}
              width={cardWidth}
              height={cardHeight}
              borderRadius={12}
            />
          ))}
        </HStack>
      )}
    </Box>
  );
};
