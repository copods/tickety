import { SimpleFormScreen } from '@tickety/app/features/simple-form/screen'
import { Stack } from 'expo-router'

export default function Screen() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Gluestack Form',
                }}
            />
            <SimpleFormScreen />
        </>
    )
}
