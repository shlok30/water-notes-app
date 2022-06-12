import { createContext, useContext, useReducer } from "react";

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const {userState,userDispatch} = useReducer(userReducer,{isLoggedIn : false, notes : [] , archives : [] , trash : []})

    return(
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContextProvider,useUser}
