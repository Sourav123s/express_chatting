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
    // let authUserFromLocalStorage = null;
    // let initialAuthUser = null;
    // if (localStorage.length > 0) {
    //     authUserFromLocalStorage = localStorage.getItem("authUser");
    //     let something = undefined;
    //     // console.log(typeof authUserFromLocalStorage)
    //     console.log(typeof something)
    //     initialAuthUser = authUserFromLocalStorage ? JSON.parse(authUserFromLocalStorage) : null;
    // }


    // const [authUser, setAuthUser] = useState(initialAuthUser);
    // console.log(localStorage.getItem("authUser"))
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("authUser")) || null);
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
}