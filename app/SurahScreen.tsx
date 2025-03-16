import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SurahList from "./surahs/SurahList";
import { NavigationContainer } from "@react-navigation/native";
import ParaList from "./surahs/ParaList";
import { View, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const SurahsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>

                <Tab.Navigator
                    screenOptions={{
                        tabBarLabelStyle: styles.tabLabel,
                        tabBarIndicatorStyle: styles.tabIndicator,
                    }}
                >
                    <Tab.Screen name="Surahs" component={SurahList} />
                    <Tab.Screen name="Paras" component={ParaList} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabLabel: {
        fontSize: 16,
        fontWeight: "bold",
    },
    tabIndicator: {
        backgroundColor: "#016064",
    },
});

export default SurahsScreen;
