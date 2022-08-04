import React from "react" 
import "./index.css"
import {createRoot}  from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDOM from "react-dom"

import App from "./App"

//ReactDOM.render(<App />, document.getElementById("root"))

createRoot(document.getElementById("root")).render(<App />)

