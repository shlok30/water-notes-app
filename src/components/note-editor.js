
const NoteEditor = () => {
    return(
        <div className="half-width flex flex-column gap-s">
            <input type = "text" id = "demo" className = "input-field" placeholder="Please Enter Title of your Note" style={{width : "100%"}}></input>
            <textarea className="full-width half-height text-s padding-s note-body" placeholder="Please Enter the Content of your Note" style = {{height : "10rem",font:"inherit"}} maxLength = "50"></textarea>
            <button className="btn btn-secondary">Add Note</button>
            <div className = "flex gap-s align-center">
                <button className = "round-btn cursor-pointer error" ></button>
                <button className = "round-btn cursor-pointer success" ></button>
                <button className = "round-btn cursor-pointer warning"></button>
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