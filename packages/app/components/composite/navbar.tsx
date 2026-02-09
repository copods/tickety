import React, { useEffect, useState } from 'react'
import { Box, HStack, VStack } from '../ui/box'
import { Text } from '../ui/text'
import { Pressable, ScrollView, Platform, useWindowDimensions } from 'react-native'
import { Link } from 'solito/link'
import { Search, MapPin, User, ChevronRight } from 'lucide-react-native'
import { NAV_ITEMS, LOCATION_DATA } from '../../mock/navigation'

export function Navbar() {
    const { width } = useWindowDimensions()
    const [mounted, setMounted] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setIsDesktop(width >= 1108)
    }, [width])

    const isWeb = Platform.OS === 'web'
    const useDarkTheme = !isWeb && !isDesktop

    const theme = {
        bg: useDarkTheme ? '$black' : '$white',
        text: useDarkTheme ? '$white' : '$black',
        subText: useDarkTheme ? '$textDark400' : '$textLight500',
        icon: useDarkTheme ? '#FFFFFF' : '#000000',
        searchBg: useDarkTheme ? '$backgroundDark900' : '$white',
        searchBorder: useDarkTheme ? '$borderDark800' : '$borderLight200',
        activeBg: useDarkTheme ? '$yellow600' : '$yellow100',
        activeText: useDarkTheme ? '$white' : '$yellow800',
        profileBg: useDarkTheme ? '$coolGray800' : '$coolGray200',
        profileIcon: useDarkTheme ? '$white' : '$coolGray400',
        locationBorder: isDesktop ? '#0066cc' : 'transparent',
    }

    // SSR safe shell
    if (!mounted && isWeb) {
        return <Box h={80} bg="$white" />
    }

    return (
        <Box
            bg={theme.bg}
            sx={{
                _web: {
                    position: 'sticky',
                    top: 0,
                    zIndex: 999,
                    borderBottomWidth: 1,
                    borderBottomColor: theme.searchBorder,
                },
            }}
        >
            {isDesktop ? (
                // Desktop Layout: Single Row
                <HStack
                    w="100%"
                    maxWidth={1400}
                    mx="auto"
                    px="$2"
                    py="$3"
                    alignItems="center"
                    space="lg"
                >
                    {/* Logo */}
                    <VStack mr="$2">
                        <Text fontWeight="$extrabold" fontSize="$3xl" color={theme.text} lineHeight="$xs">
                            Tickety
                        </Text>
                     
                    </VStack>

                    <Box h={35} w={1} bg="$coolGray200" />

                    {/* Location Box */}
                    <HStack
                        borderColor={theme.locationBorder}
                        borderRadius="$full"
                        px="$2"
                        py="$1.5"
                        alignItems="center"
                        space="md"
                    >
                        <MapPin size={20} color="#7c3aed" />
                        <VStack>
                            <Text fontWeight="$bold" fontSize="$sm" color={theme.text} lineHeight="$xs">
                                {LOCATION_DATA.city}
                            </Text>
                            <Text fontSize="$2xs" color={theme.subText}>
                                {LOCATION_DATA.state}
                            </Text>
                        </VStack>
                    </HStack>

                    {/* Navigation Links */}
                    <HStack space="xl" ml="$12" alignItems="center" justifyContent='center'>
                        {NAV_ITEMS.map((item) => (
                            <Link key={item.label} href={item.href}>
                                <Box
                                    bg={item.isActive ? theme.activeBg : 'transparent'}
                                    px="$4"
                                    py="$2"
                                    borderRadius="$full"
                                >
                                    <Text
                                        fontWeight={item.isActive ? '$bold' : '$medium'}
                                        color={item.isActive ? theme.activeText : theme.text}
                                        fontSize="$sm"
                                    >
                                        {item.label}
                                    </Text>
                                </Box>
                            </Link>
                        ))}
                    </HStack>

                    <Box flex={1} />

                    {/* Action Icons */}
                    <HStack space="xl" alignItems="center">
                        <Pressable>
                            <Search size={20} color="#7c3aed" />
                        </Pressable>
                        <Pressable>
                            <Box bg={theme.profileBg} p="$2.5" borderRadius="$full">
                                <User size={20} color="#fff" />
                            </Box>
                        </Pressable>
                    </HStack>
                </HStack>
            ) : (
                // Tablet/Mobile Layout: 3-row layout
                <VStack
                    w="100%"
                    px="$4"
                    py="$4"
                    space="lg"
                >
                    {/* Row 1: Location & Profile */}
                    <HStack justifyContent="space-between" alignItems="center">
                        <HStack alignItems="center" space="sm">
                            <MapPin size={24} color="#7c3aed" />
                            <VStack>
                                <HStack alignItems="center" space="xs">
                                    <Text fontWeight="$bold" fontSize="$lg" color={theme.text}>
                                        {LOCATION_DATA.city}
                                    </Text>
                                    <ChevronRight size={18} color={theme.text} />
                                </HStack>
                                <Text fontSize="$xs" color={theme.subText}>
                                    {LOCATION_DATA.state}
                                </Text>
                            </VStack>
                        </HStack>
                        <Pressable>
                            <Box bg={theme.profileBg} p="$2.5" borderRadius="$full">
                                <User size={22} color="#888" />
                            </Box>
                        </Pressable>
                    </HStack>

                    {/* Row 2: Search Bar */}
                    <Box
                        bg={theme.searchBg}
                        borderWidth={1}
                        borderColor={theme.searchBorder}
                        borderRadius="$xl"
                        h={52}
                        px="$4"
                        flexDirection="row"
                        alignItems="center"
                    >
                        <Search size={20} color="#9ca3af" />
                        <Text
                            ml="$3"
                            color={theme.subText}
                            fontSize="$sm"
                        >
                            Search for events, movies and restaurants
                        </Text>
                    </Box>

                    {/* Row 3: Icon Nav Categories */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 8,
                            gap: isWeb ? 30 : 20,
                            alignItems: 'center',
                            justifyContent: isWeb ? 'center' : 'flex-start',
                            flexGrow: 1
                        }}
                    >
                        {NAV_ITEMS.map((item) => (
                            <Link key={item.label} href={item.href}>
                                <VStack alignItems="center" space="sm">
                                    <Box
                                        bg={item.isActive ? theme.activeBg : 'transparent'}
                                        p="$4"
                                        borderRadius="$2xl"
                                        alignItems="center"
                                        justifyContent="center"
                                        borderWidth={item.isActive ? 0 : (isWeb ? 0 : 1)}
                                        borderColor={theme.searchBorder}
                                    >
                                        <item.icon size={26} color={item.isActive ? (isWeb ? '#666600' : '$white') : (isWeb ? '#666' : '$white')} />
                                    </Box>
                                    <Text
                                        fontSize="$xs"
                                        fontWeight={item.isActive ? '$bold' : '$medium'}
                                        color={item.isActive ? (isWeb ? '#666600' : '$white') : (isWeb ? theme.text : '$textDark300')}
                                    >
                                        {item.label}
                                    </Text>
                                </VStack>
                            </Link>
                        ))}
                    </ScrollView>
                </VStack>
            )}
        </Box>
    )
}
