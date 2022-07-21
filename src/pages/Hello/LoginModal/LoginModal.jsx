import React, {useContext, useEffect, useState} from 'react';
import Error from "../../../components/Error";
import {AuthContext} from "../../../context";
import {useInput} from "../../../Hooks/useInput";
import LoginButton from "../../../components/UI/Buttons/LoginButton";
import cl from "./LoginModal.module.css";
import LoginInput from "../../../components/UI/Input/LoginInput";
import classes from "classnames";
import OutLined from "../../../components/UI/OutLinedText/OutLined";

const LoginModal = ({visible, setVisible, className}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const email = useInput('email', '', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('password', '', {isEmpty: true, minLength: 3, maxLength: 16})

    const [login, setLogin] = useState(true);

    const auth = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', "true");
    }

    useEffect(() => {
        email.reset();
        password.reset();
    }, [visible])

    return (
        <div className={visible ? classes(cl.deadZone, className) : classes(cl.deadZone, className, cl.invisible)} onClick={() => setVisible(false)}>
            <div className={cl.window} onClick={(event) => event.stopPropagation()}>
                <div className={cl.loginText}>
                    <h1>LOGIN <OutLined>PAGE</OutLined></h1>
                    <hr/>
                </div>
                <form className={cl.inputsZone}>
                    <LoginInput onChange={event => email.onChange(event)} value={email.value}
                                onBlur={e => email.onBlur(e)}
                                name="email" type="text" placeholder="Enter email" autoComplete='off'/>
                    <Error name="email" item={email}/>
                    <LoginInput onChange={e => password.onChange(e)} value={password.value}
                                onBlur={e => password.onBlur(e)} name="password" type="password"
                                placeholder="Enter Password" autoComplete='off'/>
                    <Error name="password" item={password}/>
                </form>
                {
                    login ?
                        <div className={cl.btnSubmit}>
                            <LoginButton onClick={auth} disabled={!email.inputValid || !password.inputValid}>ENTER</LoginButton>
                            <p onClick={() => setLogin(!login)}>Dont have an account yet?</p>
                        </div>
                        :
                        <div className={cl.btnSubmit}>
                            <LoginButton onClick={auth} disabled={!email.inputValid || !password.inputValid}>REGISTER</LoginButton>
                            <p onClick={() => setLogin(!login)}>Already have an account</p>
                        </div>
                }
            </div>
        </div>
    );
};


export default LoginModal;