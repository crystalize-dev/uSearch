import React from 'react';
import cl from "./End.module.css";
import {steam, logo, vk, git} from "../../../img/imgs";
import OutLined from "../../../components/UI/OutLinedText/OutLined";
import BluredRound from "../BluredRound/BluredRound";

const End = () => {
    return (
        <div>
            <div className={cl.end}>
                <div className={cl.textBlock}>
                    <hr/>
                    <h1><OutLined> READY TO </OutLined> SEARCH <OutLined> YOUR </OutLined> NEW FRIENDS?</h1>
                </div>
            </div>
            <div className={cl.credits}>
                <BluredRound size={1000} top={50} left={20}/>
                <div className={cl.upperImgs}>
                    <a href="https://github.com/crystalize-dev">
                        <img src={git} alt=""/>
                    </a>
                    <a href="https://vk.com/zeneetsu">
                        <img src={vk} alt=""/>
                    </a>
                    <a href="https://steamcommunity.com/profiles/76561198129988011">
                        <img src={steam} alt=""/>
                    </a>
                </div>
                <a href={"#home"}><img src={logo} alt=""/></a>
            </div>
        </div>
    );
};

export default End;