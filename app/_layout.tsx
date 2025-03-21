import Navbar from "@/components/Navbar";
import { Stack, Link } from "expo-router";
import { StatusBar, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="trip/trips" options={{ headerShown: false }} />
        <Stack.Screen name="trip/request" options={{ headerShown: false }} />
      </Stack>

      <Navbar />
    </>
  )
}
