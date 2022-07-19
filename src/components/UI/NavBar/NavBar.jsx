import React from 'react';
import cl from "./NavBar.module.css";
import SquareButton from "../Buttons/SquareButton";

const NavBar = ({id}) => {
    return (
        <div className={cl.navbar}>
            <div id={id} className={cl.logo}/>
            <div>
                <a href={"#whatMore"} className={cl.link}>What more</a>
                <a href={"#whyUs"} className={cl.link}>Why us</a>
                <a href={"#plans"} className={cl.link}>Plans</a>
                <a href={"#games"} className={cl.link}>Games</a>
            </div>
            <SquareButton outlined={false}>Join Now</SquareButton>
        </div>
    );
};

export default NavBar;