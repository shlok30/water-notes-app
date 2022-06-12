import axios from "axios"

const handleLogin = (email,password,userDispatch) => {
    axios
     .post("/api/auth/login",{email,password})
     .then(res => {
        localStorage.setItem("userToken",res.data.encodedToken)
        userDispatch({type : "LOGIN", payload : res.data.foundUser})
     })
     .catch(err => console.log(err))
}

export default handleLogin