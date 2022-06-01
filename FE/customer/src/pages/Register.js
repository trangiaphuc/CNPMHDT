import React, { useState } from "react";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/apiRequest";
import { Alert } from "@mui/material";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            Alert("confirmPass không đúng");
        } else {
            const newUser = {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                birthday: "",
                gender: 1,
                provinceId: 1,
                districtId: 1,
                wardId: 1,
                userStatusId: 1,
            };
            registerUser(newUser, dispatch, navigate);
        }
    };
    return (
        <div>
            <Navbar />
            <Categories />
            <Container>
                <Wrapper>
                    <Title>Đăng Ký</Title>
                    <Form onSubmit={handleRegister}>
                        <Input
                            type="text"
                            placeholder="FirstName"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="LastName"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="phone"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Behavior>
                            <Button>CREATE</Button>
                            <LinkHome href="/">
                                <Home fontSize="large" />
                            </LinkHome>
                        </Behavior>
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
const Behavior = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;
const LinkHome = styled.a`
    width: 200px;
    background-color: #2b2bff;
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

export default Register;
