import React, { useState, useRef, useEffect } from "react";
import { Box, VStack, HStack, Text, Heading, Button, ButtonText } from "../ui";
import {
  Image,
  Pressable,
  StyleSheet,
  Animated,
  useWindowDimensions,
  Platform,
  PanResponder,
} from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";

import type { CarouselEvent, EventCarouselProps } from "../../types";

export type { CarouselEvent };

export const EventCarousel = ({ data, onEventPress }: EventCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const { width } = useWindowDimensions();

  // Platform detection
  const isWeb = Platform.OS === "web";
  const isIOS = Platform.OS === "ios";
  const isAndroid = Platform.OS === "android";
  const isNative = isIOS || isAndroid;

  // Pan/Swipe gesture handling
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Only respond if horizontal movement is greater than vertical
        return (
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
          Math.abs(gestureState.dx) > 5
        );
      },
      onPanResponderMove: () => {
        // Optional: Add visual feedback during drag here if needed
      },
      onPanResponderRelease: (_, gestureState) => {
        const swipeThreshold = 50; // Minimum distance to trigger slide change
        const swipeVelocity = 0.3; // Minimum velocity to trigger slide change

        // Detect swipe left (next slide)
        if (
          gestureState.dx < -swipeThreshold ||
          gestureState.vx < -swipeVelocity
        ) {
          nextSlide();
        }
        // Detect swipe right (previous slide)
        else if (
          gestureState.dx > swipeThreshold ||
          gestureState.vx > swipeVelocity
        ) {
          prevSlide();
        }
      },
      onPanResponderTerminate: () => {
        // Handle gesture termination if needed
      },
    }),
  ).current;

  // Fix hydration: only apply responsive logic after client-side mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Responsive breakpoints - use desktop defaults for SSR to avoid hydration errors
  const isMobile = isMounted ? width < 768 : false;
  const isTablet = isMounted ? width >= 768 && width < 1024 : false;
  const isDesktop = isMounted ? width >= 1024 : true; // Default to desktop on server

  if (!data || data.length === 0) return null;

  const changeSlide = (newIndex: number) => {
    if (isAnimating || newIndex === activeIndex) return;

    setIsAnimating(true);

    // Fade out
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start(() => {
      // Change slide
      setActiveIndex(newIndex);

      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }).start(() => {
        setIsAnimating(false);
      });
    });
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % data.length;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + data.length) % data.length;
    changeSlide(newIndex);
  };

  const goToSlide = (index: number) => {
    changeSlide(index);
  };

  const activeEvent = data[activeIndex];
  if (!activeEvent) return null;

  // Responsive sizing
  const carouselHeight = isMobile ? 420 : isTablet ? 580 : 600;
  const containerPadding = isMobile ? "$4" : isTablet ? "$6" : "$10";
  const maxWidth = isMobile ? "100%" : isTablet ? 900 : 1200;

  // Platform-specific optimizations
  const blurIntensity = isWeb ? (isMobile ? 15 : 20) : isIOS ? 25 : 15;
  const useNativeShadow = isIOS || isWeb;

  return (
    <Box
      position="relative"
      width="100%"
      height={carouselHeight}
      overflow="hidden"
      backgroundColor={isMobile && isNative ? "$black" : "$white"}
      accessibilityRole="summary"
      accessibilityLabel={`Event carousel, showing ${activeEvent.name}, slide ${activeIndex + 1} of ${data.length}`}
    >
      {/* Background Layer - Full Width */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        <Image
          source={{ uri: activeEvent.bannerImage }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
          blurRadius={isMobile && isNative ? 0 : blurIntensity}
          accessibilityLabel=""
          accessible={false}
        />
        {/* Dark gradient overlay for mobile */}
        {isMobile && isNative ? (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="rgba(0,0,0,0.45)"
          />
        ) : (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="$carouselOverlay"
          />
        )}
      </Box>

      {/* Content Container with Fade Animation */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
        maxWidth={1400}
        width="100%"
        alignSelf="center"
        mx="auto"
        height="$full"
      >
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            flex: 1,
            opacity: fadeAnim,
          }}
        >
          {isMobile ? (
            // Mobile: Hero Banner Layout - image bg with overlaid text
            <VStack
              justifyContent="center"
              alignItems="center"
              width="100%"
              px="$6"
              flex={1}
              space="md"
            >
              <Heading
                size="3xl"
                color="$white"
                fontWeight="900"
                lineHeight={44}
                textAlign="center"
                fontStyle="italic"
              >
                Plan special{"\n"}evenings
              </Heading>

              <Text
                color="#e2c4f0"
                fontSize="$sm"
                fontWeight="$medium"
                textAlign="center"
                letterSpacing={0.5}
              >
                Music, comedy, nightlife & more
              </Text>

              <Box mt="$4">
                <Button
                  size="md"
                  bg="$white"
                  action="primary"
                  borderRadius="$full"
                  onPress={() => onEventPress?.(activeEvent)}
                  accessibilityRole="button"
                  accessibilityLabel="Explore events now"
                  px="$6"
                  height={44}
                >
                  <ButtonText
                    color="$black"
                    fontWeight="$bold"
                    fontSize="$sm"
                  >
                    Explore now
                  </ButtonText>
                  <Box ml="$1">
                    <ChevronRight size={16} color="#000" strokeWidth={2.5} />
                  </Box>
                </Button>
              </Box>
            </VStack>
          ) : (
            // Tablet/Desktop: Horizontal Stack Layout
            <HStack
              alignItems="center"
              justifyContent="center"
              width="100%"
              px={containerPadding}
              maxWidth={maxWidth}
              alignSelf="center"
              flex={1}
            >
              {/* Left Side: Event Details */}
              <VStack
                flex={1.2}
                space={isTablet ? "md" : "lg"}
                justifyContent="center"
                pr={isTablet ? "$6" : "$10"}
              >
                <VStack space="xs">
                  <Text
                    fontWeight="$semibold"
                    color="$black"
                    fontSize={isTablet ? "$xs" : "$sm"}
                    textTransform="uppercase"
                    letterSpacing={0.5}
                  >
                    {activeEvent.date} • {activeEvent.time}
                  </Text>
                </VStack>

                <Heading
                  size={isTablet ? "3xl" : "4xl"}
                  color="$text900"
                  fontWeight="900"
                  lineHeight={isTablet ? 44 : 56}
                  numberOfLines={3}
                >
                  {activeEvent.name}
                </Heading>

                <VStack space="sm">
                  <Text
                    color="$black"
                    fontSize={isTablet ? "$md" : "$xl"}
                    fontWeight="$semibold"
                  >
                    {activeEvent.venue}
                  </Text>
                  <Text
                    color="$black"
                    fontWeight="600"
                    fontSize={isTablet ? "$xl" : "$md"}
                  >
                    {activeEvent.price}
                  </Text>
                </VStack>

                <Box>
                  <Button
                    size={isTablet ? "md" : "lg"}
                    bg="$black"
                    action="primary"
                    borderRadius="$full"
                    onPress={() => onEventPress?.(activeEvent)}
                    accessibilityRole="button"
                    accessibilityLabel={`Book tickets for ${activeEvent.name}`}
                    width={isTablet ? 180 : 200}
                    height={isTablet ? 48 : 52}
                    {...(useNativeShadow && {
                      shadowColor: "$black",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 8,
                    })}
                    elevation={isAndroid ? 8 : 0}
                  >
                    <ButtonText
                      color="$white"
                      fontWeight="$bold"
                      fontSize={isTablet ? "$sm" : "$md"}
                    >
                      Book Tickets
                    </ButtonText>
                  </Button>
                </Box>
              </VStack>

              {/* Right Side: Poster Image */}
              <Box
                width={isTablet ? 340 : 340}
                height={isTablet ? 440 : 420}
                borderRadius="$xl"
                overflow="hidden"
                {...(useNativeShadow && {
                  shadowColor: "$black",
                  shadowOffset: { width: 0, height: 24 },
                  shadowOpacity: 0.35,
                  shadowRadius: 40,
                })}
                elevation={isAndroid ? 20 : 0}
                ml={isTablet ? "$6" : "$10"}
                bg="$white"
              >
                <Image
                  source={{ uri: activeEvent.image }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                  accessibilityLabel={`Poster for ${activeEvent.name}`}
                />
              </Box>
            </HStack>
          )}
        </Animated.View>

        {/* Navigation Arrows - Hidden on Mobile */}
        {!isMobile && (
          <>
            <Box
              position="absolute"
              left={isTablet ? "$4" : "$6"}
              top="50%"
              mt={isTablet ? -20 : -22}
              zIndex={2}
            >
              <Pressable
                onPress={prevSlide}
                disabled={isAnimating}
                accessibilityRole="button"
                accessibilityLabel="Previous slide"
                style={({ pressed }) => ({
                  backgroundColor: pressed
                    ? "rgba(0,0,0,0.95)" // carouselNavBgPressed
                    : "rgba(0,0,0,0.75)", // carouselNavBg
                  borderRadius: isTablet ? 28 : 32,
                  padding: isTablet ? 10 : 12,
                  ...(useNativeShadow && {
                    shadowColor: "#000000", // carouselShadow
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                  }),
                  elevation: isAndroid ? 8 : 0,
                  opacity: isAnimating ? 0.5 : 1,
                  cursor: isWeb ? "pointer" : "default",
                })}
              >
                <ChevronLeft
                  size={isTablet ? 24 : 28}
                  color="white"
                  strokeWidth={2.5}
                />
              </Pressable>
            </Box>

            <Box
              position="absolute"
              right={isTablet ? "$4" : "$6"}
              top="50%"
              mt={isTablet ? -20 : -22}
              zIndex={2}
            >
              <Pressable
                onPress={nextSlide}
                disabled={isAnimating}
                accessibilityRole="button"
                accessibilityLabel="Next slide"
                style={({ pressed }) => ({
                  backgroundColor: pressed
                    ? "rgba(0,0,0,0.95)" // carouselNavBgPressed
                    : "rgba(0,0,0,0.75)", // carouselNavBg
                  borderRadius: isTablet ? 28 : 32,
                  padding: isTablet ? 10 : 12,
                  ...(useNativeShadow && {
                    shadowColor: "#000000", // carouselShadow
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                  }),
                  elevation: isAndroid ? 8 : 0,
                  opacity: isAnimating ? 0.5 : 1,
                  cursor: isWeb ? "pointer" : "default",
                })}
              >
                <ChevronRight
                  size={isTablet ? 24 : 28}
                  color="white"
                  strokeWidth={2.5}
                />
              </Pressable>
            </Box>
          </>
        )}

        {/* Clickable Indicators/Dots */}
        <HStack
          position="absolute"
          bottom={isMobile ? "$6" : isTablet ? "$8" : "$10"}
          width="100%"
          justifyContent="center"
          space="sm"
          zIndex={2}
        >
          {data.map((_, index) => (
            <Pressable
              key={index}
              onPress={() => goToSlide(index)}
              disabled={isAnimating}
              accessibilityRole="button"
              accessibilityLabel={`Go to slide ${index + 1} of ${data.length}`}
              accessibilityState={{ selected: index === activeIndex }}
              style={({ pressed }) => ({
                opacity: pressed ? 0.7 : 1,
                cursor: isWeb ? "pointer" : "default",
              })}
            >
              <Box
                width={
                  index === activeIndex
                    ? isMobile
                      ? 32
                      : 40
                    : isMobile
                      ? 10
                      : 16
                }
                height={isMobile ? 4 : 6}
                borderRadius="$full"
                bg={
                  index === activeIndex
                    ? "$black"
                    : "$carouselIndicatorInactive"
                }
                {...(index === activeIndex &&
                  useNativeShadow && {
                    shadowColor: "$carouselShadow",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                  })}
                elevation={index === activeIndex && isAndroid ? 4 : 0}
              />
            </Pressable>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
