import React from "react";
import styled from "styled-components";
import axios from "axios";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product, ProductCategories } from "../data";

const ProductByCat = () => {
    // const getProducts = async () => {
    //     try {
    //         const res = await axios.get(
    //             "http://localhost:9000/general/get-maingroups-list"
    //         );
    //         console.log(res.data.result)
    //         a=res.data.result;
    //         return res;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // async function test (){
    //     const res = await axios.get("http://localhost:9000/general/get-maingroups-list");
    //     console.log(res.data.result);
    //     return res;
    // }
    // test()
    return (
        <Container>
            <Content>
                <ProductCat>
                    <Category>Hãng</Category>
                    {ProductCategories.map((item) => (
                        <CategoryItem key={item.id}>{item.name}</CategoryItem>
                    ))}
                </ProductCat>
                <SortPrice>
                    <SortByPrice>
                        <HighToLow>Từ cao đến thấp</HighToLow>
                        <LowToHigh>Từ thấp đến cao</LowToHigh>
                    </SortByPrice>
                </SortPrice>
            </Content>

            <ProductList>
                {Product.map((item, idx) => (
                    <CardProduct key={item.id}>
                        <ContainerImage>
                            <ImageProduct src={item.image}></ImageProduct>
                        </ContainerImage>
                        <InfoProduct>
                            <TitleProduct>
                                <ProductName>
                                    <LinkDetail href="#">
                                        {item.name}
                                    </LinkDetail>
                                </ProductName>
                                <ProductPrice>
                                    {item.price.toLocaleString("de-DE")}đ
                                </ProductPrice>
                            </TitleProduct>
                            <Behavior>
                                <BuyProduct>Mua</BuyProduct>
                                <AddCart>
                                    <AddShoppingCartIcon />
                                </AddCart>
                            </Behavior>
                        </InfoProduct>
                    </CardProduct>
                ))}
            </ProductList>
        </Container>
    );
};

export default ProductByCat;

const Container = styled.div`
    width: 100%;
    margin-top: 20px;
`;
const Content = styled.div`
    font-size: 19px;
    display: flex;
`;
const ProductCat = styled.div`
    width: 88%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
`;
const Category = styled.span`
    box-sizing: border-box;
    padding: 0px 10px;
`;

const CategoryItem = styled.span`
    box-sizing: border-box;
    color: #ff3008;
    font-weight: 500;
    cursor: pointer;
    padding: 0px 10px;
`;
const SortPrice = styled.div`
    width: 12%;
`;
const SortByPrice = styled.select`
    border-radius: 0px;
    float: right;
    font-size: 18px;
    border: none;
`;
const HighToLow = styled.option`
    border-radius: 0px;
`;
const LowToHigh = styled.option``;

const ProductList = styled.div`
    display: block;
    width: 100%;
    margin-top: 20px;
`;

const ImageProduct = styled.img`
    object-fit: cover;
    width: 100%;
    transition: all 0.25s ease;
`;
const CardProduct = styled.div`
    display: inline-block;
    width: 270px;
    height: 400px;
    padding: 15px;
    border: 1px solid #ff3008;
    box-sizing: border-box;
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
`;

const ProductName = styled.h2`
    font-size: 20px;
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
