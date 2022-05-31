import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    searchText: "",
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            // state.cartItem.push(action.payload);
            // state.cartItem = [];
            const itemIndex = state.cartItem.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItem[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItem.push(tempProduct);
            }
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItem.filter(
                (cartItem) => cartItem.id !== action.payload.id
            );
            state.cartItem = nextCartItems;
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItem.reduce(
                (cartTotal, cartItem) => {
                    const { salePrice, cartQuantity } = cartItem;
                    const itemTotal = salePrice * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        searchProduct(state, action) {
            state.searchText = action.payload;
        },
        emptyCart(state) {
            state.cartItem = [];
            state.cartTotalQuantity = 0;
            state.artTotalAmount = 0;
        },
    },
});
export const { addToCart, removeFromCart, getTotals, searchProduct ,emptyCart} =
    cartSlice.actions;
export default cartSlice.reducer;
