import {useEffect, useState} from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLength, setMinLengthError] = useState(false)
    const [maxLength, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            // eslint-disable-next-line default-case
            switch (validation) {
                case 'minLength': {
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                }
                case 'isEmpty': {
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;
                }
                case 'isEmail': {
                    if(String(value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
                    {
                        setEmailError(false)
                    } else {
                        setEmailError(true)
                    }
                    break;
                }
                case 'maxLength': {
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                }
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || maxLength || minLength || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLength, minLength, emailError])

    return {
        isEmpty,
        minLength,
        maxLength,
        emailError,
        inputValid
    }
}