import React from 'react';
import cl from "./whyUs.module.css";
import {steamFull, hyperX, cola, check, dota, pubg, apex, overWatch} from "../../../img/imgs";

const WhyUs = ({id}) => {
    return (
            <div className={cl.whyUs}>
                <div id={id} className={cl.anchor}/>
                <div className={cl.imgBlock}>
                    <img src={pubg} alt="" className={cl.leftImgBlock}/>
                    <div className={cl.rightImgBlock}>
                        <img src={dota} alt="" className={cl.upperImgBlock}/>
                        <div className={cl.bottomImgBlock}>
                            <img src={apex} alt="" className={cl.bottomLeftImgBlock}/>
                            <img src={overWatch} alt="" className={cl.bottomRightImgBlock}/>
                        </div>
                    </div>
                </div>
                <div className={cl.checkBoxBlock}>
                    <h1>SOME REASONS</h1>
                    <h2><span className={cl.outlined}>WHY</span> CHOOSE US?</h2>
                    <div className={cl.itemsBlock}>
                        <div>
                            <img src={check} alt="" className={cl.checkedImg}/>
                            <p>Huge selection of filters and search criteria</p>
                        </div>
                        <div>
                            <img src={check} alt="" className={cl.checkedImg}/>
                            <p>Extensive functionality</p>
                        </div>
                        <div>
                            <img src={check} alt="" className={cl.checkedImg}/>
                            <p>The most convenient interface and management</p>
                        </div>
                        <div>
                            <img src={check} alt="" className={cl.checkedImg}/>
                            <p>The ability to find a teammate in almost any game</p>
                        </div>
                        <div>
                            <h1>Already chosen:</h1>
                        </div>
                        <div className={cl.sponsors}>
                            <img src={hyperX} alt=""/>
                            <img src={steamFull} alt=""/>
                            <img src={cola} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default WhyUs;