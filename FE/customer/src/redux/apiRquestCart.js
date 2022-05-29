import axios from "axios";

import { addToCart, getTotals, removeFromCart } from "./cartSlice";

export const addCart = async (product, dispatch, navigate) => {
    try {
        const product = {
            username: "tu",
            password: "123",
        };
        // const res = await axios.post("/login",user);
        // dispatch(loginSuccess(res.data));
        
        dispatch(addToCart(product));
    } catch (error) {
    }
};