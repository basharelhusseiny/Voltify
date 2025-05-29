import axios from "axios";
import { useEffect, useState } from "react";
import useFetchAllProducts from "./useFetchAllProducts";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { products } = useFetchAllProducts();

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

  const allCategory = categories.map((category) => {
    const count = products?.filter(
      (product) => product.category === category.slug
    ).length;
    const img = products?.find(
      (product) => product.category === category.slug
    )?.thumbnail;
    return { ...category, count, img };
  });

  return { allCategory, loading, error };
};

export default useFetchCategories;
