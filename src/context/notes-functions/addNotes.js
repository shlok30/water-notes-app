import axios from "axios"

const addNote = (note,userDispatch) => {
    const token = localStorage.getItem("userToken")
    axios
     .post("/api/notes",{note},{headers : {authorization:token}})
     .then(res => userDispatch({type : "ADD_NOTE",payload : res.data.notes})) //Do we need spready operator here ?
     .catch(err => console.log(err))
}

export default addNote