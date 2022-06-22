import { createContext, useContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [userState,userDispatch] = useReducer(userReducer,{isLoggedIn : false, notes : [] , archives : [] , trash : [], userLabels : ["None"], isModalActive : false})

    return(
        <UserContext.Provider value = {{userState, userDispatch}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContextProvider,useUser}
