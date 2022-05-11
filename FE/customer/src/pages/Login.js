import React from "react";
import styled from "styled-components";

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
const Button = styled.button`
    display: block;
    width: 400px;
    border: none;
    padding: 15px 20px;
    background-color: #ff3008;
    color: black;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    margin: auto;
    margin-top: 10px;
`;

const ForgotPass = styled.a`
    box-sizing: border-box;
    display: block;
    text-align: center;
    margin-top: 10px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    color: black;
`;

const Login = () => {
    return (
        <div>
            <Navbar />
            <Categories />
            <Container>
                <Wrapper>
                    <Title>Đăng Nhập</Title>
                    <Form>
                        <Input placeholder="username" />
                        <Input placeholder="password" />
                    </Form>

                    <Button>Login</Button>
                    <ForgotPass href="#">Quên mật khẩu?</ForgotPass>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Login;
