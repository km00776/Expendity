import { ReactNode, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export const SplashLoadProvider = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded, fontsError] = useFonts({
    'Poppins-Regular': require('apps/mobile/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('apps/mobile/assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      setIsReady(true);
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!isReady) {
    return null;
  }

  return children;
};
