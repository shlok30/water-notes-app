import { useUser } from "../context/user-context"
import FilterElements from "./operations-components/filter-elements"
import SortElements from "./operations-components/sort-elements"

const OperationsComponent = () => {
    const {userState : {userLabels}} = useUser()
    return(
        <div className="container">
            <div className="m2-top">
                <h3 className="primary-text">Filter By Labels</h3>
                <div className="flex gap-m m2-top">
                    {userLabels.map(label => <FilterElements value = {label} typeOfFilter = "label" />)}
                </div>
            </div>
            <div className="m2-top">
                <h3 className="primary-text">Filter By Priorty</h3>
                <div className="flex gap-m m2-top">
                    <FilterElements value = "3" typeOfFilter="priority" />
                    <FilterElements value = "2" typeOfFilter="priority" />
                    <FilterElements value = "1" typeOfFilter="priority" />
                    <FilterElements value = "0" typeOfFilter="priority" />
                </div>
            </div>
            <div className="m2-top">
                <h3 className="primary-text">Sort By Priorty</h3>
                <div className="flex gap-m m2-top">
                    <SortElements value = "high" />
                    <SortElements value = "low" />
                </div>
            </div>
            <div className="m2-top">
                <h3 className="primary-text">Sort By Date</h3>
                <div className="flex gap-m m2-top">
                    <SortElements value = "latest" />
                    <SortElements value = "oldest" />
                </div>
            </div>
        </div>
    )
}

export default OperationsComponent