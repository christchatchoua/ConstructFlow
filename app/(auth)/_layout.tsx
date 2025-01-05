 import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{title:"Login",headerShown:false}}  />
    <Stack.Screen name="signup" options={{title:"signup" , headerShown:false}}  />
  </Stack>
  );
};
