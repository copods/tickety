import React from 'react'
import { Box, VStack, HStack } from '../../components/ui/box'
import { Navbar } from '../../components/composite/navbar'
import { Text } from '../../components/ui/text'
import { Button } from '../../components/ui/button'
import { Alert, Pressable } from 'react-native'

export function NavbarDemoScreen() {
    const handleTitlePress = () => {
        Alert.alert('Navbar Title Pressed')
    }

    const handleRightAction = () => {
        Alert.alert('Right Action Pressed')
    }

    return (
        <VStack flex={1}>
            <Navbar
                title="Tickety App"
                onTitlePress={handleTitlePress}
                rightElement={
                    <Button size="sm" onPress={handleRightAction}>
                        <Text color="$white" size="xs">Logout</Text>
                    </Button>
                }
            />

            <Box p="$4" flex={1} justifyContent="center" alignItems="center">
                <VStack space="md" alignItems="center">
                    <Text size="lg" bold textAlign="center">
                        This is the Navbar Demo
                    </Text>
                    <Text textAlign="center">
                        The navbar above is a shared component from packages/app.
                        It works on both iOS/Android (Expo) and Web (Next.js).
                    </Text>

                    <Box borderWidth={1} borderColor="$borderLight200" p="$4" rounded="$md" w="100%">
                        <Text bold mb="$2">How to use:</Text>
                        <Text size="sm">1. Import Navbar from @tickety/app/components/composite</Text>
                        <Text size="sm">2. Pass title, elements, and event handlers</Text>
                    </Box>
                </VStack>
            </Box>

            <Navbar
                title="Secondary Nav"
                bgColor="$backgroundLight100"
                leftElement={
                    <Pressable onPress={() => Alert.alert('Menu Pressed')}>
                        <Text>☰</Text>
                    </Pressable>
                }
            />
        </VStack>
    )
}
