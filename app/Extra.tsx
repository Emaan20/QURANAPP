import React from "react";
import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";

// Define TypeScript type for list items
interface DataItem {
  id: string;
  title: string;
}

const DATA: DataItem[] = [
  { id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", title: "First Item" },
  { id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63", title: "Second Item" },
  { id: "58694a0f-3da1-471f-bd96-145571e29d72", title: "Third Item" },
];

// Define TypeScript type for the Item component
const Item: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.item}>
    {/* Upper Container with Two Equal Sections */}
    <View style={styles.upper}>
      <View style={styles.inupper}>
        <Text style={styles.text}>Left</Text>
      </View>
      <View style={styles.inupper}>
        <Text style={styles.text}>Right</Text>
      </View>
    </View>

    {/* Lower Container */}
    <View style={styles.lower}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </View>
);

const Extra: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  upper: {
    flexDirection: "row", // Divide into two sections horizontally
    backgroundColor: "red",
    padding: 10,
  },
  inupper: {
    flex: 1, // Both sections will take equal space
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    margin: 5, // Add spacing between sections
  },
  lower: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Extra;
