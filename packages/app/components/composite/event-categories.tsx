import React, { useState, useEffect } from "react";
import { Box, HStack, Text, Heading } from "../ui";
import {
  Image,
  Pressable,
  ScrollView,
  Platform,
  useWindowDimensions,
} from "react-native";

import type { EventCategory, EventCategoriesProps } from "../../types";

export type { EventCategory };

/** Split categories into two rows for mobile */
const splitIntoTwoRows = (items: EventCategory[]) => {
  const row1: EventCategory[] = [];
  const row2: EventCategory[] = [];

  items.forEach((item, index) => {
    (index % 2 === 0 ? row1 : row2).push(item);
  });

  return [row1, row2];
};

export const EventCategories = ({
  categories,
  onCategoryPress,
}: EventCategoriesProps) => {
  const isWeb = Platform.OS === "web";
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;
  const isTablet = isMounted ? width >= 768 && width < 1024 : false;

  if (!categories?.length) return null;

  const cardWidth = isMobile ? 150 : isTablet ? 180 : 148;
  const cardHeight = isMobile ? 180 : isTablet ? 210 : 180;

  const renderCard = (category: EventCategory) => (
    <Pressable
      key={category.id}
      onPress={() => onCategoryPress?.(category)}
      accessibilityRole="button"
      accessibilityLabel={`Browse ${category.name} events`}
      style={({ pressed }) => ({
        opacity: pressed ? 0.85 : 1,
        cursor: isWeb ? "pointer" : "default",
      })}
    >
      <Box
        width={cardWidth}
        height={cardHeight}
        borderRadius="$xl"
        overflow="hidden"
        position="relative"
      >
        <Image
          source={{ uri: category.image }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          accessibilityLabel={`${category.name} category image`}
        />

        {/* Overlay */}
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          backgroundColor="$overlay"
        />

        {/* Title */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p="$3"
          alignItems="center"
        >
          <Text
            color="$white"
            fontWeight="$bold"
            fontSize={isMobile ? "$md" : "$lg"}
            numberOfLines={2}
            textAlign="center"
          >
            {category.name}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );

  const [row1, row2] = splitIntoTwoRows(categories);

  return (
    <Box
      px={isMobile ? "$5" : "$20"}
      gap="$6"
      margin="auto"
      width="100%"
      maxWidth={1440}
      accessibilityRole="summary"
      accessibilityLabel="Explore event categories"
    >
      <Heading fontSize="$3xl" fontWeight="$bold">
        Explore Events
      </Heading>

      {/* MOBILE: 2 ROW HORIZONTAL SCROLL */}
      {isMobile ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingRight: 16,
            paddingBottom: 4,
          }}
        >
          <Box flexDirection="column" gap="$3">
            <Box flexDirection="row" gap="$3">
              {row1?.map(renderCard)}
            </Box>

            <Box flexDirection="row" gap="$3">
              {row2?.map(renderCard)}
            </Box>
          </Box>
        </ScrollView>
      ) : (
        /* TABLET / DESKTOP GRID */
        <HStack space="lg" flexWrap="wrap" gap="$3">
          {categories.map(renderCard)}
        </HStack>
      )}
    </Box>
  );
};
