import axios from "axios"

const handleLogin = (email,password) => {
    axios
     .post("/api/auth/login",{email,password})
     .then(res => console.log(res.data))
     .catch(err => console.log(err))
}

export default handleLogin