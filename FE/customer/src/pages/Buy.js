import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Categories from "../components/Categories";
import Navbar from "../components/Navbar";

const Buy = () => {
    const [getGood, setGetGood] = useState([]);
    const [methodPayment, setMethodPayment] = useState([]);
    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:9000/general/get-delivery-type-list"
                );
                setGetGood(res.data.result);
            } catch (err) {
                console.log(err);
            }
        };
        test();
    }, []);
    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:9000/general/get-payable-type-list"
                );
                setMethodPayment(res.data.result);
            } catch (err) {
                console.log(err);
            }
        };
        test();
    }, []);
    console.log(getGood);
    return (
        <div>
            <Navbar />
            <Categories />
            <Container>
                <Wrapper>
                    <CartArea>
                        <BranchName>
                            Bạn đang xem giỏ hàng mua tại khu vực
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
                        </CartContainer>
                    </CartArea>

                    <InfoCheckOut>
                        <FormCheckOut>
                            <ChooseGetGoods>
                                <GetGoodTitle>Cách thức nhận hàng</GetGoodTitle>
                                {getGood.map((item, i, a) => {
                                    if (i === 0) {
                                        return (
                                            <GetGoodsItem>
                                                <RadioGetGoods
                                                    type="radio"
                                                    name="choose_get_good"
                                                    value={i}
                                                    checked="checked"
                                                ></RadioGetGoods>
                                                <LabelGetGoods>
                                                    {item.deliveryType}
                                                </LabelGetGoods>
                                            </GetGoodsItem>
                                        );
                                    } else {
                                        return (
                                            <GetGoodsItem>
                                                <RadioGetGoods
                                                    type="radio"
                                                    name="choose_get_good"
                                                    value={i}
                                                ></RadioGetGoods>
                                                <LabelGetGoods>
                                                    {item.deliveryType}
                                                </LabelGetGoods>
                                            </GetGoodsItem>
                                        );
                                    }
                                })}
                            </ChooseGetGoods>
                            <MethodPayment>
                                <MethodPaymentTitle>
                                    Phương thức thanh toán
                                </MethodPaymentTitle>
                                {methodPayment.map((item, i, a) => {
                                    if (i === 0) {
                                        return (
                                            <MethodPaymentItem>
                                                <RadioPayment
                                                    type="radio"
                                                    name="choose_payment"
                                                    value={i}
                                                    checked="checked"
                                                ></RadioPayment>
                                                <LabelPayment>
                                                    {item.payableTypeName}
                                                </LabelPayment>
                                            </MethodPaymentItem>
                                        );
                                    } else {
                                        return (
                                            <MethodPaymentItem>
                                                <RadioPayment
                                                    type="radio"
                                                    name="choose_payment"
                                                    value={i}
                                                ></RadioPayment>
                                                <LabelPayment>
                                                    {item.payableTypeName}
                                                </LabelPayment>
                                            </MethodPaymentItem>
                                        );
                                    }
                                })}
                            </MethodPayment>
                            <InfoCheckout>
                                <NoteCheckout>Ghi chú:</NoteCheckout>
                                <TextAreaNote
                                    name="note"
                                    rows="7"
                                    placeholder="Nhập ghi chú..."
                                ></TextAreaNote>

                                <Info>
                                    <TotalPrice>
                                        <TotalTitleProduct>
                                            Tổng tiền sản phẩm
                                        </TotalTitleProduct>
                                        <TotalPriceProduct>
                                            29.990.000
                                        </TotalPriceProduct>
                                    </TotalPrice>
                                    <TotalCheckout>
                                        <TotalTitle>Tổng Thanh toán</TotalTitle>
                                        <TotalPricePay>
                                            29.990.000
                                        </TotalPricePay>
                                    </TotalCheckout>
                                    <Order>Đặt hàng</Order>
                                </Info>
                            </InfoCheckout>
                        </FormCheckOut>
                    </InfoCheckOut>
                </Wrapper>
            </Container>
        </div>
    );
};
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

const InfoCheckOut = styled.div`
    box-sizing: border-box;
    margin-top: 20px;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
`;
const FormCheckOut = styled.form``;
const ChooseGetGoods = styled.div`
    display: flex;
    background-color: #e8ebef;
    padding: 30px 50px;
`;
const GetGoodTitle = styled.p`
    width: 50%;
    font-size: 20px;
    font-weight: 600;
`;
const GetGoodsItem = styled.div`
    box-sizing: border-box;
    width: 25%;
`;
const RadioGetGoods = styled.input`
    margin-right: 10px;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
`;
const LabelGetGoods = styled.label`
    box-sizing: border-box;
    font-size: 20px;
`;
const MethodPayment = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 30px 50px;
`;
const MethodPaymentTitle = styled.p`
    width: 50%;
    font-size: 20px;
    font-weight: 600;
`;
const MethodPaymentItem = styled.div`
    box-sizing: border-box;
    width: 25%;
`;
const RadioPayment = styled.input`
    margin-right: 10px;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
`;
const LabelPayment = styled.label`
    box-sizing: border-box;
    font-size: 20px;
`;
const InfoCheckout = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 30px 50px;
`;
const NoteCheckout = styled.p`
    width: 100%;
    font-weight: 600;
    font-size: 22px;
    box-sizing: border-box;
    padding: 10px 0px;
`;
const TextAreaNote = styled.textarea`
    box-sizing: border-box;
    width: 50%;
    display: block;
    font-size: 20px;
    padding: 5px 20px;
    border: none;
    resize: vertical;
    background-color: #e8ebef;
    &:focus {
        outline: 0;
    }
`;
const Info = styled.div`
    box-sizing: border-box;
    width: 50%;
    display: block;
    padding-left: 20px;
    font-size: 20px;
`;
const TotalPrice = styled.div`
    display: block;
    padding-bottom: 15px;
    border-bottom: 1px solid #d1d6de;
`;
const TotalTitleProduct = styled.span`
    box-sizing: border-box;
`;
const TotalPriceProduct = styled.span`
    float: right;
`;
const TotalCheckout = styled.div`
    padding-top: 15px;
`;
const TotalTitle = styled.span`
    box-sizing: border-box;
`;
const TotalPricePay = styled.span`
    box-sizing: border-box;
    float: right;
`;
const Order = styled.button`
    float: right;
    margin-top: 20px;
    font-size: 22px;
    font-weight: 600;
    height: 70px;
    width: 300px;
    background-color: #e8ebef;
    border: none;
    cursor: pointer;
`;

export default Buy;
