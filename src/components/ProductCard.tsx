import { useMemo } from "react";
import { Product } from "../types/product";
import LazyImage from "./ui/LazyImage";

const ProductCard = ({ product }: { product: Product }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    category,
    stock,
    rating,
    // images,
    thumbnail,
  } = product;

  const discountedPrice = useMemo(
    () => (price + price * (discountPercentage / 100)).toFixed(2),
    [price, discountPercentage]
  );

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <LazyImage
        src={thumbnail}
        alt={title}
        className="w-full h-64 object-cover"
        placeholder="https://via.placeholder.com/300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <span className="text-sm text-gray-500 line-through">
            ${discountedPrice}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-sm text-gray-500">{category}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">Stock: {stock}</span>
          <span className="text-sm text-yellow-500">Rating: {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
