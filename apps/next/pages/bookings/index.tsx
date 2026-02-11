import { Box } from 'app/components/ui/box'
import { Text } from 'app/components/ui/text'
import { Navbar } from 'app/components/composite/navbar'

export default function BookingsPage() {
    return (
        <>
            <Navbar />
            <Box flex={1} bg="$white" p="$4" alignItems="center" justifyContent="center">
                <Text fontSize="$xl" fontWeight="$bold">Bookings</Text>
                <Text>View all your bookings here.</Text>
            </Box>
        </>
    )
}
