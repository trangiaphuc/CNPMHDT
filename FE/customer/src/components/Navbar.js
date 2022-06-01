import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Badge from "@mui/material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/apiRequest";
import { getTotals, searchProduct } from "../redux/cartSlice";

const Navbar = () => {
    // const [cart, setCart] = useState(1);
    const user = useSelector((state) => state.auth.login.currentUser);
    const cart = useSelector((state) => state.cart);
    const { cartTotalQuantity } = useSelector((state) => state.cart);

    const [textSearch, setTextSearch] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout(dispatch, navigate);
    };

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleSearch = () => {
        if (textSearch === "") {
            alert("Nhập từ khoá tìm kiếm");
        } else {
            navigate("/search/" + textSearch);
            dispatch(searchProduct(textSearch));
        }
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <LinkHome href="/">
                        <Logo>
                            {/* <ImportantDevicesSharp/> */}
                            <ImportantDevicesIcon fontSize="large" />
                            P&T
                        </Logo>
                    </LinkHome>
                    <SearchProduct
                        onSubmit={handleSearch}
                        action={"/search/" + textSearch}
                    >
                        <Input
                            onChange={(e) => setTextSearch(e.target.value)}
                        />
                        <Button>
                            <SearchIcon />
                        </Button>
                    </SearchProduct>
                </Left>
                <Right>
                    {user ? (
                        <>
                            <ProfileContainer>
                                <IconWrap>
                                    <NameUser>{user.username}</NameUser>
                                    <ArrowDropDownIcon />
                                </IconWrap>
                                <ProfileDD>
                                    <ProfileUl>
                                        <LinkTo href="/">
                                            <ProfileLi>
                                                <AccountBoxIcon />
                                                <Profile>Profile</Profile>
                                            </ProfileLi>
                                        </LinkTo>
                                        <LinkTo href="/">
                                            <ProfileLi>
                                                <ShoppingCartIcon />
                                                <CartUser>Cart</CartUser>
                                            </ProfileLi>
                                        </LinkTo>
                                        <LinkTo href="/">
                                            <ProfileLi>
                                                <LogoutIcon />
                                                <LogOutUser
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </LogOutUser>
                                            </ProfileLi>
                                        </LinkTo>
                                    </ProfileUl>
                                </ProfileDD>
                            </ProfileContainer>
                            <Cart>
                                <ThemeProvider theme={theme}>
                                    <LinkCart href="/cart">
                                        <Badge1
                                            color="primary"
                                            badgeContent={cartTotalQuantity}
                                        >
                                            <ShoppingCartIcon />
                                        </Badge1>
                                    </LinkCart>
                                </ThemeProvider>
                            </Cart>
                        </>
                    ) : (
                        <Auth>
                            <MenuItem href="/login">ĐĂNG NHẬP</MenuItem>
                            <MenuItem href="/register">ĐĂNG KÝ</MenuItem>
                        </Auth>
                    )}
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;

const ProfileDD = styled.div`
    position: absolute;
    background-color: #e8ebef;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.25s, opacity 0.25s linear;
`;
const ProfileContainer = styled.div`
    position: relative;
    margin-right: 0;
    &:hover {
        ${ProfileDD} {
            visibility: visible;
            opacity: 1;
        }
    }
`;

const IconWrap = styled.div`
    align-items: center;
    display: flex;
    cursor: pointer;
    user-select: none;
`;
const NameUser = styled.span`
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 600;
`;

const ProfileUl = styled.ul`
    list-style: none;
    box-sizing: border-box;
    padding: 0;
`;
const ProfileLi = styled.li`
    font-size: 18px;
    display: flex;
    padding: 10px;
`;
const Profile = styled.span`
    box-sizing: border-box;
    margin-left: 10px;
`;
const CartUser = styled.span`
    box-sizing: border-box;
    margin-left: 10px;
`;
const LogOutUser = styled.span`
    box-sizing: border-box;
    margin-left: 10px;
`;
const LinkTo = styled.a`
    box-sizing: border-box;
    height: fit-content;
    cursor: pointer;
    text-decoration: none;
    color: black;
    &:hover {
        color: #ff3008;
    }
`;
const Badge1 = styled(Badge)``;

const LinkCart = styled.a`
    color: white;
`;

const LinkHome = styled.a`
    text-decoration: none;
    color: black;
`;
const theme = createTheme({
    palette: {
        neutral: {
            main: "#ffffff",
            contrastText: "#ff3008",
        },
    },
    hh: {
        fontSize: "2.25rem",
    },
});
const Container = styled.div`
    height: 55px;
    background-color: #ff3008;
`;
const Wrapper = styled.div`
    width: 1350px;
    height: 55px;
    margin: auto;
    align-items: center;
    display: flex;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 4;
`;

const Logo = styled.h1`
    font-style: italic;
    font-size: 47px;
`;

const SearchProduct = styled.form`
    border-radius: 10px;
    margin-left: 20px;
    width: 60%;
    height: 40px;
    background-color: white;
    display: flex;
`;

const Input = styled.input`
    border: none;
    font-size: 20px;
    flex: 8;
    padding-left: 10px;
    border: 0px;
    &:focus {
        outline: none;
    }
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: white;
`;

const Right = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
`;

const MenuItem = styled.a`
    color: white;
    font-size: 15px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
`;
const Auth = styled.div`
    display: flex;
`;
const Cart = styled.div`
    color: white;
    margin-right: 20px;
`;
