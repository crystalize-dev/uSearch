import React from 'react';
import cl from './myInput.module.css';
import classes from "classnames";

const MyInput = (props) => {
    return (
        <input {...props} className={classes(props.className, cl.input)}/>
    );
};

export default MyInput;