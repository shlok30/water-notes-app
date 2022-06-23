import axios from "axios"

const editNote = (note,id,userDispatch,notesDispatch) => {
    const token = localStorage.getItem("userToken")
    axios
     .post(`/api/notes/${id}`,{note},{headers : {authorization:token}})
     .then(res => console.log("Note was updated",res.data))
     .catch(err => console.log(err))
}

export default editNote