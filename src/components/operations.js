import { useUser } from "../context/user-context"
import FilterElements from "./operations-components/filter-elements"

const OperationsComponent = () => {
    const {userState : {userLabels}} = useUser()
    return(
        <div className="container flex gap-m">
            <h3 className="primary-text">Filter By Labels</h3>
            {userLabels.map(label => <FilterElements label = {label} />)}
        </div>
    )
}

export default OperationsComponent