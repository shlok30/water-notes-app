import { useNotes } from "../context/notes-context"
import addNote from "../context/notes-functions/addNotes"
import {useUser} from "../context/user-context"
import ColourButtons from "./editor-components/color-buttons"
import getBackgroundColour from "../general-functions/getBackgroundColour"
import getFontColour from "../general-functions/getFontColour"
import editNote from "../context/notes-functions/editNote"
import { useEffect, useState } from "react"

const NoteEditor = () => {

    const {notesState : {title,body,colour,priority,labels,isEditing,idOfSelectedNote,date},notesDispatch} = useNotes()

    const {userDispatch} = useUser()

    const time = new Date() //Using milliseconds since 1970 January 1st to compare latest to oldest 

    const millisecondsSince1970 = time.getTime()

    const [error,setError] = useState("")

    useEffect(() => {
        if(error)
            setError("")
    },[isEditing])

    return(
        <div className="half-width flex flex-column gap-s">
            <input type = "text" id = "demo" className = "input-field" placeholder="Please Enter Title of your Note" style={{width : "100%",backgroundColor : getBackgroundColour(colour) , color : getFontColour(colour)}} value = {title} onChange = {(e) => notesDispatch({type:"TITLE",payload : e.target.value})}></input>
            <textarea className="full-width half-height text-s padding-s note-body" placeholder="Please Enter the Content of your Note" style = {{height : "10rem",font:"inherit",backgroundColor : getBackgroundColour(colour), color : getFontColour(colour) }} maxLength = "50" value = {body} onChange = {(e) => notesDispatch({type:"BODY",payload : e.target.value})}></textarea>
            <p>{50 - body.length} remaining</p>
            <div className="flex gap-m">
                <button className="btn btn-secondary" onClick={() => isEditing ? editNote({title,body,colour,priority,labels : labels.length > 0 ? [...labels] : ["None"],date},idOfSelectedNote,userDispatch,notesDispatch) : title ? addNote({title,body,colour,priority,labels : labels.length > 0 ? [...labels] : ["None"],date : millisecondsSince1970 },userDispatch,notesDispatch,setError) : setError("Please add Title") }>{isEditing ? "Edit Note" : "Add Note"}</button>
                <button className="btn btn-success" onClick = {() => userDispatch({type : "MODAL"})}>Add Labels</button>
            </div>
            <div className = "flex gap-s align-center">
                <ColourButtons colourClassName={"error"} colourToApply = {"#ff3b30"} />
                <ColourButtons colourClassName={"success"} colourToApply = {"#10b981"} />
                <ColourButtons colourClassName={"warning"} colourToApply = {"#fbbf24"} />
                <ColourButtons colourClassName={""} colourToApply = {""} />
                <i className="material-icons cursor-pointer">local_offer</i>
                <select name="priority" onChange={(e) => notesDispatch({type : "PRIORITY", payload : e.target.value })}>
                    <option value="0" selected = {priority === "0"}>Select Priority</option>
                    <option value="3" selected = {priority === "3"}>High</option>
                    <option value="2" selected = {priority === "2"}>Medium</option>
                    <option value="1" selected = {priority === "1"}>Low</option>
                </select>
            </div>
            <p className="error-text-colour">{error}</p>
        </div>
    )
}

export default NoteEditor