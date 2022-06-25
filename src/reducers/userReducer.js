
const userReducer = (state,{type, payload}) => {
    switch(type){
        case "LOGIN":
            return {...state, isLoggedIn : true, notes : [...payload.notes] , archives : [...payload.archives] , trash : [...payload.trash]}
        case "ADD_NOTE":
            return {...state, notes : [...payload]}
        case "MODAL":
            return {...state, isModalActive : !state.isModalActive}
        case "LABELS":
            return {...state, userLabels : [...state.userLabels,payload]}
        case "ARCHIVE":
            return {...state, archives : [...payload.archives], notes : [...payload.notes]}
        case "TRASH":
            return {...state, trash : [...payload.trash], notes : [...payload.notes]}
        default:
            return 
    }
}

export default userReducer