import React from 'react';
import classes from "classnames";
import cl from "./Games.module.css";

const Games = ({id}) => {
    return (
            <div className={cl.games}>
                <div id={id} className={cl.anchor}/>
                <div className={cl.textBlock}>
                    <h1>GAMES</h1>
                    <h2>THAT WE CAN <span className={cl.outlined}> OFFER TO YOU</span>
                    </h2>
                    <p>
                        A large selection of games, as well as the opportunity to offer us your own variations that you
                        did not find with us!
                    </p>
                </div>
                <div className={cl.slider}>
                    <div className={cl.window}>
                        <div className={classes(cl.img, cl.img1)}/>
                        <div className={classes(cl.img, cl.img2)}/>
                        <div className={classes(cl.img, cl.img3)}/>
                        <div className={classes(cl.img, cl.img4)}/>
                    </div>
                </div>
            </div>
    );
};

export default Games;