//                                   Short Summary key Notes 

// Note: For implementing search functionality use a filter function 
// Note: for searching a empty '' string in any string using included('') it return always true bcz every string have empty string
// Note: we implement Search functionality using state and for that here we use the Concept of 'Lifting up the state' means state on 
//       parent component 


import { createRoot } from "react-dom/client";
import App from "./App.jsx"

const  root = createRoot(document.querySelector("#root"))

root.render(<App/>)