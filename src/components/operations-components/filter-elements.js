import { useOperations } from "../../context/operations-context"

const FilterElements = ({label}) => {

    const {operationsState : {labelFilters},operationsDispatch} = useOperations()

    console.log("operations state",labelFilters)

    return(
        <div className="flex gap-m align-center">
            <input type = "checkbox" checked = {labelFilters[label] === true} onChange = {() => operationsDispatch({type : "LABELS", payload : label})}/>
            <p>{label}</p>
        </div>
    )
}

export default FilterElements