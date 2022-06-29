import axios from "axios"

const unArchive = (noteId,userDispatch) => {
    const token = localStorage.getItem("userToken")
    axios
     .post(`/api/archives/restore/${noteId}`,{},{headers : {authorization : token}})
     .then(res => userDispatch({type : "ARCHIVE", payload : res.data}))
     .catch(err => console.log(err))
}

export default unArchive