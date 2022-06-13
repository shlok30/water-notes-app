import { useNotes } from "../context/notes-context"
import addNote from "../context/notes-functions/addNotes"
import {useUser} from "../context/user-context"
import ColourButtons from "./editor-components/color-buttons"

const NoteEditor = () => {

    const {notesState : {title,body},notesDispatch} = useNotes()

    const {userState,userDispatch} = useUser()

    console.log(userState)

    return(
        <div className="half-width flex flex-column gap-s">
            <input type = "text" id = "demo" className = "input-field" placeholder="Please Enter Title of your Note" style={{width : "100%"}} value = {title} onChange = {(e) => notesDispatch({type:"TITLE",payload : e.target.value})}></input>
            <textarea className="full-width half-height text-s padding-s note-body" placeholder="Please Enter the Content of your Note" style = {{height : "10rem",font:"inherit"}} maxLength = "50" value = {body} onChange = {(e) => notesDispatch({type:"BODY",payload : e.target.value})}></textarea>
            <p>{50 - body.length} remaining</p>
            <button className="btn btn-secondary" onClick={() => addNote({title,body},userDispatch,notesDispatch)}>Add Note</button>
            <div className = "flex gap-s align-center">
                <ColourButtons colourClassName={"error"} colour = {"#ff3b30"} />
                <ColourButtons colourClassName={"success"} colour = {"#10b981"} />
                <ColourButtons colourClassName={"warning"} colour = {"#fbbf24"} />
                <i className="material-icons cursor-pointer">local_offer</i>
                <select name="priority">
                    <option value="">Select Priority</option>
                    <option value="3">High</option>
                    <option value="2">Medium</option>
                    <option value="1">Low</option>
                </select>
            </div>
        </div>
    )
}

export default NoteEditor