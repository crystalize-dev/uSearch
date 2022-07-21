import React, {useState} from 'react';
import cl from "./hello.module.css";
import NavBar from "../../components/UI/NavBar/NavBar";
import Home from "./Home/Home";
import WhatMore from "./WhatMore/WhatMore";
import WhyUs from "./whyUs/whyUs";
import Plans from "./Plans/Plans";
import Games from "./Games/Games";
import End from "./End/End";
import LoginModal from "./LoginModal/LoginModal";

const Hello = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div className={cl.body}>
            <LoginModal className={cl.login_correct} visible={visible} setVisible={setVisible}/>
            <NavBar setVisible={setVisible}/>
            <Home setVisible={setVisible}/>
            <WhatMore setVisible={setVisible} id="whatMore"/>
            <WhyUs id="whyUs"/>
            <Plans setVisible={setVisible} id="plans"/>
            <Games id="games"/>
            <End/>
        </div>
    );
};

export default Hello;