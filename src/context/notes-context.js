import { createContext, useContext, useReducer } from "react";
import notesReducer from "../reducers/notesReducer";

const NotesContext = createContext()

const NotesContextProvider = ({children}) => {

    const [notesState, notesDispatch] = useReducer(notesReducer,{title : "" , body : "" , colour : "", priority : "", isPinned : false })
    
    return(
        <NotesContext.Provider>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext)

export {NotesContextProvider,useNotes}