import React from "react"
import ReactDOM from "react-dom"
import "./index.css" // 全局样式
import reportWebVitals from "./reportWebVitals"
import App from "./App"

const defaultValue = {
  username: "li",
}

export const AppContext = React.createContext(defaultValue)

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={defaultValue}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
