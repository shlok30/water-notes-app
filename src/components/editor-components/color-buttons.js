import { useNotes } from "../../context/notes-context"

const ColourButtons = ({colourClassName,colourToApply}) => {

    const {notesDispatch} = useNotes()

    return(
        <button className = {`round-btn cursor-pointer ${colourClassName}`} onClick = {() => notesDispatch({type : "COLOUR", payload : colourToApply})} ></button>
    )
}

export default ColourButtons