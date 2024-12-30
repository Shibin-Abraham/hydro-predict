/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const ErrorContext = createContext()

export const useError = () => useContext(ErrorContext)

export const ErrorProvider = ({ children }) => {

    const [error, setError] = useState(null)

    const showError = (message) => {
        setError(message);
        setTimeout(() => setError(null), 7000);
    }
    return (
        <ErrorContext.Provider value={{ error, showError }}>
            {children}
        </ErrorContext.Provider>
    )
}

