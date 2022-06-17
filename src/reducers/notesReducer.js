
const notesReducer = (state,{type,payload}) => {
    switch(type){
        case "TITLE":
            return {...state, title : payload}
        case 'BODY':
            return {...state,body : payload}
        case "RESET":
            return {...state, title : "" , body : "", colour : "", priority : "0"}
        case "COLOUR": 
            return {...state,colour : payload}
        case "PRIORITY":
            return {...state,priority : payload}
        case "LABELS":
            return {...state, labels : [...payload]}
        default:
            return
    }
}

export default notesReducer