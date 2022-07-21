import React, {useContext} from 'react';
import SquareButton from "../../components/UI/Buttons/SquareButton";
import cl from "./MainPage.module.css";
import {AuthContext} from "../../context";

const MainPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const quit = () => {
        localStorage.removeItem("auth");
        setIsAuth(false);
    }

    return (
        <div className={cl.wrapper}>
            <h1>~ HELLO THERE! ~</h1>
            <h1>There will be main page, but now ther is nothing here, just go off >:(</h1>
            <SquareButton onClick={quit}>Quit</SquareButton>
        </div>
    );
};

export default MainPage;