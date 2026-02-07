import {
    Box,
    VStack,
    HStack,
    Text,
    Pressable,
    Divider,
} from '@gluestack-ui/themed'
import { Link } from 'solito/link'
import { Platform, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react-native'

export function Footer() {
    const { width } = useWindowDimensions()
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setIsMobile(width < 700)
    }, [width])

    const isWeb = Platform.OS === 'web'
    const useDarkTheme = !isWeb

    const theme = {
        bg: useDarkTheme ? '$backgroundDark950' : '$coolGray900',
        text: useDarkTheme ? '$textDark200' : '$coolGray300',
        linkText: useDarkTheme ? '$textDark100' : '$white',
        divider: useDarkTheme ? '$borderDark800' : '$coolGray700',
        iconColor: useDarkTheme ? '#d1d5db' : '#d1d5db',
    }

    const footerLinks = [
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Refund Policy', href: '/refund' },
    ]

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
        { icon: Mail, href: 'mailto:info@tickety.com', label: 'Email' },
    ]

    if (!mounted && isWeb) {
        return <Box h={200} bg={theme.bg} />
    }

    return (
        <Box bg={theme.bg} w="100%">
            <VStack
                maxWidth={1480}
                mx="auto"
                w="100%"
                px={isMobile ? '$4' : '$8'}
                py={isMobile ? '$8' : '$12'}
                space={isMobile ? '$8' : '$10'}
            >
                {/* Main Footer Content */}
                <VStack space={isMobile ? '$6' : '$8'}>
                    {/* Company Info & Links */}
                    <VStack space="lg">
                        {/* Logo/Brand */}
                        <VStack space="xs">
                            <Text
                                fontWeight="$extrabold"
                                fontSize={isMobile ? '$2xl' : '$3xl'}
                                color={theme.linkText}
                                lineHeight="$xs"
                            >
                                tickety
                            </Text>
                            <Text fontSize="$xs" color={theme.text} maxWidth={isMobile ? '100%' : 500}>
                                Your gateway to the best events, concerts, and experiences in your city.
                                Book tickets seamlessly and never miss out on what's happening around you.
                            </Text>
                        </VStack>

                        {/* Footer Links */}
                        <Box
                            flexDirection={isMobile ? 'column' : 'row'}
                            flexWrap="wrap"
                            gap={isMobile ? '$3' : '$6'}
                        >
                            {footerLinks.map((link) => (
                                <Link key={link.label} href={link.href}>
                                    <Pressable>
                                        {({ pressed }) => (
                                            <Text
                                                fontSize="$sm"
                                                color={theme.text}
                                                sx={{
                                                    _web: {
                                                        ':hover': {
                                                            color: theme.linkText,
                                                            textDecoration: 'underline',
                                                        },
                                                    },
                                                }}
                                            >
                                                {link.label}
                                            </Text>
                                        )}
                                    </Pressable>
                                </Link>
                            ))}
                        </Box>
                    </VStack>

                    {/* App Download Section */}
                    <VStack space="md">
                        <Text fontSize="$md" fontWeight="$semibold" color={theme.linkText}>
                            Download Our App
                        </Text>
                        <HStack space="md" flexWrap="wrap">
                            <Link href="https://apps.apple.com">
                                <Pressable>
                                    <Box
                                        bg="$black"
                                        px="$4"
                                        py="$2.5"
                                        borderRadius="$lg"
                                        borderWidth={1}
                                        borderColor="$white"
                                    >
                                        <Text fontSize="$xs" color="$white" fontWeight="$semibold">
                                            App Store
                                        </Text>
                                    </Box>
                                </Pressable>
                            </Link>
                            <Link href="https://play.google.com">
                                <Pressable>
                                    <Box
                                        bg="$black"
                                        px="$4"
                                        py="$2.5"
                                        borderRadius="$lg"
                                        borderWidth={1}
                                        borderColor="$white"
                                    >
                                        <Text fontSize="$xs" color="$white" fontWeight="$semibold">
                                            Google Play
                                        </Text>
                                    </Box>
                                </Pressable>
                            </Link>
                        </HStack>
                    </VStack>

                    {/* Social Media Links */}
                    <VStack space="md">
                        <Text fontSize="$md" fontWeight="$semibold" color={theme.linkText}>
                            Follow Us
                        </Text>
                        <HStack space="lg">
                            {socialLinks.map((social) => (
                                <Link key={social.label} href={social.href}>
                                    <Pressable>
                                        {({ pressed }) => (
                                            <Box
                                                p="$2"
                                                borderRadius="$full"
                                                sx={{
                                                    _web: {
                                                        transition: 'all 0.2s ease',
                                                        ':hover': {
                                                            bg: '$coolGray800',
                                                        },
                                                    },
                                                }}
                                            >
                                                <social.icon size={20} color={theme.iconColor} />
                                            </Box>
                                        )}
                                    </Pressable>
                                </Link>
                            ))}
                        </HStack>
                    </VStack>
                </VStack>

                {/* Divider */}
                <Divider bg={theme.divider} />

                {/* Copyright */}
                <VStack space="sm" alignItems={isMobile ? 'flex-start' : 'center'}>
                    <Text fontSize="$xs" color={theme.text} textAlign={isMobile ? 'left' : 'center'}>
                        © {new Date().getFullYear()} Tickety. All rights reserved.
                    </Text>
                    <Text fontSize="$2xs" color={theme.text} textAlign={isMobile ? 'left' : 'center'}>
                        By using this service, you agree to our Terms & Conditions and Privacy Policy.
                    </Text>
                </VStack>
            </VStack>
        </Box>
    )
}
