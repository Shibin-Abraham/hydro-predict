/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const PopUpContext = createContext()

export const usePopUp = () => useContext(PopUpContext)

export const PopUPProvider = ({ children }) => {

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const showError = (message) => {
        setError(message);
        setTimeout(() => setError(null), 7000);
    }
    const showSuccess = (message) => {
        setSuccess(message);
        setTimeout(() => setSuccess(null), 7000);
    }
    return (
        <PopUpContext.Provider value={{ error, showError, success, showSuccess }}>
            {children}
        </PopUpContext.Provider>
    )
}

