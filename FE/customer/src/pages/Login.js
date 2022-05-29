import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import { loginUser } from "../redux/apiRequest";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
        };
        loginUser(newUser, dispatch, navigate);
    };
    return (
        <div>
            <Navbar />
            <Categories />
            <Container>
                <Wrapper>
                    <Title>Đăng Nhập</Title>
                    <Form onSubmit={handleLogin}>
                        <Input
                            type="text"
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button>Login</Button>
                        <ForgotPass href="#">Quên mật khẩu?</ForgotPass>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    );
};
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
export default Login;
