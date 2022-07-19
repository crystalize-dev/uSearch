import React from 'react';
import cl from "./OutLined.module.css";

const OutLined = ({children}) => {
    return (
        <span className={cl.outLined}>
            {children}
        </span>
    );
};

export default OutLined;