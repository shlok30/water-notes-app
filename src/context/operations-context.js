import { createContext, useContext, useReducer } from "react";
import operationsReducer from "../reducers/operationsReducer";

const OperationsContext = createContext()

const OperationsContextProvider = ({children}) => {

    const [operationsState, operationsDispatch] = useReducer(operationsReducer,{labelFilters : {None : true}, sorting : {name : "", value : ""}, priorityFilters : {3 : true, 2: true, 1: true, 0: true}})

    return(
        <OperationsContext.Provider value = {{operationsState,operationsDispatch}}>
            {children}
        </OperationsContext.Provider>
    )
}

const useOperations = () => useContext(OperationsContext)

export {useOperations,OperationsContextProvider}