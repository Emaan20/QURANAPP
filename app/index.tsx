import { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simulate a loading time of 2 seconds before navigating
    const timer = setTimeout(() => {
      router.replace("/Quran");
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Quran App</Text>
      <ActivityIndicator size="large" color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

