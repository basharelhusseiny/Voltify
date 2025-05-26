import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=0"
        );
        setProducts(response.data.products);
        // console.log("Response data:", response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getAllProducts();
  }, []);
  return { products, loading, error };
};

export default useFetchAllProducts;
