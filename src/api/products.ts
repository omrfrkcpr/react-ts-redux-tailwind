import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 8000,
});

export const fetchProducts = async () => {
  const { data } = await api.get("/products", {
    params: {
      select:
        "id,title,description,price,discountPercentage,category,rating,brand,stock,tags,thumbnail,images",
    },
  });
  return data.products; // DummyJSON returns data in { products: [...] } format
};
