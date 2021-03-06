import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../redux/apiRequest";

const Home = () => {
    const [displayManaOrder, setDisplayManaOrder] = useState(0);
    const [displayManaProduct, setDisplayManaProduct] = useState(0);
    const user = useSelector((state) => state.auth.login.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(dispatch, navigate);
        if (user === null) {
            navigate("/login");
        }
    };
    return (
        <Container>
            <NavBar>
                <Logout onClick={handleLogout}>Logout</Logout>
            </NavBar>
            <PageContainer>
                <LeftPage>
                    <MainButtonManagementOrder
                        onClick={() => {
                            displayManaOrder === 0
                                ? setDisplayManaOrder(1)
                                : setDisplayManaOrder(0);
                        }}
                    >
                        + Quản lý đơn hàng
                    </MainButtonManagementOrder>
                    <ListSubButtonManagementOrder dis={displayManaOrder}>
                        <SubButtonManagementOrder>
                            &#8226; Xem báo cáo đơn hàng
                        </SubButtonManagementOrder>
                        <SubButtonManagementOrder>
                            &#8226; Xem chi tiết đơn hàng
                        </SubButtonManagementOrder>
                        <SubButtonManagementOrder>
                            &#8226; Cập nhật trạng thái đơn hàng
                        </SubButtonManagementOrder>
                        <SubButtonManagementOrder>
                            &#8226; Xuất hàng
                        </SubButtonManagementOrder>
                        <SubButtonManagementOrder>
                            &#8226; Xuất hóa đơn
                        </SubButtonManagementOrder>
                    </ListSubButtonManagementOrder>

                    <MainButtonManagementProduct
                        onClick={() => {
                            displayManaProduct === 0
                                ? setDisplayManaProduct(1)
                                : setDisplayManaProduct(0);
                        }}
                    >
                        + Quản lý Sản Phẩm
                    </MainButtonManagementProduct>
                    <ListSubButtonManagementProduct dis={displayManaProduct}>
                        <SubButtonManagementProduct>
                            &#8226; Xem báo cáo sản phẩm
                        </SubButtonManagementProduct>
                        <SubButtonManagementProduct>
                            &#8226; Thêm mới sản phẩm
                        </SubButtonManagementProduct>
                        <SubButtonManagementProduct>
                            &#8226; Cập nhật sản phẩm
                        </SubButtonManagementProduct>
                        <SubButtonManagementProduct>
                            &#8226; Xem chi tiết sản phẩm
                        </SubButtonManagementProduct>
                    </ListSubButtonManagementProduct>
                </LeftPage>

                {/* <ListSubButtonManagementUser>
                    <ListSubButtonManagementUser>
                        <SubButtonManagementUser>
                            &#8226; Xem báo cáo sản phẩm
                        </SubButtonManagementUser>
                    </ListSubButtonManagementUser>
                </ListSubButtonManagementUser> */}

                <RightPage></RightPage>
            </PageContainer>
        </Container>
    );
};

const MainButtonManagementProduct = styled.button`
    box-sizing: border-box;
    text-align: left;
    width: 100%;
    padding: 5px 10px;
    font-size: 20px;
`;
const ListSubButtonManagementProduct = styled.div`
    visibility: hidden;
    max-height: 0;
    transition: visibility 0.5s, max-height 0.5s;
    overflow: hidden;

    visibility: ${(props) => (props.dis === 1 ? "visible" : "hidden")};
    max-height: ${(props) => (props.dis === 1 ? 175 : 0)}px;
`;
const SubButtonManagementProduct = styled.button`
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    margin: 0;
    font-size: 18px;
    text-align: left;
    padding-left: 30px;
`;

const Container = styled.div`
    height: 100vh;
`;
const LeftPage = styled.div`
    width: 350px;
    height: 100vh;
    border: 1px solid #c4c4c4;
    /* background-color: red; */
`;
const NavBar = styled.div`
    height: 10%;
    background-color: #ff3008;
`;

const Logout = styled.span`
    box-sizing: border-box;
    float: right;
    padding: 5px;
    padding-right: 20px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`;
const PageContainer = styled.div``;
const RightPage = styled.div``;

const SubButtonManagementOrder = styled.button`
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    margin: 0;
    font-size: 18px;
    text-align: left;
    padding-left: 30px;
`;
const ListSubButtonManagementOrder = styled.div`
    visibility: hidden;
    max-height: 0;
    transition: visibility 0.5s, max-height 0.5s;
    overflow: hidden;

    visibility: ${(props) => (props.dis === 1 ? "visible" : "hidden")};
    max-height: ${(props) => (props.dis === 1 ? 175 : 0)}px;
    /* background-color: yellow; */
`;

const MainButtonManagementOrder = styled.button`
    box-sizing: border-box;
    text-align: left;
    width: 100%;
    padding: 5px 10px;
    font-size: 20px;
`;

export default Home;
