import axios from "axios"

const archiveNote = (noteId,note,userDispatch) => {
    const token = localStorage.getItem("userToken")
    axios
     .post(`/api/notes/archives/${noteId}`,{note},{headers : {authorization : token}})
     .then(res => {
        userDispatch({type : "ARCHIVE",payload : res.data})
     })
     .catch(err => console.log(err))
}

export default archiveNote