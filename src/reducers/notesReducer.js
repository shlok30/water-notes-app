
const notesReducer = (state,{type,payload}) => {
    switch(type){
        case "TITLE":
            return {...state, title : payload}
        case 'BODY':
            return {...state,body : payload}
        case "RESET":
            return {...state, title : "" , body : "", colour : "", priority : "0", labels : [], isEditing : false, date : "", idOfSelectedNote : ""}
        case "COLOUR": 
            return {...state,colour : payload}
        case "PRIORITY":
            return {...state,priority : payload}
        case "LABELS":
            return {...state, labels : [...payload]}
        case "SELECT_NOTE":
            return {...state, title : payload.title, body: payload.body, colour : payload.colour, priority : payload.priority, labels : payload.labels[0] === "None" ? [] : [...payload.labels], isEditing : true, date : payload.date, idOfSelectedNote : payload.id}
        default:
            return
    }
}

export default notesReducer