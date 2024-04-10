import React, { useEffect, useState } from 'react'
import './Input.css'
import useValidateInput from '../../Hooks/useValidateInput';

const Input = (({ placeholderInp, type, icon, onIsInputValid, onBtnClean }) => {
    const [valInp, setValInp, isValidInput, setIsValidInput] = useValidateInput('', type)
    const [isBlurFromInp, setIsBlurFromInp] = useState(false)

    useEffect(() => {
        if (onBtnClean) {
            setValInp('')
            setIsValidInput(false)
        }
        else {
            if (isValidInput && isBlurFromInp) {
                onIsInputValid({ type, valid: true, value: valInp })
                setIsBlurFromInp(false)
            }
            else if (valInp && isBlurFromInp && valInp.length) {
                console.log('ok');
                onIsInputValid({ type, valid: false, value: valInp })
            }
        }

    }, [isValidInput, isBlurFromInp, onBtnClean])

    return (
        <div className='parent-input'>
            <input
                type="text"
                placeholder={placeholderInp}
                value={valInp ? valInp : ''}
                onChange={event => setValInp(event.target.value)}
                className={`${isValidInput && valInp ? 'valid-input' : valInp && valInp.length ? 'invalid-input' : ''}`}
                onBlur={() => setIsBlurFromInp(true)}
            />
            <div className={`parent-input__icon ${isValidInput && valInp ? 'icon-form-valid' : valInp && valInp.length ? 'icon-form-invalid' : ''}`}>
                {icon}
            </div>
        </div>
    )
})

export default Input