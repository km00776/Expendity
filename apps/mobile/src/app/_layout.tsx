// import SANTANDER_LOGO from '../../../assets/santander_logo.png';

import React from 'react';
import { Stack } from 'expo-router/stack';
import { SplashLoadProvider } from '../components/SplashLoadProvider/SplashLoadProvider';
import { StatusBar } from 'expo-status-bar';
// import SignInPage from './(auth)/signin';
import { store } from '../store/store';
import { Provider as ReduxProvider } from 'react-redux';

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <SplashLoadProvider>
        <Stack>
          <Stack.Screen
            name="(auth)"
            options={{ headerShown: false, headerTransparent: true }}
          />
        </Stack>
      </SplashLoadProvider>
    </ReduxProvider>
  );
}
