import axios from "axios";

import { addToCart, getTotals, removeFromCart } from "./cartSlice";

export const addCart = async (user, product, dispatch) => {
    try {
        const productItem = {
            userId: user.id,
            productId: product.id,
            quantity: 1,
        };
        const res = await axios.post(
            "http://localhost:9000/user/add-to-cart",
            {
                userId: user.id,
                productId: product.id,
                quantity: 1,
            },
            {
                headers: {
                    "x-access-token": user.accessToken,
                },
            }
        );
        // dispatch(loginSuccess(res.data));
        dispatch(addToCart(product));
    } catch (error) {
        console.log(error);
    }
};
export const removeItemFromCart = (product, dispatch) => {
    try {
    } catch (error) {
        console.log(error);
    }
};
export const addNewSaleOrder = async (user, saleOrder) => {
    try {
        const res = await axios.post(
            "http://localhost:9000/general/add-new-saleorder",
            {
                userId: saleOrder.userId,
                provinceId: saleOrder.provinceId,
                districtId: saleOrder.districtId,
                wardId: saleOrder.wardId,
                deliveryAddress: saleOrder.deliveryAddress,
                payableTypeId: saleOrder.payableTypeId,
                deliveryTypeId: saleOrder.deliveryTypeId,
                note: saleOrder.note,
                debt: saleOrder.debt,
                shippingCost: saleOrder.shippingCost,
                totalMoney: saleOrder.totalMoney,
                outputStoreId: saleOrder.outputStoreId,
                saleOrderDetailList: saleOrder.saleOrderDetailList,
            },
            {
                headers: {
                    "x-access-token": user.accessToken,
                },
            }
        );
    } catch (error) {
        alert(error);
        console.log(error);
    }
};
export const searchProduct = async (textSearch,user, dispatch, navigate) => {
    try {
        const res = await axios.post(
            "http://localhost:9000/user/add-to-cart",
            {
                keyword:textSearch
            },
            {
                headers: {
                    "x-access-token": user.accessToken,
                },
            }
        );
    } catch (error) {
        console.log(error);
    }
};
