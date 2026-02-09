import { EventCarousel, CarouselEvent } from '@tickety/app/components/composite'
import { Box } from '@tickety/app/components/ui/box'
import Head from 'next/head'

const mockData: CarouselEvent[] = [
    {
        id: '1',
        name: 'Heritage India Tour | Dr. Satinder Sartaaj Live In Delhi',
        date: 'Sat, 14 Feb',
        time: '6:00 PM',
        venue: 'Jawaharlal Nehru Stadium, Delhi/NCR',
        price: '₹1000 onwards',
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1000',
        bannerImage: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '2',
        name: 'Sunburn Arena ft. Alan Walker - Delhi',
        date: 'Sun, 22 Feb',
        time: '4:00 PM',
        venue: 'Backyard Sports Club, Gurgaon',
        price: '₹2500 onwards',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000',
        bannerImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '3',
        name: 'Comic Con India 2026 - Delhi Edition',
        date: 'Fri, 06 Mar',
        time: '11:00 AM',
        venue: 'NSIC Grounds, Okhla',
        price: '₹899 onwards',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000',
        bannerImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000',
    }
]

export default function CarouselDemo() {
    return (
        <>
            <Head>
                <title>Event Carousel Demo</title>
            </Head>
            <Box backgroundColor="$white">
                <EventCarousel data={mockData} />
            </Box>
        </>
    )
}
