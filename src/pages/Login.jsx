import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../components/UI/Inputs/MyInput";
import MyButton from "../components/UI/Buttons/MyButton";
import {AuthContext} from "../context";
import "../styles/login_modal.css";
import {useInput} from "../hooks/useInput";
import Error from "../components/Error";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const email = useInput('email', '', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('password', '', {isEmpty: true, minLength: 3, maxLength: 16})
    const auth = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', "true");
    }

    return (
        <div className="form">
            <h1 className="center" style={{marginTop: 30}}>Login Page</h1>
            <form className="form" onSubmit={auth}>
                <MyInput onChange={e => email.onChange(e)}
                         value={email.value}
                         onBlur={e => email.onBlur(e)}
                         name="email" type="text"
                         placeholder="Enter email"
                         autoComplete='off'
                />
                <Error name="email" item={email}/>
                <MyInput onChange={e => password.onChange(e)}
                         value={password.value}
                         onBlur={e => password.onBlur(e)}
                         name="password"
                         type="password"
                         placeholder="Enter Password"
                         autoComplete='off'
                />
                <Error name="password" item={password}/>
                <div className="center">
                    <MyButton disabled={!email.inputValid || !password.inputValid} style={{marginTop: 20}}>Enter</MyButton>
                </div>
            </form>
        </div>
    );
};

export default Login;