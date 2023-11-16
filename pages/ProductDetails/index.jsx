import { useEffect, useState } from "react";
import axios from "axios";

const useProductDetails = (productId) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`,
        );
        setProductDetails(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error fetching product details:", error);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  return productDetails;
};

export default useProductDetails;
