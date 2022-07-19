import React from 'react';
import cl from "./NavBar.module.css";
import SquareButton from "../Buttons/SquareButton";
import {logo} from "../../../img/imgs";

const NavBar = () => {
    return (
        <div className={cl.navbar}>
            <img src={logo} id={"home"} alt="" className={cl.logo}/>
            <div className={cl.linkArea}>
                <div>
                    <a href={"#whatMore"} className={cl.link}>What more</a>
                    <hr className={cl.line}/>
                </div>
                <div>
                    <a href={"#whyUs"} className={cl.link}>Why us</a>
                    <hr className={cl.line}/>
                </div>
                <div>
                    <a href={"#plans"} className={cl.link}>Plans</a>
                    <hr className={cl.line}/>
                </div>
                <div>
                    <a href={"#games"} className={cl.link}>Games</a>
                    <hr className={cl.line}/>
                </div>
            </div>
            <SquareButton outlined={false}>Join Now</SquareButton>
        </div>
    );
};

export default NavBar;