import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Mensagem estilizada no Console do DevTools
console.log(
  "%c> acesso ao console detectado.",
  "color: #00ff9d; font-family: monospace; font-size: 14px; font-weight: bold;"
);
console.log(
  "%c> curioso(a), hein? bora trabalhar juntos -> samuelbarbosa2001oliveira@gmail.com",
  "color: #00e5ff; font-family: monospace; font-size: 13px; font-weight: bold;"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
