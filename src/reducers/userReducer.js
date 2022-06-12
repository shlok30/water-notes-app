
const userReducer = (state,{type, payload}) => {
    switch(type){
        case "LOGIN":
            return {...state, isLoggedIn : true, notes : [...payload.archives] , archives : [...payload.archives] , trash : [...payload.notes]}
        default:
            return 
    }
}

export default userReducer