import {
    Box,
    VStack,
    HStack,
    Text,
    Pressable,
    ScrollView,
    Image,
} from '@gluestack-ui/themed'
import { Link } from 'solito/link'
import { Platform, useWindowDimensions, FlatList, ActivityIndicator } from 'react-native'
import { ALL_EVENTS, QUICK_FILTERS } from '../../mock/all-events'
import type { Event } from '../../mock/all-events'
import { useEffect, useState, useCallback, useRef } from 'react'
import type { ReactNode as ReactNodeType } from 'react'
import { SlidersHorizontal } from 'lucide-react-native'

interface EventCardProps {
    event: Event
    useDarkTheme: boolean
    isMobile: boolean
}

function EventCard({ event, useDarkTheme, isMobile }: EventCardProps) {
    const theme = {
        cardBg: useDarkTheme ? '$backgroundDark900' : '$white',
        titleText: useDarkTheme ? '$textDark50' : '#1a1a1a',
        dateText: useDarkTheme ? '#fbbf24' : '#6b6b00',
        venueText: useDarkTheme ? '$textDark400' : '#666666',
        priceText: useDarkTheme ? '$textDark300' : '#444444',
        border: useDarkTheme ? '$borderDark800' : 'transparent',
    }

    const dateTimeLabel = event.time === 'Multiple slots'
        ? `${event.date} – ${event.time}`
        : `${event.date}, ${event.time}`

    return (
        <Link href={`/events/${event.id}`}>
            <Pressable>
                {({ pressed: isPressed }: { pressed: boolean }) => (
                    <Box
                        bg={theme.cardBg}
                        borderRadius={12}
                        overflow="hidden"
                        opacity={isPressed ? 0.9 : 1}
                        w="100%"
                        sx={{
                            _web: {
                                transition: 'all 0.2s ease',
                                cursor: 'pointer',
                                ':hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: useDarkTheme
                                        ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                                        : '0 4px 16px rgba(0, 0, 0, 0.1)',
                                },
                            },
                        }}
                    >
                        {/* Event Image */}
                        <Box
                            w="100%"
                            overflow="hidden"
                            borderRadius={12}
                            sx={{
                                _web: {
                                    aspectRatio: '3/4',
                                },
                            }}
                            h={isMobile ? 260 : undefined}
                        >
                            <Image
                                source={{ uri: event.image }}
                                alt={event.title}
                                w="100%"
                                h="100%"
                                sx={{
                                    _web: {
                                        objectFit: 'cover',
                                    },
                                }}
                                style={{ resizeMode: 'cover' }}
                            />
                        </Box>

                        {/* Event Details */}
                        <VStack py="$3" px="$1" space="xs">
                            {/* Date & Time */}
                            <Text
                                fontSize={13}
                                fontWeight="$semibold"
                                color={theme.dateText}
                                numberOfLines={1}
                            >
                                {dateTimeLabel}
                            </Text>

                            {/* Title */}
                            <Text
                                fontSize={isMobile ? 15 : 16}
                                fontWeight="$bold"
                                color={theme.titleText}
                                numberOfLines={2}
                                lineHeight={isMobile ? 20 : 22}
                            >
                                {event.title}
                            </Text>

                            {/* Venue */}
                            <Text
                                fontSize={13}
                                color={theme.venueText}
                                numberOfLines={1}
                            >
                                {event.venue}, {event.location}
                            </Text>

                            {/* Price */}
                            <Text
                                fontSize={13}
                                color={theme.priceText}
                                numberOfLines={1}
                            >
                                {event.price}
                            </Text>
                        </VStack>
                    </Box>
                )}
            </Pressable>
        </Link>
    )
}

interface FilterChipProps {
    label: string
    isActive: boolean
    onPress: () => void
    useDarkTheme: boolean
    icon?: ReactNodeType
}

function FilterChip({ label, isActive, onPress, useDarkTheme, icon }: FilterChipProps) {
    const theme = {
        bg: isActive
            ? useDarkTheme ? '$backgroundDark700' : '#f5f5f5'
            : useDarkTheme ? 'transparent' : 'transparent',
        text: useDarkTheme ? '$textDark100' : '#1a1a1a',
        border: useDarkTheme ? '$borderDark600' : '#d0d0d0',
    }

    return (
        <Pressable onPress={onPress}>
            <Box
                bg={theme.bg}
                px="$3.5"
                py="$2"
                borderRadius={20}
                borderWidth={1}
                borderColor={theme.border}
                sx={{
                    _web: {
                        transition: 'all 0.15s ease',
                        cursor: 'pointer',
                        ':hover': {
                            bg: useDarkTheme ? '$backgroundDark700' : '#f5f5f5',
                        },
                    },
                }}
            >
                <HStack alignItems="center" space="xs">
                    {icon}
                    <Text
                        fontSize={14}
                        fontWeight="$medium"
                        color={theme.text}
                    >
                        {label}
                    </Text>
                </HStack>
            </Box>
        </Pressable>
    )
}

const EVENTS_PER_PAGE = 8

export function AllEventsScreen() {
    const { width } = useWindowDimensions()
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

    // Infinite scroll state
    const [displayedEvents, setDisplayedEvents] = useState<Event[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const sentinelRef = useRef(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setIsMobile(width < 700)
    }, [width])

    const isWeb = Platform.OS === 'web'
    const useDarkTheme = !isWeb

    const theme = {
        bg: useDarkTheme ? '$black' : '$white',
        text: useDarkTheme ? '$textDark50' : '#1a1a1a',
        iconColor: useDarkTheme ? '#e5e5e5' : '#1a1a1a',
    }

    // Load initial events
    useEffect(() => {
        loadMoreEvents(true)
    }, [])

    const loadMoreEvents = useCallback(
        (reset = false) => {
            if (isLoading) return

            setIsLoading(true)

            // Simulate a small delay for realistic loading
            setTimeout(() => {
                setDisplayedEvents((prev) => {
                    const currentList = reset ? [] : prev
                    const startIndex = currentList.length
                    const endIndex = startIndex + EVENTS_PER_PAGE
                    const newEvents = ALL_EVENTS.slice(startIndex, endIndex)

                    if (newEvents.length === 0) {
                        setHasMore(false)
                        setIsLoading(false)
                        return currentList
                    }

                    setHasMore(endIndex < ALL_EVENTS.length)
                    setIsLoading(false)
                    return [...currentList, ...newEvents]
                })
            }, 300)
        },
        [isLoading]
    )

    // Web: IntersectionObserver for infinite scroll
    useEffect(() => {
        if (!isWeb || !mounted) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting && hasMore && !isLoading) {
                    loadMoreEvents()
                }
            },
            { threshold: 0.1 }
        )

        const currentSentinel = sentinelRef.current
        if (currentSentinel) {
            observer.observe(currentSentinel)
        }

        return () => {
            if (currentSentinel) {
                observer.unobserve(currentSentinel)
            }
        }
    }, [isWeb, mounted, hasMore, isLoading, loadMoreEvents])

    if (!mounted && isWeb) {
        return <Box minHeight={600} bg={theme.bg} />
    }

    // Calculate grid columns based on width
    const getGridColumns = () => {
        if (isMobile) return 'repeat(2, 1fr)'
        if (width < 900) return 'repeat(2, 1fr)'
        if (width < 1200) return 'repeat(3, 1fr)'
        return 'repeat(4, 1fr)'
    }

    const handleFilterPress = (filter: string) => {
        setSelectedFilter((prev) => (prev === filter ? null : filter))
    }

    // Mobile: render as FlatList for infinite scroll
    if (!isWeb) {
        return (
            <Box bg={theme.bg} py="$6" w="100%">
                <VStack w="100%" px="$4" space="xl">
                    {/* Title */}
                    <Text
                        fontSize="$2xl"
                        fontWeight="$bold"
                        color={theme.text}
                    >
                        All events
                    </Text>

                    {/* Filter Chips */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 8, paddingRight: 16 }}
                    >
                        <FilterChip
                            label="Filters"
                            isActive={false}
                            onPress={() => {}}
                            useDarkTheme={useDarkTheme}
                            icon={
                                <HStack alignItems="center" space="xs">
                                    <SlidersHorizontal size={14} color={theme.iconColor} />
                                </HStack>
                            }
                        />
                        {QUICK_FILTERS.map((filter) => (
                            <FilterChip
                                key={filter}
                                label={filter}
                                isActive={selectedFilter === filter}
                                onPress={() => handleFilterPress(filter)}
                                useDarkTheme={useDarkTheme}
                            />
                        ))}
                    </ScrollView>
                </VStack>

                {/* Event cards as FlatList for infinite scroll */}
                <FlatList
                    data={displayedEvents}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ gap: 12, paddingHorizontal: 16 }}
                    contentContainerStyle={{ gap: 16, paddingTop: 20 }}
                    renderItem={({ item }) => (
                        <Box flex={1}>
                            <EventCard
                                event={item}
                                useDarkTheme={useDarkTheme}
                                isMobile={isMobile}
                            />
                        </Box>
                    )}
                    onEndReached={() => {
                        if (hasMore && !isLoading) {
                            loadMoreEvents()
                        }
                    }}
                    onEndReachedThreshold={0.5}
                    scrollEnabled={false}
                    ListFooterComponent={
                        isLoading ? (
                            <Box py="$6" alignItems="center">
                                <ActivityIndicator
                                    size="small"
                                    color={useDarkTheme ? '#fbbf24' : '#1a1a1a'}
                                />
                            </Box>
                        ) : null
                    }
                />
            </Box>
        )
    }

    // Web: grid with IntersectionObserver sentinel
    return (
        <Box bg={theme.bg} py={isMobile ? '$6' : '$10'} w="100%">
            <VStack
                maxWidth={1480}
                mx="auto"
                w="100%"
                px={isMobile ? '$4' : '$8'}
                space={isMobile ? 'xl' : '2xl'}
            >
                {/* Title */}
                <Text
                    fontSize={isMobile ? '$xl' : '$2xl'}
                    fontWeight="$bold"
                    color={theme.text}
                >
                    All events
                </Text>

                {/* Filter Chips */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 10, paddingRight: 16 }}
                >
                    <FilterChip
                        label="Filters"
                        isActive={false}
                        onPress={() => {}}
                        useDarkTheme={useDarkTheme}
                        icon={
                            <HStack alignItems="center" space="xs">
                                <SlidersHorizontal size={14} color={theme.iconColor} />
                            </HStack>
                        }
                    />
                    {QUICK_FILTERS.map((filter) => (
                        <FilterChip
                            key={filter}
                            label={filter}
                            isActive={selectedFilter === filter}
                            onPress={() => handleFilterPress(filter)}
                            useDarkTheme={useDarkTheme}
                        />
                    ))}
                </ScrollView>

                {/* Events Grid */}
                <Box
                    sx={{
                        _web: {
                            display: 'grid',
                            gridTemplateColumns: getGridColumns(),
                            gap: isMobile ? '12px' : '24px',
                            width: '100%',
                        },
                    }}
                >
                    {displayedEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            useDarkTheme={useDarkTheme}
                            isMobile={isMobile}
                        />
                    ))}
                </Box>

                {/* Infinite Scroll Sentinel (Web) */}
                {hasMore && (
                    <Box
                        ref={sentinelRef}
                        h={60}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {isLoading && (
                            <ActivityIndicator
                                size="small"
                                color={useDarkTheme ? '#fbbf24' : '#1a1a1a'}
                            />
                        )}
                    </Box>
                )}
            </VStack>
        </Box>
    )
}
