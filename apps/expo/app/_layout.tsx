import { Stack } from 'expo-router'
import { Provider } from '@tickety/app/provider'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import {
  useFonts,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
} from '@expo-google-fonts/plus-jakarta-sans'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    'Plus Jakarta Sans': PlusJakartaSans_400Regular, // Fallback for Gluestack config
  })

  useEffect(() => {
    console.log('Fonts loaded:', fontsLoaded, 'Font error:', fontError)
    if (fontsLoaded || fontError) {
      console.log('Hiding splash screen')
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
          <Stack.Screen name="events" />
          <Stack.Screen name="artists" />
        </Stack>
      </Provider>
    </GestureHandlerRootView>
  )
}
