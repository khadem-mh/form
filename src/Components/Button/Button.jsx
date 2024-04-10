import React from 'react'
import './Button.css'

export default function Button({ textBtn, yourStyle, btnDisabled, btnID, onClickBtn }) {
    return (
        <button
            className='button'
            id={btnID}
            disabled={btnDisabled}
            style={{ yourStyle }}
            onClick={onClickBtn}
        >{textBtn}</button>
    )
}
