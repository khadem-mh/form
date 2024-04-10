export const validateEmail = email => /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}?/.test(email)

export const validatePhoneNumber = phoneNumber => /^09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}$/.test(phoneNumber)

export const validateFullName = fullName => /^[a-zA-Z\u0600-\u06FF\s]{6,22}$/.test(fullName)

export const validateUserName = userName => /^[a-zA-Z-]{6,22}$/.test(userName)
