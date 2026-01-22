import { useParams } from "react-router-dom";
export default function ProductDetail() {
  const { productId } = useParams();
  return <h2>Product Details for ID: {productId}</h2>;
}