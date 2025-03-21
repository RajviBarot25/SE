// import React from "react"
// import { createRoot } from "react-dom/client"
// import "./index.css"
// import App from "./App"

// // Find the root element or create it if it doesn't exist
// let rootElement = document.getElementById("root")
// if (!rootElement) {
//   rootElement = document.createElement("div")
//   rootElement.id = "root"
//   document.body.appendChild(rootElement)
// }

// // Create root and render app
// const root = createRoot(rootElement)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { createRoot } from "react-dom/client"



// // Find the root element or create it if it doesn't exist
// let rootElement = document.getElementById("root")
// if (!rootElement) {
//   rootElement = document.createElement("div")
//   rootElement.id = "root"
//   document.body.appendChild(rootElement)
// }


// // Create root and render app
// const root = createRoot(rootElement)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client"
import App from "./App";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);