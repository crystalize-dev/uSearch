import React from 'react';
import cl from "./whyUs.module.css";
import {steamFull, hyperX, cola, check, dota, pubg, apex, overWatch} from "../../../img/imgs";
import OutLined from "../../../components/UI/OutLinedText/OutLined";

const WhyUs = ({id}) => {
    return (
            <div className={cl.whyUs}>
                <div id={id} className={cl.anchor}/>
                <div className={cl.imgBlock}>
                    <img src={pubg} alt="" className={cl.leftImgBlock}/>
                    <div>
                        <img src={dota} alt="" className={cl.upperImgBlock}/>
                        <div className={cl.bottomImgBlock}>
                            <img src={apex} alt=""/>
                            <img src={overWatch} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={cl.checkBoxBlock}>
                    <h1>SOME REASONS</h1>
                    <h2><OutLined>WHY</OutLined> CHOOSE US?</h2>
                    <div className={cl.itemCheck}>
                        <img src={check} alt="" className={cl.checkedImg}/>
                        <p>Huge selection of filters and search criteria</p>
                    </div>
                    <div className={cl.itemCheck}>
                        <img src={check} alt="" className={cl.checkedImg}/>
                        <p>Extensive functionality</p>
                    </div>
                    <div className={cl.itemCheck}>
                        <img src={check} alt="" className={cl.checkedImg}/>
                        <p>The most convenient interface and management</p>
                    </div >
                    <div className={cl.itemCheck}>
                        <img src={check} alt="" className={cl.checkedImg}/>
                        <p>The ability to find a teammate in almost any game</p>
                    </div>
                    <h1>Already chosen:</h1>
                    <div className={cl.sponsors}>
                        <img src={hyperX} alt=""/>
                        <img src={steamFull} alt=""/>
                        <img src={cola} alt=""/>
                    </div>
                </div>
            </div>
    );
};

export default WhyUs;