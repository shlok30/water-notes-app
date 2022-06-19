import { createContext, useContext, useReducer } from "react";
import operationsReducer from "../reducers/operationsReducer";

const OperationsContext = createContext()

const OperationsContextProvider = ({children}) => {

    const [operationsState, operationsDispatch] = useReducer(operationsReducer,{labelFilters : {None : true}, prioritySort : ""})

    return(
        <OperationsContext.Provider value = {{operationsState,operationsDispatch}}>
            {children}
        </OperationsContext.Provider>
    )
}

const useOperations = () => useContext(OperationsContext)

export {useOperations,OperationsContextProvider}