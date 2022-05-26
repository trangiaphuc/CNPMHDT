import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Product = () => {
    const location = useLocation();
    const [productList, setProductList] = useState([]);
    const [colorList, setColorList] = useState([]);
    const [product, setProduct] = useState({});
    const [index, setIndex] = useState(0);
    const modelId = location.pathname.split("/")[2];
    const storeId = 1;
    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:9000/user/get-all-product-by-model",
                    {
                        modelId,
                        storeId,
                    }
                );
                setColorList(res.data.productColorList);
                setProductList(res.data.productList);
            } catch (err) {
                console.log(err);
            }
        };
        test();
    }, [modelId]);
    // useEffect(() => {
    //     const test = async () => {
    //         try {
    //             const res = await axios.post(
    //                 "http://localhost:9000/user/get-all-product-by-model",
    //                 {
    //                     modelId,
    //                     storeId,
    //                 }
    //             );
    //             setProductList(res.data.productList);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     test();
    // }, []);
    function handleChangeColor(proId) {
        productList.map((item, i) => {
            if (item.id === proId) {
                setIndex(i);
                setProduct(item);
            }
        });
    }
    return (
        <div>
            <Navbar />
            <Categories />
            <Container>
                <Wrapper>
                    <Detail>
                        <NameProduct>
                            <TextName>
                                {productList[index]?.productName}
                            </TextName>
                        </NameProduct>
                        <ViewAndOption>
                            <ViewImageProduct>
                                <ImageProductDetail
                                    src={productList[index]?.productImage}
                                ></ImageProductDetail>
                            </ViewImageProduct>
                            <Option>
                                <LocationBuy>
                                    <Label>Chọn nơi mua:</Label>
                                    <SelectLocation>
                                        <OptionLocation>
                                            Thành phố HCM
                                        </OptionLocation>
                                        <OptionLocation>Hà Nội</OptionLocation>
                                        <OptionLocation>Đà Nẵng</OptionLocation>
                                        <OptionLocation>Cần Thơ</OptionLocation>
                                    </SelectLocation>
                                </LocationBuy>
                                <PriceProduct>
                                    <Label>Giá:</Label>
                                    <TextPrice>
                                        {productList[
                                            index
                                        ]?.salePrice?.toLocaleString("de-DE")}
                                        đ
                                    </TextPrice>
                                </PriceProduct>
                                <ChooseColor>
                                    <Label>Chọn màu sắc sản phẩm:</Label>
                                    <ColorOptions>
                                        {colorList.map((item) => (
                                            <Color
                                                key={item.id}
                                                colorCode={item.colorCode}
                                                productId={item.productId}
                                                onClick={() =>
                                                    handleChangeColor(
                                                        item.productId
                                                    )
                                                }
                                            >
                                                <TickMark></TickMark>
                                            </Color>
                                        ))}
                                    </ColorOptions>
                                </ChooseColor>

                                <BuyAndAddCart>
                                    <Buy href="#">Mua</Buy>
                                    <AddToCart>
                                        <AddCartIcon />
                                    </AddToCart>
                                </BuyAndAddCart>
                            </Option>
                        </ViewAndOption>
                        <InformationProduct>
                            <TitleInformation>
                                Thông tin sản phẩm
                            </TitleInformation>
                            <Information>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </Information>
                        </InformationProduct>
                    </Detail>
                    <SameProduct>
                        <Title>Sản phẩm tương tự</Title>
                        <SameProductList>
                            <CardProduct>
                                <ContainerImage>
                                    <ImageProduct src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/03/iphone-12-chinh-hang-blue.jpg"></ImageProduct>
                                </ContainerImage>
                                <InfoProduct>
                                    <TitleProduct>
                                        <ProductName>
                                            <LinkDetail href="#">
                                                Iphone 13 Promax
                                            </LinkDetail>
                                        </ProductName>
                                        <ProductPrice>
                                            {(29900000).toLocaleString("de-DE")}
                                            đ
                                        </ProductPrice>
                                    </TitleProduct>
                                    <ViewDetail>
                                        Xem chi tiết &gt;&gt;
                                    </ViewDetail>
                                </InfoProduct>
                            </CardProduct>
                            <CardProduct>
                                <ContainerImage>
                                    <ImageProduct src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/03/iphone-12-chinh-hang-blue.jpg"></ImageProduct>
                                </ContainerImage>
                                <InfoProduct>
                                    <TitleProduct>
                                        <ProductName>
                                            <LinkDetail href="#">
                                                Iphone 13 Promax
                                            </LinkDetail>
                                        </ProductName>
                                        <ProductPrice>
                                            {(29900000).toLocaleString("de-DE")}
                                            đ
                                        </ProductPrice>
                                    </TitleProduct>
                                    <ViewDetail>
                                        Xem chi tiết &gt;&gt;
                                    </ViewDetail>
                                </InfoProduct>
                            </CardProduct>
                            <CardProduct>
                                <ContainerImage>
                                    <ImageProduct src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/03/iphone-12-chinh-hang-blue.jpg"></ImageProduct>
                                </ContainerImage>
                                <InfoProduct>
                                    <TitleProduct>
                                        <ProductName>
                                            <LinkDetail href="#">
                                                Iphone 13 Promax
                                            </LinkDetail>
                                        </ProductName>
                                        <ProductPrice>
                                            {(29900000).toLocaleString("de-DE")}
                                            đ
                                        </ProductPrice>
                                    </TitleProduct>
                                    <ViewDetail>
                                        Xem chi tiết &gt;&gt;
                                    </ViewDetail>
                                </InfoProduct>
                            </CardProduct>
                        </SameProductList>
                    </SameProduct>
                </Wrapper>
            </Container>
        </div>
    );
};

const Container = styled.div`
    height: 100vh;
`;
const Wrapper = styled.div`
    height: 100%;
    width: 1350px;
    margin: auto;
    display: flex;
`;
const Detail = styled.div`
    width: 75%;
    padding-left: 30px;
    border: 1px solid #c4c4c4;
    margin-top: 20px;
`;

const NameProduct = styled.div`
    padding-top: 5px;
`;
const TextName = styled.h2``;
const ViewAndOption = styled.div`
    margin-top: 20px;
    display: flex;
`;
const ViewImageProduct = styled.div`
    width: 50%;
    align-items: center;
`;
const ImageProductDetail = styled.img`
    width: 80%;
    display: block;
    margin-left: 50px;
    margin-right: 50px;
`;

const Option = styled.div`
    width: 50%;
    padding-left: 30px;
    box-sizing: border-box;
`;
const LocationBuy = styled.div``;
const Label = styled.h3`
    font-size: 23px;
    margin-top: 10px;
`;
const SelectLocation = styled.select`
    margin-top: 10px;
    font-size: 17px;
    padding-left: 10px;
    padding-right: 10px;
`;
const OptionLocation = styled.option``;
const PriceProduct = styled.div``;
const TextPrice = styled.p`
    color: red;
    font-weight: 600;
    font-size: 22px;
    margin-top: 10px;
`;
const ChooseColor = styled.div``;
const BuyAndAddCart = styled.div`
    margin-top: 50px;
`;
const Buy = styled.a`
    box-sizing: border-box;
    text-decoration: none;
    color: black;
    font-size: 17px;
    padding: 5px 70px;
    border-radius: 5px;
    background-color: #ff3008;
    background: linear-gradient(180deg, #ff3008 0%, #9c1c0b 100%);
    color: white;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        background-color: #c2230e;
    }
`;
const AddToCart = styled.a`
    box-sizing: border-box;
    padding: 6px 60px;

    cursor: pointer;
    color: white;
    border-radius: 5px;
    background-color: #ff3008;
    margin-left: 10px;
    position: relative;
    background: linear-gradient(180deg, #ff3008 0%, #9c1c0b 100%);

    &:hover {
        background-color: #c2230e;
    }
`;
const AddCartIcon = styled(AddShoppingCartIcon)`
    position: absolute;
    left: 50px;
`;
const InformationProduct = styled.div``;
const TitleInformation = styled.p`
    color: #ff3008;
    font-size: 25px;
    font-weight: 600;
    margin-top: 20px;
`;
const Information = styled.div`
    margin-top: 5px;
    font-size: 20px;
`;
const SameProduct = styled.div`
    width: 25%;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const Title = styled.div`
    font-size: 23px;
    color: white;
    text-align: center;
    background-color: #ff3008;
`;
const SameProductList = styled.div`
    border: 1px solid #c4c4c4;
    margin-bottom: 20px;
    padding-bottom: 20px;
`;

const ImageProduct = styled.img`
    object-fit: cover;
    width: 100%;
    transition: all 0.25s ease;
`;
const CardProduct = styled.div`
    display: block;
    width: 270px;
    height: 400px;
    padding: 15px;
    border: 1px solid #ff3008;
    margin: auto;
    margin-top: 10px;
    box-sizing: border-box;
    border: 1px solid #c4c4c4;
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
    font-size: 20px;
`;

const ProductPrice = styled.span`
    color: red;
    display: inline-block;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 600;
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

const ViewDetail = styled.a`
    color: #ff3008;
    font-weight: 700;
    font-size: 22px;
`;

const ColorOptions = styled.div`
    margin-top: 10px;
    display: flex;
`;

const Color = styled.div`
    margin-left: 10px;
    box-sizing: border-box;
    height: 40px;
    width: 40px;
    background-color: ${(props) => props.colorCode};
    position: relative;
    border: 2px solid transparent;
    &:hover {
        border: 2px solid #c69a39;
        box-shadow: 0 0 5px #c2992e;
    }
    z-index: 1;
`;

const TickMark = styled.div`
    position: absolute;
    border: 12px solid;
    right: -2px;
    bottom: -2px;
    border-color: transparent #c69a39 #c69a39 transparent;
    //làm dấu tick
    &::before {
        content: "";
        position: absolute;
        right: -10px;
        bottom: -6px;
        width: 10px;
        height: 3px;
        border: 2px solid white;
        border-color: transparent transparent white white;
        transform: rotate(-45deg);
        z-index: 999;
        box-sizing: border-box;
    }
`;
export default Product;
