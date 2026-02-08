import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, VStack, HStack, Text } from "@tickety/app/components/ui";
import { fetchEventById } from "@tickety/app/services/api";
import type { EventDetail } from "@tickety/app/types";
import { Button, ButtonText } from "@tickety/app/components/ui";
import { Image, Pressable, Platform, StyleSheet } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { EventDetailSkeleton } from "@tickety/app/components/composite";
import Head from "next/head";

export default function EventPage() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isWeb = Platform.OS === "web";

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    fetchEventById(id)
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <EventDetailSkeleton />;
  }

  if (error || !event) {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        height={400}
        backgroundColor="$white"
        accessibilityRole="alert"
      >
        <Text color="$red500" accessibilityRole="alert">{error || "Event not found"}</Text>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{event.name} - Tickety</title>
        <meta name="description" content={event.description} />
      </Head>
      <Box backgroundColor="$white" minHeight="$full">
        {/* Banner Image */}
        <Box width="100%" height={350} position="relative">
          <Image
            source={{ uri: event.bannerImage }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
            accessibilityLabel={`Banner image for ${event.name}`}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="rgba(0,0,0,0.3)"
          />
          {/* Back button */}
          <Box position="absolute" top="$6" left="$6" zIndex={2}>
            <Pressable
              onPress={() => router.back()}
              accessibilityRole="button"
              accessibilityLabel="Go back to previous page"
              style={({ pressed }) => ({
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: pressed
                  ? "rgba(0,0,0,0.95)"
                  : "rgba(0,0,0,0.6)",
                borderRadius: 24,
                paddingHorizontal: 14,
                paddingVertical: 8,
                cursor: isWeb ? "pointer" : "default",
              })}
            >
              <ChevronLeft size={18} color="white" strokeWidth={2} />
              <Text color="$white" fontSize="$sm" fontWeight="$medium" ml="$1">
                Back
              </Text>
            </Pressable>
          </Box>
        </Box>

        {/* Content */}
        <VStack
          px="$6"
          py="$8"
          maxWidth={900}
          width="100%"
          alignSelf="center"
          space="lg"
        >
          {/* Category Badge */}
          <Box
            alignSelf="flex-start"
            px="$3"
            py="$1"
            backgroundColor="$black"
            borderRadius="$full"
          >
            <Text color="$white" fontSize="$xs" fontWeight="$bold">
              {event.category}
            </Text>
          </Box>

          {/* Title */}
          <Text fontSize="$3xl" fontWeight="$bold" lineHeight={40}>
            {event.name}
          </Text>

          {/* Date, Time, Venue */}
          <VStack space="sm">
            <HStack space="sm" alignItems="center">
              <Text fontSize="$md" fontWeight="$semibold" color="$text700">
                {event.date} • {event.time}
              </Text>
            </HStack>
            <Text fontSize="$md" color="$text500">
              {event.venue}
            </Text>
          </VStack>

          {/* Price & Book */}
          <HStack
            alignItems="center"
            justifyContent="space-between"
            py="$4"
            borderTopWidth={1}
            borderBottomWidth={1}
            borderColor="$borderLight200"
          >
            <VStack>
              <Text fontSize="$sm" color="$text500">
                Starting from
              </Text>
              <Text fontSize="$2xl" fontWeight="$bold">
                {event.price}
              </Text>
            </VStack>
            <Button
              size="lg"
              bg="$black"
              action="primary"
              borderRadius="$full"
              onPress={() => console.log("Booking tickets for", event.name)}
              accessibilityRole="button"
              accessibilityLabel={`Book tickets for ${event.name}`}
              width={180}
              height={50}
            >
              <ButtonText color="$white" fontWeight="$bold" fontSize="$md">
                Book Tickets
              </ButtonText>
            </Button>
          </HStack>

          {/* Description */}
          <VStack space="sm">
            <Text fontSize="$lg" fontWeight="$bold">
              About this Event
            </Text>
            <Text fontSize="$md" color="$text700" lineHeight={24}>
              {event.description}
            </Text>
          </VStack>

          {/* Details */}
          <Box
            width="100%"
            px="$4"
            py="$6"
            backgroundColor="$backgroundLight100"
            borderRadius="$xl"
          >
            <VStack space="md">
              <HStack justifyContent="space-between">
                <Text fontSize="$sm" color="$text500">
                  Organizer
                </Text>
                <Text fontSize="$sm" fontWeight="$semibold">
                  {event.organizer}
                </Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text fontSize="$sm" color="$text500">
                  Age Restriction
                </Text>
                <Text fontSize="$sm" fontWeight="$semibold">
                  {event.ageRestriction}
                </Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text fontSize="$sm" color="$text500">
                  Category
                </Text>
                <Text fontSize="$sm" fontWeight="$semibold">
                  {event.category}
                </Text>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
