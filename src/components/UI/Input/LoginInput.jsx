import React from 'react';
import cl from "./LoginInput.module.css";
import classes from "classnames";

const MyInput = (props) => {
    return (
        // eslint-disable-next-line no-useless-concat
        <input {...props} className={classes(props.className, cl.input)}/>
    );
};

export default MyInput;