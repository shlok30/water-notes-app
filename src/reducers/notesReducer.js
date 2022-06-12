
const notesReducer = (state,{type,payload}) => {
    switch(type){
        case "TITLE":
            return {...state, title : payload}
        case 'BODY':
            return {...state,body : payload}
    }
}

export default notesReducer