
const handleLogout = (userDispatch,navigate) => {
    localStorage.setItem("userToken","")
    userDispatch({type : "LOGOUT"})
    navigate("/")
}

export default handleLogout