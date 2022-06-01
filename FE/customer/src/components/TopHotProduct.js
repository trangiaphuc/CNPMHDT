import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { HotProduct } from "../data";

const _items = HotProduct;
const TopHotProduct = () => {
    const [productRandom, setProductRandom] = useState([]);
    const [itemtrans, setItemtrans] = React.useState(
        new Array(_items.length).fill(0)
    );
    const prevClick = () => {
        setItemtrans((prev) => {
            if (prev.at(0) === 0) {
                return prev;
            } else return prev.map((item) => item + 275);
        });
    };

    const nextClick = () => {
        setItemtrans((prev) => {
            if (prev.at(_items.length - 1) === (_items.length - 5) * -275) {
                return prev;
            } else return prev.map((item) => item - 275);
            // return prev.map((item) => item - 270);
        });
    };

    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:9000/user/get-random-product"
                );

                setProductRandom(res.data.productList);
            } catch (err) {
                console.log(err);
            }
        };
        test();
    }, []);
    console.log(productRandom);

    return (
        <Container>
            <Content>
                <TitleContent>Top sản phẩm HOT!</TitleContent>
                <ArrowSlider>
                    {/* <SliderPrev onClick={() => prevClick()}>
                        <ChevronLeftIcon1 />
                    </SliderPrev>
                    <SliderNext onClick={() => nextClick()}>
                        <ChevronRightIcon1 />
                    </SliderNext> */}
                </ArrowSlider>
            </Content>
            <ContainerSlider>
                {productRandom?.map((item, idx) => (
                    <CardProduct tran={itemtrans?.at(idx)} key={idx}>
                        <ContainerImage>
                            <ImageProduct
                                src={item?.productImage}
                            ></ImageProduct>
                        </ContainerImage>
                        <InfoProduct>
                            <TitleProduct>
                                <ProductName>
                                    <LinkDetail href="#">
                                        {item?.productName}
                                    </LinkDetail>
                                </ProductName>
                                <ProductPrice>
                                    {item?.salePrice?.toLocaleString("de-DE")}đ
                                </ProductPrice>
                            </TitleProduct>
                            {/* <Behavior>
                                <BuyProduct>Mua</BuyProduct>
                                <AddCart>
                                    <AddShoppingCartIcon />
                                </AddCart>
                            </Behavior> */}
                        </InfoProduct>
                    </CardProduct>
                ))}
            </ContainerSlider>
        </Container>
    );
};
export default TopHotProduct;

//Content
const Container = styled.div`
    width: 100%;
    margin-top: 20px;
`;
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: aqua; */
`;
const TitleContent = styled.h2`
    color: #ff3008;
`;
const ArrowSlider = styled.div`
    display: flex;
    margin-bottom: 5px;
`;
const SliderPrev = styled.span`
    display: inline-block;
    height: 100%;
    border: 1px solid black;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        background-color: #ff3008;
    }
`;
const SliderNext = styled.span`
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid black;
    cursor: pointer;
    &:hover {
        background-color: #ff3008;
    }
`;

const ChevronLeftIcon1 = styled(ChevronLeftIcon)`
    color: black;
    font-size: small;
    padding: 2px 4px;
    height: 100%;
    margin-top: 3px;
`;
const ChevronRightIcon1 = styled(ChevronRightIcon)`
    color: black;
    padding: 2px 4px;
    height: 100%;
    font-size: small;
    margin-top: 3px;
`;

//Slider
const ContainerSlider = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: space-between;
`;
const ImageProduct = styled.img`
    object-fit: cover;
    width: 100%;
    transition: all 0.25s ease;
`;
const CardProduct = styled.div`
    box-sizing: border-box;
    padding: 15px 5px;
    margin: auto;
    width: 250px;
    height: 400px;
    margin-right: 25px;
    /* border: 1px solid #ff3008; */
    background-color: #efefef;
    transform: translateX(${(props) => props.tran}px);
    transition: all 0.25s ease;
    &:hover {
        ${ImageProduct} {
            transform: scale(1.15);
        }
    }
`;
const ContainerImage = styled.div`
    width: 240px;
    height: 240px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    border-radius: 15px;
`;

const ProductName = styled.h2`
    font-size: 16px;
`;
const Behavior = styled.div`
    display: flex;
    justify-content: space-between;
    height: 30px;
`;
const ProductPrice = styled.span`
    color: red;
    display: inline-block;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 600;
`;
const BuyProduct = styled.a`
    font-size: 17px;
    padding: 5px 60px;
    border-radius: 5px;
    background-color: #ff3008;
    color: white;
    font-weight: 500;
    cursor: pointer;
    background: linear-gradient(180deg, #ff3008 0%, #9c1c0b 100%);
    border-radius: 10px;
    &:hover {
        background-color: #c2230e;
    }
`;
const AddCart = styled.a`
    padding: 1px 25px;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    background-color: #ff3008;
    background: linear-gradient(180deg, #ff3008 0%, #9c1c0b 100%);
    border-radius: 10px;
    &:hover {
        background-color: #c2230e;
    }
`;

const InfoProduct = styled.div`
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const TitleProduct = styled.div`
    height: 100px;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const LinkDetail = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: black;
`;
