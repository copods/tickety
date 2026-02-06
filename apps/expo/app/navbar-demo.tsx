import { NavbarDemoScreen } from '@tickety/app/features/navbar-demo/screen'
import { Stack } from 'expo-router'

export default function Screen() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <NavbarDemoScreen />
        </>
    )
}
