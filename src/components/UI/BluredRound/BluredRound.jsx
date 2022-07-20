import React from 'react';
import cl from "./BluredRound.module.css";

const BluredRound = ({top, left, size}) => {
    return (
            <div className={cl.roundBlur} style={
                {
                    top: `${top}%`,
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`
                }
            }/>
    );
};

export default BluredRound;