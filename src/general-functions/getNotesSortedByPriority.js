
const getNotesSortedByPriority = (notes,sorting) => notes.slice().sort((note1,note2) => sorting.value === "high" ? note2[sorting.name] - note1[sorting.name] : note1[sorting.name] - note2[sorting.name] ) 

export default getNotesSortedByPriority