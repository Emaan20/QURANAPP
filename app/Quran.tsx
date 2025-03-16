import React from "react";
import { View, StyleSheet, TouchableOpacity, StatusBar, Text, Image } from "react-native";
import { useRouter } from "expo-router";

const img = require("./search.png");
const settings = require("./settings.png");
const bookmark = require("./agenda.png");
const quran = require("./quran.png");
const photo = require("./quran1.png");

const Quran: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBar}>
        <StatusBar hidden={true} />
        <Text style={styles.topBarText}>Quran</Text>
        <Image source={photo} style={styles.mainImage} />
      </View>

      <View style={styles.main}>
        <Text style={styles.heading}>Features</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttons} onPress={() => router.push("/Recitation")}>
            <Image source={quran} style={styles.image} />
            <Text style={styles.text}>Read Quran</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => router.push("/surahs/SurahList")}>
            <Image source={img} style={styles.image} />
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
            <Image source={bookmark} style={styles.image} />
            <Text style={styles.text}>BookMark</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
            <Image source={settings} style={styles.image} />
            <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topBar: {
    flex: 0.35,
    backgroundColor: "#016064",
    alignItems: "center",
    gap: 25,
  },
  topBarText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  main: {
    position: "relative",
    bottom: 40,
    flex: 0.65,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    backgroundColor: "white",
  },
  heading: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 25,
  },
  buttons: {
    borderWidth: 2,
    borderColor: "lightgrey",
    width: "35%",
    height: 150,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  image: {
    width: 60,
    height: 60,
  },
  mainImage: {
    width: 90,
    height: 90,
  },
});

export default Quran;
