interface ProductDetailsProps{
    product:{
        id: number;
        title:string;
        price:number;
        category:string;
    };
}

function ProductCard({ product }:ProductDetailsProps){
    return(
        <>
            <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between h-full">
                
                <div>
                    <span className="inline-block bg-gray-100 text=gray-600 text-xsfont-bold px-2 py-1 rounded mb-3">{product.category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-2xl font-bold text-gray-900">Rs. {product.price}</p>
                    <button className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-md" onClick={()=>console.log(`Added ${product.title} to cart`)}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard;