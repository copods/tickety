import React from "react";
import { Box, VStack, HStack } from "../../ui";
import { Skeleton } from "../../ui/skeleton";

export const ArtistDetailSkeleton = () => {
  return (
    <Box backgroundColor="$white" minHeight="$full">
      {/* Back button area */}
      <Box px="$6" pt="$6">
        <Skeleton width={70} height={28} borderRadius={4} />
      </Box>

      {/* Artist Profile */}
      <VStack
        alignItems="center"
        px="$6"
        py="$10"
        maxWidth={800}
        width="100%"
        alignSelf="center"
        space="xl"
      >
        {/* Circular image */}
        <Skeleton width={200} height={200} borderRadius={999} />

        {/* Name & Genre */}
        <VStack alignItems="center" space="xs">
          <Skeleton width={200} height={32} borderRadius={4} />
          <Skeleton width={120} height={18} borderRadius={4} />
        </VStack>

        {/* Stats */}
        <HStack space="4xl">
          <VStack alignItems="center" space="xs">
            <Skeleton width={60} height={24} borderRadius={4} />
            <Skeleton width={80} height={14} borderRadius={4} />
          </VStack>
          <VStack alignItems="center" space="xs">
            <Skeleton width={40} height={24} borderRadius={4} />
            <Skeleton width={110} height={14} borderRadius={4} />
          </VStack>
        </HStack>

        {/* Bio box */}
        <Box
          width="100%"
          px="$4"
          py="$6"
          backgroundColor="$backgroundLight100"
          borderRadius="$xl"
        >
          <Skeleton width={60} height={16} borderRadius={4} style={{ marginBottom: 8 }} />
          <VStack space="xs">
            <Skeleton width="100%" height={16} borderRadius={4} />
            <Skeleton width="100%" height={16} borderRadius={4} />
            <Skeleton width="100%" height={16} borderRadius={4} />
            <Skeleton width="60%" height={16} borderRadius={4} />
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};
