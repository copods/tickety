import React from 'react'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import { Image, Pressable } from '@gluestack-ui/themed'
import { Link } from 'solito/link'

interface EventCategoryCardProps {
    label: string
    image: string
    href: string
    useDarkTheme: boolean
}

export function EventCategoryCard({ label, image, href, useDarkTheme }: EventCategoryCardProps) {
    const theme = {
        cardBg: useDarkTheme ? '#2A2218' : '#FFF8E3',
        text: useDarkTheme ? '#D4A537' : '#8B6914',
        border: useDarkTheme ? '#3D3428' : '#F0E0B8',
    }

    return (
        <Link href={href}>
            <Pressable>
                {({ pressed }: { pressed: boolean }) => (
                    <Box
                        bg={theme.cardBg}
                        borderRadius={16}
                        overflow="hidden"
                        borderWidth={0.5}
                        borderColor={theme.border}
                        opacity={pressed ? 0.85 : 1}
                        sx={{
                            _web: {
                                boxShadow: useDarkTheme
                                    ? '0 2px 8px rgba(0, 0, 0, 0.3)'
                                    : '0 1px 4px rgba(0, 0, 0, 0.06)',
                                transition: 'all 0.2s ease',
                                cursor: 'pointer',
                                ':hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: useDarkTheme
                                        ? '0 4px 12px rgba(0, 0, 0, 0.4)'
                                        : '0 4px 12px rgba(0, 0, 0, 0.1)',
                                },
                            },
                        }}
                    >
                        <Box pt="$3" px="$2" minHeight={46} justifyContent="center">
                            <Text
                                fontSize={13}
                                fontWeight="$bold"
                                color={theme.text}
                                textAlign="center"
                                numberOfLines={2}
                                lineHeight={17}
                            >
                                {label}
                            </Text>
                        </Box>
                        <Box h={130} alignItems="center" justifyContent="flex-end" pb="$2">
                            <Image
                                source={{ uri: image }}
                                alt={label}
                                w={110}
                                h={110}
                                borderRadius={8}
                                style={{ resizeMode: 'cover' }}
                            />
                        </Box>
                    </Box>
                )}
            </Pressable>
        </Link>
    )
}
