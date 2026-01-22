import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CustomizationOptions{
    size:string;
}

export interface CartItem{
    id: string;
    productId: number;
    quantity: number;
    customization: CustomizationOptions;
}

interface CartState{
    items: CartItem[];
}

const initialState: CartState={
    items:[],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state, action: PayloadAction<Omit<CartItem, "id">>)=> {
            const {productId, customization, quantity} = action.payload;

            const uniqueId = `${productId}-${customization.size}`;

            const existingItem = state.items.find((item)=> item.id === uniqueId);

            if(existingItem){
                existingItem.quantity += quantity;
            }else{
                state.items.push({id:uniqueId, productId, customization, quantity});
            }
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item)=>item.id !== action.payload);
        },

        updateQuantity: (state, action: PayloadAction<{id:string; quantity: number}>)=>{
            const item = state.items.find((i)=>i.id === action.payload.id);
            if (item && action.payload.quantity > 0){
                item.quantity = action.payload.quantity;
            }
        },       
    },
});

export const {addToCart, removeFromCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;