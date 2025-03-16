import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="/Quran" />
      <Stack.Screen name="/ParaList" />
      <Stack.Screen name="/SurahList" />
      <Stack.Screen name="/Recitation" />
    </Stack>
  );
}
