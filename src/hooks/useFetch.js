import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios(url);
        setData(data);
        setLoading(false);
        setError("");
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;
