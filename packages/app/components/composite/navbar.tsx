import React from 'react'
import { HStack } from '../ui/box'
import { Heading } from '../ui/text'
import { Pressable } from 'react-native'

interface NavbarProps {
    title?: string
    leftElement?: React.ReactNode
    rightElement?: React.ReactNode
    onTitlePress?: () => void
    bgColor?: string
}

export function Navbar({
    title,
    leftElement,
    rightElement,
    onTitlePress,
    bgColor = '$white'
}: NavbarProps) {
    return (
        <HStack
            px="$4"
            py="$3"
            alignItems="center"
            justifyContent="space-between"
            bg={bgColor}
            borderBottomWidth={1}
            borderColor="$borderLight300"
            elevation={3}
            shadowColor="$black"
            shadowOffset={{ width: 0, height: 1 }}
            shadowOpacity={0.1}
            shadowRadius={2}
            role="navigation"
            accessibilityRole="header"
            accessibilityLabel={title ? `${title} navigation` : 'Navigation bar'}
        >
            <HStack alignItems="center" space="md">
                {leftElement}
                <Pressable
                    onPress={onTitlePress}
                    disabled={!onTitlePress}
                    accessibilityRole={onTitlePress ? 'button' : 'header'}
                    accessibilityLabel={title || 'App title'}
                >
                    <Heading size="md" color="$textLight900">{title}</Heading>
                </Pressable>
            </HStack>

            {rightElement}
        </HStack>
    )
}
