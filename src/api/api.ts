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
 
export const fetchProducts = () =>
  axiosClient.get("/products").then((res) => res.data.products);
export const fetchProductById = (id: string) =>
  axiosClient.get(`/products/${id}`).then((res) => res.data);
export const addProduct = (product: any) =>
  axiosClient.post("/products", product).then((res) => res.data);
 
export default axiosClient;