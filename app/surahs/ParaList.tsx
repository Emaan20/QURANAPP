import React from "react";
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from "react-native";
import useGETAPI from "../CustomHooks/useGetAPI";

// Define the type for a Surah object
interface Surah {
  number: number;
  englishName: string;
}

const ParaList: React.FC = () => {
  const { data, loading } = useGETAPI("https://api.alquran.cloud/v1/surah");

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        Array.isArray(data) && (
          <FlatList
            data={data}
            renderItem={({ item }: { item: Surah }) => (
              <View style={styles.item}>
                <Text style={styles.text}>{item.number}</Text>
                <Text style={styles.text2}>{item.englishName}</Text>
              </View>
            )}
            keyExtractor={(item) => item.number.toString()}
          />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#52B2BF",
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    marginRight: 20,
    fontWeight: "bold",
  },
  text2: {
    flex: 1,
    fontSize: 18,
  },
});

export default ParaList;
