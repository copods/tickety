// index app
import { NavigationBar } from '@tickety/app/features/navigation-bar'
import { ExploreEventsScreen } from '@tickety/app/features/explore-events'
import { AllEventsScreen } from '@tickety/app/features/all-events'
import { Footer } from '@tickety/app/features/footer'
import { ScrollView } from 'react-native-gesture-handler'

export default () => {
  return (
     <ScrollView>
            <NavigationBar />
            <ExploreEventsScreen />
            <AllEventsScreen />
            <Footer />
        </ScrollView>
  )
}
