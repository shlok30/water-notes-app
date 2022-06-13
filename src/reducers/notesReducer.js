
const notesReducer = (state,{type,payload}) => {
    switch(type){
        case "TITLE":
            return {...state, title : payload}
        case 'BODY':
            return {...state,body : payload}
        case "RESET":
            return {...state, title : "" , body : ""}
        case "COLOUR": 
            return {...state,colour : payload}
        default:
            return
    }
}

export default notesReducer