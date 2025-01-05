import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="(auth)" options={{headerShown:false}}/>
    <Stack.Screen name="+not-found.tsx" options={{headerShown:false}}/>
  </Stack>
  );
};
