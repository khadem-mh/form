import { useState, useEffect } from 'react'

export default function useFormValid(paerntInputs, btnID, btnClean) {
    const [inputs, setInputs] = useState("")
    const [parentBtnId, setParentBtnId] = useState("")
    const [parentBtnClean, setParentBtnClean] = useState("")
    const [inputsArr, setInputsArr] = useState([])
    const [btnClicked, setBtnClicked] = useState(false)

    useEffect(() => {
        setInputs(document.querySelector(paerntInputs))
        setParentBtnId(document.querySelector(btnID))
        setParentBtnClean(document.querySelector(btnClean))
    }, [inputs, parentBtnId, parentBtnClean])

    useEffect(() => {
        if (btnClicked) {
            setInputsArr([])
            setBtnClicked(false)
        }
    }, [btnClicked])

    useEffect(() => {
        if (inputsArr.length === Array.of(inputs)[0].children?.length) {
            let inputsArrIsValid = inputsArr.every(inp => inp.valid)
            inputsArrIsValid ? parentBtnId.removeAttribute('disabled') : parentBtnId.setAttribute('disabled', true)
        }
    }, [inputsArr])

    const btnClickHndler = event => {
        event && event.preventDefault()
        setBtnClicked(true)
    }

    const inpValid = arr => {
        setInputsArr(prevData => {
            if (prevData.length === 0) return [arr]
            else {
                let isRepeat = prevData.filter(inp => inp.type !== arr.type)
                return [...isRepeat, arr]
            }
        })
    }

    return [btnClicked, inpValid, btnClickHndler]
}
