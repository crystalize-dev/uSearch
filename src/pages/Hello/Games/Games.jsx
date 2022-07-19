import React, {useEffect, useState} from 'react';
import cl from "./Games.module.css";
import {apex, pubgFull, csgoFull, leftArrow, rightArrow, dotaFHD} from "../../../img/imgs";
import classes from "classnames";

const Games = ({id}) => {

    let maxWidth = 300
    
    const [offset, setOffset] = useState(0)
    const [leftVisible, setLeftVisible] = useState(false)
    const [rightVisible, setRightVisible] = useState(true)

    const handleLeft = () => {
        setOffset(offset - 100)
        setRightVisible(true)
    }

    const handleRight = () => {
        setOffset(offset + 100)
        setLeftVisible(true)
    }

    useEffect(() => {
        if (offset === 0) 
            setLeftVisible(false)
        if (offset === maxWidth)
            setRightVisible(false)
    }, [maxWidth, offset])

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
                <div className={cl.windowWrapper}>
                    <img src={leftArrow} alt="" className={leftVisible ? cl.leftArrow : classes(cl.leftArrow, cl.disabled)} onClick={handleLeft}/>
                    <div className={cl.window}>
                        <div style={{transform: "translateX(-" + offset +"%)"}}>
                            <img alt="" src={dotaFHD} className={cl.img}/>
                            <img alt="" src={apex} className={cl.img}/>
                            <img alt="" src={pubgFull} className={cl.img}/>
                            <img alt="" src={csgoFull} className={cl.img}/>
                        </div>
                    </div>
                    <img src={rightArrow} alt="" className={rightVisible ? cl.rightArrow : classes(cl.rightArrow, cl.disabled)} onClick={handleRight}/>
                </div>
            </div>
        </div>
    );
};

export default Games;