import React, { useEffect } from "react";
import { ProductList } from "../components/ProductList";

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <ProductList />
    </div>
  );
};

export default Home;
