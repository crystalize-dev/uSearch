import React from 'react';
import cl from "./MyButton.module.css";
import classes from "classnames";

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes(props.className, cl.myBtn)}>
            {children}
        </button>
    );
};

export default MyButton;