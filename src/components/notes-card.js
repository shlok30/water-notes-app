import { useLocation } from "react-router-dom"
import { useNotes } from "../context/notes-context"
import { useUser } from "../context/user-context"
import getBackgroundColour from "../general-functions/getBackgroundColour"
import getFontColour from "../general-functions/getFontColour"
import getPriority from "../general-functions/getPriority"
import archiveNote from "../context/notes-functions/archiveNote"
import unArchive from "../context/notes-functions/unArchive"
import hideElement from "../general-functions/hideElement"
import addToTrash from "../context/notes-functions/addToTrash"

const NotesCard = ({title,body,colour,priority,labels,date,id}) => {

    const {notesDispatch} = useNotes()

    const {userDispatch} = useUser()

    const location = useLocation()

    return(
        <div className="card-container flex flex-column text-card gap-m" style = {{width:"20%",backgroundColor : getBackgroundColour(colour), color : getFontColour(colour)}}>
	        <div className="card-header">
    	        <h4>{title}</h4>
                <h5>Priority : {getPriority(priority)}</h5>
            </div>
            <div className="card-body">
    	        <p className="card-subtext">{body}</p>
            </div>
            <div className="flex padding-s gap-s">
                {labels.map(label => <h5 className={`chip light-border padding-s ${label === "None" ? "hide" : ""}`}>{label}</h5>)}
            </div>
            <div className="card-footer flex space-between">
    	        <p className="card-link cursor-pointer" onClick={() => location.pathname === "/archive" ? unArchive(id,userDispatch) : archiveNote(id,{id,title,body,colour,priority,labels,date},userDispatch)}>{location.pathname === "/archive" ? "Unarchive" : "Archive"}</p>
                <i className={`material-icons cursor-pointer ${hideElement(location.pathname)}`} onClick = {() => addToTrash(id,userDispatch)}>delete</i>
                <i className={`material-icons cursor-pointer ${hideElement(location.pathname)}`} onClick={() => notesDispatch({type : "SELECT_NOTE", payload : {title,body,colour,priority,labels : [...labels],date,id}})}>edit</i>
            </div>
        </div>
    )
}

export default NotesCard