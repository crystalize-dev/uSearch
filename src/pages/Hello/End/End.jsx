import React from 'react';
import SquareButton from "../../../components/UI/Buttons/SquareButton";
import github from "../../../img/icons/companies/github.png";
import vk from "../../../img/icons/companies/vk.png";
import steam from "../../../img/icons/companies/steamLogo.png";
import logo from "../../../img/utils/logo.png";
import cl from "./End.module.css";

const End = () => {
    return (
        <div>
            <div className={cl.end}>
                <div className={cl.textBlock}>
                    <hr className={cl.line}/>
                    <h1><span className={cl.outline}>READY TO</span> SEARCH <span className={cl.outline}>YOUR</span> NEW
                        FRIENDS?</h1>
                </div>
                <div className={cl.buttonArea}>
                    <div className={cl.rectangleArea}>
                        Then join now!
                        <SquareButton className={cl.btnJoin}>Join Now</SquareButton>
                    </div>
                </div>
            </div>
            <div className={cl.credits}>
                <div className={cl.upperImgs}>
                    <a href="https://github.com/crystalize-dev"><img src={github} alt=""/></a>
                    <a href="https://vk.com/zeneetsu" className={cl.vk}><img src={vk} alt=""/></a>
                    <a href="https://steamcommunity.com/profiles/76561198129988011" className={cl.steam}><img
                        src={steam} alt=""/></a>
                </div>
                <a href={"#home"}><img src={logo} alt=""/></a>
            </div>
        </div>
    );
};

export default End;