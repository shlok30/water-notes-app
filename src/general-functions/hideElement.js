
const hideElement = (pathname,element) => (pathname === "/homepage" && element === "delete") || (pathname === "/archive" && (element !== "archive")) || (pathname === "/trash" && (element === "edit" || element === "archive")) ? "hide" : ""

export default hideElement
