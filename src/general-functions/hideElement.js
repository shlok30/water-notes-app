
const hideElement = (pathname,element) => (pathname === "/archive" && (element !== "archive")) || (pathname === "/trash" && (element === "edit" || element === "archive")) ? "hide" : ""

export default hideElement
