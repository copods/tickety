import React from 'react'
import { ScrollView } from 'react-native'
import { Box, VStack } from '../../components/ui/box'
import { Card } from '../../components/composite/card'
import { Text } from '../../components/ui/text'
import { Button } from '../../components/ui/button'

export function SimpleCardsScreen() {
    return (
        <ScrollView>
            <Box p="$4">
                <VStack space="lg">
                    <Card
                        title="Welcome"
                        description="This is a simple cards demo using Gluestack UI components"
                        variant="elevated"
                    >
                        <Text size="sm" mt="$2">
                            Cards are a great way to organize and display content in a clean, modular fashion.
                        </Text>
                    </Card>

                    <Card
                        title="Elevated Card"
                        description="This card has a shadow effect"
                        variant="elevated"
                    >
                        <Button mt="$3">
                            <Text color="$white">Action Button</Text>
                        </Button>
                    </Card>

                    <Card
                        title="Outlined Card"
                        description="This card has a border"
                        variant="outlined"
                    >
                        <Text size="sm" mt="$2">
                            Outlined cards work well for subtle separation of content.
                        </Text>
                    </Card>

                    <Card
                        title="Filled Card"
                        description="This card has a background color"
                        variant="filled"
                    >
                        <Text size="sm" mt="$2">
                            Filled cards provide a different visual hierarchy.
                        </Text>
                    </Card>

                    <Card title="Custom Content" variant="elevated">
                        <VStack space="sm" mt="$2">
                            <Text size="sm">• Feature 1: Cross-platform support</Text>
                            <Text size="sm">• Feature 2: Reusable components</Text>
                            <Text size="sm">• Feature 3: Consistent design system</Text>
                        </VStack>
                    </Card>
                </VStack>
            </Box>
        </ScrollView>
    )
}
