import React from 'react';
import './myInput.css'

const MyInput = (props) => {
    return (
        // eslint-disable-next-line no-useless-concat
        <input {...props} className={props.className + " input"}/>
    );
};

export default MyInput;