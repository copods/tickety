import React, { useState, useEffect } from "react";
import { Box, Text, Heading } from "../ui";
import { LinearGradient } from "expo-linear-gradient";

import {
  Pressable,
  ScrollView,
  Platform,
  useWindowDimensions,
} from "react-native";
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

import type { EventCategory, EventCategoriesProps } from "../../types";

export type { EventCategory };

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
  const useDarkTheme = !isWeb;
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;

  if (!categories?.length) return null;

  const theme = {
    cardBg: useDarkTheme ? "#050816" : "#fffcf7",
    cardGradientStart: useDarkTheme ? "#1f2933" : "#fff7ed",
    cardGradientEnd: useDarkTheme ? "#4b5563" : "#ddd758",
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
                background: `linear-gradient(180deg, ${theme.cardGradientStart} 0%, ${theme.cardGradientEnd} 100%)`,
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
            bg={theme.cardBg}
            borderWidth={1}
            borderColor={theme.borderColor}
            opacity={pressed ? 0.85 : 1}
          >
            <LinearGradient
              colors={[theme.cardGradientStart, theme.cardGradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ flex: 1 }}
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
            </LinearGradient>
          </Box>
        )}
      </Pressable>
    );
  };

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
      <Heading
        fontSize="$4xl"
        fontWeight="$extrabold"
        letterSpacing={0.5}
        color={useDarkTheme ? "$white" : "$black"}
      >
        Explore events
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
      )}
    </Box>
  );
};
