import { useState, useEffect, useRef } from "react"
import { useRouter } from "expo-router"
import { ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import {
    EventCarousel,
    ArtistCarousel,
    EventCategories,
    AllEvents,
    EventCarouselSkeleton,
    ArtistCarouselSkeleton,
    EventCategoriesSkeleton,
    Navbar,
    Footer,
} from "@tickety/app/components/composite"
import type {
  CarouselEvent,
  Artist,
  EventCategory,
  AllEventsHandle,
} from "@tickety/app/types"
import {
    fetchEvents,
    fetchArtists,
    fetchCategories,
} from "@tickety/app/services/api"
import { Box } from "@tickety/app/components/ui/box"
import { Text } from "@tickety/app/components/ui"

export default function EventsScreen() {
  const router = useRouter()
  const [events, setEvents] = useState<CarouselEvent[]>([])
  const [artists, setArtists] = useState<Artist[]>([])
  const [categories, setCategories] = useState<EventCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const allEventsRef = useRef<AllEventsHandle | null>(null)

  useEffect(() => {
    Promise.all([fetchEvents(), fetchArtists(), fetchCategories()])
      .then(([eventsData, artistsData, categoriesData]) => {
        setEvents(eventsData)
        setArtists(artistsData)
        setCategories(categoriesData)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Trigger AllEvents to load the next page when the user scrolls
  // near the bottom of the overall events screen.
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent
    const paddingToBottom = 400 // pixels before bottom to start preloading

    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    ) {
      allEventsRef.current?.loadNextPage()
    }
  }

    const genreNames = categories.map((c) => c.name)

    return (
        <Box flex={1} backgroundColor="$black" role="main" accessibilityLabel="Events page">

            {error ? (
                <Box
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    height={600}
                    accessibilityRole="alert"
                >
                    <Text color="$red500" accessibilityRole="alert">{error}</Text>
                </Box>
      ) : loading ? (
        <Box gap="$16" backgroundColor="$black">
          <EventCarouselSkeleton />
          <EventCategoriesSkeleton />
          <ArtistCarouselSkeleton />
        </Box>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          overScrollMode="always"
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <Navbar />
          <Box gap="$16">
            <EventCarousel
              data={events.slice(0, 5)}
              onEventPress={(event) => router.push(`/events/${event.id}`)}
            />
            <EventCategories
              categories={categories}
              onCategoryPress={(category) =>
                router.push(
                  `/events/category/${encodeURIComponent(category.name)}`
                )
              }
            />
            <ArtistCarousel
              artists={artists}
              onArtistPress={(artist) => router.push(`/artists/${artist.id}`)}
            />
            <AllEvents
              ref={allEventsRef}
              genres={genreNames}
              onEventPress={(event) => router.push(`/events/${event.id}`)}
            />
          </Box>
          
        </ScrollView>
      )}
    </Box>
  )
}
