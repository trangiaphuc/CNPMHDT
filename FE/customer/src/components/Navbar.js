import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React, { useState } from "react";
import styled from "styled-components";

const Navbar = ({cart}) => {
    // const [cart, setCart] = useState(1);
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
                    <SearchProduct>
                        <Input />
                        <Button>
                            <SearchIcon />
                        </Button>
                    </SearchProduct>
                </Left>
                <Right>
                    <Auth>
                        <MenuItem href="/login">ĐĂNG NHẬP</MenuItem>
                        <MenuItem href="/register">ĐĂNG KÝ</MenuItem>
                    </Auth>
                    <Cart>
                        <ThemeProvider theme={theme}>
                            <LinkCart href="/cart">
                                <Badge1 color="primary" badgeContent={cart}>
                                    <ShoppingCartIcon />
                                </Badge1>
                            </LinkCart>
                        </ThemeProvider>
                    </Cart>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;

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
`;
