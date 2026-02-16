import { ArtistDetails } from "@tickety/app/features/artists/artist-details";
import { useLocalSearchParams } from "expo-router";

export default function ArtistScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return <ArtistDetails artistId={id ?? ""} />;
}
