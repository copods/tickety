import React, { useState, useEffect, useMemo } from 'react'
import {
    Box,
    Modal,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Heading,
    Icon,
    CloseIcon,
    Input,
    InputField,
    InputSlot,
    InputIcon,
    VStack,
    Text,
    Pressable,
    Image,
    HStack,
} from '@gluestack-ui/themed'
import { Search } from 'lucide-react-native'
import { FlatList, Platform, StyleSheet, useWindowDimensions } from 'react-native'
import { ALL_EVENTS, Event } from '../../mock/all-events'
import { useRouter } from 'solito/router'

type SearchModalProps = {
    isOpen: boolean
    onClose: () => void
    currentCity?: string
    onEventPress?: (event: Event) => void
}

const normalizeCity = (city?: string) => {
    if (!city) return 'mumbai'
    const lowerCity = city.toLowerCase()
    // Simple normalization based on common variations
    if (lowerCity.includes('delhi') || lowerCity.includes('ncr') || lowerCity.includes('gurugram') || lowerCity.includes('noida')) {
        return 'delhi/ncr' // Matching the mock data format generally
    }
    return lowerCity
}

const locationMatch = (eventLocation: string, selectedCity: string) => {
    // Basic match: if selected city is part of event location string or vice-versa
    // In a real app, use IDs or standardized slugs.
    const eventLoc = eventLocation.toLowerCase()
    const selected = selectedCity.toLowerCase()

    // Special case for NCR
    if (selected.includes('delhi') && (eventLoc.includes('delhi') || eventLoc.includes('gurugram') || eventLoc.includes('noida'))) {
        return true
    }

    return eventLoc.includes(selected) || selected.includes(eventLoc)
}

export function SearchModal({ isOpen, onClose, currentCity = 'Mumbai', onEventPress }: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const { push } = useRouter()
    const { width } = useWindowDimensions()

    // 2 columns for grid layout
    const numColumns = 2

    const filteredEvents = useMemo(() => {
        // If currentCity is Mumbai (default) and no events, it will show empty. 
        // But for demo purpose, if I select 'Delhi', it should show Delhi events.

        const results = ALL_EVENTS.filter(event => {
            // Location Filter
            const matchesLocation = locationMatch(event.location, currentCity)

            // Search Query Filter
            const matchesSearch = searchQuery === '' ||
                event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.venue.toLowerCase().includes(searchQuery.toLowerCase())

            return matchesLocation && matchesSearch
        })

        return results.slice(0, 12)
    }, [searchQuery, currentCity])

    const renderEventItem = ({ item }: { item: Event }) => {
        return (
            <Pressable
                onPress={() => {
                    onClose()
                    push(`/event/${item.id}`)
                }}
                style={{
                    width: '48%',
                    marginBottom: 16,
                }}
            >
                <HStack space="md" alignItems="center">
                    <Image
                        source={{ uri: item.image }}
                        alt={item.title}
                        h={58}
                        w={58}
                        borderRadius={6}
                        resizeMode="cover"
                        bg="$coolGray200"
                    />
                    <VStack flex={1}>
                        <Heading size="sm" numberOfLines={1}>
                            {item.title}
                        </Heading>
                        <Text fontSize="$xs" color="$textLight500">
                            Event • {item.category}
                        </Text>
                    </VStack>
                </HStack>
            </Pressable>
        )
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="lg"
        >
            <ModalBackdrop />
            <ModalContent maxHeight="85%" width="90%" maxWidth={600}>
                <ModalHeader>
                    <Heading size="lg">Search in {currentCity}</Heading>
                    <ModalCloseButton>
                        <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <VStack space="md" h="100%">
                        <Input>
                            <InputSlot pl="$3">
                                <InputIcon as={Search} />
                            </InputSlot>
                            <InputField
                                placeholder="Search events, venues..."
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                autoFocus={Platform.OS === 'web'}
                            />
                        </Input>

                        <Box flex={1} mt="$4">
                            <FlatList
                                numColumns={numColumns}
                                columnWrapperStyle={{ justifyContent: 'space-between' }}
                                data={filteredEvents}
                                renderItem={renderEventItem}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingBottom: 20 }}
                                ListEmptyComponent={
                                    <Box py="$10" alignItems="center">
                                        <Text color="$textLight500">
                                            No events found
                                        </Text>
                                    </Box>
                                }
                            />
                        </Box>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
