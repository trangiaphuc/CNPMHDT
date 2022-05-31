import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import { getTotals, removeFromCart } from "../redux/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    console.log(cart);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };
    return (
        <div>
            <Navbar />
            <Categories />
            <Container>
                <Wrapper>
                    <CartArea>
                        <BranchName>
                            Giỏ hàng mua tại
                            <LocationBranch> Hồ Chí Minh</LocationBranch>
                        </BranchName>
                        <CartContainer>
                            <CartProduct>
                                <CartHeader>
                                    <CartTitle>Sản Phẩm</CartTitle>
                                    <CartPriceTitle>Đơn Giá</CartPriceTitle>
                                    <CartQuantityTitle>
                                        Số Lượng
                                    </CartQuantityTitle>
                                    <CartSumPriceTitle>
                                        Thành Tiền
                                    </CartSumPriceTitle>
                                    <CartActionTitle>Thao Tác</CartActionTitle>
                                </CartHeader>
                                <CartBody>
                                    <CartProductList>
                                        {cart.cartItem.map((item, i) => (
                                            <CartProductItem
                                                key={item.id}
                                                index={
                                                    i % 2 === 0 ? "chan" : "le"
                                                }
                                            >
                                                <CartInfo>
                                                    <CartProductImage>
                                                        <LinkDetail>
                                                            <ProductImage
                                                                img={
                                                                    item.productImage
                                                                }
                                                            ></ProductImage>
                                                        </LinkDetail>
                                                    </CartProductImage>
                                                    <ProductInfo>
                                                        <ProductName>
                                                            {item.productName}
                                                        </ProductName>
                                                        <ProductPrice>
                                                            <Price>
                                                                {item.salePrice.toLocaleString(
                                                                    "de-DE"
                                                                )}
                                                                đ
                                                            </Price>
                                                        </ProductPrice>
                                                        <ProductQuantity>
                                                            <Quantity>
                                                                {
                                                                    item.cartQuantity
                                                                }
                                                            </Quantity>
                                                        </ProductQuantity>
                                                        <ProductRealPrice>
                                                            <RealPrice>
                                                                {(
                                                                    item.salePrice *
                                                                    item.cartQuantity
                                                                ).toLocaleString(
                                                                    "de-DE"
                                                                )}
                                                                đ
                                                            </RealPrice>
                                                        </ProductRealPrice>
                                                    </ProductInfo>
                                                </CartInfo>
                                                <CartAction>
                                                    <CartDelete
                                                        onClick={() =>
                                                            handleRemoveFromCart(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        Xoá
                                                    </CartDelete>
                                                </CartAction>
                                            </CartProductItem>
                                        ))}
                                    </CartProductList>
                                </CartBody>
                            </CartProduct>
                            <CartFooter>
                                <TextFooter>
                                    Tổng tiền hàng:
                                    <TotalPrice>
                                        {cart.cartTotalAmount.toLocaleString(
                                            "de-DE"
                                        )}
                                        đ
                                    </TotalPrice>
                                </TextFooter>
                                <BuyFooter>
                                    <ProductBuy href="/buy">
                                        Tiếp tục
                                    </ProductBuy>
                                </BuyFooter>
                            </CartFooter>
                        </CartContainer>
                    </CartArea>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Cart;
const Container = styled.div`
    width: 1350px;
    margin: auto;
    margin-top: 20px;
`;
const Wrapper = styled.div`
    margin: auto;
    height: 100vh;
`;
const CartArea = styled.div`
    box-sizing: border-box;
`;
const BranchName = styled.p`
    font-size: 20px;
`;
const LocationBranch = styled.span`
    font-weight: 600;
    color: #ff3008;
`;
const CartContainer = styled.div`
    box-sizing: border-box;
    margin-top: 10px;
`;
const CartProduct = styled.div`
    /* border: 1px solid #c4c4c4; */
    box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
`;
const CartHeader = styled.div`
    display: flex;
    padding: 20px;
    font-size: 18px;
    background-color: #e8ebef;
`;
const CartTitle = styled.div`
    box-sizing: border-box;
    width: 524px;
`;
const CartPriceTitle = styled.div`
    width: 262px;
    text-align: center;
`;
const CartQuantityTitle = styled.div`
    width: 131px;
    text-align: center;
`;
const CartSumPriceTitle = styled.div`
    width: 262px;
    text-align: center;
`;
const CartActionTitle = styled.div`
    width: 131px;
    text-align: center;
`;
const CartBody = styled.div``;
const CartProductList = styled.div``;
const CartProductItem = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    align-items: center;
    background-color: ${(props) =>
        props.index === "le" ? "#e8ebef" : "white"};
`;
const CartInfo = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 1179px;
    font-size: 18px;
    align-items: center;
`;
const CartProductImage = styled.div``;
const LinkDetail = styled.a`
    text-decoration: none;
`;
const ProductInfo = styled.div`
    display: flex;
`;
const ProductImage = styled.div`
    width: 100px;
    height: 100px;
    /* background-image: url("https://cdn.mobilecity.vn/mobilecity-vn/images/2022/03/iphone-12-chinh-hang-blue.jpg"); */
    background-image: url(${(props) => props.img});
    object-fit: cover;
    background-position: center;
    background-size: contain;
`;

const ProductName = styled.div`
    box-sizing: border-box;
    width: 424px;
    padding: 10px;
    font-weight: 500;
    font-size: 20px;
`;
const ProductPrice = styled.div`
    box-sizing: border-box;
    width: 262px;
    text-align: center;
`;
const Price = styled.span``;
const ProductQuantity = styled.div`
    box-sizing: border-box;
    display: block;
    width: 131px;
    text-align: center;
`;
const Quantity = styled.span``;
const ProductRealPrice = styled.div`
    box-sizing: border-box;
    text-align: center;
    width: 262px;
`;
const RealPrice = styled.span``;
const CartAction = styled.div`
    text-align: center;
    width: 131px;
    box-sizing: border-box;
`;
const CartDelete = styled.span`
    &:hover {
        color: #ff3008;
        cursor: pointer;
    }
`;
const CartFooter = styled.div`
    margin-top: 15px;
    box-sizing: border-box;
    padding: 40px 0px;
    display: flex;
    width: 1350px;
    background-color: #e8ebef;
`;
const TextFooter = styled.div`
    font-size: 20px;
    text-align: right;
    display: block;
    width: 80%;
`;
const TotalPrice = styled.span`
    outline: none;
    box-sizing: border-box;
    text-align: right;
    margin-left: 20px;
    color: #ff3008;
    font-weight: 600;
`;
const BuyFooter = styled.div`
    width: 20%;
    align-items: center;
    text-align: center;
`;
const ProductBuy = styled.a`
    color: white;
    font-weight: 600;
    text-decoration: none;
    background-color: #ff3008;
    box-sizing: border-box;
    padding: 15px 60px;
    border-radius: 6px;
    background: linear-gradient(180deg, #ff3008 0%, #9c1c0b 100%);
    border-radius: 15px;
`;
