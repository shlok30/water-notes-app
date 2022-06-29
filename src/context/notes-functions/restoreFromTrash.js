import axios from "axios"

const restoreFromTrash = (noteId,userDispatch) => {
    
    const token = localStorage.getItem("userToken")

    axios
     .post(`/api/trash/restore/${noteId}`,{},{headers : {authorization : token}})
     .then(res => userDispatch({type : "TRASH", payload : res.data}))
     .catch(err => console.log(err))
}

export default restoreFromTrash