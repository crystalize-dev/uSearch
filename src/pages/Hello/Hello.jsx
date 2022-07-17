import React from 'react';
import cl from "./hello.module.css";
import SquareButton from "../../components/UI/Buttons/SquareButton";
import NavBar from "../../components/UI/NavBar/NavBar";
import Home from "./Home/Home";
import WhatMore from "../WhatMore/WhatMore";
import Background from "../BackGround/Background";
import WhyUs from "../whyUs/whyUs";

const Hello = () => {
    return (
        <div className={cl.body}>
            <NavBar>
                <div className={cl.logo}/>
                <div>
                    <a href={"#whatMore"} className={cl.link}>What more</a>
                    <a href={"#whyUs"} className={cl.link}>Why us</a>
                    <a href={"#"} className={cl.link}>Plans</a>
                    <a href={"#"} className={cl.link}>Testimonials</a>
                </div>
                <SquareButton outlined={false}>Join Now</SquareButton>
            </NavBar>
            <Background/>
            <Home id="home"/>
            <WhatMore id="whatMore"/>
            <WhyUs id="whyUs"/>
        </div>
    );
};

export default Hello;