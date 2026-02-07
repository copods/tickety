import Head from 'next/head'
import { NavigationBar } from '@tickety/app/features/navigation-bar/screen'
import { ExploreEventsScreen } from '@tickety/app/features/explore-events'
import { AllEventsScreen } from '@tickety/app/features/all-events'
import { Footer } from '@tickety/app/features/footer'

export default function Page() {
    return (
        <>
            <Head>
                <title>Events - Tickety</title>
                <meta name="description" content="Explore and book tickets for the best events in your city" />
            </Head>
            <NavigationBar />
            <ExploreEventsScreen />
            <AllEventsScreen />
            <Footer />
        </>
    )
}

