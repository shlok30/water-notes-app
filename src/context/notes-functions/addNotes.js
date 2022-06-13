import axios from "axios"

const addNote = (note,userDispatch,notesDispatch) => {
    const token = localStorage.getItem("userToken")
    axios
     .post("/api/notes",{note},{headers : {authorization:token}})
     .then(res => {
        userDispatch({type : "ADD_NOTE",payload : res.data.notes}) // Do we need spread operator here ?
        notesDispatch({type : "RESET"})
     }) 
     .catch(err => console.log(err))
}

export default addNote