import { useNotes } from "../../context/notes-context"

const ColourButtons = ({colourClassName,colourToApply}) => {

    const {notesState : {colour},notesDispatch} = useNotes()

    const selectedColour = (colourToApply,colour) => colour === colourToApply ? "selected-border" : ""

    return(
        <button className = {`round-btn cursor-pointer ${colourClassName} ${selectedColour(colourToApply,colour)} `} onClick = {() => notesDispatch({type : "COLOUR", payload : colourToApply})} ></button>
    )
}

export default ColourButtons