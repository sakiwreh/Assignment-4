import { NavLink, Outlet, useParams } from "react-router-dom";
import { useProductQuery } from "../queries/ProductQueries";
 
const ProductDetails = () => {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useProductQuery(productId!);
 
  if (isLoading) return <p>Data Loading</p>;
  if (error) return <p>Error getching product</p>;
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <img
        src={product.thumbnail}
        className="w-50 h-40"
        alt={product.title}
      />{" "}
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <p className="text-2xl font-bold mt-4">
          Rs: {product.price}
        </p>{" "}
        <NavLink
          to="customize"
          className="mt-6 inline-block text-gray-400 px-6 py-2 rounded"
        >
          Select Size & Add to cart
        </NavLink>
      </div>
      <Outlet context={product}/>
    </div>
  );
};
 
export default ProductDetails;