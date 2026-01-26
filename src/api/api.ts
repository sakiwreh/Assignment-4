import axios from "axios";
 
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);
 
export const fetchProducts = async () =>
  await axiosClient.get("/products").then((res) => res.data.products);
export const fetchProductById = async (id: string) =>
  await axiosClient.get(`/products/${id}`).then((res) => res.data);
export const addProduct = async (product: any) =>
  await axiosClient.post("/products/add", product).then((res) => res.data);
 
export default axiosClient;