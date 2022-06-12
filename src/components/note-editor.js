
const NoteEditor = () => {
    return(
        <div className="half-width flex flex-column gap-s">
            <input type = "text" id = "demo" class = "input-field" placeholder="Please Enter Title of your Note" style={{width : "100%"}}></input>
            <textarea className="full-width half-height text-s padding-s note-body" placeholder="Please Enter the Content of your Note" style = {{height : "10rem",font:"inherit"}}></textarea>
            <button class="btn btn-secondary">Add Note</button>
            <div class = "flex gap-s align-center">
                <button class = "round-btn cursor-pointer error" ></button>
                <button class = "round-btn cursor-pointer success" ></button>
                <button class = "round-btn cursor-pointer warning"></button>
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