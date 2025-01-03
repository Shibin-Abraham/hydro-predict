/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        token: null,
        user: null
    })

    const updateAuth = (token, user) => {
        setAuth({ token, user })
    }
    const clearAuth = () => setAuth({ token: null, user: null })

    return <AuthContext.Provider value={{ auth, updateAuth, clearAuth }} >
        {children}
    </AuthContext.Provider>
} 