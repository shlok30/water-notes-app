
const labelsFilter = (notes,labelFilters) => notes.length > 0 ? notes.filter(note => isLabelInFilterList(note.labels,labelFilters)) : [...notes]


const isLabelInFilterList = (labels,labelFilters) => {

    for(let index = 0 ; index < labels.length ; index ++){
        if(labelFilters[labels[index]]){
            return true
        }
        if(index === labels.length - 1){
            return false
        }
    }
}

export default labelsFilter