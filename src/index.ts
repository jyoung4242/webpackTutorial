import getClasses from "./getClasses"
import "./styles.css"

console.log("Hello World - index.js")
getClasses()

const object = { a: "alpha", b: "bravo" }
const newObj = { ...object, c: "charlie" }
console.log(newObj)
console.log(["a", "b", "c"].includes("b"))
