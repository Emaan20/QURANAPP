import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define a type for Ayah (verses)
interface Ayah {
  number: number;
  text: string;
  surah: {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    revelationType: string;
  };
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean | null;
}

// Define a type for API response data
interface APIResponse {
  data: {
    ayahs: Ayah[];
  };
}

const useGetArabic = (url: string) => {
  const [data, setData] = useState<Ayah[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<APIResponse>(url);
        const fetchedData: Ayah[] = response.data.data.ayahs;
        console.log("Fetched Data:", fetchedData); // Log API response
        setData(fetchedData);
        await AsyncStorage.setItem("ayah-data", JSON.stringify(fetchedData));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    const loadCachedData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("ayah-data");
        if (storedData) {
          setData(JSON.parse(storedData));
          setLoading(false);
        } else {
          fetchData();
        }
      } catch (error) {
        console.error("Error loading cached data:", error);
        fetchData(); // Fetch from API if AsyncStorage fails
      }
    };

    loadCachedData();
  }, [url]);

  return { data, loading, setLoading };
};

export default useGetArabic;
