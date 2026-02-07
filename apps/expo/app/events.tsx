import { ScrollView } from 'react-native'
import { ExploreEventsScreen } from '@tickety/app/features/explore-events'
import { AllEventsScreen } from '@tickety/app/features/all-events'
import { Footer } from '@tickety/app/features/footer'

export default function EventsPage() {
    return (
        <ScrollView>
            <ExploreEventsScreen />
            <AllEventsScreen />
            <Footer />
        </ScrollView>
    )
}
