import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, VStack, HStack, Text } from "@tickety/app/components/ui";
import { fetchEventById } from "@tickety/app/services/api";
import type { EventDetail } from "@tickety/app/types";
import { Button, ButtonText } from "@tickety/app/components/ui";
import { Image, Platform, useWindowDimensions } from "react-native";
import {
  Tag,
  CalendarDays,
  Clock,
  MapPin,
  Globe,
  Timer,
  Ticket,
  DoorOpen,
  Armchair,
  Baby,
  PawPrint,
} from "lucide-react-native";
import { EventDetailSkeleton } from "@tickety/app/components/composite";
import Head from "next/head";

export default function EventPage() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowDimensions();

  const isWeb = Platform.OS === "web";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = isMounted ? width < 768 : false;

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
        <Text color="$red500" accessibilityRole="alert">
          {error || "Event not found"}
        </Text>
      </Box>
    );
  }

  const infoItems = [
    { icon: Globe, label: "Language", value: event.language },
    { icon: Timer, label: "Duration", value: event.duration },
    {
      icon: Ticket,
      label: "Tickets Needed For",
      value: event.ticketsNeededFor,
    },
    {
      icon: DoorOpen,
      label: "Entry Allowed For",
      value: event.entryAllowedFor,
    },
    {
      icon: Armchair,
      label: "Seating Arrangement",
      value: event.seatingArrangement,
    },
    {
      icon: Baby,
      label: "Kid Friendly?",
      value: event.kidFriendly ? "Yes" : "No",
    },
    {
      icon: PawPrint,
      label: "Pet Friendly?",
      value: event.petFriendly ? "Yes" : "No",
    },
  ];

  const EventInfoSection = () => (
    <VStack space="xl">
      {/* Event Title */}
      <Text
        fontSize={isMobile ? "$lg" : "$xl"}
        fontWeight="$bold"
        lineHeight={isMobile ? 24 : 28}
      >
        {event.name}
      </Text>

      {/* Categories */}
      <HStack space="sm" alignItems="center" flexWrap="wrap">
        <Tag size={16} color="#6b7280" />
        {event.categories.map((cat) => (
          <Box
            key={cat}
            px="$2"
            py="$0.5"
            backgroundColor="$backgroundLight100"
            borderRadius="$full"
          >
            <Text fontSize="$xs" fontWeight="$medium" color="$text700">
              {cat}
            </Text>
          </Box>
        ))}
      </HStack>

      {/* Date & Time */}
      <HStack space="sm" alignItems="center">
        <CalendarDays size={16} color="#6b7280" />
        <Text fontSize="$sm" color="$text700">
          {event.date}
        </Text>
        <Clock size={16} color="#6b7280" />
        <Text fontSize="$sm" color="$text700">
          {event.time}
        </Text>
      </HStack>

      {/* Location */}
      <HStack space="sm" alignItems="flex-start">
        <Box pt="$0.5">
          <MapPin size={16} color="#6b7280" />
        </Box>
        <VStack flex={1}>
          <Text fontSize="$sm" color="$text700">
            {event.venue}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );

  const BookingCard = () => (
    <Box
      backgroundColor="$white"
      borderRadius="$2xl"
      borderWidth={1}
      borderColor="$borderLight200"
      p="$5"
      sx={{
        _web: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 12,
        },
      }}
    >
      <VStack space="md">
        <EventInfoSection />

        {/* Divider */}
        <Box height={1} backgroundColor="$borderLight200" my="$1" />

        {/* Price & Book Button */}
        <HStack alignItems="center" justifyContent="space-between">
          <VStack>
            <Text fontSize="$xs" color="$text500">
              Starting from
            </Text>
            <Text fontSize="$xl" fontWeight="$bold">
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
            px="$8"
            height={48}
          >
            <ButtonText color="$white" fontWeight="$bold" fontSize="$sm">
              Book Now
            </ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );

  const StickyBottomBar = () => (
    <Box
      sx={{
        _web: {
          position: "sticky" as any,
          bottom: 0,
          zIndex: 50,
        },
      }}
      backgroundColor="$white"
      borderTopWidth={1}
      borderColor="$borderLight200"
      px="$5"
      py="$3"
    >
      <HStack alignItems="center" justifyContent="space-between">
        <VStack>
          <Text fontSize="$xs" color="$text500">
            Starting from
          </Text>
          <Text fontSize="$lg" fontWeight="$bold">
            {event.price}
          </Text>
        </VStack>
        <Button
          size="md"
          bg="$black"
          action="primary"
          borderRadius="$full"
          onPress={() => console.log("Booking tickets for", event.name)}
          accessibilityRole="button"
          accessibilityLabel={`Book tickets for ${event.name}`}
          px="$6"
          height={44}
        >
          <ButtonText color="$white" fontWeight="$bold" fontSize="$sm">
            Book Now
          </ButtonText>
        </Button>
      </HStack>
    </Box>
  );

  const LeftContent = () => (
    <VStack space="xl" flex={1}>
      {/* Event Image */}
      <Box
        width="100%"
        height={isMobile ? 260 : 420}
        borderRadius="$2xl"
        overflow="hidden"
      >
        <Image
          source={{ uri: event.bannerImage }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          accessibilityLabel={`Banner image for ${event.name}`}
        />
      </Box>

      {/* About the Event */}
      <VStack space="sm">
        <Text fontSize="$lg" fontWeight="$bold">
          About the Event
        </Text>
        <Text fontSize="$sm" color="$text700" lineHeight={22}>
          {event.description}
        </Text>
      </VStack>

      {/* Divider */}
      <Box height={1} backgroundColor="$borderLight200" />

      {/* Event Details Grid */}
      <VStack space="3xl" flexDirection="row" flexWrap="wrap">
        {infoItems.map((item) => (
          <HStack width={"30%"} key={item.label} space="md" alignItems="center">
            <Box
              width={40}
              height={40}
              borderRadius="$lg"
              backgroundColor="$backgroundLight100"
              justifyContent="center"
              alignItems="center"
            >
              <item.icon size={18} color="#374151" />
            </Box>
            <VStack flex={1}>
              <Text fontSize="$xs" color="$text500">
                {item.label}
              </Text>
              <Text fontSize="$sm" fontWeight="$semibold" color="$text900">
                {item.value}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>

      {/* Artist Section */}
      {event.artistName && (
        <>
          <Box height={1} backgroundColor="$borderLight200" />
          <VStack space="md">
            <Text fontSize="$lg" fontWeight="$bold">
              Artist
            </Text>
            <HStack space="md" alignItems="center">
              {event.artistImage && (
                <Box
                  width={140}
                  height={140}
                  borderRadius="$lg"
                  overflow="hidden"
                >
                  <Image
                    source={{ uri: event.artistImage }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                    accessibilityLabel={`Photo of ${event.artistName}`}
                  />
                </Box>
              )}
              <VStack>
                <Text fontSize="$md" fontWeight="$bold">
                  {event.artistName}
                </Text>
                {event.artistId && (
                  <Text fontSize="$xs" color="$text500">
                    View artist profile
                  </Text>
                )}
              </VStack>
            </HStack>
          </VStack>
        </>
      )}

      {/* Venue Section */}
      <Box height={1} backgroundColor="$borderLight200" />
      <VStack space="md">
        <Text fontSize="$lg" fontWeight="$bold">
          Venue
        </Text>
        <HStack space="md" alignItems="flex-start">
          <Box
            width={40}
            height={40}
            borderRadius="$lg"
            backgroundColor="$backgroundLight100"
            justifyContent="center"
            alignItems="center"
          >
            <MapPin size={18} color="#374151" />
          </Box>
          <VStack flex={1}>
            <Text fontSize="$sm" fontWeight="$semibold">
              {event.venue}
            </Text>
            <Text fontSize="$xs" color="$text500">
              {event.venueAddress}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );

  return (
    <>
      <Head>
        <title>{event.name} - Tickety</title>
        <meta name="description" content={event.description} />
      </Head>
      <Box backgroundColor="$white">
        {isMobile ? (
          /* Mobile layout */
          <>
            {/* Full-width image at top (no padding) */}
            <Box width="100%" height={260}>
              <Image
                source={{ uri: event.bannerImage }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
                accessibilityLabel={`Banner image for ${event.name}`}
              />
            </Box>

            {/* Content with padding, extra bottom padding for sticky bar */}
            <VStack px="$5" py="$5" space="xl" pb="$20">
              {/* Event info without card background */}
              <EventInfoSection />

              {/* Divider */}
              <Box height={1} backgroundColor="$borderLight200" />

              {/* About the Event */}
              <VStack space="sm">
                <Text fontSize="$lg" fontWeight="$bold">
                  About the Event
                </Text>
                <Text fontSize="$sm" color="$text700" lineHeight={22}>
                  {event.description}
                </Text>
              </VStack>

              {/* Divider */}
              <Box height={1} backgroundColor="$borderLight200" />

              {/* Event Details Grid */}
              <VStack space="md">
                {infoItems.map((item) => (
                  <HStack key={item.label} space="md" alignItems="center">
                    <Box
                      width={40}
                      height={40}
                      borderRadius="$lg"
                      backgroundColor="$backgroundLight100"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <item.icon size={18} color="#374151" />
                    </Box>
                    <VStack flex={1}>
                      <Text fontSize="$xs" color="$text500">
                        {item.label}
                      </Text>
                      <Text
                        fontSize="$sm"
                        fontWeight="$semibold"
                        color="$text900"
                      >
                        {item.value}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>

              {/* Artist Section */}
              {event.artistName && (
                <>
                  <Box height={1} backgroundColor="$borderLight200" />
                  <VStack space="md">
                    <Text fontSize="$lg" fontWeight="$bold">
                      Artist
                    </Text>
                    <HStack space="md" alignItems="center">
                      {event.artistImage && (
                        <Box
                          width={56}
                          height={56}
                          borderRadius="$full"
                          overflow="hidden"
                        >
                          <Image
                            source={{ uri: event.artistImage }}
                            style={{ width: "100%", height: "100%" }}
                            resizeMode="cover"
                            accessibilityLabel={`Photo of ${event.artistName}`}
                          />
                        </Box>
                      )}
                      <VStack>
                        <Text fontSize="$md" fontWeight="$bold">
                          {event.artistName}
                        </Text>
                        {event.artistId && (
                          <Text fontSize="$xs" color="$text500">
                            View artist profile
                          </Text>
                        )}
                      </VStack>
                    </HStack>
                  </VStack>
                </>
              )}

              {/* Venue Section */}
              <Box height={1} backgroundColor="$borderLight200" />
              <VStack space="md">
                <Text fontSize="$lg" fontWeight="$bold">
                  Venue
                </Text>
                <HStack space="md" alignItems="flex-start">
                  <Box
                    width={40}
                    height={40}
                    borderRadius="$lg"
                    backgroundColor="$backgroundLight100"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MapPin size={18} color="#374151" />
                  </Box>
                  <VStack flex={1}>
                    <Text fontSize="$sm" fontWeight="$semibold">
                      {event.venue}
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>

            {/* Sticky bottom bar */}
            <StickyBottomBar />
          </>
        ) : (
          /* Desktop layout */
          <Box
            px="$20"
            py="$10"
            maxWidth={1280}
            width="100%"
            alignSelf="center"
          >
            <HStack gap={40}>
              {/* Left side - 60% */}
              <Box width="60%">
                <LeftContent />
              </Box>

              {/* Right side - 40% */}
              <Box
                width="40%"
                sx={{
                  _web: {
                    position: "sticky" as any,
                    top: 24,
                    alignSelf: "flex-start",
                  },
                }}
              >
                <BookingCard />
              </Box>
            </HStack>
          </Box>
        )}
      </Box>
    </>
  );
}
