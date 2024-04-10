import React, { useRef, useEffect, useState } from 'react'
//Asset
import {
    inpEmail, inpPhone, inpUserName, inpFullName, inpPassword
} from "../../Assets/FormInput/formInput.js"
//Components
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button.jsx';
//Icons
import { GrUserAdmin, GrUser } from "react-icons/gr";
import { MdOutlinePhonelinkRing, MdAlternateEmail } from "react-icons/md";
import useFormValid from '../../Hooks/useFormValid';

export default function Register() {
    const [btnClicked, inpValid, btnClickHndler] = useFormValid('#parentInputs', '#btnForm', '#btnClean')

    return (
        <form className='container-form'>

            <section id="parentInputs">
                <Input onBtnClean={btnClicked} onIsInputValid={inpValid} icon={<GrUser />} type={inpFullName} placeholderInp={'full name'} />
                <Input onBtnClean={btnClicked} onIsInputValid={inpValid} icon={<GrUser />} type={inpUserName} placeholderInp={'user name'} />
                <Input onBtnClean={btnClicked} onIsInputValid={inpValid} icon={<MdAlternateEmail />} type={inpEmail} placeholderInp={'email'} />
                <Input onBtnClean={btnClicked} onIsInputValid={inpValid} icon={<MdOutlinePhonelinkRing />} type={inpPhone} placeholderInp={'phone'} />
                <Input onBtnClean={btnClicked} onIsInputValid={inpValid} icon={<GrUserAdmin />} type={inpPassword} placeholderInp={'password'} />
            </section>

            <Button btnDisabled={true} textBtn={'Send'} btnID={'btnForm'} />
            <Button textBtn={'Cleanup'} onClickBtn={e => btnClickHndler(e)} btnID={'btnClean'} />

        </form>
    )
}
