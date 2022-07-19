import React from 'react';
import cl from "./whyUs.module.css";

const WhyUs = ({id}) => {
    return (
            <div className={cl.whyUs}>
                <div id={id} className={cl.anchor}/>
                <div className={cl.imgBlock}>
                    <div className={cl.leftImgBlock}/>
                    <div className={cl.rightImgBlock}>
                        <div className={cl.upperImgBlock}/>
                        <div className={cl.bottomImgBlock}>
                            <div className={cl.bottomLeftImgBlock}/>
                            <div className={cl.bottomRightImgBlock}/>
                        </div>
                    </div>
                </div>
                <div className={cl.checkBoxBlock}>
                    <h1>SOME REASONS</h1>
                    <h2><span className={cl.outlined}>WHY</span> CHOOSE US?</h2>
                    <div className={cl.itemsBlock}>
                        <div>
                            <div className={cl.checkedImg}/>
                            <p>Huge selection of filters and search criteria</p>
                        </div>
                        <div>
                            <div className={cl.checkedImg}/>
                            <p>Extensive functionality</p>
                        </div>
                        <div>
                            <div className={cl.checkedImg}/>
                            <p>The most convenient interface and management</p>
                        </div>
                        <div>
                            <div className={cl.checkedImg}/>
                            <p>The ability to find a teammate in almost any game</p>
                        </div>
                        <div className={cl.sponsors}>
                            <div className={cl.hyperX}/>
                            <div className={cl.steam}/>
                            <div className={cl.cola}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default WhyUs;