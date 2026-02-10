import React, { useState } from "react";
import { Box, VStack, HStack, Text, Heading } from "../ui";
import {
  Pressable,
  ScrollView,
  Platform,
  useWindowDimensions,
  Modal as RNModal,
  StyleSheet,
  PanResponder,
} from "react-native";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { X, Check } from "lucide-react-native";

import type { FilterModalProps, SortByOption, EventFilters } from "../../types";

const SORT_OPTIONS: { value: SortByOption; label: string }[] = [
  { value: "popularity", label: "Popularity" },
  { value: "price_low_high", label: "Price : Low to High" },
  { value: "price_high_low", label: "Price : High to Low" },
  { value: "date", label: "Date" },
  { value: "distance", label: "Distance : Near to Far" },
];

type TabId = "sortBy" | "genre";

export const FilterModal = ({
  isOpen,
  onClose,
  onApply,
  genres,
  currentFilters,
  useDarkTheme,
}: FilterModalProps) => {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";
  const isMobile = width < 768;

  const [activeTab, setActiveTab] = useState<TabId>("sortBy");
  const [selectedSort, setSelectedSort] = useState<SortByOption | undefined>(
    currentFilters.sortBy,
  );
  const [selectedGenres, setSelectedGenres] = useState<string[]>(
    currentFilters.genres || [],
  );

  const theme = {
    bg: useDarkTheme ? "#1f2937" : "#ffffff",
    headerBg: useDarkTheme ? "#1f2937" : "#ffffff",
    text: useDarkTheme ? "#ffffff" : "#000000",
    subText: useDarkTheme ? "#9ca3af" : "#6b7280",
    tabBg: useDarkTheme ? "#374151" : "#f3f4f6",
    tabActiveBg: useDarkTheme ? "#4C1D95" : "#ede9fe",
    tabActiveText: useDarkTheme ? "#ffffff" : "#000000",
    tabText: useDarkTheme ? "#9ca3af" : "#6b7280",
    contentBg: useDarkTheme ? "#111827" : "#f5f5f5",
    radioColor: useDarkTheme ? "#ffffff" : "#000000",
    radioBorder: useDarkTheme ? "#6b7280" : "#d1d5da",
    checkboxBg: useDarkTheme ? "#ffffff" : "#000000",
    checkboxBorder: useDarkTheme ? "#6b7280" : "#d1d5da",
    footerBg: useDarkTheme ? "#1f2937" : "#ffffff",
    clearText: useDarkTheme ? "#ffffff" : "#000000",
    applyBg: useDarkTheme ? "#ffffff" : "#000000",
    applyText: useDarkTheme ? "#000000" : "#ffffff",
    backdrop: "rgba(0,0,0,0.5)",
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    );
  };

  const handleClear = () => {
    setSelectedSort(undefined);
    setSelectedGenres([]);
  };

  const handleApply = () => {
    const filters: EventFilters = {};
    if (selectedSort) filters.sortBy = selectedSort;
    if (selectedGenres.length > 0) filters.genres = selectedGenres;
    onApply(filters);
    onClose();
  };

  // ── Native Mobile: Bottom Sheet / Swipe-up style ────────────────
  if (!isWeb && isMobile) {
    const [isExpanded, setIsExpanded] = useState(false);

    const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 10,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -25) {
          // Swipe up: expand towards 90%
          setIsExpanded(true);
        } else if (gestureState.dy > 25) {
          // Swipe down: collapse or close if already collapsed
          if (isExpanded) {
            setIsExpanded(false);
          } else {
            onClose();
          }
        }
      },
    });

    return (
      <RNModal
        transparent
        visible={isOpen}
        animationType="slide"
        onRequestClose={onClose}
      >
        <Box
          flex={1}
          justifyContent="flex-end"
        >
          {/* Backdrop tap to close */}
          <Pressable
            style={StyleSheet.absoluteFillObject}
            accessibilityRole="button"
            accessibilityLabel="Close filters"
            onPress={onClose}
          />

          {/* Bottom sheet container */}
          <Box
            bg={theme.bg}
            borderTopLeftRadius={24}
            borderTopRightRadius={24}
            height={isExpanded ? "90%" : "60%"}
            pt="$4"
            pb="$5"
          >
          {/* Drag handle indicator */}
          <Box
            alignItems="center"
            mb="$3"
            {...panResponder.panHandlers}
          >
            <Box
              width={40}
              height={4}
              borderRadius={999}
              bg={useDarkTheme ? "#4b5563" : "#d1d5db"}
            />
          </Box>

          {/* Header */}
          <HStack
            px="$5"
            pb="$3"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading size="xl" fontWeight="$bold" color={theme.text}>
              Filter by
            </Heading>
            <Pressable
              onPress={onClose}
              accessibilityRole="button"
              accessibilityLabel="Close filters"
            >
              <X size={22} color={theme.subText} />
            </Pressable>
          </HStack>

          {/* Content area */}
          <HStack flex={1} minHeight={320}>
            {/* Left sidebar tabs */}
            <VStack width={110} bg={theme.bg} pt="$2">
              {(["sortBy", "genre"] as TabId[]).map((tab) => {
                const isActive = activeTab === tab;
                const label = tab === "sortBy" ? "Sort By" : "Genre";
                return (
                  <Pressable
                    key={tab}
                    onPress={() => setActiveTab(tab)}
                    accessibilityRole="tab"
                    accessibilityState={{ selected: isActive }}
                    accessibilityLabel={`${label} filter tab`}
                  >
                    <Box
                      px="$4"
                      py="$3.5"
                      bg={isActive ? theme.tabActiveBg : "transparent"}
                      borderLeftWidth={isActive ? 3 : 0}
                      borderLeftColor={
                        isActive
                          ? useDarkTheme
                            ? "#8B5CF6"
                            : "#7C3AED"
                          : "transparent"
                      }
                    >
                      <Text
                        fontSize="$sm"
                        fontWeight={isActive ? "$bold" : "$medium"}
                        color={isActive ? theme.tabActiveText : theme.tabText}
                      >
                        {label}
                      </Text>
                    </Box>
                  </Pressable>
                );
              })}
            </VStack>

            {/* Right content area */}
            <Box flex={1} bg={theme.contentBg}>
              <ScrollView
                contentContainerStyle={{
                  padding: 20,
                }}
                showsVerticalScrollIndicator={false}
              >
                {activeTab === "sortBy" ? (
                  <VStack space="xl">
                    {SORT_OPTIONS.map((option) => {
                      const isSelected = selectedSort === option.value;
                      return (
                        <Pressable
                          key={option.value}
                          onPress={() => setSelectedSort(option.value)}
                          accessibilityRole="radio"
                          accessibilityState={{ checked: isSelected }}
                          accessibilityLabel={option.label}
                        >
                          <HStack space="md" alignItems="center">
                            <Box
                              width={24}
                              height={24}
                              borderRadius={12}
                              borderWidth={2}
                              borderColor={
                                isSelected
                                  ? theme.radioColor
                                  : theme.radioBorder
                              }
                              alignItems="center"
                              justifyContent="center"
                            >
                              {isSelected && (
                                <Box
                                  width={12}
                                  height={12}
                                  borderRadius={6}
                                  bg={theme.radioColor}
                                />
                              )}
                            </Box>
                            <Text
                              fontSize="$md"
                              fontWeight={isSelected ? "$bold" : "$normal"}
                              color={theme.text}
                            >
                              {option.label}
                            </Text>
                          </HStack>
                        </Pressable>
                      );
                    })}
                  </VStack>
                ) : (
                  <VStack space="lg">
                    {genres.map((genre) => {
                      const isChecked = selectedGenres.includes(genre);
                      return (
                        <Pressable
                          key={genre}
                          onPress={() => toggleGenre(genre)}
                          accessibilityRole="checkbox"
                          accessibilityState={{ checked: isChecked }}
                          accessibilityLabel={genre}
                        >
                          <HStack space="md" alignItems="center">
                            <Box
                              width={24}
                              height={24}
                              borderRadius={6}
                              borderWidth={2}
                              borderColor={
                                isChecked
                                  ? theme.checkboxBg
                                  : theme.checkboxBorder
                              }
                              bg={isChecked ? theme.checkboxBg : "transparent"}
                              alignItems="center"
                              justifyContent="center"
                            >
                              {isChecked && (
                                <Check
                                  size={14}
                                  color={
                                    useDarkTheme ? "#000000" : "#ffffff"
                                  }
                                  strokeWidth={3}
                                />
                              )}
                            </Box>
                            <Text
                              fontSize="$md"
                              fontWeight={isChecked ? "$bold" : "$normal"}
                              color={theme.text}
                            >
                              {genre}
                            </Text>
                          </HStack>
                        </Pressable>
                      );
                    })}
                  </VStack>
                )}
              </ScrollView>
            </Box>
          </HStack>

          {/* Footer */}
          <HStack
            px="$5"
            pt="$3"
            justifyContent="space-between"
            alignItems="center"
          >
            <Pressable
              onPress={handleClear}
              accessibilityRole="button"
              accessibilityLabel="Clear all filters"
            >
              <Text
                fontSize="$md"
                fontWeight="$semibold"
                color={theme.clearText}
                textDecorationLine="underline"
              >
                Clear filters
              </Text>
            </Pressable>

            <Button
              size="lg"
              bg={theme.applyBg}
              borderRadius="$xl"
              onPress={handleApply}
              accessibilityRole="button"
              accessibilityLabel="Apply selected filters"
              px="$10"
              py="$3"
            >
              <ButtonText
                color={theme.applyText}
                fontWeight="$bold"
                fontSize="$md"
              >
                Apply Filters
              </ButtonText>
            </Button>
          </HStack>
          </Box>
        </Box>
      </RNModal>
    );
  }

  // ── Web / Desktop: Centered dialog modal ────────────────────────
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={isMobile ? "full" : "lg"}>
      <ModalBackdrop />
      <ModalContent
        bg={theme.bg}
        borderRadius={isMobile ? 0 : "$2xl"}
        maxHeight={isMobile ? "100%" : "80%"}
        maxWidth={isMobile ? "100%" : 600}
        overflow="hidden"
      >
        {/* Header */}
        <ModalHeader
          bg={theme.headerBg}
          borderBottomWidth={0}
          px="$5"
          pt="$5"
          pb="$3"
        >
          <Heading size="xl" fontWeight="$bold" color={theme.text}>
            Filter by
          </Heading>
          <ModalCloseButton>
            <X size={22} color={theme.subText} />
          </ModalCloseButton>
        </ModalHeader>

        {/* Body */}
        <ModalBody px={0} py={0} flex={1}>
          <HStack flex={1} minHeight={isMobile ? 400 : 350}>
            {/* Left sidebar tabs */}
            <VStack
              width={isMobile ? 100 : 130}
              bg={theme.bg}
              pt="$2"
              borderRightWidth={0}
            >
              {(["sortBy", "genre"] as TabId[]).map((tab) => {
                const isActive = activeTab === tab;
                const label = tab === "sortBy" ? "Sort By" : "Genre";
                return (
                  <Pressable
                    key={tab}
                    onPress={() => setActiveTab(tab)}
                    accessibilityRole="tab"
                    accessibilityState={{ selected: isActive }}
                    accessibilityLabel={`${label} filter tab`}
                    style={Platform.select({
                      web: { cursor: "pointer" } as any,
                    })}
                  >
                    <Box
                      px="$4"
                      py="$3.5"
                      bg={isActive ? theme.tabActiveBg : "transparent"}
                      borderLeftWidth={isActive ? 3 : 0}
                      borderLeftColor={
                        isActive
                          ? useDarkTheme
                            ? "#8B5CF6"
                            : "#7C3AED"
                          : "transparent"
                      }
                    >
                      <Text
                        fontSize="$sm"
                        fontWeight={isActive ? "$bold" : "$medium"}
                        color={isActive ? theme.tabActiveText : theme.tabText}
                      >
                        {label}
                      </Text>
                    </Box>
                  </Pressable>
                );
              })}
            </VStack>

            {/* Right content area */}
            <Box flex={1} bg={theme.contentBg}>
              <ScrollView
                contentContainerStyle={{
                  padding: 20,
                }}
                showsVerticalScrollIndicator={false}
              >
                {activeTab === "sortBy" ? (
                  <VStack space="xl">
                    {SORT_OPTIONS.map((option) => {
                      const isSelected = selectedSort === option.value;
                      return (
                        <Pressable
                          key={option.value}
                          onPress={() => setSelectedSort(option.value)}
                          accessibilityRole="radio"
                          accessibilityState={{ checked: isSelected }}
                          accessibilityLabel={option.label}
                          style={Platform.select({
                            web: { cursor: "pointer" } as any,
                          })}
                        >
                          <HStack space="md" alignItems="center">
                            <Box
                              width={24}
                              height={24}
                              borderRadius={12}
                              borderWidth={2}
                              borderColor={
                                isSelected
                                  ? theme.radioColor
                                  : theme.radioBorder
                              }
                              alignItems="center"
                              justifyContent="center"
                            >
                              {isSelected && (
                                <Box
                                  width={12}
                                  height={12}
                                  borderRadius={6}
                                  bg={theme.radioColor}
                                />
                              )}
                            </Box>
                            <Text
                              fontSize="$md"
                              fontWeight={isSelected ? "$bold" : "$normal"}
                              color={theme.text}
                            >
                              {option.label}
                            </Text>
                          </HStack>
                        </Pressable>
                      );
                    })}
                  </VStack>
                ) : (
                  <VStack space="lg">
                    {genres.map((genre) => {
                      const isChecked = selectedGenres.includes(genre);
                      return (
                        <Pressable
                          key={genre}
                          onPress={() => toggleGenre(genre)}
                          accessibilityRole="checkbox"
                          accessibilityState={{ checked: isChecked }}
                          accessibilityLabel={genre}
                          style={Platform.select({
                            web: { cursor: "pointer" } as any,
                          })}
                        >
                          <HStack space="md" alignItems="center">
                            <Box
                              width={24}
                              height={24}
                              borderRadius={6}
                              borderWidth={2}
                              borderColor={
                                isChecked
                                  ? theme.checkboxBg
                                  : theme.checkboxBorder
                              }
                              bg={isChecked ? theme.checkboxBg : "transparent"}
                              alignItems="center"
                              justifyContent="center"
                            >
                              {isChecked && (
                                <Check
                                  size={14}
                                  color={useDarkTheme ? "#000000" : "#ffffff"}
                                  strokeWidth={3}
                                />
                              )}
                            </Box>
                            <Text
                              fontSize="$md"
                              fontWeight={isChecked ? "$bold" : "$normal"}
                              color={theme.text}
                            >
                              {genre}
                            </Text>
                          </HStack>
                        </Pressable>
                      );
                    })}
                  </VStack>
                )}
              </ScrollView>
            </Box>
          </HStack>
        </ModalBody>

        {/* Footer */}
        <ModalFooter
          bg={theme.footerBg}
          borderTopWidth={0}
          px="$5"
          py="$4"
          justifyContent="space-between"
          alignItems="center"
        >
          <Pressable
            onPress={handleClear}
            accessibilityRole="button"
            accessibilityLabel="Clear all filters"
            style={Platform.select({ web: { cursor: "pointer" } as any })}
          >
            <Text
              fontSize="$md"
              fontWeight="$semibold"
              color={theme.clearText}
              textDecorationLine="underline"
            >
              Clear filters
            </Text>
          </Pressable>

          <Button
            size="lg"
            bg={theme.applyBg}
            borderRadius="$xl"
            onPress={handleApply}
            accessibilityRole="button"
            accessibilityLabel="Apply selected filters"
            px="$10"
            py="$3"
          >
            <ButtonText
              color={theme.applyText}
              fontWeight="$bold"
              fontSize="$md"
            >
              Apply Filters
            </ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
