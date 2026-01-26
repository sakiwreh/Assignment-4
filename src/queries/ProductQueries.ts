import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProduct, fetchProductById, fetchProducts, type NewProductData } from "../api/api";

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductQuery = (id:any) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};

export const useAddProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:(newProduct: NewProductData) => addProduct(newProduct),

    onSuccess: () => {
      console.log("Product addition completed.");
      queryClient.invalidateQueries({queryKey:["products"]});
    },
  });
};