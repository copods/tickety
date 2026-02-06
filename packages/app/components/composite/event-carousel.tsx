import React, { useState } from 'react'
import { Box, VStack, HStack, Text, Heading, Button, ButtonText } from '../ui'
import { Image, Pressable, StyleSheet, Platform } from 'react-native'
import { ChevronLeft, ChevronRight } from 'lucide-react-native'

export interface CarouselEvent {
    id: string
    name: string
    date: string
    time: string
    venue: string
    price: string
    image: string
    bannerImage: string
}

interface EventCarouselProps {
    data: CarouselEvent[]
}

export const EventCarousel = ({ data }: EventCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0)

    if (!data || data.length === 0) return null

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % data.length)
    }

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + data.length) % data.length)
    }

    const activeEvent = data[activeIndex]
    if (!activeEvent) return null

    return (
        <Box position="relative" width="100%" height={600} overflow="hidden" backgroundColor="$white">
            {/* Background Layer (Blurred Banner) */}
            <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
                <Image
                    source={{ uri: activeEvent.bannerImage }}
                    style={StyleSheet.absoluteFill}
                    resizeMode="cover"
                    blurRadius={Platform.OS === 'web' ? 40 : 10}
                />
                {/* Soft light overlay with gradient feel */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="rgba(255, 255, 255, 0.4)"
                />
            </Box>

            {/* Content Container */}
            <HStack
                zIndex={1}
                flex={1}
                alignItems="center"
                justifyContent="center"
                px="$10"
                maxWidth={1200}
                alignSelf="center"
                width="100%"
            >
                {/* Left Side: Event Details */}
                <VStack flex={1.2} space="md" justifyContent="center" pr="$10">
                    <Text fontWeight="$medium" color="$text800" fontSize="$sm">
                        {activeEvent.date}, {activeEvent.time}
                    </Text>
                    <Heading
                        size="4xl"
                        color="$text900"
                        fontWeight="900"
                        lineHeight={Platform.OS === 'web' ? 56 : undefined}
                    >
                        {activeEvent.name}
                    </Heading>
                    <Text color="$text700" fontSize="$lg" fontWeight="$medium">
                        {activeEvent.venue}
                    </Text>
                    <Text color="$text900" fontWeight="800" fontSize="$xl" mt="$2">
                        {activeEvent.price}
                    </Text>

                    <Box mt="$8">
                        <Button
                            size="xl"
                            bg="$black"
                            action="primary"
                            borderRadius="$lg"
                            onPress={() => console.log('Booking tickets...')}
                            width={220}
                            height={60}
                        >
                            <ButtonText color="$white" fontWeight="$bold" fontSize="$lg">
                                Book tickets
                            </ButtonText>
                        </Button>
                    </Box>
                </VStack>

                {/* Right Side: Poster Image */}
                <Box
                    width={420}
                    height={520}
                    borderRadius="$3xl"
                    overflow="hidden"
                    shadowColor="$black"
                    shadowOffset={{ width: 0, height: 20 }}
                    shadowOpacity={0.25}
                    shadowRadius={30}
                    elevation={15}
                    ml="$10"
                    bg="$white"
                >
                    <Image
                        source={{ uri: activeEvent.image }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="cover"
                    />
                </Box>
            </HStack>

            {/* Navigation Arrows */}
            <Box position="absolute" left="$6" top="50%" mt={-24} zIndex={2}>
                <Pressable
                    onPress={prevSlide}
                    style={({ pressed }) => ({
                        backgroundColor: pressed ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.8)',
                        borderRadius: 30,
                        padding: 12,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 3,
                    })}
                >
                    <ChevronLeft size={32} color="black" />
                </Pressable>
            </Box>

            <Box position="absolute" right="$6" top="50%" mt={-24} zIndex={2}>
                <Pressable
                    onPress={nextSlide}
                    style={({ pressed }) => ({
                        backgroundColor: pressed ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.8)',
                        borderRadius: 30,
                        padding: 12,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 3,
                    })}
                >
                    <ChevronRight size={32} color="black" />
                </Pressable>
            </Box>

            {/* Indicators/Dots */}
            <HStack
                position="absolute"
                bottom="$10"
                width="100%"
                justifyContent="center"
                space="sm"
                zIndex={2}
            >
                {data.map((_, index) => (
                    <Box
                        key={index}
                        width={index === activeIndex ? 32 : 10}
                        height={10}
                        borderRadius="$full"
                        bg={index === activeIndex ? "$black" : "rgba(0,0,0,0.15)"}
                    />
                ))}
            </HStack>
        </Box>
    )
}
