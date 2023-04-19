import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"

export default function Home() {
  const router = useRouter()

   const handlePress = () => {
     console.log(123);
   };
  return (
    // оборачивает приложение в SafeAreaView
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={handlePress}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      {/* можно будет скролить и не показывать индикатор прокрутки */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* показывает вот это  */}
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          {/* наши компоненты  */}
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
