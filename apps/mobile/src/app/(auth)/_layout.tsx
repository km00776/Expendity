
// (auth)/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router/stack';

export default function AuthRootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signin" />
    </Stack>
  );
}
