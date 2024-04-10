import { validateEmail, validatePhoneNumber, validateFullName, validateUserName } from "../../Validators/regex.js"

//Actions
export const inpEmail = "INP_EMAIL"
export const inpPhone = "INP_PHONE"
export const inpUserName = "INP_USER_NAME"
export const inpFullName = "INP_FULL_NAME"
export const inpPassword = "INP_PASSWORD"

//Reducer
const reducerInput = action => {
    switch (action.type) {
        case inpEmail: return validateEmail(action.value)
        case inpPhone: return validatePhoneNumber(action.value)
        case inpFullName: return validateFullName(action.value)
        case inpUserName: return validateUserName(action.value)
        case inpPassword: {
            if (action.value && action.value.length >= 8 && action.value.length <= 15) return true
            return false
        }
        default: return false
    }
}

export default reducerInput