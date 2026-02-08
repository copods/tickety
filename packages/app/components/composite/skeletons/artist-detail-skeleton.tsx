import React from "react";
import { Platform, useWindowDimensions } from "react-native";
import { Box, VStack, HStack } from "../../ui";
import { Skeleton } from "../../ui/skeleton";
import { useState, useEffect } from "react";

export const ArtistDetailSkeleton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;

  return (
    <Box backgroundColor="$white" minHeight="$full" accessible={true} accessibilityRole="progressbar" accessibilityLabel="Loading artist details">
      {/* Back button area */}
      <Box px="$6" pt="$6">
        <Skeleton width={70} height={28} borderRadius={4} />
      </Box>

      {/* First Fold: Artist Info */}
      <Box
        px={isMobile ? "$5" : "$20"}
        py="$10"
        maxWidth={1440}
        width="100%"
        alignSelf="center"
      >
        {isMobile ? (
          <VStack space="xl" alignItems="center">
            {/* Image */}
            <Skeleton width="100%" height={360} borderRadius={16} />

            {/* Details */}
            <VStack space="md" width="100%">
              <Skeleton width={220} height={32} borderRadius={4} />
              <Skeleton width={140} height={18} borderRadius={4} />

              <HStack space="4xl" py="$2">
                <VStack space="xs">
                  <Skeleton width={60} height={24} borderRadius={4} />
                  <Skeleton width={80} height={14} borderRadius={4} />
                </VStack>
                <VStack space="xs">
                  <Skeleton width={40} height={24} borderRadius={4} />
                  <Skeleton width={110} height={14} borderRadius={4} />
                </VStack>
              </HStack>

              <Box
                px="$4"
                py="$6"
                backgroundColor="$backgroundLight100"
                borderRadius="$xl"
              >
                <Skeleton
                  width={60}
                  height={16}
                  borderRadius={4}
                  style={{ marginBottom: 8 }}
                />
                <VStack space="xs">
                  <Skeleton width="100%" height={16} borderRadius={4} />
                  <Skeleton width="100%" height={16} borderRadius={4} />
                  <Skeleton width="60%" height={16} borderRadius={4} />
                </VStack>
              </Box>
            </VStack>
          </VStack>
        ) : (
          <HStack space="4xl">
            {/* Left: Image */}
            <Box width="40%">
              <Skeleton width="100%" height={480} borderRadius={16} />
            </Box>

            {/* Right: Details */}
            <VStack flex={1} space="lg" justifyContent="center">
              <Skeleton width={280} height={40} borderRadius={4} />
              <Skeleton width={160} height={20} borderRadius={4} />

              <HStack space="4xl" py="$2">
                <VStack space="xs">
                  <Skeleton width={80} height={28} borderRadius={4} />
                  <Skeleton width={80} height={14} borderRadius={4} />
                </VStack>
                <VStack space="xs">
                  <Skeleton width={40} height={28} borderRadius={4} />
                  <Skeleton width={110} height={14} borderRadius={4} />
                </VStack>
              </HStack>

              <Box
                px="$4"
                py="$6"
                backgroundColor="$backgroundLight100"
                borderRadius="$xl"
              >
                <Skeleton
                  width={60}
                  height={16}
                  borderRadius={4}
                  style={{ marginBottom: 8 }}
                />
                <VStack space="xs">
                  <Skeleton width="100%" height={16} borderRadius={4} />
                  <Skeleton width="100%" height={16} borderRadius={4} />
                  <Skeleton width="100%" height={16} borderRadius={4} />
                  <Skeleton width="60%" height={16} borderRadius={4} />
                </VStack>
              </Box>
            </VStack>
          </HStack>
        )}
      </Box>

      {/* Second Fold: Events Grid */}
      <Box
        px={isMobile ? "$5" : "$20"}
        pb="$16"
        maxWidth={1440}
        width="100%"
        alignSelf="center"
        gap="$6"
      >
        <Skeleton width={180} height={32} borderRadius={4} />

        <HStack flexWrap="wrap" space="lg" justifyContent="flex-start">
          {[1, 2, 3, 4].map((i) => (
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
                <Skeleton
                  width="100%"
                  height={isMobile ? 360 : 380}
                  borderRadius={0}
                />
                <VStack p="$3" space="xs">
                  <Skeleton width={100} height={12} borderRadius={4} />
                  <Skeleton width="90%" height={16} borderRadius={4} />
                  <Skeleton width="70%" height={12} borderRadius={4} />
                  <Skeleton width={80} height={12} borderRadius={4} />
                </VStack>
              </VStack>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
