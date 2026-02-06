import { SimpleCardsScreen } from '@tickety/app/features/simple-cards/screen'
import { Stack } from 'expo-router'

export default function Screen() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Gluestack Cards',
                }}
            />
            <SimpleCardsScreen />
        </>
    )
}
