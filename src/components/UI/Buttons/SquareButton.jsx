import React from 'react';
import classes from "classnames";
import cl from "./SquareButton.module.css";

const SquareButton = ({outlined, children, ...props}) => {
    return (
        <button {...props} className={outlined ? classes(props.className, cl.btn, cl.outlined) : classes(props.className, cl.btn)}>
            {children}
        </button>
    );
};

export default SquareButton;