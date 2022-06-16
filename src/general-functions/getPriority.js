
const getPriority = (priority) => {
    switch(priority){
        case "0":
            return "Default"
        case "1":
            return "Low"
        case "2":
            return "Medium"
        case "3":
            return "High"
        default:
            return ""
    }
}

export default getPriority