
const operationsReducer = (state,{type,payload}) => {
    switch(type){
        case "LABELS":
            if(payload in state.labelFilters){
                return {...state,labelFilters : {...state.labelFilters, [payload] : !state.labelFilters[payload]}}
            }
            return {...state,labelFilters : {...state.labelFilters,[payload] : true}}
        case "PRIORITY":
            return {...state,prioritySort : payload}
        default:
            return
    }
}

export default operationsReducer