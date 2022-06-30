import axios from "axios"

const handleLogin = (email,password,userDispatch,navigate,setError,error) => {
    axios
     .post("/api/auth/login",{email,password})
     .then(res => {
        localStorage.setItem("userToken",res.data.encodedToken)
        userDispatch({type : "LOGIN", payload : res.data.foundUser})
        if(error){
         setError("")
        }
        navigate("/homepage")
     })
     .catch(err => setError(err.response.data.errors))
}

export default handleLogin