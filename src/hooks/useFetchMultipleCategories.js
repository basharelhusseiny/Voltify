import axios from "axios";
import { useEffect, useState } from "react";

const useFetchMultipleCategories = (categories) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const response = await axios.get(
              `https://dummyjson.com/products/category/${category}`
            );
            return response.data.products;
          })
        );
        const allProducts = results.flat();
        const shuffledProducts = shuffleArray(allProducts);
        setProducts(shuffledProducts);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading };
};

export default useFetchMultipleCategories;
