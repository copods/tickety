import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Box, HStack, VStack, Text, Heading } from "../ui";
import {
  Image,
  Pressable,
  Platform,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
  View,
} from "react-native";
import {
  SlidersHorizontal,
  ChevronDown,
  Bookmark,
  MapPin,
} from "lucide-react-native";
import { fetchAllEvents } from "../../services/api";
import { FilterModal } from "./filter-modal";

import type {
  AllEventsProps,
  AllEventsHandle,
  CarouselEvent,
  EventFilters,
} from "../../types";

type QuickFilterId = "today" | "tomorrow" | "this_week";

const QUICK_FILTERS = [
  { id: "today", label: "Today", type: "date" as const },
  { id: "tomorrow", label: "Tomorrow", type: "date" as const },
  { id: "this_weekend", label: "This Weekend", type: "date" as const },
  { id: "under_10km", label: "Under 10 km", type: "distance" as const },
  {
    id: "celebrations",
    label: "Celebrations",
    type: "genre" as const,
    genres: ["Fests & Fairs"],
  },
  {
    id: "music",
    label: "Music",
    type: "genre" as const,
    genres: ["Music"],
  },
];

export const AllEvents = forwardRef<AllEventsHandle, AllEventsProps>(
  ({ genres, onEventPress }, ref) => {
  const isWeb = Platform.OS === "web";
  const useDarkTheme = !isWeb;
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  // State
  const [events, setEvents] = useState<CarouselEvent[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [filters, setFilters] = useState<EventFilters>({});
  const [activeQuickFilter, setActiveQuickFilter] = useState<string | null>(
    null
  );
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Refs for scroll handler
  const isLoadingMoreRef = useRef(false);
  const hasMoreRef = useRef(true);
  const pageRef = useRef(1);
  const filtersRef = useRef<EventFilters>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;
  const isTablet = isMounted ? width >= 768 && width < 1024 : false;

  // We think in "rows" for pagination:
  // - Mobile (native + mobile web): 3 rows of 2 cards = 6 events
  // - Larger web: 4 rows (approx. 2+ cards per row in our grid) ≈ 8 events
  const rowsPerPage = isWeb ? 4 : 3;
  const columnsPerRow = isWeb ? 4 : 2;
  const itemsPerPage = isMobile ? 4:16; // Web has a looser grid, so we load more items per page to fill it

  // Theme
  const theme = {
    bg: useDarkTheme ? "#000000" : "transparent",
    cardBg: useDarkTheme ? "transparent" : "#ffffff",
    text: useDarkTheme ? "#ffffff" : "#000000",
    subText: useDarkTheme ? "#9ca3af" : "#6b7280",
    border: useDarkTheme ? "transparent" : "#e4e7eb",
    chipBg: useDarkTheme ? "#1f2937" : "#ffffff",
    chipBorder: useDarkTheme ? "#374151" : "#d1d5da",
    chipText: useDarkTheme ? "#ffffff" : "#000000",
    chipActiveBg: useDarkTheme ? "#4C1D95" : "#f3f4f6",
    chipActiveBorder: useDarkTheme ? "#8B5CF6" : "#000000",
    heading: useDarkTheme ? "#ffffff" : "#000000",
    goldAccent: useDarkTheme ? "#fbbf24" : "#8b8123",
    loadingColor: useDarkTheme ? "#ffffff" : "#000000",
  };

  // Sync refs
  useEffect(() => {
    isLoadingMoreRef.current = isLoadingMore;
  }, [isLoadingMore]);
  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);
  useEffect(() => {
    pageRef.current = page;
  }, [page]);
  useEffect(() => {
    filtersRef.current = filters;
  }, [filters]);

  const loadEvents = useCallback(
    async (
      pageNum: number,
      currentFilters: EventFilters,
      append: boolean,
      limit: number
    ) => {
      if (append) {
        if (isLoadingMoreRef.current) return;
        setIsLoadingMore(true);
        isLoadingMoreRef.current = true;
      } else {
        setLoading(true);
      }

      try {
        const data = await fetchAllEvents({
          page: pageNum,
          limit,
          sortBy: currentFilters.sortBy,
          genre: currentFilters.genres?.join(","),
        });

        if (append) {
          setEvents((prev) => [...prev, ...data.events]);
        } else {
          setEvents(data.events);
        }
        setHasMore(data.hasMore);
        hasMoreRef.current = data.hasMore;
        setPage(pageNum);
        pageRef.current = pageNum;
      } catch {
        setLoading(false);
      } finally {
        if (append) {
          setIsLoadingMore(false);
          isLoadingMoreRef.current = false;
        } else {
          setLoading(false);
        }
      }
    },
    []
  );

  // Initial load after mount or when pagination configuration changes
  useEffect(() => {
    if (!isMounted) return;
    loadEvents(1, filters, false, itemsPerPage);
  }, [isMounted, itemsPerPage, filters, loadEvents]);

  // Web infinite scroll
  useEffect(() => {
    if (Platform.OS !== "web" || !isMounted) return;

    const handleScroll = () => {
      if (isLoadingMoreRef.current || !hasMoreRef.current) return;

      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 500) {
        const nextPage = pageRef.current + 1;
        loadEvents(nextPage, filtersRef.current, true, itemsPerPage);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted, itemsPerPage, loadEvents]);

  // Handle filter apply from modal
  const handleApplyFilters = useCallback(
    (newFilters: EventFilters) => {
      setFilters(newFilters);
      filtersRef.current = newFilters;
      setActiveQuickFilter(null);
      setEvents([]);
      setHasMore(true);
      hasMoreRef.current = true;
      loadEvents(1, newFilters, false, itemsPerPage);
    },
    [itemsPerPage, loadEvents]
  );

  // Handle quick filter chip press
  const handleQuickFilter = useCallback(
    (filterId: QuickFilterId) => {
      if (activeQuickFilter === filterId) {
        setActiveQuickFilter(null);
        const cleared: EventFilters = {};
        setFilters(cleared);
        filtersRef.current = cleared;
        setEvents([]);
        setHasMore(true);
        hasMoreRef.current = true;
        loadEvents(1, cleared, false, itemsPerPage);
        return;
      }

      setActiveQuickFilter(filterId);
      const quickFilter = QUICK_FILTERS.find((f) => f.id === filterId);
      if (!quickFilter) return;
      // For now, quick date filters simply clear advanced filters
      // and rely on backend default ordering (e.g. by date).
       let newFilters: EventFilters = {};
      if (quickFilter.type === "genre" && "genres" in quickFilter) {
        newFilters = { genres: quickFilter.genres };
      }
      // For date/distance filters, we pass the genre but API handles fallback
      setFilters(newFilters);
      filtersRef.current = newFilters;
      setEvents([]);
      setHasMore(true);
      hasMoreRef.current = true;
      loadEvents(1, newFilters, false, itemsPerPage);
    },
    [activeQuickFilter, itemsPerPage, loadEvents]
  );

  // Native load more
  const handleLoadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;
    const nextPage = page + 1;
    loadEvents(nextPage, filters, true, itemsPerPage);
  }, [isLoadingMore, hasMore, page, filters, itemsPerPage, loadEvents]);

  // Expose an imperative handle so native screens can trigger
  // loading more events when the user scrolls near the bottom.
  useImperativeHandle(
    ref,
    () => ({
      loadNextPage: () => {
        handleLoadMore();
      },
    }),
    [handleLoadMore]
  );

  const activeFilterCount =
    (filters.sortBy ? 1 : 0) + (filters.genres?.length || 0);

  // Calculate card width for 2-column mobile grid (extra padding for gutters)
  const mobileCardWidth = isMobile ? (width - 64) / 2 : 0;

  return (
    <Box
      px={isMobile ? "$5" : "$20"}
      gap="$6"
      margin="auto"
      width="100%"
      maxWidth={1440}
      pb="$16"
      bg={theme.bg}
    >
      {/* Section Heading */}
      <Heading size="2xl" fontWeight="$bold" color={theme.heading}>
        All events
      </Heading>

      {/* Filter Chips Bar */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingRight: 16,
        }}
      >
        {/* Filters Button */}
        <Pressable
          onPress={() => setIsFilterModalOpen(true)}
          accessibilityRole="button"
          accessibilityLabel={`Open filters${activeFilterCount > 0 ? `, ${activeFilterCount} active` : ""}`}
        >
          <HStack
            borderWidth={1}
            borderColor={
              activeFilterCount > 0 ? theme.chipActiveBorder : theme.chipBorder
            }
            borderRadius="$full"
            px="$4"
            py="$2.5"
            alignItems="center"
            space="sm"
            bg={activeFilterCount > 0 ? theme.chipActiveBg : theme.chipBg}
          >
            <SlidersHorizontal size={16} color={theme.chipText} />
            <Text fontSize="$sm" fontWeight="$medium" color={theme.chipText}>
              Filters
            </Text>
            {activeFilterCount > 0 && (
              <Box
                bg={useDarkTheme ? "#8B5CF6" : "#000000"}
                borderRadius="$full"
                width={20}
                height={20}
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize={11}
                  fontWeight="$bold"
                  color="#ffffff"
                >
                  {activeFilterCount}
                </Text>
              </Box>
            )}
            <ChevronDown size={14} color={theme.chipText} />
          </HStack>
        </Pressable>

        {/* Quick Filter Chips */}
        {QUICK_FILTERS.map((filter) => {
          const isActive = activeQuickFilter === filter.id;
          return (
            <Pressable
              key={filter.id}
              onPress={() => handleQuickFilter(filter.id)}
              accessibilityRole="button"
              accessibilityLabel={`${filter.label} filter${isActive ? ", active" : ""}`}
            >
              <Box
                borderWidth={1}
                borderColor={
                  isActive ? theme.chipActiveBorder : theme.chipBorder
                }
                borderRadius="$full"
                px="$4"
                py="$2.5"
                bg={isActive ? theme.chipActiveBg : theme.chipBg}
              >
                <Text
                  fontSize="$sm"
                  fontWeight={isActive ? "$bold" : "$medium"}
                  color={theme.chipText}
                >
                  {filter.label}
                </Text>
              </Box>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Events Grid */}
      {loading ? (
        <Box alignItems="center" justifyContent="center" py="$16">
          <ActivityIndicator size="large" color={theme.loadingColor} />
        </Box>
      ) : events.length === 0 ? (
        <Box alignItems="center" justifyContent="center" py="$16">
          <Text fontSize="$lg" color={theme.subText}>
            No events found
          </Text>
        </Box>
      ) : (
        <>
          <HStack flexWrap="wrap" space="md" justifyContent="flex-start">
            {events.map((event, index) => (
              <Box
                key={`${event.id}-${index}`}
                // minHeight={isMobile ? 340 : 420}
                width={isMobile ? mobileCardWidth : isTablet ? "48%" : "24%"}
                borderRadius="$xl"
                borderColor={theme.border}
                borderWidth={1}
                overflow="hidden"
                bg={theme.cardBg}
                mb="$4"
              >
                <Pressable
                  onPress={() => onEventPress?.(event)}
                  accessibilityRole="link"
                  accessibilityLabel={`${event.name}, ${event.date} at ${event.venue}, ${event.price}`}
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                    cursor: isWeb ? "pointer" : "default",
                  })}
                >
                  <VStack>
                    {/* Event Image with bookmark */}
                    <Box
                      width="100%"
                      height={isMobile ? 260 : 320}
                      position="relative"
                      borderRadius={isMobile ? "$lg" : "$none"}
                      overflow="hidden"
                    >
                      <Image
                        source={{ uri: event.image }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                        accessibilityLabel={`${event.name} event poster`}
                      />
                       {/* Bookmark icon */}
                      {!isWeb &&
                      <Box
                        position="absolute"
                        top={12}
                        right={12}
                        bg="rgba(15,15,15,0.85)"
                        borderRadius={12}
                        p="$2"
                      >
                        <Bookmark
                          size={20}
                          color="#ffffff"
                          strokeWidth={2.2}
                        />
                      </Box>
                      }
                    </Box>

                    {/* Event Info */}
                     <VStack p="$3" space="xs">
                      <Text
                        fontSize="$xs"
                        fontWeight="$semibold"
                        color={theme.goldAccent}
                        letterSpacing={0.5}
                      >
                        {event.date} {event.time ? `\u2022 ${event.time}` : ""}
                      </Text>

                      <Text
                        fontSize="$md"
                        fontWeight="$bold"
                        numberOfLines={2}
                        color={theme.text}
                      >
                        {event.name}
                      </Text>

                      <Text
                        fontSize="$xs"
                        numberOfLines={1}
                        color={theme.subText}
                      >
                        {event.venue}
                      </Text>

                      <Text
                        fontSize="$xs"
                        fontWeight="$semibold"
                        color={theme.subText}
                      >
                        {event.price}
                      </Text>
                    </VStack>
                  </VStack>
                </Pressable>
              </Box>
            ))}
          </HStack>

          {/* Loading more indicator */}
          {isLoadingMore && (
            <Box alignItems="center" py="$8">
              <ActivityIndicator size="small" color={theme.loadingColor} />
            </Box>
          )}

          {/* Web: Bottom sentinel for infinite scroll */}
          {isWeb && hasMore && <View style={{ height: 1 }} />}
        </>
      )}

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleApplyFilters}
        genres={genres}
        currentFilters={filters}
        useDarkTheme={useDarkTheme}
      />
    </Box>
  );
});
