import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem:[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.cartItem.push(action.payload);
        }

    }
})
