import React, { useState, useEffect } from "react";
import { Box, VStack, HStack } from "../../ui";
import { useWindowDimensions, Platform } from "react-native";
import { Skeleton } from "../../ui/skeleton";

export const EventCarouselSkeleton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;
  const isTablet = isMounted ? width >= 768 && width < 1024 : false;

  const carouselHeight = isMobile ? 650 : isTablet ? 580 : 600;

  return (
    <Box
      width="100%"
      height={carouselHeight}
      backgroundColor="#F3F4F6"
      overflow="hidden"
    >
      <Box
        maxWidth={1400}
        width="100%"
        alignSelf="center"
        mx="auto"
        height="$full"
      >
        {isMobile ? (
          <VStack
            alignItems="center"
            justifyContent="center"
            width="100%"
            px="$4"
            flex={1}
            space="md"
            py="$10"
          >
            {/* Poster image skeleton */}
            <Skeleton width={280} height={360} borderRadius={16} />

            {/* Date/time */}
            <Skeleton width={180} height={14} borderRadius={4} />

            {/* Title */}
            <Skeleton width={240} height={28} borderRadius={4} />

            {/* Venue */}
            <Skeleton width={200} height={16} borderRadius={4} />

            {/* Price */}
            <Skeleton width={100} height={18} borderRadius={4} />

            {/* Button */}
            <Skeleton width={180} height={48} borderRadius={999} />
          </VStack>
        ) : (
          <HStack
            alignItems="center"
            justifyContent="center"
            width="100%"
            px={isTablet ? "$6" : "$10"}
            maxWidth={isTablet ? 900 : 1200}
            alignSelf="center"
            flex={1}
          >
            {/* Left Side: Text skeletons */}
            <VStack flex={1.2} space="lg" pr={isTablet ? "$6" : "$10"}>
              {/* Date/time */}
              <Skeleton width={200} height={14} borderRadius={4} />

              {/* Title - two lines */}
              <VStack space="sm">
                <Skeleton width="90%" height={isTablet ? 40 : 50} borderRadius={4} />
                <Skeleton width="60%" height={isTablet ? 40 : 50} borderRadius={4} />
              </VStack>

              {/* Venue */}
              <Skeleton width={250} height={20} borderRadius={4} />

              {/* Price */}
              <Skeleton width={120} height={18} borderRadius={4} />

              {/* Button */}
              <Skeleton
                width={isTablet ? 180 : 200}
                height={isTablet ? 48 : 52}
                borderRadius={999}
              />
            </VStack>

            {/* Right Side: Poster skeleton */}
            <Skeleton
              width={340}
              height={isTablet ? 440 : 420}
              borderRadius={12}
            />
          </HStack>
        )}

        {/* Indicator dots */}
        <HStack
          position="absolute"
          bottom={isMobile ? "$6" : isTablet ? "$8" : "$10"}
          width="100%"
          justifyContent="center"
          space="sm"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <Skeleton
              key={i}
              width={i === 0 ? (isMobile ? 32 : 40) : isMobile ? 10 : 16}
              height={isMobile ? 4 : 6}
              borderRadius={999}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
