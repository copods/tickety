import React, { useState, useEffect } from "react";
import { Box, VStack, HStack } from "../../ui";
import { Skeleton } from "../../ui/skeleton";
import { useWindowDimensions } from "react-native";

const EventInfoSkeleton = () => (
  <VStack space="md">
    {/* Title */}
    <Skeleton width="90%" height={24} borderRadius={4} />
    <Skeleton width="60%" height={24} borderRadius={4} />

    {/* Categories */}
    <HStack space="sm">
      <Skeleton width={16} height={16} borderRadius={4} />
      <Skeleton width={60} height={22} borderRadius={999} />
      <Skeleton width={80} height={22} borderRadius={999} />
    </HStack>

    {/* Date & Time */}
    <HStack space="sm" alignItems="center">
      <Skeleton width={16} height={16} borderRadius={4} />
      <Skeleton width={90} height={16} borderRadius={4} />
      <Skeleton width={16} height={16} borderRadius={4} />
      <Skeleton width={70} height={16} borderRadius={4} />
    </HStack>

    {/* Location */}
    <HStack space="sm">
      <Skeleton width={16} height={16} borderRadius={4} />
      <VStack flex={1} space="xs">
        <Skeleton width="80%" height={14} borderRadius={4} />
        <Skeleton width="60%" height={12} borderRadius={4} />
      </VStack>
    </HStack>
  </VStack>
);

const ContentSkeleton = () => (
  <VStack space="xl">
    {/* About */}
    <VStack space="sm">
      <Skeleton width={160} height={22} borderRadius={4} />
      <Skeleton width="100%" height={14} borderRadius={4} />
      <Skeleton width="100%" height={14} borderRadius={4} />
      <Skeleton width="70%" height={14} borderRadius={4} />
    </VStack>

    {/* Divider */}
    <Skeleton width="100%" height={1} borderRadius={0} />

    {/* Info items */}
    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
      <HStack key={i} space="md" alignItems="center">
        <Skeleton width={40} height={40} borderRadius={8} />
        <VStack flex={1} space="xs">
          <Skeleton width={100} height={12} borderRadius={4} />
          <Skeleton width={140} height={14} borderRadius={4} />
        </VStack>
      </HStack>
    ))}

    {/* Divider */}
    <Skeleton width="100%" height={1} borderRadius={0} />

    {/* Artist */}
    <VStack space="md">
      <Skeleton width={60} height={22} borderRadius={4} />
      <HStack space="md" alignItems="center">
        <Skeleton width={56} height={56} borderRadius={999} />
        <VStack space="xs">
          <Skeleton width={120} height={16} borderRadius={4} />
          <Skeleton width={100} height={12} borderRadius={4} />
        </VStack>
      </HStack>
    </VStack>

    {/* Divider */}
    <Skeleton width="100%" height={1} borderRadius={0} />

    {/* Venue */}
    <VStack space="md">
      <Skeleton width={60} height={22} borderRadius={4} />
      <HStack space="md">
        <Skeleton width={40} height={40} borderRadius={8} />
        <VStack flex={1} space="xs">
          <Skeleton width="70%" height={14} borderRadius={4} />
          <Skeleton width="50%" height={12} borderRadius={4} />
        </VStack>
      </HStack>
    </VStack>
  </VStack>
);

export const EventDetailSkeleton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;

  return (
    <Box
      backgroundColor="$white"
      accessible={true}
      accessibilityRole="progressbar"
      accessibilityLabel="Loading event details"
    >
      {isMobile ? (
        <>
          {/* Full-width image skeleton */}
          <Skeleton width="100%" height={260} borderRadius={0} />

          {/* Content */}
          <VStack px="$5" py="$5" space="xl">
            <EventInfoSkeleton />
            <Skeleton width="100%" height={1} borderRadius={0} />
            <ContentSkeleton />
          </VStack>
        </>
      ) : (
        <Box
          px="$20"
          py="$10"
          maxWidth={1280}
          width="100%"
          alignSelf="center"
        >
          <HStack gap={40}>
            <Box width="60%">
              <VStack space="xl" flex={1}>
                {/* Image */}
                <Skeleton width="100%" height={420} borderRadius={16} />
                <ContentSkeleton />
              </VStack>
            </Box>
            <Box width="40%">
              <Box
                backgroundColor="$white"
                borderRadius="$2xl"
                borderWidth={1}
                borderColor="$borderLight200"
                p="$5"
              >
                <VStack space="md">
                  <EventInfoSkeleton />
                  <Skeleton width="100%" height={1} borderRadius={0} />
                  <HStack alignItems="center" justifyContent="space-between">
                    <VStack space="xs">
                      <Skeleton width={70} height={12} borderRadius={4} />
                      <Skeleton width={100} height={24} borderRadius={4} />
                    </VStack>
                    <Skeleton width={130} height={48} borderRadius={999} />
                  </HStack>
                </VStack>
              </Box>
            </Box>
          </HStack>
        </Box>
      )}
    </Box>
  );
};
