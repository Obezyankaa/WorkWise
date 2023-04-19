import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoader] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });
  // функция подключающая шрифты
  const onLayuotRootViev = useCallback(async () => {
    if (fontsLoader) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoader]);

  if(!fontsLoader) return null
  return <Stack onLayuot={onLayuotRootViev} />;
}
