import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductUrls } from "../Constatnt/config";
import { getProducts } from "../Api/index";
function useFetch(props) {
  const [allProductData, setAllProductData] = useState({});
  useEffect(() => {
    AllProduct();
  }, []);
  const AllProduct = () => {
    axios.all(ProductUrls.map((url) => getProducts(url))).then(
      axios.spread(
        (
          { data: Product },
          { data: Categories },
          { data: catThree },
          { data: categoryTwo }
        ) => {
          setAllProductData({
            ...allProductData,
            Product,
            Categories,
            catThree,
            categoryTwo,
          });
          // console.log({ Product, Categories, catThree,categoryTwo });
        }
      )
    );
  };

  return allProductData;
}

export default useFetch;
