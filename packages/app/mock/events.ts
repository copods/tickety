import type { LucideIcon } from 'lucide-react-native'
import {
    Music,
    Sparkles,
    Laugh,
    Trophy,
    Drama,
    Utensils,
    Tent,
    Users,
    Film,
    Dumbbell,
    Dog,
    Palette,
    Briefcase,
    Building2,
    Mic,
} from 'lucide-react-native'

export interface EventCategory {
    id: string
    label: string
    icon: LucideIcon
    href: string
    image: string
}

export const EVENT_CATEGORIES: EventCategory[] = [
    { id: '1', label: 'MUSIC', icon: Music, href: '/events/music', image: 'https://picsum.photos/seed/evt-music/300/300' },
    { id: '2', label: 'NIGHTLIFE', icon: Sparkles, href: '/events/nightlife', image: 'https://picsum.photos/seed/evt-nightlife/300/300' },
    { id: '3', label: 'COMEDY', icon: Laugh, href: '/events/comedy', image: 'https://picsum.photos/seed/evt-comedy/300/300' },
    { id: '4', label: 'SPORTS', icon: Trophy, href: '/events/sports', image: 'https://picsum.photos/seed/evt-sports/300/300' },
    { id: '5', label: 'PERFORMANCES', icon: Drama, href: '/events/performances', image: 'https://picsum.photos/seed/evt-performances/300/300' },
    { id: '6', label: 'FOOD & DRINKS', icon: Utensils, href: '/events/food-drinks', image: 'https://picsum.photos/seed/evt-food/300/300' },
    { id: '7', label: 'FESTS & FAIRS', icon: Tent, href: '/events/fests-fairs', image: 'https://picsum.photos/seed/evt-fests/300/300' },
    { id: '8', label: 'SOCIAL MIXERS', icon: Users, href: '/events/social-mixers', image: 'https://picsum.photos/seed/evt-social/300/300' },
    { id: '9', label: 'SCREENINGS', icon: Film, href: '/events/screenings', image: 'https://picsum.photos/seed/evt-screenings/300/300' },
    { id: '10', label: 'FITNESS', icon: Dumbbell, href: '/events/fitness', image: 'https://picsum.photos/seed/evt-fitness/300/300' },
    { id: '11', label: 'PETS', icon: Dog, href: '/events/pets', image: 'https://picsum.photos/seed/evt-pets/300/300' },
    { id: '12', label: 'ART EXHIBITIONS', icon: Palette, href: '/events/art-exhibitions', image: 'https://picsum.photos/seed/evt-art/300/300' },
    { id: '13', label: 'CONFERENCES', icon: Briefcase, href: '/events/conferences', image: 'https://picsum.photos/seed/evt-conferences/300/300' },
    { id: '14', label: 'EXPOS', icon: Building2, href: '/events/expos', image: 'https://picsum.photos/seed/evt-expos/300/300' },
    { id: '15', label: 'OPEN MICS', icon: Mic, href: '/events/open-mics', image: 'https://picsum.photos/seed/evt-openmics/300/300' },
]
