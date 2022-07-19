import React from 'react';
import SplitText from "../util/splitText/splitText";
import classes from "classnames";
import SquareButton from "../../../components/UI/Buttons/SquareButton";
import cl from "./Plans.module.css";
import {checkWhite} from "../../../img/imgs";

const Plans = ({id}) => {
    return (
        <div className={cl.plans}>
            <SplitText id={id} outlined1={"READY TO START"} outlined2={"WITH US"}>YOUR JOURNEY</SplitText>
            <div className={cl.plansArea}>
                <div className={cl.plan}>
                    <div className={classes(cl.topImg, cl.oneStar)}/>
                    <h1>FREE PLAN</h1>
                    <h2> $ 0 </h2>
                    <div className={cl.checkBox}>
                        <img src={checkWhite} alt="" className={cl.checked}/>
                        <p>Basic filters</p>
                    </div>
                    <div className={cl.checkBox}>
                        <img src={checkWhite} alt="" className={cl.checked}/>
                        <p>Fast search</p>
                    </div>
                    <div className={cl.checkBox}>
                        <img src={checkWhite} alt="" className={cl.checked}/>
                        <p>Ability to join guilds</p>
                    </div>
                    <SquareButton className={cl.btnJoin}>Join now</SquareButton>
                </div>
                <div className={classes(cl.plan, cl.center)}>
                    <div className={classes(cl.topImg, cl.threeStars)}/>
                    <h1>PREMIUM PLAN</h1>
                    <h2> $ 5 </h2>
                    <div className={cl.checkBox}>
                        <img src={checkWhite} alt="" className={cl.checked}/>
                        <p>All filters</p>
                    </div>
                    <div className={cl.checkBox}>
                        <img src={checkWhite} alt="" className={cl.checked}/>
                        <p>Unlocks music</p>
                    </div>
                    <div className={cl.checkBox}>
                        <img src={checkWhite} alt="" className={cl.checked}/>
                        <p>Priority search</p>
                    </div>
                    <SquareButton className={cl.btnJoin}>Join now</SquareButton>
                </div>
                <div className={cl.plan}>
                    <div className={classes(cl.topImg, cl.twoStars)}/>
                    <h1>basic plan</h1>
                    <h2> $ 2 </h2>
                    <div className={cl.checkBox}>
                        <img src={checkWhite} alt="" className={cl.checked}/>
                        <p>More filters</p>
                    </div>
                    <div className={cl.checkBox}>
                        <img src={checkWhite} alt="" className={cl.checked}/>
                        <p>Ability to create guilds</p>
                    </div>
                    <div className={cl.checkBox}>
                        <img src={checkWhite} alt="" className={cl.checked}/>
                        <p>Unlocks messenger</p>
                    </div>
                    <SquareButton className={cl.btnJoin}>Join now</SquareButton>
                </div>
            </div>
        </div>
    );
};

export default Plans;