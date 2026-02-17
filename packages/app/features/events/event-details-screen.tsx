import React, { useState, useEffect } from "react";
import { Box, Text } from "../../components/ui";
import { EventBackground } from "../../components/event/event-background";
import { EventBottomSheet } from "../../components/event/event-bottom-sheet";
import { fetchEventById } from "../../services/api";
import type { EventDetail } from "../../types";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";

interface EventDetailsScreenProps {
    eventId: string;
}

const DARK = {
    bg: "#111827",
    accent: "#fbbf24",
    text: "#ffffff",
};

export const EventDetailsScreen: React.FC<EventDetailsScreenProps> = ({ eventId }) => {
    const [event, setEvent] = useState<EventDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!eventId) return;

        fetchEventById(eventId)
            .then((data) => {
                setEvent(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [eventId]);

    if (loading) {
        return (
            <Box flex={1} bg={DARK.bg} justifyContent="center" alignItems="center">
                <ActivityIndicator size="large" color={DARK.accent} />
            </Box>
        );
    }

    if (error || !event) {
        return (
            <Box flex={1} bg={DARK.bg} justifyContent="center" alignItems="center">
                <Text color="$red500">{error || "Event not found"}</Text>
            </Box>
        );
    }

    // Mock video/image for background
    // If event has a video property use it, else image
    // For demo, we can use a sample video
    const sampleVideo = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
    // Ideally this comes from event.videoUrl or similar
    const mediaUri = sampleVideo;
    const mediaType = "video";

    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <EventBackground
                mediaUri={mediaUri}
                mediaType={mediaType}
                posterUri={event.image}
            />
            <EventBottomSheet event={event} />
        </View>
    );
};
