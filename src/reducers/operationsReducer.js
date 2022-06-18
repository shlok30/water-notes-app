
const operationsReducer = (state,{type,payload}) => {
    switch(type){
        case "LABELS":
            if(payload in state.labelFilters){
                return {...state,labelFilters : {...state.labelFilters, [payload] : !state[payload]}}
            }
            return {...state,labelFilters : {...state.labelFilters,[payload] : true}}
        default:
            return
    }
}

export default operationsReducer