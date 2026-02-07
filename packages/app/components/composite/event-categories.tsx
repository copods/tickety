import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { Box, HStack, Text, Heading } from "../ui";
import {
=======
import { Box, HStack, Text } from "../ui";
import {
  Image,
>>>>>>> ead0c7c (Added event categories carousle and detail page)
  Pressable,
  ScrollView,
  Platform,
  useWindowDimensions,
} from "react-native";
<<<<<<< HEAD
import {
  Music,
  Sparkles,
  Laugh,
  Trophy,
  Drama,
  Utensils,
  Tent,
  Users,
  Film,
  Dumbbell,
  Dog,
  Palette,
  Briefcase,
  Building2,
  Mic,
} from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";
=======
>>>>>>> ead0c7c (Added event categories carousle and detail page)

import type { EventCategory, EventCategoriesProps } from "../../types";

export type { EventCategory };

<<<<<<< HEAD
/** Map category names to icons */
const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  Music: Music,
  Nightlife: Sparkles,
  Comedy: Laugh,
  Sports: Trophy,
  Performances: Drama,
  "Food & Drink": Utensils,
  "Food & Drinks": Utensils,
  "Fests & Fairs": Tent,
  "Social Mixer": Users,
  "Social Mixers": Users,
  Screenings: Film,
  Fitness: Dumbbell,
  Pets: Dog,
  "Art Exhibitions": Palette,
  Conferences: Briefcase,
  Expos: Building2,
  "Open Mics": Mic,
};

=======
>>>>>>> ead0c7c (Added event categories carousle and detail page)
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
<<<<<<< HEAD
  const useDarkTheme = !isWeb;
=======
>>>>>>> ead0c7c (Added event categories carousle and detail page)
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;
<<<<<<< HEAD

  if (!categories?.length) return null;

  const theme = {
    cardBgStart: useDarkTheme ? "$backgroundDark900" : "#fffcf7",
    cardBgEnd: useDarkTheme ? "$backgroundDark800" : "#edd63e",
    text: useDarkTheme ? "$textDark50" : "#6b5744",
    iconColor: useDarkTheme ? "#fbbf24" : "#c9a870",
    borderColor: useDarkTheme ? "$borderDark700" : "#e8dcc8",
  };

  const cardWidth = isMobile ? 150 : 150;
  const cardHeight = isMobile ? 150 : 180;

  const renderCard = (category: EventCategory) => {
    const Icon = CATEGORY_ICON_MAP[category.name] || Music;

    return (
      <Pressable
        key={category.id}
        onPress={() => onCategoryPress?.(category)}
        accessibilityRole="button"
        accessibilityLabel={`Browse ${category.name} events`}
      >
        {({ pressed }: { pressed: boolean }) => (
          <Box
            borderRadius={24}
            overflow="hidden"
            width={cardWidth}
            height={cardHeight}
            sx={{
              _web: {
                background: useDarkTheme
                  ? theme.cardBgStart
                  : `linear-gradient(180deg, ${theme.cardBgStart} 0%, ${theme.cardBgEnd} 100%)`,
                boxShadow: useDarkTheme
                  ? "0 4px 12px rgba(0, 0, 0, 0.5)"
                  : "0 3px 10px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                borderRadius: "24px",
                border: useDarkTheme
                  ? "2px solid"
                  : "2px solid #e8dcc8",
                cursor: "pointer",
                ":hover": {
                  transform: "translateY(-4px)",
                  boxShadow: useDarkTheme
                    ? "0 12px 24px rgba(0, 0, 0, 0.6)"
                    : "0 6px 16px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)",
                },
              },
            }}
            bg={theme.cardBgStart}
            borderWidth={1}
            borderColor={theme.borderColor}
            opacity={pressed ? 0.85 : 1}
          >
            <Box
              height="100%"
              px="$3"
              pt="$3.5"
              pb="$4"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Text at top */}
              <Text
                fontSize={16}
                fontWeight="$bold"
                color={theme.text}
                textAlign="center"
                numberOfLines={2}
                textTransform="uppercase"
                sx={{
                  _web: {
                    fontSize: 12,
                    fontWeight: "700",
                  },
                }}
              >
                {category.name}
              </Text>

              {/* Icon in center/bottom */}
              <Box
                flex={1}
                justifyContent="center"
                alignItems="center"
                pt="$1"
              >
                <Icon
                  size={isMobile ? 64 : 80}
                  color={theme.iconColor}
                  strokeWidth={1}
                  fill={useDarkTheme ? "none" : theme.iconColor}
                  opacity={0.85}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Pressable>
    );
  };
=======
  const isTablet = isMounted ? width >= 768 && width < 1024 : false;

  if (!categories?.length) return null;

  const cardWidth = isMobile ? 150 : isTablet ? 180 : 148;
  const cardHeight = isMobile ? 180 : isTablet ? 210 : 180;

  const renderCard = (category: EventCategory) => (
    <Pressable
      key={category.id}
      onPress={() => onCategoryPress?.(category)}
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
>>>>>>> ead0c7c (Added event categories carousle and detail page)

  const [row1, row2] = splitIntoTwoRows(categories);

  return (
    <Box
      px={isMobile ? "$5" : "$20"}
      gap="$6"
      margin="auto"
      width="100%"
      maxWidth={1440}
<<<<<<< HEAD
      accessibilityRole="summary"
      accessibilityLabel="Explore event categories"
    >
      <Heading fontSize="$3xl" fontWeight="$bold">
        Explore Events
      </Heading>
=======
    >
      <Text fontSize="$3xl" fontWeight="$bold">
        Explore Events
      </Text>
>>>>>>> ead0c7c (Added event categories carousle and detail page)

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
<<<<<<< HEAD
        <Box
          sx={{
            _web: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: 12,
              width: "100%",
            },
          }}
          flexDirection="row"
          flexWrap="wrap"
        >
          {categories.map(renderCard)}
        </Box>
=======
        <HStack space="lg" flexWrap="wrap" gap="$3">
          {categories.map(renderCard)}
        </HStack>
>>>>>>> ead0c7c (Added event categories carousle and detail page)
      )}
    </Box>
  );
};
