import React, {useContext} from 'react';
import MyInput from "./Inputs/MyInput";
import MyButton from "./Submit_login_btn/MyButton";
import {AuthContext} from "../context";
import cl from "./login.module.css";
import {useInput} from "./useInput";
import Error from "./Error";

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
        <div className={cl.login__wrapper}>
            <div className={cl.form}>
                <h1 className={cl.center}>Login Page</h1>
                <form className={cl.form} onSubmit={auth}>
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
                    <div className={cl.center}>
                        <MyButton disabled={!email.inputValid || !password.inputValid}
                                  className={cl.btn}>Enter</MyButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;