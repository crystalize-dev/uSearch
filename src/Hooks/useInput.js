import {useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (field, initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)

    const valid = useValidation(value, validations)

    const nullField = field + " field cannot be empty"
    const minLengthField = field + " must have more then 3 symbols"
    const emailErrorField = "Incorrect email"
    const maxLengthField = field + " must have less then 16 symbols"

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setIsDirty(true)
    }

    const reset = () => {
        setValue('')
        setIsDirty(false)
    }

    return {
        value,
        onChange,
        onBlur,
        reset,
        isDirty,
        nullField,
        minLengthField,
        maxLengthField,
        emailErrorField,
        ...valid
    }
}