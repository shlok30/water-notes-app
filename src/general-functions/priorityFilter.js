
const priorityFilter = (notes,priorityFilters) => notes.filter(note => priorityFilters[note.priority])

export default priorityFilter