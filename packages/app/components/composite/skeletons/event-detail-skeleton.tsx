import React from "react";
import { Box, VStack, HStack } from "../../ui";
import { Skeleton } from "../../ui/skeleton";

export const EventDetailSkeleton = () => {
  return (
    <Box backgroundColor="$white" minHeight="$full" accessible={true} accessibilityRole="progressbar" accessibilityLabel="Loading event details">
      {/* Banner skeleton */}
      <Skeleton width="100%" height={350} borderRadius={0} />

      {/* Content */}
      <VStack
        px="$6"
        py="$8"
        maxWidth={900}
        width="100%"
        alignSelf="center"
        space="lg"
      >
        {/* Category badge */}
        <Skeleton width={80} height={26} borderRadius={999} />

        {/* Title */}
        <VStack space="sm">
          <Skeleton width="85%" height={36} borderRadius={4} />
          <Skeleton width="50%" height={36} borderRadius={4} />
        </VStack>

        {/* Date/Time and Venue */}
        <VStack space="sm">
          <Skeleton width={220} height={18} borderRadius={4} />
          <Skeleton width={180} height={18} borderRadius={4} />
        </VStack>

        {/* Price & Book section */}
        <HStack
          alignItems="center"
          justifyContent="space-between"
          py="$4"
          borderTopWidth={1}
          borderBottomWidth={1}
          borderColor="$borderLight200"
        >
          <VStack space="xs">
            <Skeleton width={90} height={14} borderRadius={4} />
            <Skeleton width={80} height={28} borderRadius={4} />
          </VStack>
          <Skeleton width={180} height={50} borderRadius={999} />
        </HStack>

        {/* Description */}
        <VStack space="sm">
          <Skeleton width={180} height={22} borderRadius={4} />
          <VStack space="xs">
            <Skeleton width="100%" height={16} borderRadius={4} />
            <Skeleton width="100%" height={16} borderRadius={4} />
            <Skeleton width="100%" height={16} borderRadius={4} />
            <Skeleton width="70%" height={16} borderRadius={4} />
          </VStack>
        </VStack>

        {/* Details box */}
        <Box
          width="100%"
          px="$4"
          py="$6"
          backgroundColor="$backgroundLight100"
          borderRadius="$xl"
        >
          <VStack space="md">
            {[1, 2, 3].map((i) => (
              <HStack key={i} justifyContent="space-between">
                <Skeleton width={100} height={14} borderRadius={4} />
                <Skeleton width={140} height={14} borderRadius={4} />
              </HStack>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};
