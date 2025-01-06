import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import { useAppDispatch } from "./useReduxStore";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../redux/slices/productSlice";
import { Product } from "../types/product";

export const useProducts = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    onSuccess: (data: Product[]) => {
      dispatch(fetchProductsSuccess(data));
    },
    onError: (error: any) => {
      dispatch(fetchProductsFailure(error.message));
    },
  });
};
