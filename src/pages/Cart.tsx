
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useProductQuery, useProductsQuery } from "../queries/ProductQueries";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState)=>state.cart.items);
    const {data:products, isLoading} = useProductsQuery();

    if(isLoading) return <p>Loading cart details..</p>
    if(!products) return <p>Error loading details..</p>

    let totalQuantity = 0;
    let totalPrice = 0;

    const getProductDetails = (id: number) => products.find((p:any)=>p.id === id);

    return(
        <div>
            <h1>
                My Cart
            </h1>

            {cartItems.length === 0 ? (
                <div>
                    <p>
                        <Link to="/shop/products">Browse Products</Link>
                    </p>
                </div>
            ):(
                <div>
                    {cartItems.map((item) => {
                        const product = getProductDetails(item.productId);
                        if(!product) return null;

                        const itemTotal = product.price * item.quantity;
                        totalQuantity += item.quantity;
                        totalPrice += itemTotal;

                        return(
                            <div key={item.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <h3>{product.title}</h3>
                                    <div>
                                        <span>Size: {item.customization.size}</span>
                                    </div>
                                    <p>Rs. {product.price}</p>
                                </div>

                                <div>
                                    <button onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity -1}))} disabled={item.quantity<=1}>-</button>
                                    <span> {item.quantity}</span>
                                    <button onClick={()=>dispatch(updateQuantity({id:item.id,quantity:item.quantity + 1}))}>+</button>
                                </div>

                                <button onClick={()=>dispatch(removeFromCart(item.id))}>
                                    Remove
                                </button>
                            </div>
                        );
                    })}

                    <div>
                        <p>Total items: {totalQuantity}</p>
                        <p>Total Price: {totalPrice}</p>
                        <button>Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;