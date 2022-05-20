import React from "react";
import styled from "styled-components";

import Categories from "../components/Categories";
import Navbar from "../components/Navbar";

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
    background-image: url("https://cdn.mobilecity.vn/mobilecity-vn/images/2022/03/iphone-12-chinh-hang-blue.jpg");
    object-fit: cover;
    background-position: center;
    background-size: contain;
`;

const ProductName = styled.div`
    box-sizing: border-box;
    width: 424px;
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
    background: linear-gradient(180deg, #FF3008 0%, #9C1C0B 100%);
    border-radius: 15px;
`;

const Cart = () => {
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
                                        <CartProductItem index="chan">
                                            <CartInfo>
                                                <CartProductImage>
                                                    <LinkDetail>
                                                        <ProductImage></ProductImage>
                                                    </LinkDetail>
                                                </CartProductImage>
                                                <ProductInfo>
                                                    <ProductName>
                                                        Iphone 13 promax
                                                    </ProductName>
                                                    <ProductPrice>
                                                        <Price>
                                                            29.990.000đ
                                                        </Price>
                                                    </ProductPrice>
                                                    <ProductQuantity>
                                                        <Quantity>1</Quantity>
                                                    </ProductQuantity>
                                                    <ProductRealPrice>
                                                        <RealPrice>
                                                            29.990.000đ
                                                        </RealPrice>
                                                    </ProductRealPrice>
                                                </ProductInfo>
                                            </CartInfo>
                                            <CartAction>
                                                <CartDelete>Xoá</CartDelete>
                                            </CartAction>
                                        </CartProductItem>

                                        <CartProductItem index="le">
                                            <CartInfo>
                                                <CartProductImage>
                                                    <LinkDetail>
                                                        <ProductImage></ProductImage>
                                                    </LinkDetail>
                                                </CartProductImage>
                                                <ProductInfo>
                                                    <ProductName>
                                                        Iphone 13 promax
                                                    </ProductName>
                                                    <ProductPrice>
                                                        <Price>
                                                            29.990.000đ
                                                        </Price>
                                                    </ProductPrice>
                                                    <ProductQuantity>
                                                        <Quantity>1</Quantity>
                                                    </ProductQuantity>
                                                    <ProductRealPrice>
                                                        <RealPrice>
                                                            29.990.000đ
                                                        </RealPrice>
                                                    </ProductRealPrice>
                                                </ProductInfo>
                                            </CartInfo>
                                            <CartAction>
                                                <CartDelete>Xoá</CartDelete>
                                            </CartAction>
                                        </CartProductItem>
                                    </CartProductList>
                                </CartBody>
                            </CartProduct>
                            <CartFooter>
                                <TextFooter>
                                    Tổng tiền hàng:
                                    <TotalPrice> 29.990.000</TotalPrice>
                                </TextFooter>
                                <BuyFooter>
                                    <ProductBuy href="/buy">Tiếp tục</ProductBuy>
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
