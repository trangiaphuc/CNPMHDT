import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { addCart } from "../redux/apiRequestCart";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

const Page = styled.div`
    width: 1350px;
    margin: auto;
`;
const Search = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const cart = useSelector((state) => state.cart);
    console.log(cart.searchText);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:9000/admin/product-management/search-product/",
                    {
                        keyword: cart.searchText,
                    },
                    {
                        headers: {
                            "x-access-token": user.accessToken,
                        },
                    }
                );
                setProductList(res.data.result);
            } catch (err) {
                console.log(err);
            }
        };
        test();
    }, []);
    console.log(productList);
    const handleAddToCart = (product) => {
        // user == null ? navigate("/login") : dispatch(addToCart(product));
        user == null ? navigate("/login") : addCart(user, product, dispatch);
    };
    return (
        <div>
            <Navbar />
            <Categories />
            <Page>
                <ProductList>
                    {productList.map((item) => (
                        <CardProduct key={item.id}>
                            <ContainerImage>
                                <ImageProduct
                                    src={item.productImage}
                                ></ImageProduct>
                            </ContainerImage>
                            {console.log(item)}
                            <InfoProduct>
                                <TitleProduct>
                                    <ProductName>
                                        <LinkDetail
                                            href={"/product/" + item.id}
                                        >
                                            {item.productName}
                                        </LinkDetail>
                                    </ProductName>
                                    <ProductPrice>
                                        {item?.salePrice.toLocaleString(
                                            "de-DE"
                                        )}
                                        đ
                                    </ProductPrice>
                                </TitleProduct>
                                <Behavior>
                                    <BuyProduct>Mua</BuyProduct>
                                    <AddCart
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        <AddShoppingCartIcon />
                                    </AddCart>
                                </Behavior>
                            </InfoProduct>
                        </CardProduct>
                    ))}
                </ProductList>
            </Page>
        </div>
    );
};

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
`;

const ImageProduct = styled.img`
    object-fit: cover;
    width: 100%;
    transition: all 0.25s ease;
`;
const CardProduct = styled.div`
    box-sizing: border-box;
    display: inline-block;
    margin: 10px 10px;
    background-color: #efefef;
    /* width: 270px; */
    height: 400px;

    padding: 15px 5px;
    width: 250px;
    /* height: 400px; */
    /* border: 1px solid #ff3008; */
    background-color: #efefef;

    /* border: 1px solid #ff3008; */
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
    background: linear-gradient(180deg, #ff3008 0%, #9c1c0b 100%);
    border-radius: 10px;
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

export default Search;
