import axios from "axios"

const addToTrash = (noteId,userDispatch) => {
    
    const token = localStorage.getItem("userToken")

    axios
     .post(`/api/notes/trash/${noteId}`,{},{headers : {authorization : token}})
     .then(res => userDispatch({type : "TRASH", payload : res.data}))
     .catch(err => console.log(err))
}

export default addToTrash