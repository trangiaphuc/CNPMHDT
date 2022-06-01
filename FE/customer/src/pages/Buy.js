import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import { addNewSaleOrder } from "../redux/apiRequestCart";
import { emptyCart } from "../redux/cartSlice";

const Buy = () => {
    const [getGood, setGetGood] = useState([]);
    const [methodPayment, setMethodPayment] = useState([]);
    const [payMent, setPayment] = useState(1);
    const [delivery, setDelivery] = useState(1);

    const [provinceList, setProvinceList] = useState([]);
    const [province, setProvince] = useState(89);

    const [districtList, setDistrictList] = useState([]);
    const [district, setDistrict] = useState(883);

    const [wardList, setWardList] = useState([]);
    const [ward, setWard] = useState(1);

    const [note, setNote] = useState("");
    const [address, setAddress] = useState("");

    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.auth.login.currentUser);
    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:9000/general/get-province-list"
                );
                setProvinceList(res.data.result);
            } catch (err) {
                console.log(err);
            }
        };
        test();
    }, []);

    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:9000/general/get-district-list-by-province",
                    {
                        provinceCode: province,
                    }
                );
                setDistrictList(res.data.result);
            } catch (err) {
                console.log(err);
            }
        };
        test();
    }, [province]);

    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:9000/general/get-ward-list-by-district",
                    {
                        districtCode: district,
                    }
                );
                setWardList(res.data.result);
            } catch (err) {
                console.log(err);
            }
        };
        test();
    }, [district]);
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

    const handleChangeProvince = (e) => {
        setProvince(e.target.value);
    };
    const handleChangeDistrict = (e) => {
        setDistrict(e.target.value);
    };
    const handleChangeWard = (e) => {
        setWard(e.target.value);
    };
    console.log(provinceList);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBuy = () => {
        let provinceID = -1;
        let districtID = -1;
        let wardID = -1;

        provinceList.map((item) => {
            if (item.provinceCode == province) {
                provinceID = item.id;
            }
        });
        districtList.map((item) => {
            if (item.districtCode == district) {
                districtID = item.id;
            }
        });
        wardList.map((item) => {
            if (item.wardCode == ward) {
                wardID = item.id;
            }
        });
        let shipCost = 0;
        if (delivery === 1) {
            shipCost = 15000;
        }
        const totalMoneyCart = cart.cartTotalAmount + shipCost;
        console.log(provinceID);
        let ListOrder = [];
        cart.cartItem.map((item) => {
            const tmp = {
                productId: item.id,
                salePrice: item.salePrice,
                VAT: 0,
                salePriceInvoiceVAT: item.salePrice,
                quantity: item.cartQuantity,
                cartDetailId: 1,
            };
            ListOrder.push(tmp);
        });
        const saleOrder = {
            userId: user.id,
            provinceId: provinceID,
            districtId: districtID,
            wardId: wardID,
            deliveryAddress: address,
            payableTypeId: payMent,
            deliveryTypeId: delivery,
            note: note,
            debt: cart.cartTotalAmount,
            shippingCost: shipCost,
            totalMoney: totalMoneyCart,
            outputStoreId: null,
            saleOrderDetailList: ListOrder,
        };
        // let saleOrder = {};
        // if (delivery === 1) {
        //     saleOrder = {
        //         userId: user.id,
        //         provinceId: provinceID,
        //         districtId: districtID,
        //         wardId: wardID,
        //         deliveryAddress: address,
        //         payableTypeId: payMent,
        //         deliveryTypeId: delivery,
        //         note: note,
        //         debt: cart.cartTotalAmount,
        //         shippingCost: shipCost,
        //         totalMoney: totalMoneyCart,
        //         outputStoreId: null,
        //         saleOrderDetailList: ListOrder,
        //     };
        // } else {
        //     saleOrder = {
        //         userId: user.id,
        //         provinceId: null,
        //         districtId: null,
        //         wardId: null,
        //         deliveryAddress: null,
        //         payableTypeId: payMent,
        //         deliveryTypeId: delivery,
        //         note: note,
        //         debt: cart.cartTotalAmount,
        //         shippingCost: 0,
        //         totalMoney: cart.cartTotalAmount,
        //         outputStoreId: null,
        //         saleOrderDetailList: ListOrder,
        //     };
        // }
        addNewSaleOrder(user, saleOrder);
        dispatch(emptyCart());
        navigate("/");
        console.log(saleOrder);
    };
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
                                                                {item.salePrice.toLocaleString(
                                                                    "de-DE"
                                                                )}
                                                                đ
                                                            </RealPrice>
                                                        </ProductRealPrice>
                                                    </ProductInfo>
                                                </CartInfo>
                                                <CartAction>
                                                    <CartDelete></CartDelete>
                                                </CartAction>
                                            </CartProductItem>
                                        ))}
                                    </CartProductList>
                                </CartBody>
                            </CartProduct>
                        </CartContainer>
                    </CartArea>

                    <InfoCheckOut>
                        <FormCheckOut onSubmit={handleBuy}>
                            <ChooseGetGoods>
                                <GetGoodTitle>Cách thức nhận hàng</GetGoodTitle>
                                {getGood.map((item, i, a) => {
                                    return (
                                        <GetGoodsItem key={item.id}>
                                            <RadioGetGoods
                                                type="radio"
                                                name="choose_get_good"
                                                value={i}
                                                onChange={() =>
                                                    setDelivery(item.id)
                                                }
                                                checked={delivery === item.id}
                                            ></RadioGetGoods>
                                            <LabelGetGoods>
                                                {item.deliveryType}
                                            </LabelGetGoods>
                                        </GetGoodsItem>
                                    );
                                })}
                            </ChooseGetGoods>
                            <MethodPayment>
                                <MethodPaymentTitle>
                                    Phương thức thanh toán
                                </MethodPaymentTitle>
                                {methodPayment.map((item, i, a) => {
                                    return (
                                        <MethodPaymentItem key={item.id}>
                                            <RadioPayment
                                                type="radio"
                                                name="choose_payment"
                                                value={i}
                                                onChange={() =>
                                                    setPayment(item.id)
                                                }
                                                checked={payMent === item.id}
                                            ></RadioPayment>
                                            <LabelPayment>
                                                {item.payableTypeName}
                                            </LabelPayment>
                                        </MethodPaymentItem>
                                    );
                                })}
                            </MethodPayment>
                            {delivery === 1 ? (
                                <InformationReceivedContainer>
                                    <InformationTitle>
                                        Thông tin nhận hàng
                                    </InformationTitle>
                                    <InformationReceived>
                                        <InformationRow>
                                            <NameReceived>
                                                <LabelName for="name">
                                                    Tên Người Nhận
                                                </LabelName>
                                                <InputName id="name"></InputName>
                                            </NameReceived>
                                            <PhoneReceived>
                                                <LabelPhone for="phone">
                                                    Số Điện Thoại
                                                </LabelPhone>
                                                <InputPhone id="phone"></InputPhone>
                                            </PhoneReceived>
                                            <EmailReceived>
                                                <LabelEmail for="address">
                                                    Địa chỉ người nhận
                                                </LabelEmail>
                                                <InputEmail
                                                    id="address"
                                                    onChange={(e) =>
                                                        setAddress(
                                                            e.target.value
                                                        )
                                                    }
                                                ></InputEmail>
                                            </EmailReceived>
                                        </InformationRow>
                                        <InformationRow>
                                            <ChooseProvince>
                                                <LabelProvince>
                                                    Chọn tỉnh thành
                                                </LabelProvince>
                                                <SelectProvince
                                                    id="provinceSelect"
                                                    value={province}
                                                    onChange={
                                                        handleChangeProvince
                                                    }
                                                >
                                                    {provinceList?.map(
                                                        (item) => (
                                                            <OptionProvince
                                                                key={item.id}
                                                                value={
                                                                    item.provinceCode
                                                                }
                                                            >
                                                                {
                                                                    item.provinceName
                                                                }
                                                            </OptionProvince>
                                                        )
                                                    )}
                                                </SelectProvince>
                                            </ChooseProvince>

                                            <ChooseDistrict>
                                                <LabelDistrict>
                                                    Chọn quận huyện
                                                </LabelDistrict>
                                                <SelectDistrict
                                                    id="districtSelect"
                                                    value={district}
                                                    onChange={
                                                        handleChangeDistrict
                                                    }
                                                >
                                                    {districtList?.map(
                                                        (item) => (
                                                            <OptionDistrict
                                                                key={item.id}
                                                                value={
                                                                    item.districtCode
                                                                }
                                                            >
                                                                {
                                                                    item.districtName
                                                                }
                                                            </OptionDistrict>
                                                        )
                                                    )}
                                                </SelectDistrict>
                                            </ChooseDistrict>

                                            <ChooseWard>
                                                <LabelWard>
                                                    Chọn phường xã
                                                </LabelWard>
                                                <SelectWard
                                                    id="wardSelect"
                                                    value={ward}
                                                    onChange={handleChangeWard}
                                                >
                                                    {wardList?.map((item) => (
                                                        <OptionWard
                                                            key={item.id}
                                                            value={
                                                                item.wardCode
                                                            }
                                                        >
                                                            {item.wardName}
                                                        </OptionWard>
                                                    ))}
                                                </SelectWard>
                                            </ChooseWard>
                                        </InformationRow>
                                    </InformationReceived>
                                </InformationReceivedContainer>
                            ) : (
                                <></>
                            )}

                            <InfoCheckout>
                                <NoteCheckout>Ghi chú:</NoteCheckout>
                                <TextAreaNote
                                    name="note"
                                    rows="7"
                                    placeholder="Nhập ghi chú..."
                                    onChange={(e) => setNote(e.target.value)}
                                ></TextAreaNote>

                                <Info>
                                    <TotalPrice>
                                        <TotalTitleProduct>
                                            Tổng tiền sản phẩm
                                        </TotalTitleProduct>
                                        <TotalPriceProduct>
                                            {cart.cartTotalAmount.toLocaleString(
                                                "de-DE"
                                            )}
                                        </TotalPriceProduct>
                                    </TotalPrice>
                                    {delivery === 1 ? (
                                        <ShipPrice>
                                            <TotalTitleProduct>
                                                Phí Ship
                                            </TotalTitleProduct>
                                            <TotalPriceProduct>
                                                15.000đ
                                            </TotalPriceProduct>
                                        </ShipPrice>
                                    ) : (
                                        <></>
                                    )}

                                    <TotalCheckout>
                                        <TotalTitle>Tổng Thanh toán</TotalTitle>
                                        <TotalPricePay>
                                            {(
                                                cart.cartTotalAmount +
                                                (delivery % 2) * 15000
                                            ).toLocaleString("de-DE")}
                                        </TotalPricePay>
                                    </TotalCheckout>
                                    <Order>Đặt hàng</Order>
                                    {/* <h1 onClick={handleBuy}>sdf</h1> */}
                                </Info>
                            </InfoCheckout>
                        </FormCheckOut>
                    </InfoCheckOut>
                </Wrapper>
            </Container>
        </div>
    );
};

const SelectProvince = styled.select`
    font-size: 18px;
    padding: 2px 5px;
    &:focus {
        outline: none;
    }
    width: 80%;
`;
const OptionProvince = styled.option``;
const SelectDistrict = styled.select`
    font-size: 18px;
    padding: 2px 5px;
    &:focus {
        outline: none;
    }
    width: 80%;
`;
const OptionDistrict = styled.option``;
const SelectWard = styled.select`
    font-size: 18px;
    padding: 2px 5px;
    &:focus {
        outline: none;
    }
    width: 80%;
`;
const OptionWard = styled.option``;

const ChooseProvince = styled.div`
    flex: 1;
`;
const ChooseDistrict = styled.div`
    flex: 1;
`;
const ChooseWard = styled.div`
    flex: 1;
`;
const LabelProvince = styled.label`
    display: block;
    padding: 10px 0px;
    font-size: 18px;
`;
const LabelDistrict = styled.label`
    display: block;
    padding: 10px 0px;
    font-size: 18px;
`;
const LabelWard = styled.label`
    display: block;
    padding: 10px 0px;
    font-size: 18px;
`;

const InformationReceivedContainer = styled.div`
    background-color: #e8ebef;
    padding: 30px 50px;
`;
const InformationTitle = styled.p`
    font-size: 22px;
    font-weight: 500;
`;
const InformationReceived = styled.div`
    margin-top: 20px;
`;
const InformationRow = styled.div`
    display: flex;
    padding: 15px 0px;
`;
const NameReceived = styled.div`
    flex: 1;
`;
const LabelName = styled.label`
    display: block;
    padding: 10px 0px;
    font-size: 18px;
`;
const InputName = styled.input`
    width: 80%;
    font-size: 18px;
    padding: 5px 5px;
    &:focus {
        outline: none;
    }
`;
const EmailReceived = styled.div`
    flex: 1;
`;
const LabelEmail = styled.label`
    display: block;
    padding: 10px 0px;
    font-size: 18px;
`;
const InputEmail = styled.input`
    width: 80%;
    font-size: 18px;
    padding: 5px 5px;
    &:focus {
        outline: none;
    }
`;
const PhoneReceived = styled.div`
    flex: 1;
`;
const LabelPhone = styled.label`
    display: block;
    padding: 10px 0px;
    font-size: 18px;
`;
const InputPhone = styled.input`
    width: 80%;
    font-size: 18px;
    padding: 5px 5px;
    &:focus {
        outline: none;
    }
`;

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
    background-image: url(${(props) => props.img});
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
    padding: 10px 20px;
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
`;
const ShipPrice = styled.div`
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
