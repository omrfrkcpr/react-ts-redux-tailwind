import { useProducts } from "../hooks/useProductCall";
import { Product } from "../types/product";
import { Loader } from "./Loader";
import ProductCard from "./ProductCard";

export const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <Loader />;
  // if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ul>
  );
};
