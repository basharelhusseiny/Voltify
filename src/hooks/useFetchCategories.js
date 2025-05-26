import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(response.data);
        // console.log("Response data:", response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);
  return { categories, loading, error };
};

export default useFetchCategories;
