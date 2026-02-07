import {
    Box,
    VStack,
    Text,
    Pressable,
    ScrollView,
} from '@gluestack-ui/themed'
import { Link } from 'solito/link'
import { Platform, useWindowDimensions } from 'react-native'
import { EVENT_CATEGORIES } from '../../mock/events'
import React, { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react-native'

interface EventCategoryCardProps {
    label: string
    icon: LucideIcon
    href: string
    isWeb: boolean
    useDarkTheme: boolean
    isMobile: boolean
}

function EventCategoryCard({ label, icon: Icon, href, isWeb, useDarkTheme, isMobile }: EventCategoryCardProps) {
    const theme = {
        // Exact gradient colors matching the reference image
        cardBgStart: useDarkTheme ? '$backgroundDark900' : '#fffcf7',
        cardBgEnd: useDarkTheme ? '$backgroundDark800' : '#edd63e',
        text: useDarkTheme ? '$textDark50' : '#6b5744',
        iconColor: useDarkTheme ? '#fbbf24' : '#c9a870',
        borderColor: useDarkTheme ? '$borderDark700' : '#e8dcc8',
    }

    return (
        <Link href={href}>
            <Pressable>
                {({ pressed }) => (
                    <Box
                        borderRadius={24}
                        overflow="hidden"
                        w={isMobile ? 150 : 150}
                        h={isMobile ? 150 : 180}
                        sx={{
                            _web: {
                                background: useDarkTheme
                                    ? theme.cardBgStart
                                    : `linear-gradient(180deg, ${theme.cardBgStart} 0%, ${theme.cardBgEnd} 100%)`,
                                boxShadow: useDarkTheme
                                    ? '0 4px 12px rgba(0, 0, 0, 0.5)'
                                    : '0 3px 10px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                borderRadius: '24px',
                                border: useDarkTheme ? '2px solid' : '2px solid #e8dcc8',
                                ':hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: useDarkTheme
                                        ? '0 12px 24px rgba(0, 0, 0, 0.6)'
                                        : '0 6px 16px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)',
                                },
                            },
                        }}
                        bg={theme.cardBgStart}
                        borderWidth={1}
                        borderColor={theme.borderColor}
                    >
                        <VStack
                            h="100%"
                            px="$3"
                            pt="$3.5"
                            pb="$4"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            {/* Text at top */}
                            <Text
                                fontSize={16}
                                fontWeight="700"
                                color={theme.text}
                                // letterSpacing={0.5}
                                textAlign="center"
                                // lineHeight={11}
                                numberOfLines={2}
                                textTransform="uppercase"
                                sx={{
                                    _web: {
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        // letterSpacing: '0.5px',
                                        // lineHeight: '11px',
                                    },
                                }}
                            >
                                {label}
                            </Text>

                            {/* Icon in center/bottom - larger and filled */}
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
                                    fill={useDarkTheme ? 'none' : theme.iconColor}
                                    opacity={0.85}
                                />
                            </Box>
                        </VStack>
                    </Box>
                )}
            </Pressable>
        </Link>
    )
}

export function ExploreEventsScreen() {
    const { width } = useWindowDimensions()
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        // Mobile view if width < 700
        setIsMobile(width < 700)
    }, [width])

    // Theme configuration: Web uses Light theme, Native uses Dark
    const isWeb = Platform.OS === 'web'
    const useDarkTheme = !isWeb

    const theme = {
        bg: useDarkTheme ? '$black' : '$white',
        text: useDarkTheme ? '$textDark50' : '#1a1a1a',
        titleSize: isMobile ? "$2xl" : "$3xl",
    }

    // SSR safe shell
    if (!mounted && isWeb) {
        return <Box minHeight={400} bg={theme.bg} />
    }

    return (
        <Box
            bg={theme.bg}
            py={isMobile ? '$6' : '$10'}
            px={isMobile ? '$4' : '$20'}
            w="100%"
        >
            <VStack maxWidth={1480} mx="auto" w="100%">
                {/* Title */}
                <Text
                    fontSize={theme.titleSize}
                    fontWeight="$bold"
                    color={theme.text}
                    lineHeight={isMobile ? '$2xl' : '$3xl'}
                    mb={isMobile ? '$6' : 40}
                >
                    Explore Events
                </Text>

                {/* Event Categories Grid/Scroll */}
                {isMobile ? (
                    // Mobile: Horizontal Scroll
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            gap: 8,
                            paddingRight: 16,
                        }}
                    >
                        {EVENT_CATEGORIES.map((category) => (
                            <EventCategoryCard
                                key={category.id}
                                label={category.label}
                                icon={category.icon}
                                href={category.href}
                                isWeb={isWeb}
                                useDarkTheme={useDarkTheme}
                                isMobile={isMobile}
                            />
                        ))}
                    </ScrollView>
                ) : (
                    // Desktop: Grid Layout - responsive columns
                    <Box
                        sx={{
                            _web: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                                gap: '$8',
                                width: '100%',
                            },
                        }}
                        flexDirection="row"
                        flexWrap="wrap"
                        // gap="$8"
                    >
                        {EVENT_CATEGORIES.map((category) => (
                            <EventCategoryCard
                                key={category.id}
                                label={category.label}
                                icon={category.icon}
                                href={category.href}
                                isWeb={isWeb}
                                useDarkTheme={useDarkTheme}
                                isMobile={isMobile}
                            />
                        ))}
                    </Box>
                )}
            </VStack>
        </Box>
    )
}
