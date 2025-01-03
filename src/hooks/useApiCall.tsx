export const fetchApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const productsApi = "https://fakestoreapi.com/products";
