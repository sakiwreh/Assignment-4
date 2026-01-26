import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../queries/ProductQueries";
import { useState } from "react";

function AddProduct(){
    const navigate = useNavigate();

    //mutation hook
    const mutation = useAddProductMutation();

    const [formData, setFormData] = useState({
        title:"",
        price:"",
        category:"",
        description:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        setFormData({...formData,[e.target.name]:[e.target.value]});
    };

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        if(!formData.title || !formData.price){
            alert("Required fields missing!!");
            return;
        }

        mutation.mutate({
            title:formData.title,
            price:Number(formData.price),
            category:formData.category,
            description:formData.description
        },{
            onSuccess: () => {
                alert("Product Created.");
                navigate("/shop/products");
            }
        });
    };

    return(
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h1>Add new product</h1>
                {mutation.isError && (
                    <p>Error: {mutation.error.message}</p>
                )}
            
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Product Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="">
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="home">Home</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows={3}/>
                </div>

                <button type="submit" disabled={mutation.isPending} className="bg-orange-600 text-white py-2 px-4 rounded">{mutation.isPending ? "Creating..." : "Create Product"}</button>

            </form>
        </div>
    );
};

export default AddProduct;