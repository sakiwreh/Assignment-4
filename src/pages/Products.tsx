import { NavLink } from "react-router-dom";
import  {useProductsQuery}  from "../queries/ProductQueries";


export default function Products() {
    const {data, isLoading, isError, error} = useProductsQuery();

    if(isLoading) return <p>Data is loading!!</p>
    if(isError) return <p>Error: {error.message}</p>

  return <>
    <h1 className="text-xl font-bold text-orange-500">Welcome to Shopping</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-6">
        {data.map((product:any) => (
            <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between h-full">
                <span className="inline-block bg-gray-100 text=gray-600 text-xsfont-bold px-2 py-1 rounded mb-3">{product.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-2xl font-bold text-gray-900">Rs. {product.price}</p>
                <NavLink to={`/shop/product/${product.id}`} className="text-xs">View details</NavLink>
            </div>
        ))}
      </div>
  </>;
}