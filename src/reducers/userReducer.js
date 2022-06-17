
const userReducer = (state,{type, payload}) => {
    switch(type){
        case "LOGIN":
            return {...state, isLoggedIn : true, notes : [...payload.archives] , archives : [...payload.archives] , trash : [...payload.notes]}
        case "ADD_NOTE":
            console.log("Payload",payload)
            return {...state, notes : [...payload]}
        case "MODAL":
            return {...state, isModalActive : !state.isModalActive}
        case "LABELS":
            return {...state, userLabels : [...state.userLabels,payload]}
        default:
            return 
    }
}

export default userReducer