import React from 'react';
import cl from "./WhatMore.module.css";
import classes from "classnames";

const WhatMore = (id) => {
    return (
         <div id={id} className={cl.whatMore}>
                <div className={cl.splitText}>
                    <h1 className={cl.outlined}>A lot</h1>
                    <h1>Functionalities</h1>
                    <h1 className={cl.outlined}>For you</h1>
                </div>
                <div className={cl.buttonsArea}>
                    <div className={cl.func}>
                        <div className={classes(cl.icon, cl.music)}/>
                        <h1>Music</h1>
                        <p>You can listen to music in our ultimate comfortable player. So you can forget about other players forever!</p>
                        <div className={cl.joinNow}>
                            <h1>Join Now</h1>
                            <div className={cl.rightArrow}/>
                        </div>
                    </div>
                    <div className={cl.func}>
                        <div className={classes(cl.icon, cl.search)}/>
                        <h1>Search</h1>
                        <p>We guarantee that this is the fastest search engine you know!</p>
                        <div className={cl.joinNow}>
                            <h1>Join Now</h1>
                            <div className={cl.rightArrow}/>
                        </div>
                    </div>
                    <div className={cl.func}>
                        <div className={classes(cl.icon, cl.chat)}/>
                        <h1>Chat</h1>
                        <p>We also have messenger! You can write to your friends and find new ones</p>
                        <div className={cl.joinNow}>
                            <h1>Join Now</h1>
                            <div className={cl.rightArrow}/>
                        </div>
                    </div>
                    <div className={cl.func}>
                        <div className={classes(cl.icon, cl.guild)}/>
                        <h1>Guilds</h1>
                        <p>Unique guild system. You can create your own guild and play together!</p>
                        <div className={cl.joinNow}>
                            <h1>Join Now</h1>
                            <div className={cl.rightArrow}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default WhatMore;