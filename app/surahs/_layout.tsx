// app/surahs/_layout.tsx
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Slot } from "expo-router";

const Tab = createMaterialTopTabNavigator();

export default function SurahsLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="index" options={{ title: "Surahs" }}>
        {() => <Slot />}
      </Tab.Screen>
      <Tab.Screen name="para" options={{ title: "Paras" }}>
        {() => <Slot />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
