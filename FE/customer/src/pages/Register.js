import React from "react";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";

const Container = styled.div`
    width: 1350px;
    margin: auto;
    margin-top: 20px;
`;
const Wrapper = styled.div`
    width: 500px;
    margin: auto;
`;
const Title = styled.h2`
    text-align: center;
`;
const Form = styled.form`
    text-align: center;
`;
const Input = styled.input`
    display: block;
    box-sizing: border-box;
    min-width: 100%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-size: 15px;
`;
const Behavior = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;
const LinkHome = styled.a`
    width: 200px;
    background-color: #2B2BFF;
    color: black;
`;
const Button = styled.button`
    width: 200px;
    border: none;
    padding: 15px 20px;
    background-color: #ff3008;
    color: black;
    cursor: pointer;
    font-weight: 600;

`;

const Home = styled(HomeIcon)`
    display: block;
    margin-top: 5px;
    margin-left: 87.5px;
`;
const Register = () => {
    return (
        <div>
            <Navbar />
            <Categories />
            <Container>
                <Wrapper>
                    <Title>Đăng Ký</Title>
                    <Form>
                        <Input placeholder="name" />
                        <Input placeholder="username" />
                        <Input placeholder="email" />
                        <Input placeholder="password" />
                        <Input placeholder="confirm password" />
                    </Form>
                    <Behavior>
                        <Button>CREATE</Button>
                        <LinkHome href="/">
                            <Home fontSize="large"/>
                        </LinkHome>
                    </Behavior>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Register;
