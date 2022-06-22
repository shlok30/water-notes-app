
const getNotesSorted = (notes,sorting) => notes.slice().sort((note1,note2) => sorting.value === "high" || sorting.value === "latest" ? note2[sorting.name] - note1[sorting.name] : note1[sorting.name] - note2[sorting.name] ) 

export default getNotesSorted