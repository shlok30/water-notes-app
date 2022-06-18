import ModalElements from "../components/modal-components/modal-elements";

const renderModalElements = (labels) => labels.map(label => <ModalElements label = {label} />) 

export default renderModalElements