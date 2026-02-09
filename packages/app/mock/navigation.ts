import {
    Clapperboard,
    Music,
    ShoppingBag,
    FerrisWheel,
    Activity,
    Utensils,
    Heart
} from 'lucide-react-native'

export const NAV_ITEMS = [
    { label: 'For you', href: '/for-you', icon: Heart },
    { label: 'Dining', href: '/dining', icon: Utensils },
    { label: 'Movies', href: '/movies', icon: Clapperboard },
    { label: 'Events', href: '/events', icon: Music, isActive: true },
    { label: 'Stores', href: '/stores', icon: ShoppingBag },
    { label: 'Activities', href: '/activities', icon: FerrisWheel },
    { label: 'Play', href: '/play', icon: Activity },
]

export const LOCATION_DATA = {
    city: 'Gurugram',
    state: 'Haryana',
}
