import { useLocalSearchParams } from "expo-router";
import { EventDetailsScreen } from "@tickety/app/features/events/event-details-screen";

export default function EventPage() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return <EventDetailsScreen eventId={id ?? ""} />;
}
