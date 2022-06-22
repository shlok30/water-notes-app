
const operationsReducer = (state,{type,payload}) => {
    switch(type){
        case "LABELS":
            if(payload in state.labelFilters){
                return {...state,labelFilters : {...state.labelFilters, [payload] : !state.labelFilters[payload]}}
            }
            return {...state,labelFilters : {...state.labelFilters,[payload] : true}}
        case "PRIORITY":
            return {...state, priorityFilters : {...state.priorityFilters, [payload] : !state.priorityFilters[payload]}}
        case "SORTING_PRIORITY":
            return {...state,sorting : {name : "priority", value : payload }}
        case "SORTING_DATE":
            return {...state,sorting : {name : "date", value : payload }}
        default:
            return
    }
}

export default operationsReducer