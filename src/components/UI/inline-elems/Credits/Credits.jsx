import React from 'react';
import cl from "./credits.module.css";

const Credits = () => {
    return (
        <div className={cl.credits__wrapper}>
            <div className={cl.text__area}>
                <h1>Copyright © 2022 All rights reserved | Designed by Igor Andreev</h1>
            </div>
        </div>
    );
};

export default Credits;