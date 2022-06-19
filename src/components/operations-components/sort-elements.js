import { useOperations } from "../../context/operations-context"

const SortElements = ({value}) => {

    const {operationsDispatch} = useOperations()

    return(
        <div className="flex gap-m align-center">
            <input type = "radio" name = "priorty-sorting" value = {value} onChange = {() => operationsDispatch({type : "PRIORITY", payload : value})} />
            <p>{value}</p>
        </div>
    )
}

export default SortElements