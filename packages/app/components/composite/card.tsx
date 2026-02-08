import React from 'react'
import { Box, VStack } from '../ui/box'
import { Heading, Text } from '../ui/text'

interface CardProps {
    title?: string
    description?: string
    children?: React.ReactNode
    variant?: 'elevated' | 'outlined' | 'filled'
}

export function Card({ title, description, children, variant = 'elevated' }: CardProps) {
    const variantStyles = {
        elevated: {
            bg: '$white',
            shadowColor: '$black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3,
        },
        outlined: {
            bg: '$white',
            borderWidth: 1,
            borderColor: '$borderLight300',
        },
        filled: {
            bg: '$backgroundLight100',
        },
    }

    return (
        <Box
            p="$4"
            rounded="$lg"
            {...variantStyles[variant]}
            role="article"
            accessibilityLabel={title || 'Card'}
        >
            <VStack space="md">
                {title && <Heading size="md">{title}</Heading>}
                {description && <Text size="sm" color="$textLight600">{description}</Text>}
                {children}
            </VStack>
        </Box>
    )
}
