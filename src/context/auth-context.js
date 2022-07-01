import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    return(
        <AuthContext.Provider value = {{email,password,confirmPassword,error,setEmail,setPassword,setConfirmPassword,setError}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthContextProvider,useAuth}
