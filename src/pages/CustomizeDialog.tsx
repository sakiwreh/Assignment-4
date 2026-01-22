import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useOutlet, useOutletContext } from "react-router-dom";
import { addToCart } from "../store/cartSlice";

interface ProductContext{
    id:number;
    title: string;
    price:number;
}

const CustomizeDialog = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = useOutletContext<ProductContext>();

    const [size, setSize] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();

        if(!size){
            setError("Please select a size");
            return;
        }

        dispatch(
            addToCart({
                productId: product.id,
                quantity: 1,
                customization: {size},
            })
        );

        navigate("/shop/cart");
    };

    const handleClose = () => {
        navigate("..");
    };

    return(
        <div>
            <div>
                <h2>
                    {product.title}
                </h2>

                {error && <p>{error}</p>}

                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label>Select Size
                        <select value={size} onChange={(e) => setSize(e.target.value)}>
                            <option value="">Choose</option>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                        </select>
                    </label>

                    <div>
                        <button type="submit">
                            Add to cart
                        </button>
                        <button type="button" onClick={handleClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomizeDialog;