import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useGETAPI = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data.data);
      AsyncStorage.setItem("surah-data", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("surah-data").then((value) => {
      if (value) {
        setData(JSON.parse(value));
        setLoading(false);
      } else {
        fetchData();
      }
    });
  }, [url]);

  return { data, loading, fetchData }; // ✅ Return fetchData
};

export default useGETAPI;
