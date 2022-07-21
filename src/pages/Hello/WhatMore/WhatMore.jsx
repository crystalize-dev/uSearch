import React from 'react';
import cl from "./WhatMore.module.css";
import SplitText from "../util/splitText/splitText";
import {rightArrowThumb, search, chat, music, guild} from "../../../img/imgs";


const WhatMore = ({id, setVisible}) => {
    return (
         <div className={cl.whatMore}>
             <div id={id} className={cl.anchor}/>
             <SplitText outlined1={"A LOT OF"} outlined2={"FOR YOU"}>FUNCTIONALITIES</SplitText>
             <div className={cl.funcsArea}>
                    <div className={cl.func}>
                        <img src={music} alt="" className={cl.icon}/>
                        <h1>Music</h1>
                        <p>You can listen to music in our ultimate comfortable player. So you can forget about other players forever!</p>
                        <div className={cl.joinNow} onClick={() => setVisible(true)}>
                            <h1>Join Now</h1>
                            <img src={rightArrowThumb} alt="" className={cl.rightArrow}/>
                        </div>
                    </div>
                    <div className={cl.func}>
                        <img src={search} alt="" className={cl.icon}/>
                        <h1>Search</h1>
                        <p>We guarantee that this is the fastest search engine you know!</p>
                        <div className={cl.joinNow} onClick={() => setVisible(true)}>
                            <h1>Join Now</h1>
                            <img src={rightArrowThumb} alt="" className={cl.rightArrow}/>
                        </div>
                    </div>
                    <div className={cl.func}>
                        <img src={chat} alt="" className={cl.icon}/>
                        <h1>Chat</h1>
                        <p>We also have messenger! You can write to your friends and find new ones!</p>
                        <div className={cl.joinNow} onClick={() => setVisible(true)}>
                            <h1>Join Now</h1>
                            <img src={rightArrowThumb} alt="" className={cl.rightArrow}/>
                        </div>
                    </div>
                    <div className={cl.func}>
                        <img src={guild} alt="" className={cl.icon}/>
                        <h1>Guilds</h1>
                        <p>Unique guild system. You can create your own guild and play together!</p>
                        <div className={cl.joinNow} onClick={() => setVisible(true)}>
                            <h1>Join Now</h1>
                            <img src={rightArrowThumb} alt="" className={cl.rightArrow}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default WhatMore;