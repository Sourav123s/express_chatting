import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

/**
 * By create this function we can consume that authUser and setAuthUser in every component
 */
export function useAuthContext() {
    return useContext(AuthContext)
}

/**
 * This is the context provider that acuttally wrap all the components in this app and provide authUser and setAuthUser to every component 
 */
export function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')) || null)
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
}