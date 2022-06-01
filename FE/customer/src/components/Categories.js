import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

const Categories = () => {
    const [mainGroup, setMainGroup] = useState([]);
    const [branList, setBrandList] = useState([]);
    useEffect(() => {
        const test = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:9000/general/get-maingroups-list"
                );
                setMainGroup(res.data.result);
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
                    "http://localhost:9000/general/get-brand-list"
                );
                setBrandList(res.data.result);
            } catch (err) {
                console.log(err);
            }
        };
        test();
    }, []);

    return (
        <Container>
            <ListMain>
                {mainGroup.map((itemMain) => (
                    <MainItem key={itemMain.id}>
                        <ItemTitle>
                            <ImageMainGroupContainer>
                                <ImageMainGroup
                                    src={itemMain.mainGroupImage}
                                ></ImageMainGroup>
                            </ImageMainGroupContainer>
                            <TextMainProduct>
                                {itemMain.maingroupName}
                            </TextMainProduct>
                        </ItemTitle>

                        <ListSub>
                            <LeftType>
                                <TitleType>
                                    <TypeName>Hãng sản xuất</TypeName>
                                </TitleType>

                                <ListTypeName>
                                    {branList.map((itemSub, i, a) => {
                                        return (
                                            <SubItem key={itemSub.id} last="0">
                                                <TextSubProduct
                                                    href={
                                                        "/viewbybrand/" +
                                                        itemMain.id +
                                                        "/" +
                                                        itemSub.id
                                                    }
                                                >
                                                    {itemSub.brandName}
                                                </TextSubProduct>
                                            </SubItem>
                                        );
                                    })}
                                </ListTypeName>
                            </LeftType>
                            <RightType>
                                <TypeName>Mức giá</TypeName>
                                <SubItem>
                                    <TextSubProduct href="#">
                                        Dưới 1 triệu
                                    </TextSubProduct>
                                </SubItem>
                                <SubItem>
                                    <TextSubProduct href="#">
                                        Dưới 2 triệu
                                    </TextSubProduct>
                                </SubItem>
                                <SubItem>
                                    <TextSubProduct href="#">
                                        Dưới 3 triệu
                                    </TextSubProduct>
                                </SubItem>
                                <SubItem>
                                    <TextSubProduct href="#">
                                        Dưới 5 triệu
                                    </TextSubProduct>
                                </SubItem>
                                <SubItem>
                                    <TextSubProduct href="#">
                                        Dưới 10 triệu
                                    </TextSubProduct>
                                </SubItem>
                                <SubItem>
                                    <TextSubProduct href="#">
                                        Trên 10 triệu
                                    </TextSubProduct>
                                </SubItem>
                            </RightType>
                        </ListSub>
                    </MainItem>
                ))}
            </ListMain>
        </Container>
    );
};

export default Categories;

const Container = styled.nav`
    background-color: #ff3008;
`;

const ListMain = styled.div`
    width: 1350px;
    margin: auto;
    padding: 0;
    display: flex;
    align-items: center;
    height: 31px;
`;
const ListSub = styled.div`
    position: absolute;
    right: ${(props) => props.last === "1" && 0};
    width: 380px;
    height: auto;
    background-color: white;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.25s, opacity 0.25s linear;
    display: flex;
    justify-content: space-between;
    /* transform: translateX(-10%); */
    z-index: 999;
    padding-bottom: 20px;
    box-shadow: 0px 4px 15px -5px rgb(0 0 0 / 75%);
    border: solid 1px #ff3008;
`;
const MainItem = styled.div`
    position: relative;
    align-items: center;
    border-left: 1px solid black;
    &:last-child {
        border-right: 1px solid black;
        ${ListSub} {
            right: 0;
        }
    }
    &:hover {
        background-color: #c2230e;
        ${ListSub} {
            visibility: visible;
            opacity: 1;
        }
    }
    flex: 1;
    user-select: none;
    &::before {
        content: "";
        height: 4px;
        background: #e3e3e3;
        position: absolute;
        left: 50%;
        right: 50%;
        bottom: 0px;
        opacity: 1;
        transition: 0.25s linear;
    }

    &:hover {
        background-color: #c2230e;
    }
    &:hover {
        &::before {
            opacity: 1;
            left: 0;
            right: 0;
        }
    }
`;
const TextMainProduct = styled.a`
    font-size: 17px;
    font-weight: 500;
    display: block;
    padding: 5px 0px;
    text-align: center;
    text-decoration: none;
    color: black;
    cursor: pointer;
`;

const TypeName = styled.p`
    color: orange;
    border-bottom: 1px solid white;
    padding: 5px 0px;
    box-sizing: border-box;
    width: fit-content;
`;
const ListTypeName = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const TextSubProduct = styled.a`
    text-decoration: none;
    display: block;
    padding-top: 15px;
    padding-bottom: 5px;
    transition: all 0.25s;
    color: #ff3008;
`;
const SubItem = styled.div`
    border-bottom: 1px solid black;
    margin-right: 10px;
    height: auto;
    width: 110px;
    &:hover {
        ${TextSubProduct} {
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
`;

const LeftType = styled.div`
    margin: 0px 10px;
`;
const TitleType = styled.div``;
const RightType = styled.div``;

const ImageMainGroupContainer = styled.div`
    height: 31px;
    width: 22px;
`;
const ItemTitle = styled.div`
    display: flex;
    width: fit-content;
    margin: auto;
`;
const ImageMainGroup = styled.img`
    margin-top: 3px;
    height: 70%;
    object-fit: cover;
`;
