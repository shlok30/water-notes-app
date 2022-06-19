import { useOperations } from "../../context/operations-context"

const FilterElements = ({label}) => {

    const {operationsState : {labelFilters}} = useOperations()

    return(
        <div className="flex gap-m align-center">
            <input type = "checkbox" checked = {labelFilters[label] === true}/>
            <p>{label}</p>
        </div>
    )
}

export default FilterElements