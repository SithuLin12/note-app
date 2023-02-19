import React, { createContext, useState } from 'react'

const AuthContext = createContext();

export const AuthContextProvider = (props) => {

    const [auth,setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth:auth , setAuth:setAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext

 