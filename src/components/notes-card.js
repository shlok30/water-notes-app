import getBackgroundColour from "../general-functions/getBackgroundColour"
import getFontColour from "../general-functions/getFontColour"
import getPriority from "../general-functions/getPriority"

const NotesCard = ({title,body,colour,priority,labels}) => {
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
    	        <a href="" className="card-link">Archive</a>
                <i className="material-icons cursor-pointer">local_offer</i>
                <i className="material-icons cursor-pointer" onClick={() => console.log("Edit button was clicked")}>edit</i>
            </div>
        </div>
    )
}

export default NotesCard