import React, { useEffect, useState } from 'react'
import { Box, HStack, VStack } from '../ui/box'
import { Text } from '../ui/text'
import { Pressable, ScrollView, Platform, useWindowDimensions } from 'react-native'
import { Link } from 'solito/link'
import { Search, MapPin, User, ChevronRight } from 'lucide-react-native'
import { NAV_ITEMS, LOCATION_DATA } from '../../mock/navigation'
import { ALL_CITIES } from '../../mock/cities'
import { LocationModal } from './location-modal'

export function Navbar() {
    const { width } = useWindowDimensions()
    const [mounted, setMounted] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)
    const [showLocationModal, setShowLocationModal] = useState(false)
    const [selectedCity, setSelectedCity] = useState(LOCATION_DATA.city)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setIsDesktop(width >= 1108)
    }, [width])

    useEffect(() => {
        if (Platform.OS === 'web') {
            const savedCity = localStorage.getItem('selectedCity')
            if (savedCity) {
                setSelectedCity(savedCity)
            }
        }
    }, [])

    const handleSelectCity = (city: string) => {
        setSelectedCity(city)
        if (Platform.OS === 'web') {
            localStorage.setItem('selectedCity', city)
        }
    }

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
                    borderBottomWidth: 1,
                    borderBottomColor: '#e5e7eb',
                },
            }}
        >
            {isDesktop ? (
                // Desktop Layout: Single Row with sticky behavior
                <Box
                    bg={theme.bg}
                    sx={{
                        _web: {
                            position: 'sticky' as const,
                            top: 0,
                            zIndex: 999,
                        },
                    }}
                >
                    <HStack
                        w="100%"
                        maxWidth={1200}
                        mx="auto"
                        px="$6"
                        py="$3"
                        alignItems="center"
                        space="lg"
                    >
                        {/* Logo */}
                        <VStack mr="$2">
                            <Text fontWeight="$extrabold" fontSize="$3xl"  lineHeight="$xs">
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
                            <ChevronRight size={16} color={theme.text} />
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
                                <Search size={20} color="#9ca3af" />
                            </Pressable>
                            <Pressable>
                                <Box bg={theme.profileBg} p="$2.5" borderRadius="$full">
                                    <User size={20} color="#888" />
                                </Box>
                            </Pressable>
                        </HStack>
                    </HStack>
                </Box>
            ) : isWeb ? (
                // Tablet/Mobile Web Layout: 3-row layout with sticky search + nav
                <VStack
                    w="100%"
                    px="$4"
                    py="$4"
                    space="lg"
                >
                    {/* Row 1: Location & Profile - scrolls with page */}
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

                    {/* Row 2: Search Bar - sticky */}
                    <Box
                        bg={theme.bg}
                        sx={{
                            _web: {
                                position: 'sticky' as const,
                                top: 0,
                                zIndex: 999,
                            },
                        }}
                    >
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
                    </Box>

                    {/* Row 3: Navigation Categories - sticky */}
                    <Box
                        bg={theme.bg}
                        sx={{
                            _web: {
                                position: 'sticky' as const,
                                top: 52,
                                zIndex: 999,
                                borderTopWidth: 1,
                                borderTopColor: '#e5e7eb',
                            },
                        }}
                    >
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingBottom: 8,
                                gap: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexGrow: 1,
                            }}
                        >
                            {NAV_ITEMS.map((item) => (
                                <Link key={item.label} href={item.href}>
                                    <Box
                                        bg={item.isActive ? theme.activeBg : 'transparent'}
                                        px="$4"
                                        py="$2"
                                        borderRadius="$full"
                                        alignItems="center"
                                        justifyContent="center"
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
                        </ScrollView>
                    </Box>
                </VStack>
            ) : (
                // Native Mobile Layout: Location + Profile above fixed search + nav
                <VStack
                    w="100%"
                    px="$4"
                    py="$4"
                    space="lg"
                >
                    {/* Row 1: Location & Profile (fixed because Navbar is outside ScrollView) */}
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

                    {/* Fixed Search Bar */}
                    <Box>
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
                    </Box>

                    {/* Fixed Navigation Categories */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingVertical: 12,
                            gap: 20,
                            alignItems: 'center',
                        }}
                    >
                        {NAV_ITEMS.map((item) => (
                            <Link key={item.label} href={item.href}>
                                <Box
                                    bg={item.isActive ? theme.activeBg : 'transparent'}
                                    px="$4"
                                    py="$2"
                                    borderRadius="$full"
                                    alignItems="center"
                                    justifyContent="center"
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
                    </ScrollView>
                </VStack>
            )}

            <LocationModal
                isOpen={showLocationModal}
                onClose={() => setShowLocationModal(false)}
                currentCity={selectedCity}
                onSelectCity={handleSelectCity}
            />
        </Box>
    )
}
