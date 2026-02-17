import { CategoryEvents } from "@tickety/app/features/events/category-events";
import { useLocalSearchParams } from "expo-router";

export default function CategoryEventsScreen() {
    const { category } = useLocalSearchParams<{ category: string }>();

    return <CategoryEvents category={category || "All"} />;
}
