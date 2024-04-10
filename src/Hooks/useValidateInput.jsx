import { useState, useEffect } from 'react'
import reducerInput from "../Assets/FormInput/formInput.js"

export default function useValidateInput({ value }, type) {
    const [isValidInput, setIsValidInput] = useState(false)
    const [valInp, setValInp] = useState(value)

    useEffect(() => {
        if (valInp) setIsValidInput(reducerInput({ type, value: valInp }))
    }, [valInp, type])

    return [valInp, setValInp, isValidInput, setIsValidInput]
}