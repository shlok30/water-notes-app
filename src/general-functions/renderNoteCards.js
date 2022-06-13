import NotesCard from "../components/notes-card";

const renderNoteCards = (notes) => notes.map(({title,body,_id,colour}) => <NotesCard key = {_id} title = {title} body = {body} id = {_id} colour = {colour} />)

export default renderNoteCards