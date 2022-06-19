import { useOperations } from "../../context/operations-context"
import getPriority from "../../general-functions/getPriority"

const FilterElements = ({value,typeOfFilter}) => {

    const {operationsState : {labelFilters,priorityFilters},operationsDispatch} = useOperations()

    return(
        <div className="flex gap-m align-center">
            <input type = "checkbox" checked = {typeOfFilter === "label" ? labelFilters[value] === true : priorityFilters[value] === true} onChange = {() => operationsDispatch({type : typeOfFilter === "label" ? "LABELS" : "PRIORITY", payload : value})}/>
            <p>{typeOfFilter === "label" ? value : getPriority(value) }</p>
        </div>
    )
}

export default FilterElements