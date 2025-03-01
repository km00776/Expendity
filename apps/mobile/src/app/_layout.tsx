// import SANTANDER_LOGO from '../../../assets/santander_logo.png';

import React from 'react';
import { Stack } from 'expo-router/stack';
import { SplashLoadProvider } from '../components/SplashLoadProvider/SplashLoadProvider';
import { StatusBar } from 'expo-status-bar';
// import SignInPage from './(auth)/signin';

export default function RootLayout() {
  return (
    <SplashLoadProvider>
      <Stack>
         <Stack.Screen
          name="(auth)"
          options={{ headerShown: false, headerTransparent: true }}
        />   
       </Stack>
    </SplashLoadProvider>
  );
}
