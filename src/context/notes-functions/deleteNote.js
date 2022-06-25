import axios from "axios"

const deleteNote = (noteId,userDispatch) => {
    
    const token = localStorage.getItem("userToken")

    axios
     .delete(`/api/trash/delete/${noteId}`, {headers : {authorization : token}})
     .then(res => userDispatch({type : "DELETE", payload : res.data.trash}))
     .catch(err => console.log(err))
}

export default deleteNote