/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        isAuthorized: false,
        token: null,
        user: null
    })

    const updateAuth = (isAuthorized, token, user) => {
        setAuth({ isAuthorized, token, user, })
    }
    const clearAuth = () => setAuth({ isAuthorized: false, token: null, user: null })

    return <AuthContext.Provider value={{ auth, updateAuth, clearAuth }} >
        {children}
    </AuthContext.Provider>
} 