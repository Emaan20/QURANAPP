import React, { useState, useEffect } from "react";
import { 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  ActivityIndicator, 
  RefreshControl 
} from "react-native";
import useGETAPI from "../CustomHooks/useGetAPI";

// Define the expected Surah structure
interface Surah {
  number: number;
  englishName: string;
}

const SurahList: React.FC = () => {
  const { data, loading, fetchData } = useGETAPI("https://api.alquran.cloud/v1/surah");
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [surahs, setSurahs] = useState<Surah[]>([]);

  // Load initial data
  useEffect(() => {
    if (data.length > 0) {
      setSurahs(data.slice(0, 10)); // Start with first 10 surahs
    }
  }, [data]);

  // Pull-to-Refresh Function
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();  // Re-fetch data
    setRefreshing(false);
  };

  // Infinite Scroll Function
  const loadMoreData = () => {
    if (surahs.length >= 114) return; // Stop when all Surahs are loaded
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      const newSurahs = data.slice(0, nextPage * 10); // Load in batches of 10
      setSurahs(newSurahs);
      return nextPage;
    });
  };

  return (
    <View style={styles.container}>
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        <FlatList
          data={surahs.length > 0 ? surahs : data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.number}</Text>
              <Text style={styles.text2}>{item.englishName}</Text>
            </View>
          )}
          keyExtractor={(item) => item.number.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["green"]} />
          }
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5} // Load more when 50% of the list is visible
          ListFooterComponent={() => (surahs.length >= 114 ? null : <ActivityIndicator size="small" color="green" />)}
        />
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

export default SurahList;
