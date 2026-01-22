import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "../api/api";

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductQuery = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};