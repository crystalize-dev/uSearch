import React from 'react';
import SquareButton from "../../../components/UI/Buttons/SquareButton";
import cl from "./End.module.css";
import {steam, logo, vk, git} from "../../../img/imgs";

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
                    <a href="https://github.com/crystalize-dev"><img src={git} alt=""/></a>
                    <a href="https://vk.com/zeneetsu"><img src={vk} alt=""/></a>
                    <a href="https://steamcommunity.com/profiles/76561198129988011"><img src={steam} alt=""/></a>
                </div>
                <a href={"#home"}><img src={logo} alt=""/></a>
            </div>
        </div>
    );
};

export default End;