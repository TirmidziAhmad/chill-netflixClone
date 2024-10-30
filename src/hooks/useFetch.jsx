import { useState, useEffect } from "react";
import api from "../api/axios.config";
export const useFetch = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
export default useFetch;
