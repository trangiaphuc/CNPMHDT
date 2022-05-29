import axios from "axios";
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logOutFailed,
    logOutStart,
    logOutSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        // const res = await axios.post("/login",user);
        // dispatch(loginSuccess(res.data));
        const user = {
            username: "tu",
            password: "123",
        };
        dispatch(loginSuccess(user));
        navigate("/");
    } catch (error) {
        dispatch(loginFailed());
    }
};
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const user = {
            username: "tu",
            password: "123",
        };
        dispatch(registerSuccess(user));
        navigate("/login");
    } catch (error) {
        dispatch(registerFailed());
    }
};

export const logout =  (dispatch, navigate) => {
    dispatch(logOutStart());
    try {
        // const res = await axios.post("/login",user);
        // dispatch(registerSuccess(res.data));
        dispatch(logOutSuccess());
        navigate("/");
    } catch (error) {
        dispatch(logOutFailed());
    }
};

