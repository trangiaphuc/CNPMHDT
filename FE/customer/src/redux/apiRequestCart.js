import axios from "axios";

import { addToCart, getTotals, removeFromCart } from "./cartSlice";

export const addCart = async (user, product, dispatch) => {
    try {
        const productItem = {
            userId: user.id,
            productId: product.id,
            quantity: 1,
        };
        const res = await axios.post("http://localhost:9000/user/add-to-cart", {
            userId: user.id,
            productId: product.id,
            quantity: 1,
        });
        // dispatch(loginSuccess(res.data));
        dispatch(addToCart(product));
    } catch (error) {
        console.log(error)
    }
};
export const removeItemFromCart =(product,dispatch) =>{
    try {
        
    } catch (error) {
        console.log(error)
    }
}


