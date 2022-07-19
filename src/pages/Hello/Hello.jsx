import React from 'react';
import cl from "./hello.module.css";
import NavBar from "../../components/UI/NavBar/NavBar";
import Home from "./Home/Home";
import WhatMore from "./WhatMore/WhatMore";
import Background from "./BackGround/Background";
import WhyUs from "./whyUs/whyUs";
import Plans from "./Plans/Plans";
import Games from "./Games/Games";
import End from "./End/End";

const Hello = () => {
    return (
        <div className={cl.body}>
            <NavBar/>
            <Background/>
            <Home/>
            <WhatMore id="whatMore"/>
            <WhyUs id="whyUs"/>
            <Plans id="plans"/>
            <Games id="games"/>
            <End/>
        </div>
    );
};

export default Hello;